---
title: "视频理解 (长视频 VLM / 时序定位)"
category: multimodal
source: open
deployment: hybrid
badge: "开源 / API"
role: "看懂长视频:事件定位·动作·跨帧问答"
desc: "让模型「看懂」一段视频:理解事件、动作边界、跨帧因果并能定位到具体时刻。Qwen3-VL 用交错 MRoPE + 文本时间戳对齐,把帧级时间和画面精确对齐,原生 256K(可扩 1M)上下文可处理长达约两小时视频,事件定位/动作边界/时序问答能力显著增强,主要感知 benchmark 上比肩 Gemini 2.5 Pro。适合视频检索、内容审核、监控分析、教学/会议摘要。"
capability: "长视频理解、时序定位、动作识别、跨帧问答与摘要"
limitation: "超长视频需抽帧/采样取舍;高帧率细粒度动作仍难"
invocation: "开源:Qwen3-VL 自托管;云端:Gemini / 各家视频 API"
tags: [视频理解, "video-understanding", 长视频, 时序定位, "qwen3-vl", gemini, 跨帧问答, 视频摘要, temporal, 动作识别]
license: "Qwen3-VL: Apache-2.0 / 云端 API 各家协议"
cost: "免费(自托管) / 按量(API)"
platforms: [Server, 跨平台]
repo: "https://github.com/QwenLM/Qwen3-VL"
links:
  - { label: "Qwen3-VL 技术报告", url: "https://arxiv.org/abs/2511.21631" }
updated: "2026-06"
order: 60
related:
  - { to: "qwen-vl-internvl", as: "底层引擎" }
  - { to: "cloud-frontier-vlm", as: "云端方案" }
  - { to: "document-understanding", as: "同类" }
---

视频理解比静态图难在「时间」——既要看懂每一帧,又要在帧之间建立时序与因果,还要能把答案定位到「第几分几秒」。2025–2026 的关键进展是显式时间对齐:Qwen3-VL 把输入组织成「时间戳—视频帧」交错格式,从隐式的 T-RoPE 升级为显式文本时间戳对齐,大幅提升事件定位、动作边界检测与跨模态时序问答的精度;配合原生 256K(可扩至 1M)上下文,可一次吞下两小时级别的长视频。开源侧 Qwen3-VL 可自托管,云端侧 Gemini 系列在长视频与超大上下文上同样强势。典型应用包括视频检索/打标、内容审核、安防回溯、会议与课程自动摘要。
