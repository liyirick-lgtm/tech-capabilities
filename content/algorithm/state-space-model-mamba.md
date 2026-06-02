---
title: "状态空间模型 / Mamba (SSM)"
category: algorithm
source: open
deployment: hybrid
badge: "模型架构"

role: "线性复杂度序列建模 · Transformer 替代/混合"
desc: "状态空间模型（SSM）以 Mamba 为代表，用「选择性状态空间」替代注意力：序列信息压进一个随时间演化的隐状态，复杂度对长度是 O(n) 而非 Transformer 的 O(n²)，推理可做到逐 token O(1)。在百万级超长序列（基因组、音频、长记忆 Agent）上算力与显存优势显著。截至 2026 年实践中多为「混合」形态——如 AI21 Jamba（约每 8 层 Mamba 配 1 层 Transformer，并叠 MoE）、Mamba-3 等，兼顾长上下文成本与质量。"
capability: "对序列长度线性扩展、超长上下文显存友好、流式逐 token 推理高效"
limitation: "纯 SSM 在常规对话/RAG 质量略逊注意力，故主流以混合架构落地；生态不如 Transformer 成熟"
invocation: "Jamba（混合 SSM-Transformer-MoE）、Mamba-3 等；HuggingFace 可加载，长序列场景为主"
tags: [mamba, ssm, state space model, 状态空间, 线性注意力, jamba, "mamba-3", 长上下文, 序列建模, 选择性状态空间]

license: "论文公开 / 实现 Apache-2.0 等"
cost: "免费自托管 / 云"
platforms: [Server, 跨平台]
repo: "https://github.com/state-spaces/mamba"
links:
  - { label: "Mamba 论文", url: "https://arxiv.org/abs/2312.00752" }
  - { label: "Jamba: Hybrid Transformer-Mamba", url: "https://arxiv.org/abs/2403.19887" }
updated: "2026-06"
order: 30
related:
  - { to: "transformer", as: "替代" }
  - { to: "mixture-of-experts", as: "常配合" }
  - { to: "pytorch-jax", as: "实现框架" }
---

Transformer 强大但注意力对长度是平方级开销，序列一长，显存和算力都爆。SSM 走的是另一条路：把历史信息压进一个随时间演化的隐状态，像 RNN 一样递推，但通过结构化参数化做到可并行训练。Mamba 的关键创新是「选择性」——让状态转移随输入内容动态调整，从而在保持 O(n) 线性复杂度的同时具备类似注意力的内容感知能力；推理时还能逐 token 做到 O(1)。这让它在百万 token 级的基因组、音频、长记忆 Agent 等场景上对 Transformer 有数量级的成本优势。不过纯 SSM 在 128K 以内的常规对话与 RAG 上质量仍略逊于注意力，所以截至 2026 年落地的主流是混合架构：AI21 Jamba 把约 8 层 Mamba 夹 1 层 Transformer 并叠加 MoE，2026 年 3 月发布的 Mamba-3 也面向 GPU 云上的长上下文推理。SSM 已从研究好奇心走向「长上下文降本」的实用选项，但生态成熟度仍不及 Transformer。
