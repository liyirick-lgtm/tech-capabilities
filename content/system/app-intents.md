---
title: "App Intents"
category: system
source: native
deployment: on-device
badge: "Apple 原生"
role: "把 App 能力暴露给系统 · iOS 16+"
desc: "用 Swift 把 App 的动作与数据声明为「意图」，系统即可在 Siri、Spotlight、小组件、快捷指令、操作按钮等处统一调度。iOS 26 进一步引入 App Intent Domains 与屏上实体，让 Apple Intelligence 能直接调用意图、跨 App 组合动作，而无需模拟 UI 操作。是本分类的中枢框架。"
capability: "声明动作/实体/枚举，被 Siri、Spotlight、小组件、快捷指令复用"
limitation: "agentic 调度与 Domains 仍在演进；高级 Siri 能力需 Apple Intelligence 机型"
invocation: "AppIntents 框架，AppIntent / AppEntity / AppShortcut"
tags: [app intents, appintents, 意图, siri, shortcuts, spotlight, 系统集成, app intent domains, apple]
license: "随 SDK 提供"
cost: "免费"
platforms: [iOS, iPadOS, macOS, watchOS, visionOS]
repo: "https://developer.apple.com/documentation/appintents"
links:
  - { label: "Integrating actions with Siri and Apple Intelligence", url: "https://developer.apple.com/documentation/appintents/integrating-actions-with-siri-and-apple-intelligence" }
  - { label: "WWDC25 · Explore new advances in App Intents", url: "https://developer.apple.com/videos/play/wwdc2025/275/" }
updated: "2026-06"
order: 10
related:
  - { to: "sirikit", as: "演进自" }
  - { to: "app-shortcuts", as: "上层暴露" }
  - { to: "core-spotlight", as: "常配合" }
  - { to: "apple-foundation-models", as: "被智能调用" }
---

App Intents 是 iOS 16 引入、用以取代旧 SiriKit Intents 的现代框架：你只需用纯 Swift 把 App 的动作（intent）、数据对象（entity）和参数声明清楚，系统就能在 Siri、Spotlight 搜索、主屏小组件、快捷指令、操作按钮等多处自动复用，无需为每个入口单独适配。iOS 26 起的重点是「agentic」方向——App Intent Domains 把功能归类（消息、文档、媒体、财务、生产力等），配合屏上实体（on-screen entities，视图遵循 Transferable 协议），让 Apple Intelligence 与 ChatGPT 能直接理解并组合调用 App 的能力。对开发者而言，先把动作建模为 App Intents，是接入系统级智能的前提。
