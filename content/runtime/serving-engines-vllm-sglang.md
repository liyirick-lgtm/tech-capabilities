---
title: "服务端推理引擎（vLLM / SGLang）"
category: runtime
source: open
deployment: cloud
badge: "开源"

role: "高吞吐 LLM 推理服务 · GPU 集群"
desc: "面向云端/数据中心的大模型推理服务引擎，把单卡到多机多卡的 GPU 算力榨干，提供 OpenAI 兼容 API。vLLM 以 PagedAttention 分页式 KV-Cache 著称，生态最广、硬件覆盖最全（NVIDIA/AMD/TPU/Trainium/Gaudi）；SGLang 以 RadixAttention 前缀缓存见长，在 RAG、多轮对话、Agent 等前缀复用场景吞吐更高。两者都支持连续批处理、张量/流水线并行、FP8/FP4 量化与推测解码。"
capability: "高并发、高吞吐、连续批处理、张量并行、OpenAI 兼容 API"
limitation: "需 GPU 与运维；端侧/单机轻量场景过重"
invocation: "Python 部署 / Docker，暴露 OpenAI 兼容 HTTP 接口"
tags: [vllm, sglang, 推理引擎, 服务端, pagedattention, radixattention, kv-cache, 连续批处理, 张量并行, 高吞吐, inference, serving]

license: "Apache-2.0（vLLM / SGLang）"
cost: "免费 / 自托管（需 GPU 算力）"
platforms: [Server]
repo: "https://github.com/vllm-project/vllm"
links:
  - { label: "vLLM", url: "https://github.com/vllm-project/vllm" }
  - { label: "SGLang", url: "https://github.com/sgl-project/sglang" }
updated: "2026-06"
order: 10
---

当模型要扛住成百上千的并发请求，逐请求朴素推理会把 GPU 显存浪费在碎片化的 KV-Cache 上——`vLLM` 的 PagedAttention 把 KV-Cache 切成可复用的「页」，把显存浪费从 60–80% 压到 4% 以内，同样硬件能多跑 2–4 倍并发；`SGLang` 的 RadixAttention 则用基数树自动发现并复用请求间的共享前缀，在 RAG 与多轮对话这类前缀重叠的负载上吞吐更高。两者定位高度重叠：vLLM 胜在生态与硬件广度（TPU、Trainium、Gaudi 皆可），SGLang 偏结构化生成与 Agent 工作流。生产中常按负载特征择一，或同时压测对比。这类引擎是「云端跑大模型」的事实标准底座，下游常被各类网关与 Agent 框架封装。
