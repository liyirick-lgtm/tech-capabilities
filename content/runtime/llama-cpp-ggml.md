---
title: "llama.cpp / ggml（GGUF）"
category: runtime
source: open
deployment: on-device
badge: "开源"

role: "端侧 C/C++ 推理引擎 · 量化跑大模型"
desc: "用纯 C/C++ 写的轻量推理引擎，配合张量库 ggml 与 GGUF 量化格式，让 Llama、Qwen 等大模型能在普通 CPU、消费级 GPU、乃至手机上离线运行。统一支持 Apple Metal、NVIDIA CUDA、Vulkan（覆盖 AMD/Intel GPU），是几乎所有本地推理工具（Ollama、LM Studio 等）的内核。GGUF 已成端侧模型分发的事实标准格式。"
capability: "CPU/GPU 量化推理、跨平台、低内存、离线可控"
limitation: "极大模型端侧吃力；纯服务端高并发不如专用引擎"
invocation: "命令行 / C/C++ / Python 绑定，加载 GGUF 量化权重"
tags: [llama.cpp, ggml, gguf, 量化, 端侧推理, 本地, cpu, metal, cuda, vulkan, 离线, on-device, 量化推理]

license: "MIT"
cost: "免费 / 自托管"
platforms: [macOS, 跨平台]
repo: "https://github.com/ggml-org/llama.cpp"
links:
  - { label: "llama.cpp", url: "https://github.com/ggml-org/llama.cpp" }
  - { label: "GGUF 格式说明", url: "https://huggingface.co/docs/hub/en/gguf-llamacpp" }
updated: "2026-06"
order: 20
related:
  - { to: "model-quantization", as: "底层方法" }
  - { to: "opensource-local-llm", as: "运行模型" }
  - { to: "ollama", as: "上层封装" }
  - { to: "apple-coreml-mlx", as: "竞品" }
---

`llama.cpp` 把大模型推理压进一份可移植的 C/C++ 实现，靠 `ggml` 张量库与 GGUF 量化格式，让原本要数据中心 GPU 才跑得动的模型在笔记本甚至手机上离线运行。它的硬件后端在 2026 年已统一收敛到 Apple Metal、NVIDIA CUDA 与 Vulkan，跨平台编译比过去简单得多。绝大多数面向终端用户的本地推理工具——Ollama、LM Studio——底层都是它；GGUF 也取代了 GGML/GPTQ/AWQ 等碎片格式，成为端侧权重分发的通用容器。需注意其模型文件解析器历史上出过整数溢出类安全问题，加载不可信 GGUF 文件需谨慎。
