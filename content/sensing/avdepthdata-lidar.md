---
title: "AVDepthData 与 LiDAR 深度"
category: sensing
source: native
deployment: on-device
badge: "Apple 原生"
role: "深度图采集 · LiDAR/双摄视差"
desc: "Apple 的深度数据接口：AVFoundation 经 AVCaptureDepthDataOutput 流式或随照片输出 AVDepthData(双摄视差或 LiDAR);ARKit 经 sceneDepth 给出 LiDAR 逐帧场景深度。用于人像虚化、测距、3D 重建与 AR 遮挡。"
capability: "逐像素深度图、随拍照片附带深度、LiDAR 场景深度与置信度、点云重建"
limitation: "LiDAR 仅 Pro 机型;默认深度经平滑滤波(CV 任务建议关闭 isFilteringEnabled);精度随距离/材质下降"
invocation: "AVFoundation(AVCaptureDepthDataOutput / AVDepthData)、ARKit(sceneDepth)"
tags: [avdepthdata, lidar, 深度, depth map, 点云, 测距, 人像虚化, arkit, scenedepth, 3d]
license: "系统框架"
cost: "免费(系统框架)"
platforms: [iOS, iPadOS]
repo: "https://developer.apple.com/documentation/avfoundation/avdepthdata"
links:
  - { label: "AVDepthData 文档", url: "https://developer.apple.com/documentation/avfoundation/avdepthdata" }
  - { label: "ARKit sceneDepth", url: "https://developer.apple.com/documentation/arkit/arframe/scenedepth" }
updated: "2026-06"
order: 40
---

深度数据有两条获取路径：相机管线侧用 AVCaptureDepthDataOutput 实时流式取深度，或从 AVCapturePhotoOutput 拿到随照片附带的 AVDepthData(数据可能来自双摄视差或 LiDAR);AR 侧用 ARKit 的 sceneDepth，逐帧给出 LiDAR 扫描的场景深度图(每像素编码到现实点的距离)与置信度。深度图默认开启滤波(平滑、补洞)以改善观感，但计算机视觉任务应把 AVCaptureDepthDataOutput 的 isFilteringEnabled 关掉，保留原始未滤波值。LiDAR 让逐像素深度与点云重建在中近距室内尤其稳健。
