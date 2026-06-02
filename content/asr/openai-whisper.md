---
title: "OpenAI Whisper"
category: asr
source: open
deployment: hybrid
badge: "开源"
role: "通用多语言转录基座 · 模型权重"
desc: "OpenAI 开源的 ASR 模型家族（tiny→large-v3 / turbo），680k 小时训练，支持 99+ 语言。本身是模型权重而非成品 App，需配合封装使用。生态成熟，是大多数转录产品的底座。"
capability: "99+ 语言、自动语种识别、时间戳、标点"
limitation: "原版依赖 Python/GPU 较重；非实时流式"
invocation: "pip / MIT 许可；生态：faster-whisper、whisper.cpp、WhisperKit"
tags: [whisper, openai, 转录, 多语言, 开源, "large-v3", turbo, 字幕]
license: "MIT"
cost: "免费 / 自托管"
platforms: [跨平台, Server]
updated: "2026-06"
order: 10
related:
  - { to: "whispercpp-whisperkit", as: "端侧部署" }
  - { to: "voxtral-transcribe", as: "竞品" }
---

## 一句话

OpenAI 2022 年开源的语音识别模型族，用 68 万小时弱监督音频训练，把多语言 ASR 做成「下载即用」的通用基座，也是后续无数转录产品（faster-whisper、whisper.cpp、WhisperKit 等）共同的底座。

## 适用场景

字幕生成、会议与播客转写、语音笔记、视频本地化。需要实时低延迟时，考虑 `faster-whisper`、流式的 Voxtral，或 NVIDIA Parakeet。

## 最小用法

```python
import whisper
model = whisper.load_model("large-v3")
print(model.transcribe("audio.mp3")["text"])
```

> 端侧 / 隐私优先场景用 whisper.cpp 或 WhisperKit；追求更低 WER 看 Voxtral Transcribe。
