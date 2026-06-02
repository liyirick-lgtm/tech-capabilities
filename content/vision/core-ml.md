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
  - { to: "recognize-text", as: "上层框架" }
  - { to: "object-pose-trajectory", as: "上层框架" }
  - { to: "onnx-runtime", as: "同类" }
---

## 一句话

Apple 的端侧模型推理框架，把训练好的模型部署到 CPU / GPU / 神经引擎(ANE)上自动调度执行。

## 适用场景

Vision、Sound Analysis、Natural Language 等高层框架底层都跑在 Core ML 上；也可直接加载自定义模型做图像分类、目标检测、风格迁移等纯端侧推理，数据不出设备、低延迟、离线可用。

## 注意

需先把模型转成 `.mlmodel` / `.mlpackage`（用 `coremltools` 从 PyTorch / TensorFlow 转换）。Core ML 会按层自动在 ANE/GPU/CPU 间分配，但能否真正落到 ANE 取决于算子与精度支持，复杂或不受支持的算子会回落到 GPU/CPU，影响功耗与速度，调优时常用 Instruments 的 Core ML 模板核对实际后端。
