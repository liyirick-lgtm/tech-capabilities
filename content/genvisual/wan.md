---
title: "通义万相 Wan"
category: genvisual
source: open
deployment: hybrid
badge: "开源"
role: "开源文生视频 · MoE 可自托管"
desc: "阿里通义实验室的开源视频生成模型，Wan 2.2 是首个开源 MoE 视频生成模型，支持文生视频与图生视频，主打电影级镜头控制（光影/构图/色彩/运动）与 720P 输出。Apache-2.0 许可，可商用、可自托管，是开源视频生态的主力。"
capability: "开源可商用、文生/图生视频、MoE 高效、电影感控制、可本地跑"
limitation: "默认分辨率/时长有限；高质量出片需较强 GPU"
invocation: "GitHub 下载权重自托管；ComfyUI / Diffusers 集成"
tags: [wan, 万相, 通义万相, 通义, alibaba, 阿里, "wan-2.2", 文生视频, "text-to-video", 图生视频, 开源, moe, apache]
license: "Apache-2.0"
cost: "免费 / 自托管"
platforms: [Server, 跨平台]
repo: "https://github.com/Wan-Video/Wan2.1"
links:
  - { label: "Wan 官网", url: "https://wan.video/" }
  - { label: "Wan GitHub", url: "https://github.com/Wan-Video/Wan2.1" }
updated: "2026-06"
order: 60
related:
  - { to: "diffusion-model", as: "底层算法" }
  - { to: "mixture-of-experts", as: "用到 MoE" }
  - { to: "draw-things", as: "端侧运行入口" }
  - { to: "kling", as: "闭源竞品" }
---

Wan（通义万相）是 2026 年开源视频生成的代表，Apache-2.0 许可、可商用、可本地部署，常与 ComfyUI、Draw Things 等本地工具搭配做图生视频与短片。相对 Veo/可灵这类闭源云服务，它牺牲部分极致画质换来可控与自托管自由。新一代 Wan 2.7 套件已于 2026-04 发布。
