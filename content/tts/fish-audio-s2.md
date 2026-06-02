---
title: "Fish Audio S2 Pro"
category: tts
source: open
deployment: hybrid
badge: "开源 / API"
role: "多语言高质量 · 性价比"
desc: "开源权重，双自回归（Dual-AR）+ RVQ 音频编解码设计，10M+ 小时多语言训练。托管 API 首字音约 100ms，价格约 $15/百万字符（远低于 ElevenLabs），多语言整体质量优秀。"
capability: "多语言、流式低延迟、克隆、价格友好"
limitation: "自托管需工程投入"
invocation: "开源 + 托管 API"
tags: [fish audio, s2, pro, 开源, 多语言, 克隆, 流式, 低延迟, 性价比]
cost: "免费自托管 / API 约 $15/百万字符"
platforms: [Server, 跨平台]
updated: "2026-06"
order: 40
related:
  - { to: "elevenlabs", as: "竞品" }
  - { to: "chatterbox", as: "同类" }
  - { to: "cartesia-sonic-qwen3", as: "同类" }
  - { to: "pytorch-jax", as: "底层框架" }
---

## 一句话

Fish Audio S2 Pro,开源权重的多语言 TTS,Dual-AR + RVQ 编解码设计,托管 API 价格远低于 ElevenLabs。

## 适用场景

需要多语言、流式低延迟与语音克隆,又看重性价比的产品。托管 API 首字音约 100ms、约 $15/百万字符;也可自托管规避数据上云。

## 对比要点

- 架构上用双自回归(Dual-AR)配合 RVQ(残差矢量量化)音频编解码,10M+ 小时多语言数据训练,多语种整体质量优秀。
- 相比 ElevenLabs:价格优势明显且可开源自托管,但生态、音色库与稳定性不及商用标杆。
- 自托管需要 GPU 与推理工程投入,小团队也可直接用其托管 API 起步。
