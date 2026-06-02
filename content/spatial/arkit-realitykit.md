---
title: "ARKit / RealityKit"
category: spatial
source: native
deployment: on-device
badge: "Apple 原生"
role: "AR 追踪与 3D 渲染 · Apple 空间计算底座"
desc: "Apple 的增强现实与 3D 实时渲染框架：ARKit 负责世界追踪、平面/场景几何、深度与人体遮挡，RealityKit 负责实体组件、物理、动画与基于物理的渲染（PBR），是 iOS / iPadOS / visionOS 上构建 AR 与空间应用的基础。"
capability: "世界追踪、场景几何与遮挡、共享世界锚点、PBR 渲染、SwiftUI 内嵌 3D"
limitation: "仅限 Apple 生态；高级遮挡/几何依赖 LiDAR 机型；不跨 Android"
invocation: "ARKit + RealityKit（Swift），端侧实时"
tags: [arkit, realitykit, ar, 增强现实, 空间计算, world tracking, 世界追踪, "scene-reconstruction", lidar, pbr, swiftui]
license: "商用闭源"
cost: "免费（含于系统 SDK）"
platforms: [iOS, iPadOS, visionOS]
links:
  - { label: "ARKit 文档", url: "https://developer.apple.com/augmented-reality/arkit/" }
  - { label: "RealityKit 文档", url: "https://developer.apple.com/documentation/realitykit/" }
updated: "2026-06"
order: 10
related:
  - { to: "avdepthdata-lidar", as: "数据上游" }
  - { to: "object-capture", as: "常配合" }
  - { to: "roomplan", as: "常配合" }
  - { to: "object-pose-trajectory", as: "常配合" }
---

ARKit / RealityKit 是 Apple 空间计算的核心底座。截至 visionOS 26（WWDC 2025）新增共享世界锚点（多用户同房间内对齐内容）、90Hz 手部追踪、RealityKit 环境遮挡（虚拟物体被真实静态物遮挡）、`MeshInstancesComponent` 高效批量绘制，以及 SwiftUI 直接内嵌与操作 3D 实体、手势直挂实体等能力。适合做 AR 试穿/试摆、测量、空间游戏与协作类 App。
