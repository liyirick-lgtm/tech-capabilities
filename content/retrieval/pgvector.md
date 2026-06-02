---
title: "pgvector"
category: retrieval
source: open
deployment: hybrid
badge: "开源"

role: "Postgres 向量检索扩展 · 复用现有数据库"
desc: "为 PostgreSQL 增加 vector 类型与相似度检索（HNSW / IVFFlat 索引）的开源扩展。让团队不必新增一套向量基础设施，在熟悉的 SQL 里把向量与业务表、事务、JOIN、行级权限统一管理。配合 Supabase、RDS、Neon 等托管 Postgres 即可上线，是中小规模 RAG 的高性价比选择。"
capability: "SQL 内向量检索、与业务表 JOIN、事务一致、复用现有运维"
limitation: "超大规模/超高 QPS 不及专用向量库；索引调参影响召回"
invocation: "CREATE EXTENSION vector；建 HNSW 索引，用 <=> 等距离算子排序"
tags: [pgvector, postgres, postgresql, 向量检索, sql, hnsw, ivfflat, supabase, rag, 关系数据库]

license: "PostgreSQL License"
cost: "免费 / 自托管（托管 Postgres 按量）"
platforms: [Server, 跨平台]
repo: "https://github.com/pgvector/pgvector"
links:
  - { label: "pgvector GitHub", url: "https://github.com/pgvector/pgvector" }
  - { label: "Supabase Vector", url: "https://supabase.com/docs/guides/ai" }
updated: "2026-06"
order: 40
---

pgvector 的核心价值是「少一套系统」。它把向量做成 Postgres 的一等列类型，支持 HNSW 与 IVFFlat 索引、`<->`（L2）/`<=>`（余弦）/`<#>`（内积）距离算子，于是语义检索可以和过滤、分页、事务、外键、行级安全策略写在同一条 SQL 里，向量与业务数据天然一致、同一套备份与监控。对绝大多数中小规模 RAG，它够快也够省；当数据量进入数亿级、需要分布式分片或极致 QPS 时，再考虑迁往 Qdrant、Milvus 等专用向量库。
