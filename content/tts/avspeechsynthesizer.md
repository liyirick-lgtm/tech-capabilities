---
title: "AVSpeechSynthesizer"
category: tts
source: native
deployment: on-device
badge: "Apple 原生"
role: "系统内置语音合成 · 零成本"
desc: "Apple 系统自带 TTS，离线可用、零成本、与系统集成（含无障碍 Personal Voice 个人语音克隆）。音质和表现力不及顶级商用，但作为基础朗读/无障碍功能足够。"
capability: "离线、多语言系统音色、Personal Voice"
limitation: "表现力/自然度有限"
invocation: "AVFoundation（AVSpeechSynthesizer）"
tags: [avspeechsynthesizer, 系统, tts, 苹果, 离线, personal voice, 个人语音]
cost: "免费"
platforms: [iOS, macOS, iPadOS]
updated: "2026-06"
order: 70
related:
  - { to: "elevenlabs", as: "竞品" }
  - { to: "kokoro-82m", as: "端侧同类" }
  - { to: "apple-speech", as: "常配合" }
  - { to: "apple-neural-engine", as: "运行硬件" }
---

## 一句话

Apple 系统自带的 TTS,通过 `AVSpeechSynthesizer` 调用,离线可用、零成本、与无障碍深度集成。

## 适用场景

App 内基础朗读、VoiceOver 无障碍、导航播报等。iOS 17+ 的 Personal Voice 让用户用约 15 分钟录音在设备上克隆自己的嗓音,数据全程不出设备,主要面向有发声障碍的用户。

## 对比要点

- 相比 ElevenLabs 等商用 TTS:自然度与表现力有差距,但零成本、完全离线、隐私好。
- 与 `apple-speech`(ASR)互补,合成端侧语音交互闭环;音色调用免审批、无配额限制。

```swift
let u = AVSpeechUtterance(string: "你好")
AVSpeechSynthesizer().speak(u)
```
