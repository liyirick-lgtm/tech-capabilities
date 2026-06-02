---
title: "Object Capture"
category: spatial
source: native
deployment: on-device
badge: "Apple 原生"
role: "照片转 3D 模型 · 摄影测量"
desc: "Apple 的摄影测量（photogrammetry）框架：用一组多角度照片自动重建出带纹理的 3D 网格模型，输出 USDZ，可直接用于 AR 展示。自 iOS 17 起拍摄与重建可在同一台 iPhone/iPad 上端侧完成。"
capability: "多视角照片重建带 PBR 纹理网格、端侧重建、输出 USDZ/USD"
limitation: "需绕物多角度拍摄；反光/透明/无纹理物体效果差；非实时"
invocation: "RealityKit Object Capture API（Swift），端侧"
tags: [object capture, 摄影测量, photogrammetry, 3d扫描, 3d重建, usdz, 建模, apple, 实物建模]
license: "商用闭源"
cost: "免费（含于系统 SDK）"
platforms: [iOS, iPadOS, macOS]
links:
  - { label: "Object Capture 文档", url: "https://developer.apple.com/documentation/realitykit/realitykit-object-capture/" }
updated: "2026-06"
order: 20
related:
  - { to: "arkit-realitykit", as: "底层引擎" }
  - { to: "avdepthdata-lidar", as: "数据上游" }
  - { to: "gaussian-splatting", as: "同类" }
  - { to: "text-image-to-3d", as: "替代" }
---

Object Capture 面向「把真实物体变成 3D 资产」的场景：电商商品、文物、道具、游戏素材等。绕物拍摄一圈，框架基于摄影测量算法重建出带材质的网格。早期重建需在 Mac 上跑，2023 年起 iOS 端可直接完成采集到重建的全流程。适合做产品 3D 展示、AR 试看与素材生产管线。
