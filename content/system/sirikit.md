---
title: "SiriKit 与 Siri"
category: system
source: native
deployment: hybrid
badge: "Apple 原生"
role: "Siri 接入 · 领域意图（多被 App Intents 取代）"
desc: "Apple 早期的 Siri 接入框架，以预定义领域（消息、出行、支付、媒体等）让 App 响应语音请求。多数通用场景已被更现代的 App Intents 取代，仅少数仍有专属 SiriKit 领域的功能建议继续用它。Apple Intelligence 时代 Siri 正重构为基于大模型、可经 App Intents 直接调用 App 能力。"
capability: "在既有 SiriKit 领域内响应语音、提供 Siri 建议"
limitation: "部分领域自 iOS 15 起已废弃；新功能优先用 App Intents"
invocation: "Intents / IntentsUI 框架，INIntent；新项目优先 AppIntents"
tags: [sirikit, siri, 语音助手, intents, 意图领域, apple intelligence, voice]
license: "随 SDK 提供"
cost: "免费"
platforms: [iOS, iPadOS, macOS, watchOS]
repo: "https://developer.apple.com/documentation/sirikit"
links:
  - { label: "Deprecated SiriKit Intent Domains", url: "https://developer.apple.com/support/deprecated-sirikit-intent-domains" }
  - { label: "App Intents", url: "https://developer.apple.com/documentation/appintents" }
updated: "2026-06"
order: 40
related:
  - { to: "app-intents", as: "被取代为" }
  - { to: "app-shortcuts", as: "常配合" }
  - { to: "apple-foundation-models", as: "Siri 重构底座" }
---

SiriKit 是 Apple 早期（iOS 10 起）的 Siri 接入方案，采用「领域（domain）」模型：App 只能在 Apple 预定义的类别（如消息、出行、支付、媒体播放、锻炼等）内声明意图来响应语音。自 iOS 15 起部分领域已被废弃，调用对应旧 API 时 Siri 会直接回复无法处理。如今的官方取向很明确：若你的功能不落在仍受支持的 SiriKit 专属领域内，应改用 iOS 16 引入、用以取代 SiriKit Intents 的 App Intents 框架。在 Apple Intelligence 时代，Siri 本身正被重构为基于大语言模型、可能以独立 App 形态出现，并通过 App Intents（及 App Intent Domains）直接组合调用各 App 能力——SiriKit 的角色因此持续收窄，主要保留给少数有专属领域的历史场景。
