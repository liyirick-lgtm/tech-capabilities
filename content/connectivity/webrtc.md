---
title: "WebRTC"
category: connectivity
source: open
deployment: hybrid
badge: "开源标准"
role: "实时音视频与数据通信 · P2P"
desc: "浏览器与原生客户端通用的实时通信开源标准，提供点对点的音视频与任意数据通道（DataChannel），内建回声消除、抖动缓冲、拥塞控制与加密（DTLS-SRTP），是视频通话、直播连麦、屏幕共享、云游戏与实时协作的事实标准。"
capability: "低延迟音视频/数据 P2P、NAT 穿透（ICE/STUN/TURN）、自适应码率、端到端加密、跨浏览器与原生 SDK"
limitation: "需自建信令服务器；大规模/录制常需 SFU/MCU 媒体服务器；网络较差时仍需 TURN 中继"
invocation: "W3C WebRTC API（JS）/ libwebrtc 原生库；iOS 上亦可经 WKWebView 或原生集成"
tags: [webrtc, 实时通信, 音视频, 视频通话, "real-time", rtc, datachannel, sfu, "p2p", 连麦]
license: "BSD-3-Clause（libwebrtc）/ W3C 开放标准"
cost: "免费 / 自托管（信令与 TURN 自理）"
platforms: [Web, iOS, Android, macOS, 跨平台]
repo: "https://webrtc.googlesource.com/src/"
links:
  - { label: "WebRTC 官网", url: "https://webrtc.org/" }
  - { label: "W3C WebRTC 规范", url: "https://www.w3.org/TR/webrtc/" }
updated: "2026-06"
order: 60
related:
  - { to: "network-framework", as: "底层传输" }
  - { to: "krisp", as: "常配合（降噪）" }
  - { to: "cloud-asr-api", as: "常配合（实时转写）" }
---

WebRTC 由 Apple、Google、Microsoft、Mozilla 等共同支持，已成为 W3C 推荐标准，2026 年在各主流浏览器（覆盖率 85%+）与原生端广泛部署。它解决了实时音视频与数据传输中最棘手的网络穿透、加密与抗丢包问题。实际产品中通常配合信令服务与 SFU 媒体服务器以支持多人会话、录制与大规模分发，并出现了 WHIP 等更标准化的推流接入方式。
