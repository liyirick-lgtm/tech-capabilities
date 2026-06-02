---
title: "Krisp"
category: audio
source: cloud
deployment: on-device
badge: "云端 / SDK"
role: "实时降噪与人声隔离 · 商用 SDK"
desc: "商用实时音频处理标杆,在本地设备上做 AI 降噪、回声消除与人声隔离(去除背景噪声与旁人串音,只留主讲人)。面向开发者的 AI Voice SDK 覆盖 Win/Mac/Linux/Web/iOS/Android,2026 年的 VIVA 把处理延迟压到 20ms 以下,专为语音 Agent 管线设计。"
capability: "实时降噪、人声隔离(去串音)、回声消除、本地处理保隐私、跨端 SDK"
limitation: "核心模型闭源、SDK 商用授权、消费端高级功能需订阅"
invocation: "桌面/移动 App + AI Voice SDK;Pro 约 $8/月起,SDK 商用授权"
tags: [krisp, 降噪, 噪声抑制, 人声隔离, voice isolation, noise cancellation, sdk, viva, 回声消除, 商用]
license: "商用闭源 / SDK 授权"
cost: "订阅(Pro 约 $8/月起) / SDK 商用授权"
platforms: [Windows, macOS, iOS, Android, Web, Server]
links:
  - { label: "官网", url: "https://krisp.ai/" }
  - { label: "开发者 SDK", url: "https://krisp.ai/developers/" }
updated: "2026-06"
order: 60
---

Krisp 是实时语音降噪与人声隔离的商用标杆。它在本地设备上做 AI 处理(默认不把音频上云),既能去除键盘、风噪、交通等背景噪声,也能做「人声隔离」——滤掉旁边人说话的串音,只把主讲人送进 VAD/STT 管线,减少语音 Agent 的误打断。除了面向终端用户的会议降噪 App,Krisp 更核心的是 AI Voice SDK,覆盖 Windows/Mac/Linux/Web(JS/WASM)/iOS/Android;2026 年推出的 VIVA(Voice Isolation for Voice Agents)把处理延迟压到 20ms 以下,适配实时对话式 AI。

同领域的开源/平台替代:Xiph 的 **RNNoise**(BSD 许可、轻量 RNN 实时降噪,常被做成 OBS/PulseAudio 插件)与 Apple 的 **Voice Isolation** 麦克风模式(A12/Apple Silicon 神经引擎端侧降噪,系统与部分第三方 App 通用)。
