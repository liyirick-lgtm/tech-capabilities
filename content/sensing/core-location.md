---
title: "Core Location"
category: sensing
source: native
deployment: hybrid
badge: "Apple 原生"
role: "定位与地理围栏 · GPS/Wi-Fi/Beacon"
desc: "Apple 的系统定位框架，融合 GPS、Wi-Fi、蜂窝与气压计给出经纬度/海拔/航向，并支持地理围栏(region monitoring)、显著位置变化省电定位与 iBeacon 邻近检测。iOS 17 起新增 CLMonitor，事件式监测更现代。"
capability: "实时定位、地理围栏进出事件、显著位置变化、iBeacon 测距、航向/海拔"
limitation: "同一 App 地理围栏上限 20 个；后台精确定位受授权与系统调度限制；CLMonitor 后台投递需 CLServiceSession"
invocation: "Core Location(CLLocationManager / CLMonitor / CLBeaconIdentityConstraint)"
tags: [core location, 定位, gps, 地理围栏, geofencing, ibeacon, beacon, cllocationmanager, clmonitor, 位置]
license: "系统框架"
cost: "免费(系统框架)"
platforms: [iOS, iPadOS, macOS, watchOS]
repo: "https://developer.apple.com/documentation/corelocation"
links:
  - { label: "Core Location 文档", url: "https://developer.apple.com/documentation/corelocation" }
  - { label: "CLMonitor", url: "https://developer.apple.com/documentation/corelocation/clmonitor" }
updated: "2026-06"
order: 20
related:
  - { to: "core-motion", as: "常配合" }
  - { to: "nearby-interaction", as: "互补" }
  - { to: "cmaltimeter-barometer", as: "常配合" }
  - { to: "background-tasks", as: "常配合" }
---

定位标记为 hybrid：坐标解算在端侧完成，但 Wi-Fi/蜂窝辅助定位会向 Apple 的位置服务发请求。新项目建议优先用 iOS 17 引入的 CLMonitor —— 它以 async 事件流的方式管理地理围栏与 Beacon 约束，比传统的 CLLocationManager delegate + CLCircularRegion 更清晰；但后台可靠投递「进入」事件需要配合 CLServiceSession / CLBackgroundActivitySession。地理围栏数量受硬件资源与省电限制，单 App 最多 20 个区域。
