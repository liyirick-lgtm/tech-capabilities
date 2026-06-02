---
title: "云端 Embedding API"
category: retrieval
source: cloud
deployment: cloud
badge: "云端"

role: "文本/多模态向量化 · 托管服务"
desc: "把文本（及图像）映射成稠密向量，是语义检索与 RAG 的第一步。代表：OpenAI text-embedding-3-large/small、Google gemini-embedding-001、Voyage voyage-3、Cohere Embed v4。托管 API 省去自建 GPU，质量稳定且常带 Matryoshka 可截断维度（3072→1536→768），适合快速上线。"
capability: "高质量多语言、可变维度、部分支持多模态、零运维"
limitation: "按量计费、数据出设备、换模型需全量重算向量"
invocation: "REST/SDK，输入文本批量返回向量；维度可截断以省存储"
tags: [embedding, 向量, "text-embedding-3", openai, gemini-embedding, voyage, cohere, 语义检索, 多语言, matryoshka, mteb]

license: "商用闭源"
cost: "按量"
platforms: [Server, 跨平台]
links:
  - { label: "OpenAI Embeddings", url: "https://platform.openai.com/docs/guides/embeddings" }
  - { label: "Gemini Embedding", url: "https://developers.googleblog.com/gemini-embedding-available-gemini-api/" }
  - { label: "Voyage AI", url: "https://docs.voyageai.com/" }
updated: "2026-06"
order: 10
related:
  - { to: "open-embedding-models", as: "替代" }
  - { to: "vector-database", as: "常配合" }
  - { to: "rag-frameworks", as: "上层应用" }
  - { to: "reranker", as: "常配合" }
---

云端 Embedding 是检索栈最省心的起点。`gemini-embedding-001` 于 2025 年 GA，默认 3072 维、支持 100+ 语言并用 Matryoshka Representation Learning 允许无损截断到 1536/768 维；OpenAI `text-embedding-3` 系列是英语任务的稳妥默认；Voyage、Cohere Embed v4 则主打检索优化与多模态。选型注意：一旦上线某模型，库内全部向量都绑定它，换模型意味着重算与回填，建议先用小样本对比 MTEB 上的检索分数再定。
