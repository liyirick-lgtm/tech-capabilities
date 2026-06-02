---
title: "LLaVA / Llama Vision (开放多模态基座)"
category: multimodal
source: open
deployment: hybrid
badge: "开源"
role: "完全开放的研究/微调多模态基座"
desc: "LLaVA 系列是把视觉编码器接到 LLM 的开创性开源方案,演进到 LLaVA-OneVision-2(2026,8B,统一图像/长视频/空间理解,数据·训练·权重全链路开源);Meta 的 Llama 3.2 Vision(11B/90B)则提供大厂背书的图像推理基座。二者强调「完全可复现、可定制」,适合做研究、领域微调或需要透明训练栈的产品。"
capability: "图像理解、视觉问答、可微调、训练栈透明"
limitation: "通用 benchmark 略逊一线 VLM;Llama 用社区许可非纯开源"
invocation: "Hugging Face 权重,Transformers / 自托管;Llama Vision 经 NIM / Ollama"
tags: [开源, llava, "llava-onevision", "llama-vision", "llama3.2", 多模态, vlm, 视觉问答, 微调, 可复现]
license: "LLaVA: Apache-2.0 / Llama: Llama 社区许可"
cost: "免费 / 自托管"
platforms: [Server, 跨平台]
repo: "https://github.com/LLaVA-VL/LLaVA-NeXT"
links:
  - { label: "LLaVA-OneVision-2", url: "https://github.com/EvolvingLMMs-Lab/LLaVA-OneVision-2" }
  - { label: "Llama 3.2 Vision (HF)", url: "https://huggingface.co/meta-llama/Llama-3.2-11B-Vision" }
updated: "2026-06"
order: 30
related:
  - { to: "qwen-vl-internvl", as: "同类" }
  - { to: "on-device-vlm-fastvlm", as: "端侧移植" }
  - { to: "transformer", as: "底层架构" }
  - { to: "pytorch-jax", as: "底层引擎" }
---

如果说 Qwen3-VL / InternVL 是「拿来即用的最强开源」,LLaVA 与 Llama Vision 更偏「可改可究的开放基座」。LLaVA 最早确立了「视觉编码器 + 投影层 + LLM」的轻量范式并把它做成完全开源的训练框架;LLaVA-OneVision-2 进一步在单一 8B 架构里统一图像、长视频与空间理解,并把数据、编码器、训练配方、checkpoint、日志端到端放出来,是学术与可复现研究的首选。Llama 3.2 Vision 提供 11B/90B 两档图像推理模型,生态(NIM、Ollama)成熟、便于落地,但使用 Llama 社区许可、需留意商用条款。两类都适合需要自己微调、对训练透明度有要求的团队。
