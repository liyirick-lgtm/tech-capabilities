---
title: "云端前沿 LLM API"
category: llm
source: cloud
deployment: cloud
badge: "云端"
role: "强推理 / 世界知识 · 服务器规模"
desc: "当任务需要复杂推理、长上下文、世界知识或多模态理解时，端侧小模型力不从心，需调用 Claude、GPT 等服务器规模模型。代价是联网、按量计费、数据出设备。常与端侧模型分工：端侧做轻任务、云端做重任务。"
capability: "复杂推理、长上下文、多模态、世界知识"
limitation: "联网、按量付费、隐私需评估"
invocation: "各家 REST API（可在 App 内编排端云协同）"
tags: [云端, llm, api, claude, gpt, 复杂推理, 世界知识, 服务器, 强模型]
cost: "按量"
platforms: [Server, 跨平台]
updated: "2026-06"
order: 20
related:
  - { to: "apple-foundation-models", as: "端云分工" }
  - { to: "opensource-local-llm", as: "替代" }
  - { to: "serving-engines-vllm-sglang", as: "底层引擎" }
  - { to: "cloud-frontier-vlm", as: "同类" }
---

## 一句话

当任务需要复杂推理、长上下文、世界知识或多模态时,调用 Claude、GPT、Gemini 等服务器规模模型,代价是联网、按量计费、数据出设备。

## 适用场景

端侧小模型力不从心的「重任务」:多步推理、几十万 token 长上下文、跨文档综合、需要广博世界知识的问答。常与端侧模型做端云分工——轻任务本地跑、重任务上云,或先端侧路由再决定是否调用云端。

## 对比要点

相比 `opensource-local-llm`,云端 API 免运维、能力最强、随版本自动升级,但数据离开设备且按 token 计费;相比 `apple-foundation-models`,能力高出几个量级,代价是隐私与成本。底层多由 vLLM / SGLang 等服务引擎承载。
