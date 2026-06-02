---
title: "Core NFC"
category: connectivity
source: native
deployment: on-device
badge: "Apple 原生"
role: "近场标签读写 · NFC"
desc: "读取与写入 NFC 标签（NDEF、ISO 7816、ISO 15693、FeliCa 等），支持后台标签读取：锁屏亮屏时自动识别含 Universal Link 的标签并唤起对应 App，用于门禁、海报、设备配网、票务等场景。"
capability: "前台扫描会话、后台标签读取（亮屏即扫）、NDEF 读写、原生标签协议、支持 Host Card Emulation（需授权）"
limitation: "需 iPhone 7 及以上；后台读取要求标签含有效 Universal Link；写卡/HCE 部分能力需 Apple 单独授权"
invocation: "Core NFC，Swift/ObjC；NFCNDEFReaderSession / NFCTagReaderSession，后台经 NSUserActivity 路由"
tags: [nfc, 近场通信, 标签, ndef, "core-nfc", felica, 门禁, 配网, 后台读取]
license: "商用闭源（系统框架）"
cost: "免费（系统能力）"
platforms: [iOS]
repo: "https://developer.apple.com/documentation/corenfc"
links:
  - { label: "Core NFC 文档", url: "https://developer.apple.com/documentation/corenfc" }
  - { label: "后台标签读取", url: "https://developer.apple.com/documentation/corenfc/adding-support-for-background-tag-reading" }
updated: "2026-06"
order: 10
related:
  - { to: "core-bluetooth", as: "同类（近场连接）" }
  - { to: "secure-enclave", as: "卡模拟信任根" }
---

iPhone 内置的 NFC 读写能力，常用于实体世界与 App 的「轻触连接」：海报触发活动、配件首次配网、设备身份核验、票务核销等。后台标签读取让用户无需先打开 App，亮屏靠近标签即可被引导到指定页面。涉及卡模拟（HCE）与部分写入能力时需向 Apple 申请相应权限。
