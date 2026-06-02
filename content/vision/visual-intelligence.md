---
title: "Visual Intelligence"
category: vision
source: native
deployment: hybrid
badge: "Apple 原生"
role: "系统级视觉理解 · Apple Intelligence"
desc: "iOS 26 起可用于截图：圈选屏幕内容进行搜索、提问（接入 ChatGPT），并允许第三方 App 接入。属于系统级「识屏 + 问答」能力。"
capability: "圈选识别、屏幕内容搜索/提问"
limitation: "需 Apple Intelligence 机型；部分能力联网"
invocation: "系统集成 + App Intents 接入"
tags: [visual intelligence, 视觉智能, 截图, 圈选搜索, chatgpt, 识图]
platforms: [iOS, iPadOS]
updated: "2026-06"
order: 60
related:
  - { to: "recognize-text", as: "底层能力" }
  - { to: "app-intents", as: "接入方式" }
  - { to: "cloud-frontier-vlm", as: "云端依赖" }
  - { to: "private-cloud-compute", as: "运行底座" }
---

## 一句话

iOS 26 起的系统级「识屏 + 问答」能力，圈选屏幕或相机内容即可搜索、提问，并接入 ChatGPT。

## 适用场景

看到不认识的物体/地标/文字时圈一下直接搜，或把屏幕内容抛给 ChatGPT 提问；第三方 App 可经 App Intents 让自己的内容被 Visual Intelligence 检索到，成为系统级视觉入口的一部分。

## 注意

这是 Apple Intelligence 的一部分，仅支持对应机型；属于 hybrid 部署——基础视觉理解可在端侧（含 Private Cloud Compute）完成，深度问答会联网调用云端模型（如 ChatGPT）。涉及隐私的内容上传需向用户明示。App 集成走 App Intents 与 Visual Intelligence 的 App entity 接口。
