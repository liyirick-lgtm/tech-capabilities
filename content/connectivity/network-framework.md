---
title: "Network framework"
category: connectivity
source: native
deployment: hybrid
badge: "Apple 原生"
role: "现代网络传输 · TCP/UDP/QUIC/TLS"
desc: "Apple 的现代化底层网络框架，统一处理 TCP、UDP、QUIC、TLS 与本地 P2P 连接，内建「按名连接」「Happy Eyeballs」、网络切换与代理处理。iOS/macOS 26 起新增 NetworkConnection / NetworkListener / NetworkBrowser，与 Swift 结构化并发深度整合。"
capability: "TCP/UDP/QUIC/TLS 统一接口、HTTP/3 支持、Bonjour 服务发现、点对点本地网络、自动处理蜂窝/Wi-Fi 切换；新 API 适配 async/await"
limitation: "比 URLSession 更底层，需自行管理连接状态；纯 HTTP 请求通常仍建议用 URLSession"
invocation: "Network 框架，Swift；NWConnection / NWListener / NWBrowser 或 iOS 26 新增的 NetworkConnection 系列"
tags: [network, 网络, quic, "http-3", tls, udp, tcp, bonjour, nwconnection, 结构化并发]
license: "商用闭源（系统框架）"
cost: "免费（系统能力）"
platforms: [iOS, iPadOS, macOS, watchOS, tvOS]
repo: "https://developer.apple.com/documentation/network"
links:
  - { label: "Network 框架文档", url: "https://developer.apple.com/documentation/network" }
  - { label: "WWDC25：结构化并发与 Network", url: "https://developer.apple.com/videos/play/wwdc2025/250/" }
updated: "2026-06"
order: 40
related:
  - { to: "webrtc", as: "上层实时通信" }
  - { to: "matter-homekit", as: "上层应用（IP 承载）" }
---

需要自定义协议、低延迟传输、局域网设备直连（Bonjour 发现 + P2P）或用上 QUIC/HTTP3 时，Network framework 是 URLSession 之下的首选。它把多种传输统一在一套连接接口里，自动处理网络环境变化。iOS/macOS 26 的新 NetworkConnection / NetworkListener / NetworkBrowser API 让网络代码与 Swift 并发更自然地衔接，也是 Apple 推荐从 MultipeerConnectivity 迁移的方向。
