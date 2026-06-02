---
title: "Mistral Voxtral Transcribe 2"
category: asr
source: open
deployment: hybrid
badge: "开源 / API"
role: "高准确率 + 原生流式 · 新锐"
desc: "Mistral 2026 年的二代 ASR，FLEURS 多语言基准上 WER 约 5.9%（优于 Whisper 的 ~7.4%），含离线批处理 Mini 版与因果编码器的实时流式版。语言覆盖较少（约 13 种），是值得关注的新选手。"
capability: "更低 WER、原生实时流式"
limitation: "语言约 13 种，远少于 Whisper 的 99+"
invocation: "Voxtral Mini（批处理）/ Voxtral Realtime（流式）"
tags: [voxtral, mistral, 流式, 实时, 多语言, 因果编码器, 准确率, wer]
cost: "免费 / 自托管 / API 按量"
platforms: [Server, 跨平台]
updated: "2026-06"
order: 50
related:
  - { to: "openai-whisper", as: "竞品" }
  - { to: "nvidia-parakeet", as: "同类" }
  - { to: "cloud-asr-api", as: "同类" }
  - { to: "serving-engines-vllm-sglang", as: "可部署于" }
---

## 一句话

Mistral 2026 年发布的二代 ASR,在 FLEURS 基准上 WER 约 5.9%(优于 Whisper 的 ~7.4%),且原生支持实时流式。

## 适用场景

追求更高准确率又需要实时流式的转写场景,如直播字幕、会议记录。提供离线批处理的 Voxtral Mini 与因果编码器(causal encoder)的实时版 Voxtral Realtime 两条线。

## 对比要点

- 准确率优于 Whisper,但语言覆盖约 13 种,远少于 Whisper 的 99+,做多语种产品需先确认语种是否在列。
- 因果编码器设计让它无需未来帧即可解码,天然适合流式;权重开源,也可走 Mistral API 按量调用。
- 作为新锐,生态与社区工具链不及 Whisper 成熟,选型前建议在目标语种上自测 WER。
