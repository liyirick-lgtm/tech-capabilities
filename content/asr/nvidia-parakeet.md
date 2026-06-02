---
title: "NVIDIA Parakeet"
category: asr
source: open
deployment: hybrid
badge: "开源"
role: "超快流式英语 ASR · 实时"
desc: "NVIDIA 的 RNN-Transducer 系列，主打推理速度与流式实时识别，RTFx 极高（处理速度远超 Whisper），适合需要低延迟实时转写的场景，准确率排名略低但够用。"
capability: "流式实时、极高吞吐、低延迟"
limitation: "以英语为主；准确率非顶尖"
invocation: "开源模型，Open ASR Leaderboard 可比"
tags: [parakeet, nvidia, 实时, 流式, streaming, 低延迟, transducer, 快]
license: "开源（CC-BY 等）"
cost: "免费 / 自托管"
platforms: [Server, 跨平台]
updated: "2026-06"
order: 40
related:
  - { to: "openai-whisper", as: "竞品" }
  - { to: "voxtral-transcribe", as: "同类" }
  - { to: "nvidia-tensorrt", as: "底层引擎" }
  - { to: "nvidia-blackwell-datacenter-gpu", as: "运行硬件" }
---

## 一句话

NVIDIA 基于 RNN-Transducer(RNN-T)的开源 ASR 系列,主打极高吞吐与流式实时识别。

## 适用场景

实时字幕、语音 Agent、呼叫中心等对延迟敏感、需要边说边出字的英语场景。RTFx(实时因子)远高于 Whisper,单卡可并行处理大量音频流。

## 对比要点

- 架构上是 Transducer(非 Whisper 的 encoder-decoder),天生适合流式低延迟,无需等整段音频。
- 以英语为主,多语言与专业词汇覆盖不如 Whisper;在 Open ASR Leaderboard 上准确率排名靠前但非绝对第一。
- 借 NeMo 框架训练,部署常配合 TensorRT / Triton 在 NVIDIA GPU 上加速。
