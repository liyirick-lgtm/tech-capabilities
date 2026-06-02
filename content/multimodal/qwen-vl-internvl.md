---
title: "开源 VLM (Qwen3-VL / InternVL)"
category: multimodal
source: open
deployment: hybrid
badge: "开源"
role: "近闭源水准的可自托管多模态模型"
desc: "Qwen3-VL(阿里,2025)与 InternVL3.5(上海 AI Lab)是当前最强的开源视觉语言模型代表,均 Apache-2.0。Qwen3-VL 提供 2B 到 235B-A22B 多尺寸、原生 256K 上下文,支持图文混合推理、2D/3D 定位、视觉编程(截图转 HTML/CSS)与 GUI agent;InternVL3.5-241B-A28B 在开源 MLLM 中刷新综合 SOTA,逼近 GPT-5。适合想离线、可微调、做特定领域多模态的团队。"
capability: "图文/多图/视频推理、视觉定位、长上下文、可微调"
limitation: "大尺寸需多卡;端侧只能跑小尺寸;工程成本高"
invocation: "Hugging Face 权重,vLLM / Transformers / Ollama / 自托管"
tags: [开源, vlm, "qwen3-vl", internvl, qwen, 多模态, 看图理解, 自托管, 视觉定位, 视觉编程]
license: "Apache-2.0"
cost: "免费 / 自托管"
platforms: [Server, 跨平台]
repo: "https://github.com/QwenLM/Qwen3-VL"
links:
  - { label: "Qwen3-VL GitHub", url: "https://github.com/QwenLM/Qwen3-VL" }
  - { label: "InternVL GitHub", url: "https://github.com/OpenGVLab/InternVL" }
updated: "2026-06"
order: 20
---

开源 VLM 的第一梯队已把和闭源模型的差距压得很小。Qwen3-VL 有四个稠密档(2B/4B/8B/32B)加两个 MoE(30B-A3B / 235B-A22B),原生 256K(可扩到 1M)上下文,既能处理上百页文档也能看两小时视频;它的亮点是把「理解」延伸到「行动」——视觉编程、操作电脑/手机界面(OS World 上表现领先)。InternVL3.5 采用原生多模态预训练,在通用多模态、推理、文本、agent 任务上拿下开源最强综合成绩。两者都开放权重与许可宽松,是自托管多模态应用的首选基座;小尺寸(2B/4B/8B)还能配合 MLX-VLM 等框架在 Mac 上端侧跑。
