---
title: "跌倒与车祸检测"
category: sensing
source: native
deployment: on-device
badge: "Apple 原生"
role: "传感器融合安全检测 · Watch/iPhone"
desc: "Apple 基于传感器融合的安全能力：用高量程加速度计、陀螺仪、气压计(车祸还含麦克风与 GPS)识别硬摔倒与严重车祸的运动特征，触发后端侧判定并可自动呼救。CMFallDetectionManager 向 App 暴露跌倒事件。"
capability: "硬摔倒检测、严重车祸检测、事件后静止判定、自动紧急呼叫/通知联系人"
limitation: "需较新 Apple Watch / iPhone;CMFallDetectionManager 需向 Apple 申请专用 entitlement;对轻微跌倒可能漏检"
invocation: "Core Motion(CMFallDetectionManager);车祸/跌倒呼救为系统级"
tags: [跌倒检测, 车祸检测, fall detection, crash detection, 传感器融合, 活动检测, cmfalldetectionmanager, 安全, sensor fusion]
license: "系统框架(需 entitlement)"
cost: "免费(系统框架)"
platforms: [iOS, watchOS]
repo: "https://developer.apple.com/documentation/coremotion/cmfalldetectionmanager"
links:
  - { label: "CMFallDetectionManager", url: "https://developer.apple.com/documentation/coremotion/cmfalldetectionmanager" }
  - { label: "在 Apple Watch 上使用跌倒检测", url: "https://support.apple.com/zh-cn/108896" }
updated: "2026-06"
order: 50
related:
  - { to: "core-motion", as: "底层引擎" }
  - { to: "motion-ranging-sensors", as: "运行硬件" }
  - { to: "core-location", as: "常配合" }
  - { to: "healthkit", as: "常配合" }
---

这是传感器融合在安全场景的代表：跌倒检测靠加速度计(可测到约 32g)与陀螺仪识别从站立/行走高度的硬摔倒，并结合摔后静止判定;车祸检测则融合高量程加速度计(可测到约 256g)、气压计、麦克风与 GPS 来匹配车辆碰撞的独特信号特征，可在 Series 8 及以后、SE(二代起)与全部 Ultra 机型上工作。判定均在端侧完成。第三方若要接收跌倒事件，需用 CMFallDetectionManager 并向 Apple 申请专用 entitlement。
