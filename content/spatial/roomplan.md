---
title: "RoomPlan"
category: spatial
source: native
deployment: on-device
badge: "Apple 原生"
role: "房间扫描与参数化重建 · LiDAR"
desc: "Apple 的房间重建框架：借助 iPhone/iPad 的摄像头与 LiDAR，实时扫描生成带尺寸、墙体、门窗与家具类型的参数化 3D 户型，输出 USD/USDZ，适合家装、室内设计与不动产类 App。"
capability: "实时房间扫描、墙/门/窗/家具识别、参数化户型、输出 USD/USDZ"
limitation: "需 LiDAR 机型；以室内规整空间为主；家具识别为类别级非精确建模"
invocation: "RoomPlan API（Swift），端侧实时"
tags: [roomplan, 房间扫描, 户型, 室内重建, lidar, 家装, 室内设计, usdz, scan-to-bim]
license: "商用闭源"
cost: "免费（含于系统 SDK）"
platforms: [iOS, iPadOS]
links:
  - { label: "RoomPlan 文档", url: "https://developer.apple.com/documentation/roomplan/" }
  - { label: "RoomPlan 概览", url: "https://developer.apple.com/augmented-reality/roomplan/" }
updated: "2026-06"
order: 30
related:
  - { to: "arkit-realitykit", as: "底层引擎" }
  - { to: "avdepthdata-lidar", as: "数据上游" }
  - { to: "object-capture", as: "同类" }
---

RoomPlan 专注室内空间的快速参数化重建：扫描后得到结构化的房间模型，包含每个组件（墙体、橱柜等）的尺寸与家具类别。RoomPlan Data API 还开放底层数据结构，可自定义扫描可视化。常用于家装效果预览、室内设计、家具摆放与不动产展示，也有团队探索 Scan-to-BIM 方向。
