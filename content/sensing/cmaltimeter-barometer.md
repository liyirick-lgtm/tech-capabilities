---
title: "CMAltimeter 气压高度计"
category: sensing
source: native
deployment: on-device
badge: "Apple 原生"
role: "气压/相对海拔 · 楼层与高度变化"
desc: "Core Motion 中读取气压计的接口。CMAltimeter 提供大气压强与相对海拔变化(自启动后的相对高度);较新机型还支持绝对海拔。常用于爬楼/登山记录、室内楼层估计、运动强度与 AR 高度校正。"
capability: "实时气压(kPa)、相对海拔变化、绝对海拔(较新机型)、低功耗后台采集"
limitation: "需带气压计的设备;相对海拔受天气气压漂移影响,长时间需校准;绝对海拔机型受限"
invocation: "Core Motion(CMAltimeter.startRelativeAltitudeUpdates)"
tags: [cmaltimeter, 气压计, barometer, 海拔, 楼层, altitude, 相对高度, 磁力计, 登山, 爬楼]
license: "系统框架"
cost: "免费(系统框架)"
platforms: [iOS, watchOS]
repo: "https://developer.apple.com/documentation/coremotion/cmaltimeter"
links:
  - { label: "CMAltimeter 文档", url: "https://developer.apple.com/documentation/coremotion/cmaltimeter" }
updated: "2026-06"
order: 60
---

CMAltimeter 把设备内置气压计的数据暴露给 App：startRelativeAltitudeUpdates 返回实时大气压(kPa)与相对海拔变化(自开始采集起的累积高度差),较新机型可读绝对海拔。它是 Apple Watch 计算「爬楼层数」、登山/越野记录高度曲线、以及为定位与 AR 提供 Z 轴高度线索的基础。注意相对海拔会随天气气压漂移，长时间使用需结合 GPS 或已知基准校准;磁力计(磁场方向)同样可经 Core Motion 读取，常配合做朝向估计。
