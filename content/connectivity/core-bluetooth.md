---
title: "Core Bluetooth"
category: connectivity
source: native
deployment: on-device
badge: "Apple 原生"
role: "低功耗蓝牙通信 · BLE"
desc: "与蓝牙低功耗（BLE）设备通信的系统框架，支持 Central（中心）与 Peripheral（外设）双角色，基于 GATT 的服务/特征模型进行扫描、连接、读写与订阅，是可穿戴、健康设备、IoT、配件互联的基础。"
capability: "BLE 扫描/连接、GATT 服务与特征读写/通知、广播与外设角色、后台连接保活、配合 AccessorySetupKit 简化配对"
limitation: "iOS 11 起 MultipeerConnectivity 的蓝牙 P2P 已被禁用；后台扫描受限；经典蓝牙（A2DP 等）不在此框架内"
invocation: "Core Bluetooth，Swift/ObjC；CBCentralManager / CBPeripheralManager"
tags: [蓝牙, ble, "low-energy", "core-bluetooth", gatt, 外设, 中心, 可穿戴, iot, 配件]
license: "商用闭源（系统框架）"
cost: "免费（系统能力）"
platforms: [iOS, iPadOS, macOS, watchOS, tvOS]
repo: "https://developer.apple.com/documentation/corebluetooth"
links:
  - { label: "Core Bluetooth 文档", url: "https://developer.apple.com/documentation/corebluetooth" }
  - { label: "Apple Bluetooth 总览", url: "https://developer.apple.com/bluetooth/" }
updated: "2026-06"
order: 20
---

几乎所有「手机连配件」的场景背后都是 Core Bluetooth：心率带、智能手表、传感器、智能灯、电子价签等。开发者用 GATT 的服务（Service）与特征（Characteristic）描述设备数据，再做读取、写入与订阅。新机型可结合 AccessorySetupKit 提供更顺滑的系统级配对体验。
