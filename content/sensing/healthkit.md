---
title: "HealthKit"
category: sensing
source: native
deployment: on-device
badge: "Apple 原生"
role: "健康与体征数据中枢 · 授权读写"
desc: "Apple 的健康数据中枢框架。App 不自存数据，而是经 HKHealthStore 申请权限读写系统统一健康库：心率、步数、睡眠、血氧、ECG、体温、营养、体能训练等，并作为 FDA 认证设备临床数据的汇入通道。"
capability: "读写量化/分类/训练等数据类型、后台投递更新、跨 App 共享统一健康库"
limitation: "需用户逐类授权(隐私敏感)；自身非医疗器械;部分体征依赖支持的 Apple Watch 传感器"
invocation: "HealthKit(HKHealthStore + HKQuery)"
tags: [healthkit, 健康, 心率, 睡眠, 血氧, ecg, 体征, hkhealthstore, 步数, health]
license: "系统框架"
cost: "免费(系统框架)"
platforms: [iOS, iPadOS, watchOS, visionOS]
repo: "https://developer.apple.com/documentation/healthkit"
links:
  - { label: "HealthKit 文档", url: "https://developer.apple.com/documentation/healthkit" }
  - { label: "Data types", url: "https://developer.apple.com/documentation/healthkit/data-types" }
updated: "2026-06"
order: 30
---

HealthKit 用一个中心化的健康库(HKHealthStore)统一管理设备上的健康数据，App 不直接落盘，而是按数据类型逐项申请读/写权限。数据类型分三大类：量化型 quantity(数值，如心率、步数)、分类型 category(非数值，如睡眠分期)、以及训练 workout。它本身不是医疗器械，而是 Apple Watch 的 ECG、血氧等 FDA 认证传感器把临床级数据投递给第三方 App 的桥梁；隐私与合规是接入时最需要谨慎处理的部分。
