---
title: "FLUX.2"
category: genvisual
source: open
deployment: hybrid
badge: "开源权重"
role: "开源文生图标杆 · 32B 流匹配"
desc: "Black Forest Labs 2025 年 11 月发布的 FLUX.2 系列，32B 流匹配 Transformer，主打照片级写实、文字排版与多图参考编辑。开源 [dev] 权重在文生图与单图/多图编辑上刷新开源 SOTA；另有体量更小、Apache-2.0 的 [klein] 适合端侧。"
capability: "写实/排版强、多图参考编辑、可自托管、生态成熟（ComfyUI/Diffusers）"
limitation: "[dev] 非商用许可，商用需单独授权；32B 显存吃紧"
invocation: "Hugging Face 下载权重自托管；或 BFL 云 API（Pro/Flex）"
tags: [flux, "flux.2", "flux-2", "black-forest-labs", bfl, 文生图, "text-to-image", 开源, 写实, 排版, comfyui, dev, klein]
license: "FLUX.2-dev 非商用许可（VAE 为 Apache-2.0；klein 4B 为 Apache-2.0）"
cost: "免费 / 自托管（商用需授权）；云 API 按量"
platforms: [Server, 跨平台]
repo: "https://github.com/black-forest-labs/flux2"
links:
  - { label: "官方博客 FLUX.2", url: "https://bfl.ai/blog/flux-2" }
  - { label: "FLUX.2-dev 权重", url: "https://huggingface.co/black-forest-labs/FLUX.2-dev" }
updated: "2026-06"
order: 10
related:
  - { to: "diffusion-model", as: "底层算法" }
  - { to: "transformer", as: "架构基础" }
  - { to: "draw-things", as: "端侧运行入口" }
  - { to: "midjourney", as: "竞品" }
---

FLUX.2 是当前最主流的开源/开放权重文生图基座之一，常作为本地 ComfyUI 工作流与商业图像管线的核心。开源 [dev] 适合追求可控、可自托管的团队，[klein] 系列体量更小可端侧运行，云端 Pro/Flex 则提供托管 API。
