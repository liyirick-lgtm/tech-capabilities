# 贡献指南 · Contributing

> 注意：目录结构与构建脚本尚未落地（见 [README 现状](README.md#现状--status)）。本文件先把**约定**定下来，作为迁移与后续贡献的依据。

## 分类总览 · Categories

图谱定位为「做一个 App 几乎用得到的所有技术」，共 **14 类 / 7 组**。每类是 `content/` 下的一个文件夹：

| 组 group | 分类（slug） |
|---|---|
| A 感知采集 capture | `imaging` 影像采集 · `sensing` 传感与运动 |
| B 视觉智能 visual | `vision` 视觉识别 · `multimodal` 多模态理解 |
| C 语音音频 audio | `asr` 语音识别 · `tts` 语音合成 · `audio` 音频与音乐生成 |
| D 生成式 generative | `genvisual` 生成式视觉（文生图/视频/编辑/超分） |
| E 语言与智能 reasoning | `llm` 大模型（端侧+云端） · `retrieval` 检索与编排（Embedding/向量/RAG/MCP/Agent） |
| F 空间计算 spatial | `spatial` 3D 与空间计算 |
| G 平台底座 platform | `system` 系统集成与意图 · `security` 隐私安全与端云协同 · `connectivity` 连接与通信 |

## 加一项技术（最常见）

1. 找到（或新建）对应分类文件夹 `content/<category>/`，category 用上表的 slug。
2. 新建 Markdown 文件，文件名用 kebab-case 英文 slug，例如 `content/asr/nvidia-parakeet.md`。
3. 按下方模板填写 frontmatter；正文（可选）写更长的介绍 / 适用场景 / 备注。
4. 运行 `npm run build` 重新生成 `index.html`，在浏览器打开预览。
5. 提交 PR，同时包含改动的 `content/**` 与重新生成的 `index.html`。

### 条目 frontmatter 模板

```yaml
---
title: NVIDIA Parakeet            # 卡片标题
category: asr                     # 必须等于所在文件夹 slug

# —— 两个可筛选维度 ——
source: open                      # native | open | cloud  → 决定徽章配色
deployment: on-device             # on-device | cloud | hybrid  → 端侧/云端筛选
badge: "开源"                      # 徽章文字（可选；默认按 source 给，混合标签时手动覆盖）

role: "超快流式英语 ASR · 实时"     # 标题下一行定位
desc: "NVIDIA 的 RNN-Transducer 系列，主打推理速度与流式实时识别……"
capability: "流式实时、极高吞吐、低延迟"            # 能力
limitation: "以英语为主；准确率非顶尖"             # 限制
invocation: "开源模型，Open ASR Leaderboard 可比"  # 调用 / 接入方式
tags: [parakeet, nvidia, 实时, 流式, streaming, transducer]  # 搜索别名

# —— 选型相关（选填，但建议填）——
license: "CC-BY-4.0"              # 许可：MIT / Apache-2.0 / 商用闭源 / 开源权重 …
cost: "免费 / 自托管"             # 免费 / 按量 / 订阅 / 自托管
platforms: [Server, 跨平台]       # iOS / macOS / Android / Web / Server / 跨平台
repo: "https://github.com/NVIDIA/..."   # 源仓库
links:
  - { label: "Open ASR Leaderboard", url: "https://..." }
updated: "2026-06"                # 本条信息核对时间（技术变化快）
order: 40                         # 分类内排序（可选，小的在前）
---

（可选）更长的技术介绍、适用场景、踩坑备注 —— 供将来的详情页使用，index 卡片暂不展示。
```

字段说明：

- **`source`**（来源/形态，三选一，决定徽章配色）：`native` 系统/平台原生（青绿）· `open` 开源可自托管（橙）· `cloud` 商用云服务（灰）。
- **`deployment`**（算力位置，三选一，作为端侧/云端筛选维度）：`on-device` 端侧 · `cloud` 云端 · `hybrid` 端云皆可。
  > 为什么和 `source` 分开：开源模型可端侧也可云端跑（如 FLUX 端侧 vs 云 GPU），系统原生多为端侧 —— 两个维度正交，分开才筛得准。
- **`badge`**：徽章上的文字，默认按 `source` 给（如「开源」）；需要「开源 / API」这类混合标签时手动覆盖，配色仍由 `source` 决定。
- **`tags`**：汇入卡片搜索关键词，请补上英文、拼音、缩写、同义词，让别人换种说法也能搜到。
- 三个 spec（`capability` / `limitation` / `invocation`）各保持一行精炼，对应卡片底部的 能力 / 限制 / 调用。
- `license` / `cost` / `platforms` / `updated` 选填，但对「做产品选型」很有用，尽量补。

## 加一个新分类

在 `content/<new-category>/` 放一个 `_category.md`：

```yaml
---
slug: imaging
group: capture                      # 所属大组（见分类总览）
title: "Imaging & Camera"           # 英文大标题（h2）
zh: "影像采集 / 计算摄影 / 专业格式"   # 副标题
filter_label: "影像 / 相机"           # 顶部筛选 chip 文字
order: 1                             # 章节序号（决定 01/02… 与排序）
---
```

构建脚本据此自动生成章节、章节号和筛选按钮，三处保持一致无需手动维护。

## 风格 · Style

- 中文描述 + 行内英文术语，简洁克制，参照现有条目语气。
- 信息要可核对：尽量给出官方仓库 / 文档链接；用 `updated` 标注核对时间。
