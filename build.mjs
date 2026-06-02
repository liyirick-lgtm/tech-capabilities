// Tech Atlas build — scans content/ and generates a static index.html.
// Run with: npm run build   (or: node build.mjs)
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';

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

function renderCard(it, catSlug) {
  const srcClass = SOURCE_CLASS[it.source] || 't-cloud';
  const srcLabel = it.badge || SOURCE_LABEL[it.source] || it.source || '';
  const dep = it.deployment;
  const depPill = dep
    ? `<span class="tag deploy ${DEPLOY_CLASS[dep] || ''}">${esc(DEPLOY_LABEL[dep] || dep)}</span>`
    : '';
  const kw = [].concat(it.tags || []).join(' ');

  let specs =
    `        <li><b>能力</b><span>${esc(it.capability)}</span></li>\n` +
    `        <li><b>限制</b><span>${esc(it.limitation)}</span></li>\n` +
    `        <li><b>调用</b><span>${esc(it.invocation)}</span></li>`;
  if (it.license) specs += `\n        <li><b>许可</b><span>${esc(it.license)}</span></li>`;
  if (it.cost) specs += `\n        <li><b>成本</b><span>${esc(it.cost)}</span></li>`;
  if (it.platforms) specs += `\n        <li><b>平台</b><span>${esc([].concat(it.platforms).join(' / '))}</span></li>`;

  const links = [];
  if (it.repo) links.push(`<a href="${attr(it.repo)}" target="_blank" rel="noopener">源仓库 ↗</a>`);
  for (const l of (it.links || [])) {
    if (l && l.url) links.push(`<a href="${attr(l.url)}" target="_blank" rel="noopener">${esc(l.label || l.url)} ↗</a>`);
  }
  if (it.updated) links.push(`<span style="color:var(--muted)">updated ${esc(it.updated)}</span>`);
  const foot = links.length ? `\n      <div class="card-foot">${links.join('')}</div>` : '';

  return `    <article class="card" data-cat="${attr(catSlug)}" data-deploy="${attr(dep || '')}" data-keywords="${attr(kw)}">
      <div class="card-top"><h3>${esc(it.title)}</h3><span class="tag-group">${depPill}<span class="tag ${srcClass}">${esc(srcLabel)}</span></span></div>
      <div class="role">${esc(it.role || '')}</div>
      <p class="desc">${esc(it.desc || '')}</p>
      <ul class="specs">
${specs}
      </ul>${foot}
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
      items.push({ ...g.data, _file: `${d.name}/${f}` });
    }
    items.sort((a, b) =>
      (a.order ?? 999) - (b.order ?? 999) ||
      String(a.title).localeCompare(String(b.title)));
    cats.push({ slug: meta.slug || d.name, ...meta, items });
  }
  cats.sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
  return cats;
}

async function build() {
  const cats = await loadCategories();

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
    const cards = c.items.map((it) => renderCard(it, c.slug)).join('');
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
  const now = new Date();
  const ym = `${now.getFullYear()}.${String(now.getMonth() + 1).padStart(2, '0')}`;

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
