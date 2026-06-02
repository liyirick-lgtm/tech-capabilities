---
title: "Dual Photo Delivery"
category: imaging
source: native
deployment: on-device
badge: "Apple 原生"
role: "双镜头同时出片 · AVCapturePhotoOutput"
desc: "在双摄设备上同时拍下广角与长焦两张照片，可用于景深合成、视角对照或后期选择，无需用户来回切换镜头。"
capability: "一次快门同时返回两颗镜头的原片"
limitation: "仅双摄设备；需在采集管线提前启用配置"
invocation: "isDualCameraDualPhotoDeliveryEnabled"
tags: [双摄, 双照片, 景深, dualcamera, 同时拍照, 广角, 长焦]
platforms: [iOS]
updated: "2026-06"
order: 20
related:
  - { to: "avcapture-multicam", as: "常配合" }
  - { to: "avdepthdata-lidar", as: "常配合" }
  - { to: "semantic-segmentation-mattes", as: "同类" }
---

## 一句话

在双摄设备上一次快门同时拿到广角与长焦两张原片，交给后期或合成管线选用。

## 适用场景

需要同一时刻不同焦段画面的应用：景深/虚化合成、视角对照、让用户拍完再选镜头，省去来回切换。配置在 `AVCapturePhotoOutput` 上启用，拍照时两路 `AVCapturePhoto` 一并回调。

## 注意

仅双摄机型支持，且必须在采集管线初始化阶段把 `isDualCameraDualPhotoDeliveryEnabled` 设为 `true`（先确认 `isDualCameraDualPhotoDeliverySupported`）。启用后单次拍摄会返回多个结果，回调里需按镜头区分处理，存储与内存开销也相应翻倍。
