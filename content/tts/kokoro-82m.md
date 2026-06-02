---
title: "Kokoro-82M"
category: tts
source: open
deployment: on-device
badge: "开源"
role: "超轻量端侧 TTS · 效率王"
desc: "仅 8200 万参数、约 300MB，可在 CPU 上运行，质量却接近大很多倍的模型，2026 年初登顶 TTS Arena。适合本地、低算力、零成本、需要嵌入式部署的场景，但主打英语、不支持语音克隆。"
capability: "极快（GPU 上数十倍实时）、可 CPU 运行、免费、Apache 2.0"
limitation: "英语为主、无克隆、情感表现弱于商用"
invocation: "开源权重；可在 M 系 Mac via MPS 运行"
tags: [kokoro, 开源, 轻量, 82m, 端侧, cpu, styletts, 免费, 快]
license: "Apache-2.0"
cost: "免费 / 自托管"
platforms: [跨平台, macOS, Server]
updated: "2026-06"
order: 10
related:
  - { to: "chatterbox", as: "同类" }
  - { to: "avspeechsynthesizer", as: "端侧竞品" }
  - { to: "elevenlabs", as: "替代" }
  - { to: "apple-coreml-mlx", as: "可运行于" }
---

## 一句话

仅 8200 万参数、约 300MB 的开源(Apache-2.0)TTS,可在 CPU 上跑,质量却接近大很多倍的模型,曾登顶 TTS Arena。

## 适用场景

本地、低算力、零成本、嵌入式与离线部署:边缘设备朗读、隐私敏感的本地 App。GPU 上可达数十倍实时速度,M 系 Mac 经 MPS / MLX 也能流畅运行。

## 对比要点

- 基于 StyleTTS 系架构,体积极小是最大卖点;但主打英语,不支持语音克隆,情感表现弱于商用。
- 相比 Chatterbox:Kokoro 更轻、更省资源但功能更少;相比 ElevenLabs:零成本可离线但表现力有限。
- Apache-2.0 许可,可自由商用,适合嵌进产品做默认朗读引擎。
