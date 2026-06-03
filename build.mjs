// Tech Atlas build — scans content/ and generates a static index.html.
// Run with: npm run build   (or: node build.mjs)
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';
import { marked } from 'marked';

const root = dirname(fileURLToPath(import.meta.url));
const CONTENT = join(root, 'content');
const TEMPLATE = join(root, 'template', 'base.html');
const OUT = join(root, 'index.html');

const esc = (s) => String(s ?? '')
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const attr = (s) => esc(s).replace(/"/g, '&quot;');

const SOURCE_CLASS = { native: 't-platform', open: 't-open', cloud: 't-cloud' };
const SOURCE_LABEL = { native: '原生', open: '开源', cloud: '云端' };
const DEPLOY_LABEL = { 'on-device': '端侧', cloud: '云端', hybrid: '端云' };
const DEPLOY_CLASS = { 'on-device': 'd-on-device', cloud: 'd-cloud', hybrid: 'd-hybrid' };

const badges = (it) => {
  const srcClass = SOURCE_CLASS[it.source] || 't-cloud';
  const srcLabel = it.badge || SOURCE_LABEL[it.source] || it.source || '';
  const dep = it.deployment;
  const depPill = dep
    ? `<span class="tag deploy ${DEPLOY_CLASS[dep] || ''}">${esc(DEPLOY_LABEL[dep] || dep)}</span>`
    : '';
  return `<span class="tag-group">${depPill}<span class="tag ${srcClass}">${esc(srcLabel)}</span></span>`;
};

const specsHtml = (it) => {
  let s =
    `        <li><b>能力</b><span>${esc(it.capability)}</span></li>\n` +
    `        <li><b>限制</b><span>${esc(it.limitation)}</span></li>\n` +
    `        <li><b>调用</b><span>${esc(it.invocation)}</span></li>`;
  if (it.license) s += `\n        <li><b>许可</b><span>${esc(it.license)}</span></li>`;
  if (it.cost) s += `\n        <li><b>成本</b><span>${esc(it.cost)}</span></li>`;
  if (it.platforms) s += `\n        <li><b>平台</b><span>${esc([].concat(it.platforms).join(' / '))}</span></li>`;
  return s;
};

const footHtml = (it) => {
  const links = [];
  if (it.repo) links.push(`<a href="${attr(it.repo)}" target="_blank" rel="noopener">源仓库 ↗</a>`);
  for (const l of (it.links || [])) {
    if (l && l.url) links.push(`<a href="${attr(l.url)}" target="_blank" rel="noopener">${esc(l.label || l.url)} ↗</a>`);
  }
  if (it.updated) links.push(`<span style="color:var(--muted)">updated ${esc(it.updated)}</span>`);
  return links.length ? `<div class="card-foot">${links.join('')}</div>` : '';
};

// related: list of "slug" or {to, as} → clickable rel-links (resolved via idIndex)
function relLinks(it, idIndex) {
  const rels = [].concat(it.related || [])
    .map((r) => (typeof r === 'string' ? { to: r, as: '相关' } : r))
    .filter((r) => r && r.to);
  return rels.map((r) => {
    const t = idIndex[r.to];
    if (!t) {
      console.warn(`! ${it._cat}/${it._slug}: related "${r.to}" not found — skipped`);
      return null;
    }
    return `<a class="rel-link" data-jump="${attr(r.to)}">${esc(r.as || '相关')} · ${esc(t.title)}</a>`;
  }).filter(Boolean);
}

function renderCard(it, catSlug, idIndex) {
  const kw = [].concat(it.tags || []).join(' ');
  const specs = specsHtml(it);
  const foot = footHtml(it);
  const rels = relLinks(it, idIndex);
  const cardRel = rels.length ? `\n      <div class="card-rel"><b>关联</b>${rels.join('')}</div>` : '';

  const bodyMd = (it._body || '').trim();
  const bodyHtml = bodyMd ? `\n  <div class="d-body">${marked.parse(bodyMd)}</div>` : '';
  const detailRel = rels.length ? `\n  <div class="d-rel"><h4>关联技术</h4>${rels.join('')}</div>` : '';
  const detail = `      <template class="card-detail"><div class="d-head"><h3>${esc(it.title)}</h3>${badges(it)}</div>
  <div class="role">${esc(it.role || '')}</div>
  <p class="desc">${esc(it.desc || '')}</p>
  <ul class="specs">
${specs}
  </ul>${bodyHtml}${detailRel}
  ${foot}</template>`;

  return `    <article class="card" id="card-${attr(it._slug)}" data-id="${attr(it._slug)}" data-cat="${attr(catSlug)}" data-deploy="${attr(it.deployment || '')}" data-keywords="${attr(kw)}">
      <div class="card-top"><h3>${esc(it.title)}</h3>${badges(it)}</div>
      <div class="role">${esc(it.role || '')}</div>
      <p class="desc">${esc(it.desc || '')}</p>
      <ul class="specs">
${specs}
      </ul>
      ${foot}${cardRel}
${detail}
    </article>
`;
}

async function loadCategories() {
  let dirents;
  try {
    dirents = await readdir(CONTENT, { withFileTypes: true });
  } catch {
    throw new Error(`content/ not found at ${CONTENT}`);
  }
  const cats = [];
  for (const d of dirents) {
    if (!d.isDirectory()) continue;
    const dir = join(CONTENT, d.name);
    const files = await readdir(dir);
    if (!files.includes('_category.md')) {
      console.warn(`! skip "${d.name}": no _category.md`);
      continue;
    }
    const meta = matter(await readFile(join(dir, '_category.md'), 'utf8')).data;
    const items = [];
    for (const f of files) {
      if (!f.endsWith('.md') || f === '_category.md') continue;
      const g = matter(await readFile(join(dir, f), 'utf8'));
      items.push({ ...g.data, _slug: f.replace(/\.md$/, ''), _cat: d.name, _body: g.content });
    }
    items.sort((a, b) =>
      (a.order ?? 999) - (b.order ?? 999) ||
      String(a.title).localeCompare(String(b.title)));
    cats.push({ slug: meta.slug || d.name, ...meta, items });
  }
  cats.sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
  return cats;
}

const REQUIRED = ['title', 'category', 'source', 'deployment', 'role', 'desc', 'capability', 'limitation', 'invocation'];
const SOURCES = new Set(['native', 'open', 'cloud']);
const DEPLOYS = new Set(['on-device', 'cloud', 'hybrid']);

// Data-quality gate: returns a list of fatal problems (empty = OK).
function validate(cats, idIndex) {
  const errors = [];
  for (const c of cats) {
    for (const it of c.items) {
      const id = `${c.slug}/${it._slug}`;
      for (const f of REQUIRED) {
        if (it[f] === undefined || it[f] === null || String(it[f]).trim() === '') {
          errors.push(`${id}: missing required field "${f}"`);
        }
      }
      if (it.source !== undefined && !SOURCES.has(it.source)) errors.push(`${id}: invalid source "${it.source}" (native|open|cloud)`);
      if (it.deployment !== undefined && !DEPLOYS.has(it.deployment)) errors.push(`${id}: invalid deployment "${it.deployment}" (on-device|cloud|hybrid)`);
      if (it.category !== undefined && it.category !== c.slug) errors.push(`${id}: category "${it.category}" does not match folder "${c.slug}"`);
      for (const r of [].concat(it.related || [])) {
        const to = typeof r === 'string' ? r : (r && r.to);
        if (!to) continue;
        if (to === it._slug) errors.push(`${id}: related points to itself`);
        else if (!idIndex[to]) errors.push(`${id}: related "${to}" not found`);
      }
    }
  }
  return errors;
}

async function build() {
  const cats = await loadCategories();

  // global slug index for relation resolution
  const idIndex = {};
  const errors = [];
  for (const c of cats) {
    for (const it of c.items) {
      if (idIndex[it._slug]) errors.push(`duplicate slug "${it._slug}" (in ${c.slug})`);
      idIndex[it._slug] = { title: it.title, cat: c.slug };
    }
  }

  errors.push(...validate(cats, idIndex));
  if (errors.length) {
    console.error(`✗ Validation failed — ${errors.length} problem(s):`);
    for (const e of errors) console.error('  • ' + e);
    process.exit(1);
  }

  let filtersHtml = '';
  let sectionsHtml = '';
  let num = 0;
  let total = 0;

  for (const c of cats) {
    if (!c.items.length) continue; // skip empty categories
    num++;
    total += c.items.length;
    const n = String(num).padStart(2, '0');
    filtersHtml += `        <span class="chip" data-f="${attr(c.slug)}">${esc(c.filter_label || c.title)}</span>\n`;
    const cards = c.items.map((it) => renderCard(it, c.slug, idIndex)).join('');
    sectionsHtml += `
<section class="section" data-cat="${attr(c.slug)}" id="${attr(c.slug)}">
  <div class="section-head">
    <span class="section-num">${n}</span>
    <h2>${esc(c.title)}</h2>
    <span class="zh">${esc(c.zh || '')}</span>
  </div>
  <div class="grid">
${cards}  </div>
</section>
`;
  }

  const tpl = await readFile(TEMPLATE, 'utf8');
  // "整理日期" = latest `updated` across entries → deterministic build (CI diff stays stable).
  const dates = cats.flatMap((c) => c.items.map((it) => it.updated)).filter(Boolean).sort();
  const ym = (dates[dates.length - 1] || '').replace('-', '.');

  const out = tpl
    .replace('<!--@filters-->', filtersHtml.replace(/\n$/, ''))
    .replace('<!--@sections-->', sectionsHtml.trim())
    .replaceAll('{{catcount}}', String(num))
    .replaceAll('{{date}}', ym);

  await writeFile(OUT, out, 'utf8');
  console.log(`✓ Built index.html — ${num} categories, ${total} entries`);
}

build().catch((err) => {
  console.error('✗ Build failed:', err.message);
  process.exit(1);
});
