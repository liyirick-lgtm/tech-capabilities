---
title: "Real-ESRGAN"
category: genvisual
source: open
deployment: hybrid
badge: "开源"
role: "开源超分放大 · 图像/视频修复"
desc: "腾讯 ARC 实验室开源的实用图像/视频超分放大模型，用 GAN + 纯合成退化数据训练，对压缩、噪点、模糊的真实低质图鲁棒。常配合 GFPGAN 做人脸修复，另有 Anime 变体专攻线稿/插画，是几乎所有「AI 放大」功能的底层之一。"
capability: "通用 4x 超分、真实退化鲁棒、人脸修复（GFPGAN）、动漫专用变体、可离线"
limitation: "细节生成不及扩散式超分；模型偏老（2021）"
invocation: "Python / ncnn-vulkan 自托管；ComfyUI 节点；各类云 API"
tags: [real-esrgan, esrgan, gfpgan, 超分, 放大, upscale, "super-resolution", 图像修复, 开源, 腾讯, ncnn]
license: "BSD-3-Clause"
cost: "免费 / 自托管"
platforms: [Server, 跨平台]
repo: "https://github.com/xinntao/Real-ESRGAN"
links:
  - { label: "Real-ESRGAN GitHub", url: "https://github.com/xinntao/Real-ESRGAN" }
  - { label: "ncnn-vulkan 实现", url: "https://github.com/xinntao/Real-ESRGAN-ncnn-vulkan" }
updated: "2026-06"
order: 70
related:
  - { to: "topaz-gigapixel", as: "商用替代" }
  - { to: "onnx-runtime", as: "可运行 runtime" }
  - { to: "draw-things", as: "常配合工作流" }
---

Real-ESRGAN 是开源超分放大的事实标准，轻量、能离线、可商用，广泛内嵌在各类放大工具与本地工作流里。追求极致细节可转向扩散式超分（SD/FLUX upscaler）或商用的 Topaz Gigapixel，但 Real-ESRGAN 在「快、稳、免费」这一档仍是首选。
