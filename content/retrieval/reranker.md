---
title: "Reranker 重排模型"
category: retrieval
source: open
deployment: hybrid
badge: "开源 / API"

role: "检索结果精排 · 提升 RAG 准确率"
desc: "对向量检索召回的候选做二次精排的 cross-encoder：把「查询-文档」成对输入打分，比双塔 Embedding 更准但更慢，因此只对 top-k 候选重排。典型管线：查询→双塔召回 top 50→重排 top 10→喂给 LLM。代表：Cohere Rerank（托管 API）、BAAI bge-reranker-v2-m3（开源、100+ 语言）、Mixedbread / Voyage 等。是低成本提升 RAG 命中率的关键一环。"
capability: "显著提升相关性、支持多语言、即插即用增强现有检索"
limitation: "增加一次推理延迟与成本；只适合对少量候选精排"
invocation: "API（Cohere Rerank）或本地加载（bge-reranker）：输入 query+候选，返回相关性分"
tags: [reranker, 重排, rerank, cross-encoder, cohere, "bge-reranker", "bge-reranker-v2-m3", voyage, mixedbread, rag, 精排, 相关性]

license: "Apache-2.0（bge）/ 商用 API（Cohere）"
cost: "免费自托管 / API 按量"
platforms: [Server, 跨平台]
repo: "https://github.com/FlagOpen/FlagEmbedding"
links:
  - { label: "bge-reranker-v2-m3", url: "https://huggingface.co/BAAI/bge-reranker-v2-m3" }
  - { label: "Cohere Rerank", url: "https://cohere.com/rerank" }
updated: "2026-06"
order: 80
---

向量召回快但不够准——双塔 Embedding 把查询与文档分开编码，难以捕捉细粒度匹配。Reranker 用 cross-encoder 把「查询-文档」拼在一起联合打分，相关性判断显著更准，代价是逐对推理较慢，所以只对召回的 top-k（如 50 条）重排出最终 top-10。开源侧 `bge-reranker-v2-m3` 以 Apache-2.0 支持 100+ 语言，准确率与 Cohere Rerank v3.5 接近且二者都明显优于纯向量检索；托管侧 Cohere Rerank、Voyage rerank 提供 SLA 与免运维。把它加进现有 RAG 通常是性价比最高的一次准确率升级。
