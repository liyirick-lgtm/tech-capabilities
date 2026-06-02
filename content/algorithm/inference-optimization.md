---
title: "推理优化 (FlashAttention / KV cache / 投机解码)"
category: algorithm
source: open
deployment: hybrid
badge: "推理优化"

role: "提升 LLM 吞吐与延迟 · 不改模型质量"
desc: "一组在「不改变模型权重/输出质量」前提下加速 LLM 推理的核心算法：FlashAttention（IO 感知的融合注意力核，省显存、提速，已到 v3）、KV cache（缓存已生成 token 的 K/V 避免重复计算，是自回归生成提速的基础，可再叠加 FP8/分页缓存 PagedAttention）、投机解码（speculative decoding，用小草稿模型快速产候选、大模型一次性验证，常 2–3 倍提速且输出与原模型一致）。是 vLLM、SGLang、TensorRT-LLM 等推理引擎的标配组合。"
capability: "成倍提升吞吐、降低延迟与显存占用，且不损失生成质量"
limitation: "实现依赖特定硬件/核；投机解码收益随草稿命中率波动，长序列需专门处理"
invocation: "vLLM、SGLang、TensorRT-LLM 内置；FlashAttention-3、PagedAttention、speculative decoding"
tags: [推理优化, flashattention, "flash-attention", "kv-cache", kv缓存, 投机解码, speculative decoding, pagedattention, vllm, sglang, 吞吐, 延迟]

license: "方法公开 / 实现多为 Apache-2.0、BSD"
cost: "免费 / 自托管"
platforms: [Server]
repo: "https://github.com/vllm-project/vllm"
links:
  - { label: "FlashAttention-3", url: "https://arxiv.org/abs/2407.08608" }
  - { label: "vLLM (PagedAttention)", url: "https://blog.vllm.ai/2023/06/20/vllm.html" }
updated: "2026-06"
order: 60
related:
  - { to: "serving-engines-vllm-sglang", as: "落地引擎" }
  - { to: "nvidia-tensorrt", as: "落地引擎" }
  - { to: "transformer", as: "优化对象" }
  - { to: "model-quantization", as: "常配合" }
---

这些技术的共同点是「加速但不改输出」——只优化计算与访存方式，模型权重与生成结果不变。FlashAttention 用 IO 感知的分块与核融合，把注意力计算保持在高速 SRAM 内、避免反复读写显存，省显存又提速，截至 2026 年 vLLM V1 已集成 FlashAttention-3。KV cache 缓存已生成 token 的 Key/Value，使自回归生成每步只需算新 token，是长文本生成提速的基础；其上又衍生出 PagedAttention（像操作系统分页一样管理 KV、减少碎片、支持高并发）以及 FP8 KV cache（进一步省显存）。投机解码则换个思路：让一个小而快的草稿模型一次生成多个候选 token，再用大模型一次性并行验证、接受匹配的部分，命中率高时能带来 2–3 倍加速且输出严格等价于大模型。这三者通常组合出现在 vLLM、SGLang、TensorRT-LLM 等引擎里，是把同一块 GPU 的服务吞吐拉满的关键工程算法。
