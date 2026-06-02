---
title: "whisper.cpp / WhisperKit"
category: asr
source: open
deployment: on-device
badge: "开源"
role: "端侧 Whisper 部署 · C++/CoreML"
desc: "把 Whisper 移植到 C/C++，可在 CPU、Apple Silicon（CoreML）、甚至 WebAssembly 上高效运行。WhisperKit 进一步把它包成 Apple 平台原生的端侧转录方案，数据不出设备。"
capability: "离线转录，Apple Silicon 上性能好，隐私友好"
limitation: "大模型对内存有要求；实时性取决于模型尺寸"
invocation: "whisper.cpp（C/C++）、WhisperKit（CoreML/Swift）"
tags: ["whisper.cpp", 端侧, 离线, apple silicon, coreml, cpu, 边缘, "c++", 轻量, whisperkit]
license: "MIT"
cost: "免费 / 自托管"
platforms: [iOS, macOS, 跨平台]
updated: "2026-06"
order: 20
related:
  - { to: "openai-whisper", as: "端侧移植自" }
  - { to: "apple-neural-engine", as: "可跑在" }
---
