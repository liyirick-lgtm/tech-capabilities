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
---
