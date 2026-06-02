---
title: "开源本地 LLM (Llama / Qwen / MLX)"
category: llm
source: open
deployment: hybrid
badge: "开源"
role: "自托管端侧模型 · 可控"
desc: "在设备/自有服务器上跑开源模型（Llama、Qwen 等），通过量化（GGUF）或 Apple 的 MLX 框架在 Apple Silicon 上推理。比系统模型更可控、可选更大尺寸，适合需要自定义、特定领域或更强能力又想离线的场景。"
capability: "尺寸/模型自选、可微调、离线可控"
limitation: "工程与内存成本高；大模型端侧吃力"
invocation: "MLX（Apple Silicon）、llama.cpp / GGUF 量化"
tags: [本地开源, llm, llama, qwen, mlx, gguf, 量化, 自托管, 端侧推理]
license: "各模型协议不一（Apache-2.0 / Llama 社区版等）"
cost: "免费 / 自托管"
platforms: [macOS, Server, 跨平台]
updated: "2026-06"
order: 30
related:
  - { to: "apple-coreml-mlx", as: "底层引擎" }
  - { to: "llama-cpp-ggml", as: "底层引擎" }
  - { to: "ollama", as: "常配合" }
  - { to: "cloud-frontier-llm", as: "替代" }
---

## 一句话

在自有设备/服务器上跑 Llama、Qwen 等开源模型,通过 GGUF 量化或 Apple MLX 推理,比系统模型更可控、可选更大尺寸、可微调且离线。

## 适用场景

需要自定义、特定领域适配、数据不出域,又想要比端侧系统模型更强能力的场景。在 Apple Silicon 上用 MLX,跨平台 CPU/GPU 上用 llama.cpp + GGUF 量化;Ollama 则把模型拉取与本地服务封装成一条命令。

```bash
ollama run qwen3:8b
```

## 注意

工程与内存成本高:大模型端侧吃力,量化会损精度,需自己负责更新与运维。能力与便利性不及 `cloud-frontier-llm`,但换来可控、可审计与零调用费。各模型许可不一(Apache-2.0 / Llama 社区版等),商用前需核对条款。
