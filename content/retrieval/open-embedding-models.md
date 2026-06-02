---
title: "开源 Embedding 模型"
category: retrieval
source: open
deployment: hybrid
badge: "开源"

role: "可自托管的向量化模型 · 模型权重"
desc: "开源权重的文本向量模型，可端侧或自建服务器运行，数据不出域、零调用费。代表：BAAI BGE-M3（多语言、稠密+稀疏+ColBERT 三合一）、Qwen3-Embedding（多语言 MTEB 榜首梯队）、intfloat E5、Nomic Embed（长上下文、开源数据）。质量已逼近闭源 API，是隐私敏感与高并发场景的主力。"
capability: "多语言、可微调、数据不出域、长上下文、免调用费"
limitation: "需自备 GPU/算力与运维；小模型质量略逊顶级 API"
invocation: "Sentence-Transformers / Hugging Face / Ollama 本地加载，或自建推理服务"
tags: [embedding, 向量, bge, "bge-m3", e5, nomic, qwen3-embedding, 开源, 自托管, sentence-transformers, mteb, 多语言]

license: "Apache-2.0 / MIT（按模型）"
cost: "免费 / 自托管"
platforms: [Server, 跨平台]
repo: "https://github.com/FlagOpen/FlagEmbedding"
links:
  - { label: "BGE / FlagEmbedding", url: "https://github.com/FlagOpen/FlagEmbedding" }
  - { label: "Nomic Embed", url: "https://www.nomic.ai/blog/posts/nomic-embed-text-v1" }
  - { label: "MTEB Leaderboard", url: "https://huggingface.co/spaces/mteb/leaderboard" }
updated: "2026-06"
order: 20
related:
  - { to: "cloud-embedding-api", as: "替代" }
  - { to: "vector-database", as: "常配合" }
  - { to: "reranker", as: "常配合" }
  - { to: "on-device-vector-search", as: "常配合" }
---

当数据不能出设备、调用量大到 API 计费吃不消，或需要领域微调时，开源 Embedding 是首选。`BGE-M3` 一个模型同时产出稠密、稀疏与多向量（ColBERT）表示，覆盖 100+ 语言，是开源生产标准；`Qwen3-Embedding` 系列长期占据 MTEB 多语言榜前列，8B 版本支持 32K 上下文；`E5`、`Nomic Embed` 则在轻量与开源训练数据透明度上有优势。多数模型用 Sentence-Transformers 几行代码即可加载，小尺寸版本（如 bge-small、nomic-embed-text）甚至能在端侧 CPU 上跑。
