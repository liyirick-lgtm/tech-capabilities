---
title: "Matter / HomeKit"
category: connectivity
source: native
deployment: hybrid
badge: "开源标准 / Apple 原生"
role: "智能家居互联 · 跨生态标准"
desc: "Matter 是连接标准联盟（CSA）推出的跨平台智能家居开源标准，基于 IP，让设备一次接入即被 Apple Home、Google Home、Alexa、SmartThings 通用；HomeKit 是 Apple 在 iOS 侧的接入与控制框架，Apple Home 同时作为 Matter 控制器。"
capability: "跨生态互通、本地控制、Thread/Wi-Fi/以太网承载；Matter 1.5 起支持安防摄像头等更多设备类型"
limitation: "各生态对规范支持进度不一（部分仍停留在 1.2/1.3）；旧版 HomeKit 架构支持将于 2026-02-10 结束，需迁移新架构"
invocation: "HomeKit / HomeKit Matter Support，Swift；设备端实现 Matter SDK 并通过 Apple Home 配网"
tags: [matter, homekit, 智能家居, 智能家庭, "smart-home", thread, csa, "works-with-apple-home", 物联网]
license: "Apache-2.0（Matter SDK）/ Apple 框架闭源"
cost: "免费（标准与系统能力）"
platforms: [iOS, iPadOS, macOS, tvOS, watchOS, 跨平台]
repo: "https://github.com/project-chip/connectedhomeip"
links:
  - { label: "HomeKit 文档", url: "https://developer.apple.com/documentation/homekit" }
  - { label: "Matter（CSA）", url: "https://csa-iot.org/all-solutions/matter/" }
  - { label: "connectedhomeip 仓库", url: "https://github.com/project-chip/connectedhomeip" }
updated: "2026-06"
order: 50
---

Matter 把碎片化的智能家居生态统一到一套基于 IP 的开源标准上：贴有 Works with Apple Home 标识的 Matter 设备可直接被 Apple Home 接入与控制。开发者在 App 内通过 HomeKit 框架读取与控制家庭设备、配置自动化场景，而设备厂商实现 Matter SDK 即可一次开发、多生态通用。需注意旧 HomeKit 架构将于 2026 年 2 月停止支持，应使用新架构。
