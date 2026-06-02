---
title: "Apple Neural Engine (ANE)"
category: hardware
source: native
deployment: on-device
badge: "Apple 专有"
role: "端侧 NPU · 低功耗推理"
desc: "Apple SoC 内置的神经网络加速单元，自 A11 起随每代芯片演进。当前 A19 Pro 与 M5 均为 16 核 ANE，M5 一代峰值达约 60 TOPS(为 M4 两倍);M5 还把 Neural Accelerator 嵌入每个 GPU 核心。App 不直接编程 ANE，由 Core ML 在运行时把模型调度到 ANE / GPU / CPU。"
capability: "16 核 NPU,M5 约 60 TOPS;低功耗常驻推理,Core ML 自动算子调度"
limitation: "Apple 专有,仅 Apple 设备;不可直接编程,受 Core ML 算子覆盖与内存约束;TOPS 随机型差异大"
invocation: "Core ML(模型转 .mlpackage 后由系统调度上 ANE);经 BNNS / MPS 间接受益"
tags: [ane, apple neural engine, npu, 神经网络引擎, core ml, coreml, a19, m5, 端侧, on-device, tops]
license: "商用闭源(随设备)"
cost: "消费级(随设备,无单独售价)"
platforms: [iOS, iPadOS, macOS]
repo: "https://developer.apple.com/machine-learning/core-ml/"
links:
  - { label: "Core ML", url: "https://developer.apple.com/machine-learning/core-ml/" }
  - { label: "Apple M5 发布", url: "https://www.apple.com/newsroom/2025/10/apple-unleashes-m5-the-next-big-leap-in-ai-performance-for-apple-silicon/" }
updated: "2026-06"
order: 10
---

ANE 是 Apple 端侧 AI 的物理底座：手机、平板、Mac 上的本地推理(图像分割、语音、生成式小模型)主要落在这块单元上。开发者不直接写 ANE 指令，而是把模型用 coremltools 转成 Core ML 格式，由系统在 ANE / GPU / CPU 间自动调度——能否真正跑上 ANE 取决于算子是否被支持。M5 一代(2025-10)重做了 Neural Engine 并在每个 GPU 核心加入 Neural Accelerator，把 AI 算力织进图形管线，端侧大模型与扩散模型的可行性进一步提高。
