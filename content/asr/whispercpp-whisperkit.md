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
  - { to: "apple-coreml-mlx", as: "底层运行时" }
  - { to: "llama-cpp-ggml", as: "同源项目" }
---

## 一句话

把 OpenAI Whisper 移植到 C/C++(`whisper.cpp`)与 Apple 原生(WhisperKit),实现端侧离线转录,数据不出设备。

## 适用场景

需要离线、隐私优先、零云成本的转录:本地笔记 App、车机、嵌入式设备。`whisper.cpp` 跨平台(CPU / CUDA / Metal / WebAssembly),WhisperKit 则封装为 Apple 平台的 Swift/Core ML 方案,Apple Silicon 上性能尤佳。

## 对比要点

- 与 `apple-speech` 的差异:Whisper 系语种覆盖更广(99+)、可换模型尺寸,但系统集成度不如 Apple 原生框架。
- `whisper.cpp` 与 `llama.cpp` 出自同一作者,共享 ggml 张量库;模型走 GGUF 量化可显著降低内存。
- 实时性取决于模型尺寸:tiny/base 可近实时,large 对内存与算力要求高。

```bash
./main -m models/ggml-base.bin -f audio.wav
```
