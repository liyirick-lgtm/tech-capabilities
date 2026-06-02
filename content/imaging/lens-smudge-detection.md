---
title: "Lens Smudge Detection"
category: imaging
source: native
deployment: on-device
badge: "Apple 原生"
role: "镜头脏污 / 模糊检测 · Vision (iOS 26)"
desc: "iOS 26 在 Vision 中新增镜头脏污检测，可在相册或自有采集管线中识别可能被指纹/脏污影响的模糊图片，提升扫描和拍摄质量。"
capability: "识别潜在脏污/模糊图像"
limitation: "iOS 26+；属于辅助质量判断"
invocation: "Vision framework（WWDC25）"
tags: [镜头脏污, smudge, 检测, 模糊, photo quality, 镜头检测]
platforms: [iOS]
updated: "2026-06"
order: 50
related:
  - { to: "recognize-documents", as: "常配合" }
  - { to: "recognize-text", as: "常配合" }
  - { to: "core-ml", as: "底层引擎" }
---

## 一句话

iOS 26 在 Vision 中新增的镜头脏污/模糊检测，用来在采集前后判断画面是否被指纹、油污影响而发虚。

## 适用场景

文档/证件扫描、商品拍摄等对清晰度敏感的流程：在自有采集管线里跑该请求，若判定可能脏污就提示用户擦拭镜头或重拍，从源头提升 OCR 与识别质量。

## 注意

仅 iOS 26 及以上可用，属于辅助性质量判断而非硬性门控——它给出的是「可能受脏污影响」的概率信号，不保证一定是镜头问题（强景深虚化、运动模糊也可能触发）。建议作为提示而非强制拦截。
