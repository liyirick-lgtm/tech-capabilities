---
title: "Mixture-of-Experts (MoE)"
category: algorithm
source: open
deployment: cloud
badge: "模型架构"

role: "稀疏激活扩参 · 大模型降本提质"
desc: "把 Transformer 里单个前馈层换成多个「专家」前馈层，再用路由器（router）按 token 只激活其中少数几个。这样总参数量可冲到数千亿乃至万亿，而每个 token 实际计算量只对应被激活的专家，实现「大容量、低单 token 算力」。代表：DeepSeek-V3/R1、Llama 4、Qwen3、Kimi K2、OpenAI gpt-oss（128 路专家激活 4 个）等，常见 256/384 个专家、每 token 激活少数几个。是 2025–2026 旗舰开源模型的主流形态。"
capability: "总参数大幅扩张而单 token 算力近恒定、同等成本下质量更高"
limitation: "全部专家需常驻显存、路由不均衡与负载均衡难、训练/部署工程复杂"
invocation: "DeepSeek-V3、Qwen3、Llama 4、gpt-oss 等；vLLM/SGLang 以专家并行(EP)服务"
tags: [moe, mixture of experts, 混合专家, 稀疏, sparse, router, 路由, deepseek, qwen3, "llama-4", gpt-oss, "expert-parallel"]

license: "方法公开 / 各模型权重多为开源或开放权重"
cost: "训练昂贵 / 推理显存高，自托管或云"
platforms: [Server]
repo: "https://github.com/deepseek-ai/DeepSeek-V3"
links:
  - { label: "DeepSeek-V3 技术报告", url: "https://arxiv.org/abs/2412.19437" }
  - { label: "Mixture of Experts 综述", url: "https://arxiv.org/abs/2507.11181" }
updated: "2026-06"
order: 20
---

MoE 的核心洞察是：模型容量与单次推理算力可以解耦。做法是把稠密 Transformer 的某个前馈块复制成 N 个「专家」，由一个轻量路由器为每个 token 选 top-k（如 8 选 2、256 选 8）个专家参与计算，其余专家这一步不动。于是总参数能堆到几千亿甚至上万亿，但每个 token 的实际 FLOPs 只对应被激活的那几个专家——同等推理成本能换到明显更高的质量，这正是 2025–2026 年 DeepSeek-V3/R1、Llama 4、Qwen3、Kimi K2、gpt-oss 等纷纷采用 MoE 的原因。代价也很现实：所有专家都要常驻显存（参数大但激活少），路由容易不均衡、需要负载均衡损失与专家并行（Expert Parallel）等工程手段，vLLM、SGLang 等已针对 DeepSeek 式宽 EP 做了专门优化。它常与稀疏激活、量化、长上下文等技术叠加，是大模型「又大又省」的关键架构。
