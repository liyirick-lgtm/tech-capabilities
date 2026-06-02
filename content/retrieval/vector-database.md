---
title: "向量数据库"
category: retrieval
source: open
deployment: hybrid
badge: "开源 / 云"

role: "向量存储与近邻检索 · 自托管或托管"
desc: "存储 Embedding 并做毫秒级近似最近邻（ANN）检索，是 RAG 与语义搜索的检索引擎。代表：Qdrant（Rust、过滤检索强）、Milvus（十亿级分布式）、Weaviate（混合检索）、Chroma（开发友好）皆开源可自托管；Pinecone 为全托管零运维。多支持 HNSW 索引、量化压缩与向量+元数据混合过滤。"
capability: "毫秒级 ANN、混合过滤、量化省内存、可扩到十亿级"
limitation: "自托管需运维与调参；托管按量计费；召回-速度需权衡"
invocation: "客户端 SDK：建集合 → 写入向量+payload → 带过滤的 top-k 查询"
tags: [向量数据库, vector database, qdrant, milvus, weaviate, chroma, pinecone, ann, hnsw, 近邻检索, 混合检索, rag]

license: "Apache-2.0（开源系）/ 商用云（Pinecone）"
cost: "免费自托管 / 托管按量"
platforms: [Server, 跨平台]
repo: "https://github.com/qdrant/qdrant"
links:
  - { label: "Qdrant", url: "https://qdrant.tech/" }
  - { label: "Milvus", url: "https://milvus.io/" }
  - { label: "Weaviate", url: "https://weaviate.io/" }
  - { label: "Pinecone", url: "https://www.pinecone.io/" }
updated: "2026-06"
order: 30
---

向量库决定检索的速度、召回与成本上限。`Qdrant` 用 Rust 编写，HNSW 索引「过滤感知」，在「相似且满足分类/价格条件」这类带过滤查询上仍保持单位毫秒，内置 1.5/2-bit 二值量化最高 24× 压缩，本地 Docker 与托管 Cloud 同一份二进制；`Milvus` 面向十亿级分布式；`Weaviate` 主打向量+关键词混合检索；`Chroma` 适合原型与小规模。常见路径是用 Chroma 起步、生产迁到 Qdrant 或 Pinecone。若已有 Postgres，可优先评估 pgvector 以省一套基础设施。
