---
title: "Shortcuts 快捷指令"
category: system
source: native
deployment: hybrid
badge: "Apple 原生"
role: "可视化自动化 + App Shortcuts · 系统级编排"
desc: "面向用户的可视化自动化工具，把多 App 动作串成流程。开发者用 App Shortcuts 可零配置地把 App Intent 暴露到快捷指令库与 Siri 触发短语。iOS 26 起 Shortcuts 内置 Apple Intelligence——「Use Model」动作可在端侧、Private Cloud Compute 或 ChatGPT 间选择执行，并新增 25+ 智能动作。"
capability: "拖拽编排多 App 流程、定时/事件自动化、调用端侧或云端模型"
limitation: "智能动作需 Apple Intelligence 机型；复杂逻辑仍偏脚本化"
invocation: "Shortcuts App；开发侧用 AppShortcut / AppShortcutsProvider"
tags: [shortcuts, 快捷指令, 自动化, automation, app shortcuts, use model, siri, apple intelligence]
license: "随系统提供"
cost: "免费"
platforms: [iOS, iPadOS, macOS, watchOS, visionOS]
repo: "https://developer.apple.com/documentation/appintents/app-shortcuts"
links:
  - { label: "What's new in Shortcuts · iOS 26", url: "https://support.apple.com/en-us/125148" }
  - { label: "Use Apple Intelligence in Shortcuts", url: "https://support.apple.com/guide/iphone/use-apple-intelligence-in-shortcuts-iph78c41eaf8/ios" }
updated: "2026-06"
order: 20
related:
  - { to: "app-intents", as: "底层引擎" }
  - { to: "sirikit", as: "常配合（触发短语）" }
  - { to: "apple-foundation-models", as: "Use Model 调用" }
  - { to: "private-cloud-compute", as: "Use Model 云端模式" }
---

Shortcuts 既是用户侧的可视化自动化工具，也是开发者把 App 能力触达系统的重要通道。通过 App Shortcuts，一个 App Intent 可以零用户配置地出现在快捷指令库中，并绑定 Siri 触发短语、操作按钮与 Spotlight。iOS 26 的最大变化是把 Apple Intelligence 直接嵌进 Shortcuts：新增的「Use Model」动作可在三种模式间选择——端侧（最快、全本地、隐私最佳）、Apple Private Cloud Compute（处理更大任务、数据仍受保护）、或调用 ChatGPT（能力最强）；配合 25+ 新动作，过去需要付费 App 才能完成的摘要、生成图像、整理转录、生成图片 alt 文本等流程，现在可在一条快捷指令里串起来。
