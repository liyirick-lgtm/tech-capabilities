---
title: "Cartesia Sonic / Qwen3-TTS"
category: tts
source: cloud
deployment: hybrid
badge: "云端 / 开源"
role: "超低延迟实时 · 语音代理"
desc: "主打极低延迟（Cartesia Sonic Turbo 约 40ms、Qwen3-TTS 约 97ms 流式），为实时语音对话/语音代理设计。在需要「边想边说」的交互场景里是关键技术。"
capability: "40–100ms 级延迟、原生流式"
limitation: "顶级实时档多为云端/付费"
invocation: "API / 部分开源"
tags: [cartesia, sonic, 超低延迟, 实时, 语音代理, voice agent, 40ms, 流式, "qwen3-tts"]
cost: "按量 / 部分开源自托管"
platforms: [Server, 跨平台]
updated: "2026-06"
order: 60
related:
  - { to: "elevenlabs", as: "竞品" }
  - { to: "fish-audio-s2", as: "同类" }
  - { to: "cloud-asr-api", as: "常配合" }
  - { to: "state-space-model-mamba", as: "底层架构" }
---

## 一句话

主打超低延迟的实时 TTS:Cartesia Sonic Turbo 首字音约 40ms、Qwen3-TTS 流式约 97ms,为语音 Agent 设计。

## 适用场景

实时语音对话、电话客服、口语陪练等需要「边想边说」的交互。延迟低到可与 ASR + LLM 串成端到端语音管线而几乎无感等待。

## 对比要点

- Cartesia Sonic 基于状态空间模型(SSM / Mamba 系)架构,以低延迟和高吞吐著称;Qwen3-TTS 来自阿里、支持多语言与方言且部分开源。
- 与 ElevenLabs 比:顶级实时档延迟更低,但 ElevenLabs 胜在音色库与生态规模。
- 顶级实时档多为云端/付费,自托管开源版本质量与延迟需自测权衡。
