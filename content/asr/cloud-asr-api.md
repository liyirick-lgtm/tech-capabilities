---
title: "云端 ASR API"
category: asr
source: cloud
deployment: cloud
badge: "云端"
role: "托管转录服务 · 免运维"
desc: "Deepgram Nova-3、Google Chirp、AssemblyAI、OpenAI GPT-4o-transcribe 等托管服务，主打开箱即用、规模化、实时流式与高级功能（说话人分离等），代价是数据上云与按量计费。"
capability: "免运维、可扩展、说话人分离、实时"
limitation: "数据出设备、按量付费、需联网"
invocation: "各家 REST/WebSocket API"
tags: [云端, api, deepgram, google chirp, assemblyai, "gpt-4o-transcribe", 转录服务]
cost: "按量"
platforms: [Server, 跨平台]
updated: "2026-06"
order: 60
related:
  - { to: "openai-whisper", as: "竞品" }
  - { to: "voxtral-transcribe", as: "同类" }
  - { to: "cloud-frontier-llm", as: "常配合" }
  - { to: "serving-engines-vllm-sglang", as: "底层服务引擎" }
---

## 一句话

Deepgram、Google Chirp、AssemblyAI、OpenAI gpt-4o-transcribe 等托管转录服务,通过 REST/WebSocket 调用,开箱即用、免运维。

## 适用场景

需要规模化、高可用、实时流式转写,且不想自建 GPU 推理集群的产品。常带说话人分离(diarization)、标点、敏感词等增值功能,转写结果可直接喂给云端 LLM 做摘要、问答。

## 对比要点

- 相比自托管 Whisper / Voxtral:省去运维与扩容,代价是数据出设备、按量计费(通常按音频分钟数)、需联网。
- 各家差异在语种覆盖、实时延迟、流式支持与定价,选型时按场景做 WER 与延迟实测对比更可靠。
