---
title: "Apple Speech Framework"
category: asr
source: native
deployment: on-device
badge: "Apple 原生"
role: "系统语音识别 · 端侧优先"
desc: "Apple 自带的语音识别框架，可端侧运行（隐私好、可离线、实时），适合做听写、语音输入、语音命令。相比云端 Whisper，优势在隐私与实时响应。"
capability: "实时听写、端侧处理、与系统深度集成"
limitation: "语种/词汇覆盖不如 Whisper 灵活"
invocation: "Speech framework（SFSpeechRecognizer）"
tags: [apple speech, 系统语音识别, sfspeechrecognizer, 隐私, 端侧, 实时, 听写]
platforms: [iOS, macOS, iPadOS]
updated: "2026-06"
order: 30
related:
  - { to: "openai-whisper", as: "竞品" }
  - { to: "whispercpp-whisperkit", as: "端侧同类" }
  - { to: "avspeechsynthesizer", as: "常配合" }
  - { to: "apple-neural-engine", as: "运行硬件" }
---

## 一句话

Apple 系统自带的端侧语音识别框架,通过 `SFSpeechRecognizer` 调用,数据可不出设备。

## 适用场景

听写输入、语音命令、实时字幕等需要隐私与低延迟的端侧场景。从 iOS 26 起新增的 `SpeechAnalyzer` / `SpeechTranscriber` API 支持长音频与更好的离线模型,适合做会议记录、播客转写。

## 对比要点

- 相比云端 Whisper:隐私好、可离线、实时响应快,但语种与专业词汇覆盖不如 Whisper 灵活,长音频准确率略逊。
- 与 `AVSpeechSynthesizer`(TTS)常成对出现,构成语音输入 + 朗读的完整闭环。
