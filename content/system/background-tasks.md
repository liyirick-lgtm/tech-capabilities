---
title: "Background Tasks"
category: system
source: native
deployment: on-device
badge: "Apple 原生"
role: "后台调度与持续处理 · 系统托管"
desc: "用 BGTaskScheduler 申请系统在合适时机（充电、空闲、联网）唤醒 App 做刷新或维护。iOS 26 新增 BGContinuedProcessingTask：由用户显式操作（如点按导出/上传）发起的长任务可在切到后台后继续完成，并通过系统 UI 展示进度、允许取消。Apple「日记」App 的后台导出即用此 API。"
capability: "后台刷新、夜间维护、前台发起的长任务后台续跑 + 进度展示"
limitation: "执行时机由系统决定；标识符须在 Info.plist 声明，否则提交报错"
invocation: "BackgroundTasks 框架，BGTaskScheduler / BGContinuedProcessingTask"
tags: [background tasks, backgroundtasks, bgtaskscheduler, 后台任务, BGContinuedProcessingTask, 后台刷新, 调度]
license: "随 SDK 提供"
cost: "免费"
platforms: [iOS, iPadOS, macOS]
repo: "https://developer.apple.com/documentation/backgroundtasks/bgtaskscheduler"
links:
  - { label: "WWDC25 · Finish tasks in the background", url: "https://developer.apple.com/videos/play/wwdc2025/227/" }
  - { label: "Refreshing and maintaining your app using background tasks", url: "https://developer.apple.com/documentation/BackgroundTasks/refreshing-and-maintaining-your-app-using-background-tasks" }
updated: "2026-06"
order: 60
related:
  - { to: "widgetkit-live-activities", as: "常配合（进度展示）" }
  - { to: "core-spotlight", as: "常配合（后台索引）" }
  - { to: "healthkit", as: "常配合（后台同步）" }
---

Background Tasks 框架让 App 把「何时在后台运行」交给系统托管。BGTaskScheduler 用于申请两类经典任务：短时的 App 刷新（拉取新数据）和较长的处理/维护（如数据库整理），系统会在设备充电、空闲、联网等合适时机唤醒执行。iOS 26 的重点是新增 BGContinuedProcessingTask——它必须由用户的显式动作（按钮点击、手势）发起，代表清晰的即时目标，如导出文件、上传、发布内容或更新连接的配件；任务在 App 切到后台后仍可继续完成，并通过系统 UI 展示进度、允许用户随时取消（Apple「日记」App 的后台导出即采用此 API）。所有任务标识符都必须在 Info.plist 的 BGTaskSchedulerPermittedIdentifiers 中声明，否则 submit(_:) 会抛出 notPermitted 错误。
