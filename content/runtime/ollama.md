---
title: "Ollama"
category: runtime
source: open
deployment: on-device
badge: "开源"

role: "本地大模型运行时 · 开箱即用"
desc: "把本地跑大模型的下载、量化、加载、服务一条龙封装好的运行时。一行 `ollama run` 即可拉起模型，内置模型库、OpenAI 兼容 API，并兼容 Anthropic Messages API（可直连 Claude Code 等工具）。在 Apple Silicon 上底层切换到 MLX 后提速明显，并支持多模态、Web 搜索与 Windows ARM64 原生构建。是面向开发者与本地优先应用的「易用层」。"
capability: "一键拉起、模型库管理、OpenAI/Anthropic 兼容 API、多模态"
limitation: "封装取向，深度调优不如直接用底层引擎；非高并发服务"
invocation: "CLI / REST API；`ollama run <model>` 或兼容 API 调用"
tags: [ollama, 本地llm, 运行时, 端侧, openai兼容, anthropic, mlx, llama.cpp, 本地优先, on-device]

license: "MIT"
cost: "免费 / 自托管"
platforms: [macOS, 跨平台]
repo: "https://github.com/ollama/ollama"
links:
  - { label: "Ollama", url: "https://github.com/ollama/ollama" }
  - { label: "模型库", url: "https://ollama.com/library" }
updated: "2026-06"
order: 30
---

`Ollama` 把「在本地跑开源模型」从一堆编译参数与量化抉择，简化成 `ollama run llama4` 这一行命令。它在 llama.cpp 之上（Apple Silicon 上已切到 MLX 后端，处理与生成速度显著提升）补齐了模型库、版本管理、REST 服务与 OpenAI/Anthropic 双兼容 API——后者意味着可以用 Claude Code、Codex 这类工具直连本地开源模型。2026 年它进一步加入多模态、Web 搜索与 Windows ARM64 原生构建，并通过 `ollama launch` 一键对接各类编码代理。对追求极致控制的用户它略显「黑箱」，但作为本地优先应用的运行时底座，开箱即用是它最大的价值。
