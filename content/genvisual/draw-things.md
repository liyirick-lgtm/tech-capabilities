---
title: "Draw Things"
category: genvisual
source: open
deployment: on-device
badge: "开源 / 端侧"
role: "端侧出图 App · 离线可控"
desc: "面向 iPhone/iPad/Mac 的本地 AI 出图与视频 App，完全离线运行，支持 Stable Diffusion、SDXL、FLUX（含 FLUX.2/klein）等模型，以及 Wan 2.2、SkyReels 等图生视频。借 CoreML / Metal FlashAttention / 神经引擎优化推理，还支持端侧 LoRA 微调。"
capability: "完全离线、模型/LoRA 自由、端侧微调、图生视频、Apple 芯片优化"
limitation: "受设备显存/算力限制；大模型（如 FLUX）内存吃紧"
invocation: "App Store 免费下载；本地运行开源模型权重"
tags: ["draw-things", 端侧, "on-device", 离线, "stable-diffusion", flux, coreml, lora, 微调, ios, mac, 开源]
license: "免费 App（运行开源模型权重）"
cost: "免费 / 端侧"
platforms: [iOS, macOS]
links:
  - { label: "App Store", url: "https://apps.apple.com/us/app/draw-things-offline-ai-art/id6444050820" }
  - { label: "工程博客", url: "https://engineering.drawthings.ai/" }
updated: "2026-06"
order: 100
related:
  - { to: "apple-coreml-mlx", as: "底层引擎" }
  - { to: "flux-2", as: "可运行模型" }
  - { to: "wan", as: "可运行图生视频" }
  - { to: "lora-peft", as: "端侧微调用到" }
---

Draw Things 是「开源模型 + 端侧运行」的代表入口：把 Stable Diffusion / SDXL / FLUX 乃至本地图生视频搬到 iPhone、iPad、Mac 上离线跑，还能端侧微调 LoRA。相比 Apple 系统原生的 Image Playground，它牺牲了系统集成度，换来模型自由与可控性，适合想在端侧深度折腾的创作者。
