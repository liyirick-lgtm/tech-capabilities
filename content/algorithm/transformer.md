---
title: "Transformer 架构"
category: algorithm
source: open
deployment: hybrid
badge: "模型架构"

role: "现代大模型的基础架构 · 自注意力"
desc: "2017 年 Google「Attention Is All You Need」提出的序列建模架构，用自注意力（self-attention）替代 RNN 的循环结构：每个 token 通过 Query/Key/Value 计算与全序列所有 token 的关联，可大规模并行训练并捕捉长程依赖。它是 GPT、Llama、Qwen、Claude、Gemini 等几乎所有主流 LLM 以及多模态、扩散等模型的底座；2024 年起 Stable Diffusion 3、DiT 等也把扩散主干从 U-Net 换成 Transformer。截至 2026 年仍是事实标准，Mamba/SSM 等线性替代多以「混合」形式与其并存而非取代。"
capability: "强并行训练、长程依赖建模、可扩展到千亿参数、跨模态通用"
limitation: "注意力对序列长度 O(n²)，长上下文显存与算力开销大"
invocation: "PyTorch/JAX 实现，HuggingFace Transformers 封装；几乎所有 LLM/多模态/DiT 的主干"
tags: [transformer, 注意力, attention, self-attention, 自注意力, "q-k-v", gpt, llm, dit, 模型架构, "attention-is-all-you-need"]

license: "论文公开 / 实现多为 Apache-2.0、MIT"
cost: "免费 / 自实现"
platforms: [Server, 跨平台]
repo: "https://github.com/huggingface/transformers"
links:
  - { label: "Attention Is All You Need", url: "https://arxiv.org/abs/1706.03762" }
  - { label: "Transformer Explainer", url: "https://poloclub.github.io/transformer-explainer/" }
updated: "2026-06"
order: 10
related:
  - { to: "state-space-model-mamba", as: "替代/混合" }
  - { to: "mixture-of-experts", as: "演进形态" }
  - { to: "inference-optimization", as: "被优化" }
  - { to: "pytorch-jax", as: "实现框架" }
---

Transformer 把语言/序列建模从「逐步循环」改为「一次看全序列」：自注意力让每个位置直接计算与其它所有位置的相关性，因而能并行训练、吃下海量数据，并学到 RNN/LSTM 难以捕捉的长程依赖。一个 token 生成三组向量 Query/Key/Value，注意力分数是 Q 与 K 的点积，匹配越高就越多地汇入对方的 V。这套机制配合残差、LayerNorm 与前馈层堆叠，几乎撑起了 2018 年以来的全部生成式 AI——从 GPT 系列、Llama、Qwen 到 Claude、Gemini，再到把扩散主干换成 Transformer 的 DiT、Stable Diffusion 3。它最大的代价是注意力对序列长度的 O(n²) 复杂度，长上下文时显存与算力陡增，催生了 FlashAttention、KV cache、稀疏/线性注意力以及 Mamba/SSM 等优化与替代；但截至 2026，主流仍是「Transformer 为主、混合少量 SSM 层」的格局。
