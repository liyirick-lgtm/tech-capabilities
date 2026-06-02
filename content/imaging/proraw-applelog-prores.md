---
title: "ProRAW / Apple Log / ProRes"
category: imaging
source: native
deployment: on-device
badge: "Apple 原生"
role: "专业影像格式 · 高宽容度采集"
desc: "面向专业拍摄的高保真采集格式：ProRAW（计算摄影 + RAW 后期宽容度）、Apple Log（调色宽容度）、ProRes（高码率视频），适合需要重度后期的影像类 App。"
capability: "更大后期空间、保留计算摄影信息、专业调色流程"
limitation: "文件体积大；机型/存储要求高；需对应 Pro 机型"
invocation: "AVFoundation / 系统相机配置"
tags: [proraw, raw, dng, 专业格式, 后期, 宽容度, log, apple log, 专业影像, prores]
platforms: [iOS]
updated: "2026-06"
order: 40
related:
  - { to: "avcapture-multicam", as: "常配合" }
  - { to: "dual-photo-delivery", as: "同类" }
  - { to: "avdepthdata-lidar", as: "常配合" }
---

## 一句话

iPhone Pro 上面向专业后期的高保真采集格式族：ProRAW（RAW + 计算摄影）、Apple Log（视频调色宽容度）、ProRes（高码率视频编码）。

## 对比要点

ProRAW 把计算摄影的多帧合成结果保留在 12-bit 线性 DNG 里，给白平衡/曝光留出 RAW 级后期空间；Apple Log 是一条对数传递曲线，最大化高光阴影宽容度便于调色，需配 LUT 还原；ProRes 则是面向视频的低压缩编码（如 ProRes 422 HQ），保住画质换更大文件。

## 注意

文件体积巨大（ProRes 4K 每分钟可达数 GB），录制 ProRes 通常要求外接存储或仅限较大容量机型；这些格式只在对应 Pro 机型上提供。经 `AVFoundation` 配置采集会话与 `AVCapturePhotoSettings` 启用。
