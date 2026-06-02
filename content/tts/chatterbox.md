---
title: "Chatterbox / Chatterbox-Turbo"
category: tts
source: open
deployment: hybrid
badge: "开源"
role: "高质量语音克隆 · ElevenLabs 级"
desc: "Resemble AI 的开源模型（MIT），单 GPU 即可做语音克隆。厂商盲测中偏好率显著超过 ElevenLabs，是想自托管、追求高质量与克隆能力时的首选之一。"
capability: "单 GPU 语音克隆、质量对标/超过商用"
limitation: "需 GPU；自托管要自己做工程"
invocation: "开源权重，MIT 许可"
tags: [chatterbox, resemble, 语音克隆, voice clone, 开源, 盲测, 击败, elevenlabs]
license: "MIT"
cost: "免费 / 自托管"
platforms: [Server, 跨平台]
updated: "2026-06"
order: 20
related:
  - { to: "elevenlabs", as: "替代" }
  - { to: "fish-audio-s2", as: "同类" }
  - { to: "kokoro-82m", as: "同类" }
  - { to: "pytorch-jax", as: "底层框架" }
---

## 一句话

Resemble AI 开源(MIT)的高质量 TTS,单 GPU 即可做零样本语音克隆,厂商盲测偏好率超过 ElevenLabs。

## 适用场景

想自托管、追求商用级音质与语音克隆能力,又要规避按量付费与数据上云的团队。Chatterbox-Turbo 进一步压低推理成本,适合批量配音、有声内容生产。

## 对比要点

- 相比 ElevenLabs:开源 MIT 可商用、自托管数据不出域,但需要自备 GPU 与工程化(部署、并发、流式)。
- 特色是带 emotion exaggeration 控制,可调节情感强度;克隆只需几秒参考音频。
- 与 Kokoro / Fish Audio 同属开源阵营,Chatterbox 偏「高质量 + 克隆」,Kokoro 偏「极致轻量」。
