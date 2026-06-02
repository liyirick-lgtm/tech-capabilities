---
title: "Semantic Segmentation Mattes"
category: imaging
source: native
deployment: on-device
badge: "Apple 原生"
role: "人像语义分割遮罩 · 计算摄影"
desc: "拍照时自动生成头发、皮肤、牙齿等语义分割遮罩，可在后期对各区域分别处理，实现精细抠像、美颜、影棚级人像效果。"
capability: "分通道输出头发/皮肤/牙齿等遮罩（matte）"
limitation: "主要针对人像；依赖支持的设备与拍摄模式"
invocation: "AVFoundation 照片管线（WWDC19 起）"
tags: [语义分割, 头发, 皮肤, 牙齿, 人像, 抠图, segmentation, 美颜, photo effects]
platforms: [iOS]
updated: "2026-06"
order: 30
related:
  - { to: "dual-photo-delivery", as: "同类" }
  - { to: "avdepthdata-lidar", as: "常配合" }
  - { to: "object-pose-trajectory", as: "下游处理" }
  - { to: "core-ml", as: "底层引擎" }
---

## 一句话

拍人像时随照片附带的语义分割遮罩，把头发、皮肤、牙齿等区域分通道抠出来供后期分别处理。

## 适用场景

影棚级人像编辑、精细抠像、分区美颜与换背景：相册 App 的人像光效、第三方修图工具都依赖这些 matte 对不同区域做差异化调整。遮罩随 `AVCapturePhoto` 通过 `AVSemanticSegmentationMatte` 返回。

## 注意

需在 `AVCapturePhotoSettings.enabledSemanticSegmentationMatteTypes` 中显式声明要哪些类型（`.hair` / `.skin` / `.teeth` / `.glasses`），并确认 `AVCapturePhotoOutput.availableSemanticSegmentationMatteTypes` 支持。主要面向人像场景，非人像或多人复杂场景下精度会下降。
