---
title: "NVIDIA Jetson 边缘模组"
category: hardware
source: native
deployment: on-device
badge: "NVIDIA"
role: "边缘 AI / 机器人模组 · 端侧"
desc: "NVIDIA 面向机器人、边缘视觉、传感器融合的 SoM(系统级模组)系列。当前旗舰 Jetson AGX Thor(2025-08)融合 Blackwell GPU 与 14 核 Arm Neoverse,128GB LPDDR5X,达约 2070 FP4 TFLOPS、40–130W 可配,较上代 AGX Orin(约 275 TOPS)AI 算力提升超 7.5×。可在本地跑生成式 AI 与实时多传感融合。"
capability: "Thor 约 2070 FP4 TFLOPS、128GB、40–130W;Orin 约 275 TOPS;CUDA 全栈、实时多传感融合"
limitation: "功耗/散热/成本高于轻量 NPU 板;价格偏开发者/企业级;吃 CUDA 生态绑定"
invocation: "JetPack SDK(CUDA / TensorRT / cuDNN)、Isaac ROS;模型经 TensorRT 优化部署"
tags: [nvidia, jetson, orin, thor, agx, 边缘, edge, som, 机器人, robotics, jetpack, cuda, tensorrt, tops, 端侧]
license: "商用闭源(硬件)"
cost: "开发者 / 企业级(开发套件数千元起)"
platforms: [Server, 跨平台]
repo: "https://developer.nvidia.com/embedded/jetson-modules"
links:
  - { label: "Jetson 模组", url: "https://developer.nvidia.com/embedded/jetson-modules" }
  - { label: "Jetson Thor", url: "https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/jetson-thor/" }
updated: "2026-06"
order: 60
related:
  - { to: "nvidia-tensorrt", as: "调用它的运行时" }
  - { to: "open-edge-boards-rk3588-coral", as: "竞品" }
  - { to: "nvidia-blackwell-datacenter-gpu", as: "同架构" }
  - { to: "model-quantization", as: "常配合" }
---

Jetson 把数据中心的 CUDA 栈缩进巴掌大的模组里,是边缘 AI 与机器人最主流的算力底座之一。它不是手机里的轻量 NPU,而是带完整 GPU、可在本地跑视觉模型、生成式 AI 与多路传感融合的嵌入式平台。2025-08 发布的旗舰 AGX Thor 融合 Blackwell GPU 与 14 核 Arm Neoverse V3AE、128GB LPDDR5X,达约 2070 FP4 TFLOPS、功耗 40–130W 可配,较上代 AGX Orin(约 275 TOPS)AI 算力提升超 7.5×、能效约 3.5×。软件侧用 JetPack(CUDA / TensorRT / cuDNN)与 Isaac ROS,模型一般经 TensorRT 优化后部署。代价是功耗、散热与成本都高于纯 NPU 小板,且深度绑定 CUDA 生态。
