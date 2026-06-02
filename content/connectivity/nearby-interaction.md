---
title: "Nearby Interaction"
category: connectivity
source: native
deployment: on-device
badge: "Apple 原生"
role: "UWB 精确测距与方向 · 空间感知"
desc: "基于超宽带（UWB / U1·U2 芯片）的精确测距与方向感知框架，可在设备之间或与第三方 UWB 配件之间测出厘米级距离与相对方向，用于精准查找、空间化交互、近场解锁、AR 锚定等。"
capability: "厘米级距离测量、方向（角度）感知、设备间与第三方配件互测、可结合 ARKit 做相机辅助；支持经蓝牙 LE 配对后的后台会话"
limitation: "需含 UWB 芯片的机型（iPhone 11 及以上等）；第三方配件需实现 NI Accessory Protocol；遮挡与多径会影响精度"
invocation: "Nearby Interaction，Swift；NISession + NINearbyPeerConfiguration / NINearbyAccessoryConfiguration"
tags: [uwb, 超宽带, 精确测距, 方向, "nearby-interaction", u1, 空间感知, 精准查找]
license: "商用闭源（系统框架）"
cost: "免费（系统能力）"
platforms: [iOS, watchOS]
repo: "https://developer.apple.com/documentation/nearbyinteraction"
links:
  - { label: "Nearby Interaction 文档", url: "https://developer.apple.com/documentation/nearbyinteraction" }
  - { label: "第三方配件空间交互", url: "https://developer.apple.com/documentation/nearbyinteraction/implementing-spatial-interactions-with-third-party-accessories" }
updated: "2026-06"
order: 30
---

UWB 让手机不只是「连上了」，而是能知道对方「在多远、哪个方向」。典型应用包括精准查找配件、靠近自动解锁/交互、把虚拟内容锚定到真实空间，以及零售、活动场景中的近场定位。每个会话使用独立 token，结合蓝牙 LE 配对后还能支持后台测距。
