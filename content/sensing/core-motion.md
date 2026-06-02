---
title: "Core Motion"
category: sensing
source: native
deployment: on-device
badge: "Apple 原生"
role: "运动与设备姿态 · 计步/陀螺仪"
desc: "Apple 的运动数据框架，读取加速度计、陀螺仪、磁力计与气压计，并提供融合后的设备姿态(CMDeviceMotion)、计步与活动类型(走/跑/骑车/驾车)识别，是健身、AR 稳定、手势交互的底层数据源。"
capability: "计步/距离/楼层、设备姿态(attitude/旋转)、活动识别、原始加速度与陀螺仪"
limitation: "CMMotionManager 实时流上限约 100Hz；高频批采(CMBatchedSensorManager 200/800Hz)仅 Apple Watch 较新机型；部分数据需协处理器支持"
invocation: "Core Motion(CMMotionManager / CMPedometer / CMMotionActivityManager)"
tags: [core motion, 计步, 运动, 设备姿态, 陀螺仪, 加速度计, pedometer, cmmotionmanager, motion]
license: "系统框架"
cost: "免费(系统框架)"
platforms: [iOS, iPadOS, watchOS]
repo: "https://developer.apple.com/documentation/coremotion/"
links:
  - { label: "Core Motion 文档", url: "https://developer.apple.com/documentation/coremotion/" }
  - { label: "What's new in Core Motion (WWDC23)", url: "https://developer.apple.com/videos/play/wwdc2023/10179/" }
updated: "2026-06"
order: 10
---

Core Motion 把多颗惯性传感器(IMU)与气压计的原始读数交给系统协处理器做传感器融合，对外既给原始数据(加速度、角速度、磁场)，也给融合后的高层语义：设备朝向 attitude、用户运动活动(walking / running / cycling / automotive / stationary)与计步距离楼层。低延迟实时场景用 CMMotionManager(约 100Hz)；需要更高采样率的健身/手势分析可用 CMBatchedSensorManager 的批采模式(较新 Apple Watch 上设备运动 200Hz、加速度 800Hz)。
