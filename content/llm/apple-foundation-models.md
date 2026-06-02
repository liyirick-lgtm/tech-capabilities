---
title: "Apple Foundation Models"
category: llm
source: native
deployment: on-device
badge: "Apple 原生"
role: "系统端侧 LLM 框架 · iOS 26"
desc: "iOS 26 起开放给第三方：直接调用 Apple Intelligence 核心的端侧 ~3B 模型（2-bit 量化），离线、免费、隐私好。擅长摘要、抽取、分类、改写、短对话——不是通用世界知识聊天机器人。最少三行 Swift 即可接入。"
capability: "摘要/抽取/分类/改写、Guided Generation 结构化输出、工具调用"
limitation: "需 Apple Intelligence 机型；不擅长世界知识/复杂推理"
invocation: "FoundationModels（LanguageModelSession），@Generable 宏"
tags: [foundation models, apple, 端侧, llm, 3b, 摘要, 提取, guided generation, 免费]
cost: "免费"
platforms: [iOS, macOS, iPadOS]
updated: "2026-06"
order: 10
related:
  - { to: "apple-neural-engine", as: "运行硬件" }
  - { to: "apple-coreml-mlx", as: "底层引擎" }
  - { to: "cloud-frontier-llm", as: "端云分工" }
  - { to: "app-intents", as: "常配合" }
---

## 一句话

iOS 26 起 Apple 把 Apple Intelligence 的端侧 ~3B 模型开放给第三方,三行 Swift 即可调用,离线、免费、隐私好。

## 适用场景

适合摘要、抽取、分类、改写、短对话这类「文本变形」任务,以及用 `@Generable` 宏做结构化输出(Guided Generation)和工具调用。不擅长世界知识问答与复杂推理——那类应交给云端前沿模型。

```swift
let session = LanguageModelSession()
let reply = try await session.respond(to: "用一句话总结这段话")
```

## 注意

需具备 Apple Intelligence 的机型;模型常驻系统、与 ANE 协同推理,无网络请求与调用费,但能力上限明显低于服务器规模模型,定位是「端侧轻任务引擎」而非通用聊天机器人。
