---
title: "RecognizeTextRequest (OCR)"
category: vision
source: native
deployment: on-device
badge: "Apple 原生"
role: "图像文字识别 · Vision"
desc: "从图片中识别印刷与手写文字，返回文本及位置框，全程本地运行。是扫描类、证件/票据识别、文档数字化的基础能力。"
capability: "多语言印刷+手写 OCR，带位置与置信度"
limitation: "复杂排版需配合区域检测；语言覆盖有限"
invocation: "Vision（iOS/macOS/iPadOS/visionOS），完全离线"
tags: [ocr, 文字识别, vnrecognizetext, 手写, 印刷, 识别文字, vision]
platforms: [iOS, macOS, iPadOS, visionOS]
updated: "2026-06"
order: 10
related:
  - { to: "core-ml", as: "底层引擎" }
  - { to: "recognize-documents", as: "演进为" }
  - { to: "document-understanding", as: "替代方案" }
  - { to: "visual-intelligence", as: "上层应用" }
---

## 一句话

Vision 的 OCR 请求，从图片中识别印刷与手写文字，返回文本、位置框与置信度，完全离线。

## 适用场景

证件/票据/名片识别、文档数字化、实况文本(Live Text)、把照片里的电话或网址变成可点击内容。是扫描类应用最基础的能力，端侧运行无需联网。

## 对比要点

提供 `accurate` 与 `fast` 两档识别等级：前者精度高、适合静态图片，后者延迟低、适合实时视频流。可通过 `recognitionLanguages` 指定语言、`usesLanguageCorrection` 开启基于语言模型的纠错。

## 注意

复杂多栏排版需先做区域检测再分块识别；语言覆盖虽广但不及云端 VLM，CJK 手写与艺术字体场景下，云端文档理解模型往往更稳。`VNRecognizeTextRequest` 返回的是文字行，若要结构化版面应改用 `RecognizeDocumentsRequest`。
