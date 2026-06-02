---
title: "PyTorch / JAX"
category: runtime
source: open
deployment: hybrid
badge: "开源"

role: "深度学习训练与计算框架 · 研究到生产"
desc: "训练与通用深度学习计算的两大开源框架。PyTorch 以动态图（eager）+ torch.compile 编译优化主导研究界（占研究论文半数以上），生态、模型库、调试与部署工具最全，是绝大多数训练与微调的默认选择，并向下衔接 ExecuTorch、AOTInductor 与 vLLM 等服务栈。JAX 走函数式 + XLA 编译 + vmap/pmap 自动向量化/并行路线，在 TPU 与大规模科学计算、自定义内核上表现突出，是 DeepMind 等的研究主力。"
capability: "模型训练/微调、自动微分、GPU/TPU 加速、编译优化、生态广（PyTorch）"
limitation: "训练态偏重，直接做端侧/高并发服务需配套导出与服务引擎"
invocation: "Python API；PyTorch eager+torch.compile / JAX jit+vmap"
tags: [pytorch, jax, 训练, 深度学习, torch.compile, xla, 自动微分, vmap, tpu, 微调, 研究, hybrid, flax]

license: "BSD-3（PyTorch）/ Apache-2.0（JAX）"
cost: "免费 / 自托管"
platforms: [Server, 跨平台]
repo: "https://github.com/pytorch/pytorch"
links:
  - { label: "PyTorch", url: "https://github.com/pytorch/pytorch" }
  - { label: "JAX", url: "https://github.com/jax-ml/jax" }
updated: "2026-06"
order: 80
related:
  - { to: "transformer", as: "实现架构" }
  - { to: "google-tpu", as: "运行硬件" }
  - { to: "nvidia-blackwell-datacenter-gpu", as: "运行硬件" }
  - { to: "serving-engines-vllm-sglang", as: "下游服务" }
---

推理引擎跑的模型，多半是在这两套框架里训出来的。`PyTorch` 凭动态图的易用性赢下研究界（2026 年占研究论文 55% 以上），`torch.compile`/TorchInductor 又补齐了过去相较 XLA 的性能差距，加上最全的模型库、调试与部署工具，成为训练与微调的事实默认；它还向下连接 ExecuTorch（端侧）与 vLLM/Triton（服务）。`JAX` 则是函数式 + XLA 编译的另一条路，`jit` 编译、`vmap`/`pmap` 自动向量化与并行使它在 TPU 和大规模科学计算、自定义内核上常胜一筹，是 DeepMind 等团队的研究主力，但高层 API、模型库与部署工具链不如 PyTorch 完备。两者都是「训练态」框架，端侧或高并发服务需再经导出与专用引擎，故归为端云皆可。
