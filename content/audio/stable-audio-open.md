---
title: "Stable Audio Open"
category: audio
source: open
deployment: hybrid
badge: "开源"
role: "开源文本到音效/采样 · 可端侧"
desc: "Stability AI 开源的文本到音频模型,擅长生成鼓点、乐器 riff、环境声、foley 等短采样与音效(约 47 秒)。训练数据全部来自 CC0/CC-BY 等授权素材。与 Arm 合作的 Stable Audio Open Small(341M,约 20MB)可在手机 Arm CPU 上 8 秒内出 11 秒立体声,实现端侧实时音频生成。"
capability: "文本到音效/采样、foley/环境声/loop、Small 档端侧实时、训练数据可溯源"
limitation: "时长短(非整曲)、人声/歌曲非强项、社区许可对高营收主体有限制"
invocation: "开源权重(Hugging Face);Stability AI Community License"
tags: [stable audio, stability, 开源, 音效, sound effects, foley, sample, arm, 端侧, 采样]
license: "Stability AI Community License(年营收 < $1M 免费)"
cost: "免费 / 自托管"
platforms: [Server, Android, 跨平台]
repo: "https://huggingface.co/stabilityai/stable-audio-open-1.0"
links:
  - { label: "Stable Audio Open 介绍", url: "https://stability.ai/news-updates/introducing-stable-audio-open" }
  - { label: "Open Small × Arm", url: "https://stability.ai/news/stability-ai-and-arm-release-stable-audio-open-small-enabling-real-world-deployment-for-on-device-audio-control" }
updated: "2026-06"
order: 40
related:
  - { to: "musicgen", as: "同类" }
  - { to: "diffusion-model", as: "底层引擎" }
  - { to: "suno", as: "竞品" }
  - { to: "qualcomm-hexagon-npu", as: "端侧可运行于" }
---

Stable Audio Open 把开源生成的重心放在「音效与制作素材」而非整首歌:鼓点、乐器片段、环境声、foley、过渡音等,适合音效设计师、制作人和游戏/视频管线。训练集全部取自 CC0、CC-BY、CC Sampling+ 授权音频,数据来源相对干净。2025 年与 Arm 合作的 Open Small(341M 参数、打包仅约 20MB)借助 KleidiAI 可完全跑在手机 Arm CPU 上,是当前最快的端侧立体声文本到音频模型。许可为 Stability AI Community License,年营收低于 100 万美元可免费商用。注:Stability 另有面向更长音乐(可达 6 分钟)的 Stable Audio 3 系列。
