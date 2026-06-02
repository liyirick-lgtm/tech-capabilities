---
title: "Qualcomm Hexagon NPU"
category: hardware
source: native
deployment: on-device
badge: "Qualcomm"
role: "Android / AI PC 端侧 NPU"
desc: "高通 Snapdragon 平台的 AI 加速核心,融合标量、向量、张量加速器与大共享内存。最新 Snapdragon 8 Elite Gen 5(移动)与 X2 Elite(AI PC,Hexagon NPU 6 达约 80 TOPS)是 Android 手机与 Windows on Arm 端侧 AI 的主力,支持 INT4/INT8/INT16/FP16 混合精度。"
capability: "标量+向量+张量融合;X2 Elite 约 80 TOPS;微瓦片推理、层融合减少中间内存读写;INT4–FP16 混合精度"
limitation: "Qualcomm 专有,绑定骁龙平台;不同代/档 TOPS 差异大;调优依赖 QNN / SNPE 工具链"
invocation: "Android 经 NNAPI 或 Qualcomm AI Engine(QNN/SNPE);AI PC 经 ONNX Runtime / LiteRT / Windows ML"
tags: [hexagon, qualcomm, npu, snapdragon, 骁龙, ai engine, qnn, snpe, nnapi, 端侧, on-device, tops, ai pc]
license: "商用闭源(随 SoC)"
cost: "消费级(随设备)"
platforms: [Android, Windows]
repo: "https://www.qualcomm.com/processors/hexagon"
links:
  - { label: "Hexagon NPU", url: "https://www.qualcomm.com/processors/hexagon" }
  - { label: "Qualcomm AI Engine", url: "https://www.qualcomm.com/processors/ai-engine" }
updated: "2026-06"
order: 20
---

Hexagon 是骁龙阵营对标 Apple ANE 的端侧 NPU。架构上把标量、向量、张量三类加速器与大共享内存绑在一起，靠"微瓦片推理"同时跑多层、消除几乎所有中间内存读写，换取能效。移动侧最新为 Snapdragon 8 Elite Gen 5，AI PC 侧 Snapdragon X2 Elite 的 Hexagon NPU 6 达约 80 TOPS(较上代 X 的 45 TOPS 大幅提升)。接入路径分两套：Android 用 NNAPI 或高通自家 QNN/SNPE，Windows on Arm 用 ONNX Runtime / LiteRT / Windows ML 把模型委派到 NPU。
