---
title: "Apple Core ML / MLX"
category: runtime
source: native
deployment: on-device
badge: "Apple 原生"

role: "Apple 设备端侧推理 · 平台原生"
desc: "苹果平台的两套端侧运行时。Core ML 是面向 App 集成的推理框架，自动调度 CPU/GPU/神经网络引擎（ANE），支持权重压缩、有状态模型与 MLTensor，是 iOS/macOS App 落地模型的标准路径（WWDC 2026 预计演进为 Core AI）。MLX 是苹果开源的数组/机器学习框架，专为 Apple Silicon 统一内存设计，可训练与推理，在 M5 神经加速器上表现强劲，社区量化模型丰富。"
capability: "ANE 加速、统一内存、低功耗、可训练（MLX）、App 深度集成（Core ML）"
limitation: "仅限 Apple 平台；非苹果硬件不可用"
invocation: "Core ML：Swift/Obj-C + .mlpackage；MLX：Python/Swift/C++ API"
tags: [coreml, core ml, mlx, apple, apple-silicon, ane, 神经网络引擎, 端侧, m5, 统一内存, 平台原生, on-device, core-ai]

license: "Core ML 商用闭源 / MLX MIT"
cost: "免费（随 Apple 平台）"
platforms: [iOS, macOS]
repo: "https://github.com/ml-explore/mlx"
links:
  - { label: "MLX", url: "https://github.com/ml-explore/mlx" }
  - { label: "Core ML 概览", url: "https://developer.apple.com/machine-learning/core-ml/" }
updated: "2026-06"
order: 60
---

苹果端侧推理有两条路。`Core ML` 是产品落地路径：把模型转成 `.mlpackage` 后由系统自动在 CPU、GPU 与神经网络引擎（ANE）间调度，主打低功耗与内存占用，近年补上了权重压缩、有状态模型与 MLTensor，方便端侧跑 LLM 与扩散模型；据报道 WWDC 2026 将把它演进为对接 Foundation Models 的 Core AI。`MLX` 则是苹果开源的数组框架，为 Apple Silicon 的统一内存量身设计，既能训练也能推理，在 M5 的神经加速器上对长 prompt 处理可比 llama.cpp 的 Metal 后端快数倍，HuggingFace 上已有数千个社区量化模型。两者都只在苹果设备上跑——这是平台原生的边界，也是它们能贴硬件做到极致能效的原因。
