---
title: "Object / Pose / Trajectory"
category: vision
source: native
deployment: on-device
badge: "Apple 原生"
role: "物体·人体·轨迹分析 · Vision"
desc: "检测与追踪物体、人体与手部姿态、运动轨迹等。配合 Core ML 自定义模型可做运动分析、AR 交互、动作教学（如挥拍分析）。"
capability: "物体追踪、body/hand pose、trajectory 分析"
limitation: "自定义识别需搭配训练好的 Core ML 模型"
invocation: "Vision + Core ML，离线"
tags: [物体检测, 物体追踪, 轨迹, 手势, 身体姿态, hand pose, body pose, 物体识别]
platforms: [iOS, macOS, iPadOS]
updated: "2026-06"
order: 40
related:
  - { to: "core-ml", as: "底层引擎" }
  - { to: "face-landmark-detection", as: "同类" }
  - { to: "arkit-realitykit", as: "常配合" }
  - { to: "core-motion", as: "互补" }
---

## 一句话

Vision 的物体追踪、人体/手部姿态估计与运动轨迹分析，离线给出关键点与目标随时间的运动路径。

## 适用场景

运动教学（挥拍、深蹲姿态分析）、健身计数、手势交互、AR 中把虚拟元素绑到人体/手部关节。`VNDetectHumanBodyPoseRequest` 给出身体关节点，`VNDetectTrajectoriesRequest` 跟踪抛物运动（如球的轨迹）。

## 注意

通用类别的物体识别需自带训练好的 Core ML 模型经 `VNCoreMLRequest` 接入，Vision 本身只提供追踪与姿态等内建能力。轨迹检测对相机抖动敏感，体育分析场景常先固定机位；与 `Core Motion` 的 IMU 数据结合可在视觉失效时补充运动估计。
