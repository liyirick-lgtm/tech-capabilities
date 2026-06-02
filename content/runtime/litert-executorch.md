---
title: "LiteRT / ExecuTorch"
category: runtime
source: open
deployment: on-device
badge: "开源"

role: "移动/边缘端侧运行时 · 手机到 MCU"
desc: "两套主流移动/边缘端侧推理运行时。LiteRT（原 TensorFlow Lite，2026 年 TF 2.21 起转正）是 Google 的通用端侧框架，支持 PyTorch/JAX/Keras 多框架来源，自动在 CPU/GPU/NPU 间选最优后端，量化与设备覆盖成熟。ExecuTorch（PyTorch 官方，1.x 已 Production/Stable）以约 50KB 极小运行时跑遍微控制器到高端手机，12+ 硬件后端（Apple/Qualcomm/ARM/MediaTek/Vulkan），是 Meta 全家桶端侧 AI 的底座。"
capability: "手机/嵌入式/MCU 推理、NPU 加速、量化、多框架来源"
limitation: "需模型转换/导出；前沿超大模型端侧仍受限"
invocation: "LiteRT：.tflite + Java/Kotlin/Swift/C++；ExecuTorch：.pte + PyTorch 导出"
tags: [litert, tflite, tensorflow-lite, executorch, pytorch, 端侧, 移动, 边缘, npu, mcu, 嵌入式, 量化, on-device, edge]

license: "Apache-2.0（LiteRT）/ BSD（ExecuTorch）"
cost: "免费 / 自托管"
platforms: [Android, iOS, 跨平台]
repo: "https://github.com/google-ai-edge/LiteRT"
links:
  - { label: "LiteRT", url: "https://github.com/google-ai-edge/LiteRT" }
  - { label: "ExecuTorch", url: "https://github.com/pytorch/executorch" }
updated: "2026-06"
order: 70
related:
  - { to: "pytorch-jax", as: "上游框架" }
  - { to: "qualcomm-hexagon-npu", as: "运行硬件" }
  - { to: "apple-coreml-mlx", as: "竞品" }
  - { to: "model-quantization", as: "依赖" }
---

把模型塞进手机、可穿戴乃至微控制器，是这两套运行时的主场。`LiteRT` 是 TensorFlow Lite 的继任者（2026 年 TF 2.21 起正式转正，旧 `.tflite` 文件与 Interpreter API 仍兼容），已不局限于 TF——可吃 PyTorch/JAX/Keras 来源，并自动在 CPU/GPU/NPU 间挑后端，靠 OS 级异步执行把延迟再压一截。`ExecuTorch` 则是 PyTorch 阵营的官方答案，1.x 已稳定，基础运行时仅约 50KB，从 MCU 到旗舰手机通吃，12+ 硬件后端覆盖 Apple、Qualcomm、ARM、MediaTek，并已支撑 Meta 旗下 Instagram/WhatsApp/Quest/Ray-Ban 眼镜的端侧 AI。两者分别承接 TF/JAX 与 PyTorch 生态的端侧导出，是 Core ML/MLX 之外的跨平台移动方案。
