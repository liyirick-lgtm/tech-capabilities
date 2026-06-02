---
title: "MusicGen (AudioCraft)"
category: audio
source: open
deployment: hybrid
badge: "开源"
role: "可自托管的文本/旋律到音乐 · 研究基线"
desc: "Meta FAIR 在 AudioCraft 库中开源的文本到音乐模型,支持文本描述与可选旋律条件(melody conditioning),基于 EnCodec 音频编解码器。是开源音乐生成的常用基线,可端侧或云端 GPU 自托管,但音质与时长不及顶级商用平台。"
capability: "文本/旋律条件生成、多档参数(small/medium/large)、可本地推理、可微调"
limitation: "权重仅限非商用(CC-BY-NC)、生成偏器乐短片、无歌词人声、需 GPU 较佳"
invocation: "开源权重(Hugging Face / Replicate);代码 MIT,权重 CC-BY-NC 4.0"
tags: [musicgen, audiocraft, meta, 开源, 音乐生成, encodec, melody, "cc-by-nc", 自托管]
license: "代码 MIT / 权重 CC-BY-NC-4.0"
cost: "免费 / 自托管(权重仅限非商用)"
platforms: [Server, 跨平台]
repo: "https://github.com/facebookresearch/audiocraft"
links:
  - { label: "AudioCraft (Meta AI)", url: "https://ai.meta.com/resources/models-and-libraries/audiocraft/" }
  - { label: "Replicate 在线推理", url: "https://replicate.com/meta/musicgen" }
updated: "2026-06"
order: 30
---

MusicGen 是 Meta AudioCraft 库的核心模型(库内还含 AudioGen 音效生成与 EnCodec 编解码器),自 2023 年开源以来一直是研究与自托管音乐生成的常用基线。它接受文本描述,并可选地用一段旋律作为条件来控制走向。代码以 MIT 发布,但模型权重为 CC-BY-NC 4.0,仅限非商用研究——做商用产品需注意这条限制。适合本地实验、可控管线和二次微调,对追求成品歌曲(含人声、长时长)的场景则力有不逮。
