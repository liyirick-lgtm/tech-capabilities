---
title: "Core ML"
category: vision
source: native
deployment: on-device
badge: "Apple 原生"
role: "端侧模型推理引擎 · 底座"
desc: "Apple 的端侧模型运行框架，把训练好的视觉/音频/NLP 模型部署到 CPU/GPU/神经引擎(ANE)上推理。Vision 等高层框架底层都依赖它，也可直接跑自定义模型。"
capability: "自定义模型本地推理，自动调度 ANE/GPU/CPU"
limitation: "需将模型转换为 .mlmodel/.mlpackage"
invocation: "Core ML；常配合 Create ML 训练"
tags: [core ml, 自定义模型, 端侧推理, 神经引擎, ane, 模型部署]
platforms: [iOS, macOS, iPadOS, visionOS]
updated: "2026-06"
order: 50
related:
  - { to: "apple-neural-engine", as: "运行硬件" }
  - { to: "apple-coreml-mlx", as: "运行时" }
---
