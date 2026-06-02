---
title: "推理专用芯片(Groq LPU / Cerebras)"
category: hardware
source: cloud
deployment: cloud
badge: "云算力"
role: "超低延迟 LLM 推理 · 非 GPU 架构"
desc: "面向 LLM 推理、绕开 GPU 的专用架构,主打每秒 token 数与首字延迟。Groq LPU 用确定性数据流架构,单模型可达上千 token/s、首字 <100ms;Cerebras 用晶圆级 WSE-3(4 万亿晶体管、90 万核、44GB 片上 SRAM、约 21PB/s 带宽),Llama 3.1-405B 突破 1000 token/s。两者主要以云推理 API 形式提供。"
capability: "极高 token/s 与极低首字延迟;Groq 确定性数据流;Cerebras 晶圆级、44GB 片上 SRAM、约 21PB/s 带宽"
limitation: "偏推理(非训练);硬件不散售,基本只经各自云;支持模型集合受限于厂商部署"
invocation: "Groq / Cerebras 云推理 API(多兼容 OpenAI 风格接口)"
tags: [groq, lpu, cerebras, wse-3, 推理, inference, 低延迟, token, 数据流, 晶圆级, 云算力, asic]
license: "商用闭源(云服务)"
cost: "企业级 / 按 token 计费"
platforms: [Server]
repo: "https://groq.com/lpu-architecture"
links:
  - { label: "Groq LPU", url: "https://groq.com/lpu-architecture" }
  - { label: "Cerebras CS-3", url: "https://www.cerebras.ai/blog/cerebras-cs-3-vs-groq-lpu" }
updated: "2026-06"
order: 50
related:
  - { to: "nvidia-blackwell-datacenter-gpu", as: "替代" }
  - { to: "google-tpu", as: "竞品" }
  - { to: "inference-optimization", as: "支撑场景" }
  - { to: "cloud-frontier-llm", as: "服务对象" }
---

当瓶颈从"能不能跑"变成"够不够快",推理专用芯片就有了空间。Groq 的 LPU 用确定性数据流架构换取稳定的低延迟,单模型可达上千 token/s、首字延迟 <100ms,在交互式与 agent 工作流里体验明显优于通用 GPU。Cerebras 走另一条极端——晶圆级整片 WSE-3(4 万亿晶体管、90 万核、44GB 片上 SRAM、约 21PB/s 内存带宽),把权重直接放在贴近计算的 SRAM 里做流水并行,Llama 3.1-405B 突破 1000 token/s。两者都偏推理而非训练,硬件不对外散售,App 侧基本以云 API(多兼容 OpenAI 风格)接入,把"速度"当成一种可采购的能力。
