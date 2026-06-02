# 技术知识图谱 · Tech Atlas

**🌐 在线浏览 / Live:** <http://rickli.qzz.io/tech-capabilities/>　（GitHub 上直接点 `index.html` 只会看到源码，要看渲染后的页面请用这个链接）

> 一个可快速检索的「当下主流技术能力」图谱 —— 覆盖做一个 App 几乎用得到的所有技术：影像采集、传感、视觉与多模态、语音与音频、生成式媒体、大模型与检索编排、3D 空间、系统与平台能力。目标是帮你快速浏览「现在技术上能做什么」、发现能力之间的组合、激发新的产品灵感，而不被信息茧房束缚。
>
> A quickly-searchable atlas of what's technically possible right now — on-device and cloud capabilities across capture, vision, speech/audio, generative media, language/reasoning, spatial, and platform layers — built to spark product ideas by surfacing combinations you might not otherwise see.

## 现状 · Status

已落地：`content/` 下 **14 类共 87 条**，由 `npm run build` 生成 [`index.html`](index.html)（可直接用浏览器打开）。原型 `tech-knowledge-base.html` 已归档到 `archive/`。约定与贡献方式见 [CONTRIBUTING.md](CONTRIBUTING.md)。

## 它是什么

- 一个**静态站点**：可直接在浏览器打开，也可托管到 GitHub Pages，无需后端。
- 入口 `index.html` 提供**搜索 + 分类筛选 + 端侧/云端筛选**，以卡片速览每项技术（定位 / 能力 / 限制 / 调用方式 / 来源 / 部署 / 源仓库链接）。
- 每项技术的「真身」是一个 **Markdown 文件**，按分类放进对应文件夹 —— 既是 `index.html` 的数据来源，也方便直接在 GitHub 上逐项浏览。

## 分类 · Categories（14 类 / 7 组）

| 组 | 分类 |
|---|---|
| A 感知采集 | 影像采集 · 传感与运动 |
| B 视觉智能 | 视觉识别 · 多模态理解 |
| C 语音音频 | 语音识别 ASR · 语音合成 TTS · 音频与音乐生成 |
| D 生成式 | 生成式视觉（文生图/视频/编辑/超分） |
| E 语言与智能 | 大模型 LLM（端侧+云端） · 检索与编排（Embedding/向量/RAG/MCP/Agent） |
| F 空间计算 | 3D 与空间计算 |
| G 平台底座 | 系统集成与意图 · 隐私安全与端云协同 · 连接与通信 |

## 目录结构 · Structure (target)

```
.
├── index.html              # 由构建脚本生成 —— 不要手改
├── build.mjs               # 扫描 content/，生成 index.html
├── package.json
├── template/
│   └── base.html           # 页面骨架：头部 / 搜索筛选 / 脚注 / 前端脚本
├── content/                # 唯一数据源 (single source of truth)
│   ├── imaging/  sensing/
│   ├── vision/   multimodal/
│   ├── asr/  tts/  audio/
│   ├── genvisual/
│   ├── llm/  retrieval/
│   ├── spatial/
│   ├── system/  security/  connectivity/
│   │   ├── _category.md    # 分类元信息：组 / 标题 / 副标题 / 筛选标签 / 排序
│   │   └── <slug>.md       # 一项技术一个文件
├── README.md
├── CONTRIBUTING.md
└── CLAUDE.md
```

新增/编辑分类无需再在三处（筛选按钮、章节、卡片）手动保持一致 —— 构建脚本据 `content/` 自动生成。这是相对当前单文件原型的主要改进。

## 浏览与开发 · Use

- **浏览**：直接打开 `index.html`，或访问 GitHub Pages。
- **改内容**：编辑或新增 `content/**/*.md`，重新运行构建生成 `index.html`。

## 构建 · Build

```bash
npm install
npm run build      # 读取 content/ → 写出 index.html
```

构建用 **Node 18+**（本机已确认 Node v24 / npm 11）。生成后的 `index.html` 会一并提交，便于没有 Node 的人直接浏览、GitHub Pages 直接托管。

## 贡献 · Contributing

欢迎补充新技术或修正信息 —— 见 [CONTRIBUTING.md](CONTRIBUTING.md)。技术与排名变化很快，提交前请核对官方文档 / 最新基准，并用条目的 `updated` 字段标注核对时间。

## 许可 · License

待定（开源前确定，倾向 MIT 或 CC BY 一类）。
