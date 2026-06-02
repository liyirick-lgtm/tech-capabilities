---
title: "RecognizeDocumentsRequest"
category: vision
source: native
deployment: on-device
badge: "Apple 原生"
role: "文档结构化识别 · Vision (iOS 26)"
desc: "iOS 26 新增：不仅识别文字行，还能把文字组织成段落、读取表格的行列结构、识别列表与条码，保留文档的结构信息——非常适合智能扫描 App。"
capability: "段落分组、表格行列、列表、条码，支持约 26 种语言"
limitation: "iOS 26+；结构识别受版面复杂度影响"
invocation: "Vision framework（WWDC25）"
tags: [文档结构, 表格, 段落, 列表, 条码, recognizedocuments, 扫描, 结构化]
platforms: [iOS, iPadOS]
updated: "2026-06"
order: 20
related:
  - { to: "recognize-text", as: "演进自" }
  - { to: "core-ml", as: "底层引擎" }
  - { to: "lens-smudge-detection", as: "常配合" }
  - { to: "document-understanding", as: "同类" }
---

## 一句话

iOS 26 新增的 Vision 请求，在识别文字之上进一步还原文档结构——段落、表格行列、列表与条码。

## 对比要点

相比只返回文字行的 `RecognizeTextRequest`，`RecognizeDocumentsRequest` 输出带层级的结构化结果：能把文字归并成段落、读出表格的单元格行列关系、识别项目符号列表，一次请求即拿到版面语义，省去自行做行块聚类。它全程端侧运行、保护隐私，与云端 OCR-Free VLM（文档理解）路线互为替代。

## 注意

仅 iOS 26 及以上可用；支持约 26 种语言。结构识别精度受版面复杂度影响，多栏、跨页或扭曲拍摄的表格仍可能错配行列，建议在采集端配合镜头脏污检测与边缘矫正提升输入质量。
