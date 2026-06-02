---
title: "NVIDIA TensorRT / TensorRT-LLM"
category: runtime
source: native
deployment: hybrid
badge: "NVIDIA 专有"

role: "NVIDIA GPU 极致推理优化 · 厂商专有"
desc: "NVIDIA 官方的高性能推理优化栈。TensorRT 面向通用深度学习模型，通过算子融合、精度校准、内核自动选择把模型编译成针对特定 GPU 架构的高效引擎；TensorRT-LLM 专为大模型设计，提供 Python API 与 FP8/NVFP4 量化、分离式服务（disaggregated serving）、专家并行、EAGLE-3 等推测解码。绑定 NVIDIA 硬件，是榨干 H100/Blackwell 等卡延迟与吞吐的首选。"
capability: "算子融合、低精度量化、推测解码、面向架构的内核优化"
limitation: "仅限 NVIDIA GPU；编译/调优有学习成本，可移植性差"
invocation: "Python/C++ API；模型→编译为 TensorRT 引擎后部署"
tags: [tensorrt, tensorrt-llm, nvidia, gpu, 推理优化, fp8, nvfp4, 量化, 推测解码, blackwell, h100, 专有, 厂商原生]

license: "商用闭源（NVIDIA 专有，部分组件开源）"
cost: "免费使用（需 NVIDIA GPU 硬件）"
platforms: [Server, 跨平台]
repo: "https://github.com/NVIDIA/TensorRT-LLM"
links:
  - { label: "TensorRT-LLM", url: "https://github.com/NVIDIA/TensorRT-LLM" }
  - { label: "TensorRT 开发者页", url: "https://developer.nvidia.com/tensorrt-llm" }
updated: "2026-06"
order: 50
related:
  - { to: "nvidia-blackwell-datacenter-gpu", as: "运行硬件" }
  - { to: "serving-engines-vllm-sglang", as: "竞品" }
  - { to: "inference-optimization", as: "底层方法" }
  - { to: "nvidia-jetson", as: "运行硬件" }
---

如果部署目标确定是 NVIDIA GPU，`TensorRT` 系列通常能压出比通用引擎更低的延迟。它把模型「编译」成针对具体 GPU 架构（Ampere/Hopper/Blackwell）的引擎：融合算子、校准精度、自动挑选最快内核。`TensorRT-LLM` 则在此之上为大模型补齐 Python API、FP8/NVFP4 量化、分离式预填充/解码服务、专家并行与 EAGLE-3 多 token 推测解码等。它既能在数据中心服务，也能落到 Jetson/DGX Spark 等边缘设备，故归为端云皆可。代价是深度绑定 NVIDIA 硬件、不可移植，且编译调优本身有学习曲线——许多团队会拿它与 vLLM/SGLang 在目标卡上对比后再定。
