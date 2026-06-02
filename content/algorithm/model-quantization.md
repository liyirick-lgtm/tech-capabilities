---
title: "模型量化 (Quantization)"
category: algorithm
source: open
deployment: on-device
badge: "推理优化"

role: "压缩权重精度 · 端侧/低成本跑大模型"
desc: "把模型权重（有时含激活/KV cache）从 FP16/BF16 降到 INT8、INT4 甚至更低，显著减小显存与带宽、提速推理，是在手机、笔记本、单卡上跑大模型的关键。主流后训练量化（PTQ）方案：GGUF（llama.cpp/Ollama 生态，Q2_K–Q8_0 多档、支持 CPU+GPU 混合）、AWQ（激活感知，4-bit 下质量与稳定性常优于 GPTQ）、GPTQ（经典逐层量化），以及 GPU 原生的 FP8（接近 FP16 质量、推理最快）。是端侧与降本部署的标配。"
capability: "大幅降显存与带宽、提速、让大模型跑进消费级设备"
limitation: "低比特（如 INT4）在数学/代码/推理任务易掉点；需校准，FP8 依赖较新硬件"
invocation: "llama.cpp/Ollama(GGUF)、AutoAWQ、AutoGPTQ；vLLM/TensorRT-LLM 支持 FP8/INT4 服务"
tags: [量化, quantization, gguf, awq, gptq, "int4", "int8", "fp8", "4-bit", "llama.cpp", ollama, 端侧, ptq]

license: "方法公开 / 工具多为 MIT、Apache-2.0"
cost: "免费 / 自托管"
platforms: [跨平台, Server, iOS, Android]
repo: "https://github.com/ggml-org/llama.cpp"
links:
  - { label: "GPTQ 论文", url: "https://arxiv.org/abs/2210.17323" }
  - { label: "AWQ 论文", url: "https://arxiv.org/abs/2306.00978" }
updated: "2026-06"
order: 50
related:
  - { to: "llama-cpp-ggml", as: "落地运行时" }
  - { to: "nvidia-tensorrt", as: "落地运行时" }
  - { to: "lora-peft", as: "常配合" }
  - { to: "qualcomm-hexagon-npu", as: "运行硬件" }
---

大模型推理的瓶颈往往是显存与内存带宽，而非纯算力——量化正是冲着这点：把权重从 16-bit 降到 8/4-bit，模型体积和带宽需求成倍下降，单卡甚至手机就能跑起原本装不下的模型。截至 2026 年最常用的几种后训练量化（PTQ）各有定位：GGUF 是 llama.cpp/Ollama 生态的格式，提供 Q2_K 到 Q8_0 多档、支持 CPU+GPU 混合推理，端侧最普及；AWQ 用激活感知保护重要权重，在 4-bit 下的 MMLU/推理稳定性通常优于 GPTQ；GPTQ 是经典逐层误差补偿量化；FP8 则是 GPU 原生格式，质量接近 FP16、吞吐最高，在 27B+ 大模型上尤其划算（需较新 Hopper/Blackwell 类硬件）。代价是精度损失：INT4 在数学、代码、强推理任务上掉点最明显，这类负载更建议用 INT8/FP8。量化常与 KV cache 量化、蒸馏、LoRA 等叠加，是端侧落地与云端降本的第一道工序。
