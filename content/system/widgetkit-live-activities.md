---
title: "WidgetKit · Live Activities · 灵动岛"
category: system
source: native
deployment: on-device
badge: "Apple 原生"
role: "小组件与实时活动 · 系统触达"
desc: "用 WidgetKit + SwiftUI 构建主屏/锁屏/待机小组件，用 ActivityKit 构建 Live Activities，在锁屏与灵动岛（Dynamic Island）以紧凑/最小/展开三态呈现实时内容（计时、配送、比分、媒体）。iOS 26 引入液态玻璃外观，Live Activities 可同步呈现到 macOS 菜单栏与 CarPlay。"
capability: "主屏/锁屏小组件、Live Activities、灵动岛三态、交互式按钮"
limitation: "Live Activities 需 iOS 16.4+；灵动岛硬件限 iPhone 14 Pro 起机型"
invocation: "WidgetKit + SwiftUI；ActivityKit（Activity）；DynamicIsland"
tags: [widgetkit, live activities, dynamic island, 灵动岛, 小组件, 锁屏, activitykit, supplementalActivityFamilies]
license: "随 SDK 提供"
cost: "免费"
platforms: [iOS, iPadOS, macOS, watchOS]
repo: "https://developer.apple.com/documentation/widgetkit/dynamicisland"
links:
  - { label: "Explore Live Activities and the Dynamic Island", url: "https://developer.apple.com/news/?id=bkm73839" }
  - { label: "WWDC25 · WidgetKit in iOS 26", url: "https://dev.to/arshtechpro/wwdc-2025-widgetkit-in-ios-26-a-complete-guide-to-modern-widget-development-1cjp" }
updated: "2026-06"
order: 30
---

WidgetKit 让 App 把信息以小组件形式投放到主屏、锁屏与待机模式；ActivityKit 则负责 Live Activities——可持续更新、推送的实时活动。系统会根据上下文自动渲染灵动岛（Dynamic Island）的三种形态：紧凑（compact，左右两端元素）、最小（minimal，多活动并存时）和展开（expanded，长按时），开发者只需用 SwiftUI 描述各状态 UI。iOS 17 起小组件与 Live Activities 支持交互（按钮/Toggle，背后通常由 App Intent 驱动）。iOS 26 带来统一的液态玻璃呈现系统，并通过 supplementalActivityFamilies 让 Live Activities 同步出现在 macOS 菜单栏与 CarPlay，使「实时触达」覆盖更多场景。启用需在 Info.plist 设置 Supports Live Activities 为 Yes。
