---
title: "RAG 框架（LlamaIndex / LangChain）"
category: retrieval
source: open
deployment: hybrid
badge: "开源"

role: "检索增强生成编排 · 把数据接进 LLM"
desc: "把「文档解析→切块→向量化→检索→重排→喂给 LLM」串成可维护管线的开源框架。LlamaIndex 偏检索优先，强在文档摄取、分层切块、自动合并检索与查询引擎；LangChain 偏编排优先，强在链式调用、工具、记忆与多步 Agent。生产常见组合：LlamaIndex 做检索 + LangChain/LangGraph 做编排 + RAGAS/LangSmith 做评测。"
capability: "数据摄取、混合检索、查询改写、Agent 编排、评测集成"
limitation: "抽象层多、版本演进快；薄封装会带来额外延迟"
invocation: "Python/TS 库：装载器→索引/向量库→检索器→查询引擎/链"
tags: [rag, 检索增强, llamaindex, langchain, langgraph, dspy, haystack, 编排, 文档问答, 切块, langsmith]

license: "MIT（LlamaIndex）/ MIT（LangChain）"
cost: "免费 / 自托管"
platforms: [Server, 跨平台]
repo: "https://github.com/run-llama/llama_index"
links:
  - { label: "LlamaIndex", url: "https://github.com/run-llama/llama_index" }
  - { label: "LangChain", url: "https://github.com/langchain-ai/langchain" }
  - { label: "LangGraph", url: "https://github.com/langchain-ai/langgraph" }
updated: "2026-06"
order: 60
related:
  - { to: "vector-database", as: "常配合" }
  - { to: "reranker", as: "常配合" }
  - { to: "cloud-frontier-llm", as: "运行模型" }
  - { to: "model-context-protocol", as: "常配合" }
---

RAG 框架把分散的检索零件粘成可上线的管线。`LlamaIndex` 围绕「数据进 LLM」设计：丰富的数据装载器、分层切块、自动合并检索与子问题分解，文档密集型场景往往更少调参就拿到更高召回；`LangChain` 则围绕「编排」设计，链、工具、记忆与多步推理齐全，其 `LangGraph` 子项目用有状态图专门表达 Agent 工作流。两者并非二选一——2026 年成熟团队的常见做法是 LlamaIndex 负责摄取与索引、LangChain/LangGraph 负责编排、再用 RAGAS 或 LangSmith 做评测。轻量需求也可看 Haystack、DSPy 等替代。
