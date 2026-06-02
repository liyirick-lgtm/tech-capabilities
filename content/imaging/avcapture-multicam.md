---
title: "AVCaptureMultiCamSession"
category: imaging
source: native
deployment: on-device
badge: "Apple 原生"
role: "多摄像头同时采集 · AVFoundation"
desc: "在一个采集会话里同时调用前后/广角/长焦多颗摄像头，可同时输出多路预览、视频、照片或元数据，做画中画、双路录制、分屏等效果。"
capability: "前后同录、多路 VideoDataOutput / PhotoOutput / 元数据并行（条码、人脸）"
limitation: "需 A12 及以上芯片；设备支持的组合由 supportedMultiCamDeviceSets 决定；功耗/发热较高"
invocation: "AVFoundation，Swift/ObjC；通过 AVCaptureConnection 定义数据流向"
tags: [多摄, 双摄, 同时录制, multicam, 前后摄像头, avfoundation, pip, 画中画]
platforms: [iOS, iPadOS]
updated: "2026-06"
order: 10
related:
  - { to: "dual-photo-delivery", as: "常配合" }
  - { to: "proraw-applelog-prores", as: "常配合" }
  - { to: "avdepthdata-lidar", as: "常配合" }
  - { to: "face-landmark-detection", as: "下游处理" }
---

## 一句话

在单个 `AVCaptureMultiCamSession` 里并行驱动多颗摄像头，做前后同录、画中画、分屏等多路实时采集。

## 适用场景

Vlog 双视角录制（前置拍人 + 后置拍景）、视频通话叠加、双路同时跑 `AVCaptureMetadataOutput` 做条码或人脸检测。每颗相机经各自的 `AVCaptureConnection` 接到独立的 `AVCaptureVideoDataOutput` / `AVCapturePhotoOutput`。

## 注意

并非所有镜头组合都能同开，必须先查 `AVCaptureDevice.DiscoverySession` 给出的 `supportedMultiCamDeviceSets`。多摄会显著抬高功耗与发热，系统在过热时可能主动降帧或中断会话，需要 A12 及以上芯片。
