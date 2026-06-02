---
title: "Face / Landmark Detection"
category: vision
source: native
deployment: on-device
badge: "Apple 原生"
role: "人脸与关键点检测 · Vision"
desc: "检测画面中的人脸、面部关键点与朝向，可用于自动对焦、贴纸/美颜、活体辅助、相册整理等。本地实时运行。"
capability: "人脸框、面部 landmark、姿态朝向"
limitation: "非身份识别（不做「这是谁」的判定）；遮挡/低光下精度下降"
invocation: "Vision；可与采集管线实时联动"
tags: [人脸, 检测, face detection, 人脸识别, 关键点, landmark]
platforms: [iOS, macOS, iPadOS]
updated: "2026-06"
order: 30
related:
  - { to: "core-ml", as: "底层引擎" }
  - { to: "object-pose-trajectory", as: "同类" }
  - { to: "avcapture-multicam", as: "常配合" }
  - { to: "local-authentication", as: "区别于" }
---

## 一句话

Vision 提供的人脸检测与 76 点面部关键点（landmark）定位，本地实时给出人脸框、眼鼻嘴轮廓与头部朝向。

## 适用场景

自动对焦/曝光锁人脸、AR 贴纸与美颜对齐、相册按人脸聚类、活体检测的辅助前置步骤。配合 `AVCaptureVideoDataOutput` 可逐帧追踪。

## 对比要点

这是「检测」而非「识别」——它回答画面里有没有脸、脸在哪、朝向如何，但不判断「这是谁」。真正的身份认证应走 `LocalAuthentication` / Face ID（由 Secure Enclave 保护），而不是用 Vision 的关键点自行比对。遮挡、强逆光、极端角度下关键点精度会明显下降。
