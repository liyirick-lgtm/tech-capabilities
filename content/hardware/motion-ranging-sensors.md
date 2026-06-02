---
title: "运动与测距传感(IMU / UWB / dToF)"
category: hardware
source: native
deployment: on-device
badge: "端侧传感"
role: "惯性 / 超宽带 / 飞行时间 · 物理感知底座"
desc: "端侧的物理感知三件套。IMU(MEMS 加速度计+陀螺仪,常含磁力计)给出运动与姿态,是计步、AR 姿态、防抖的基础;UWB 超宽带(Apple U2、Qorvo DW3xxx 等,IEEE 802.15.4z)用 ToF 做厘米级安全测距与空间定位;dToF(直接飞行时间,即 LiDAR 一类)按光往返时间测距,用于深度与近距 3D。它们多内置于手机/可穿戴/头显。"
capability: "IMU 9 轴运动姿态、高采样率;UWB 厘米级安全测距与 AoA 定向;dToF 直接测距、深度图"
limitation: "IMU 有漂移需融合校准;UWB 需对端设备且生态分散;dToF 量程/精度随距离材质下降、强光受扰"
invocation: "iOS Core Motion / Nearby Interaction;Android Sensor / NNAPI 无关的 UWB API;ARKit/ARCore 融合 dToF"
tags: [imu, 惯性, 加速度计, 陀螺仪, mems, uwb, 超宽带, "802.15.4z", u2, dtof, "飞行时间", lidar, 测距, 传感器, 端侧, "core motion", "nearby interaction"]
license: "随器件 / 标准开放(IEEE 802.15.4z)"
cost: "消费级(内置于设备)"
platforms: [iOS, Android, 跨平台]
repo: "https://developer.apple.com/documentation/coremotion"
links:
  - { label: "Core Motion", url: "https://developer.apple.com/documentation/coremotion" }
  - { label: "Nearby Interaction (UWB)", url: "https://developer.apple.com/documentation/nearbyinteraction" }
updated: "2026-06"
order: 80
---

算力之外,App 与现实世界的接口靠这组传感器。IMU 由 MEMS 加速度计与陀螺仪(常再加磁力计)组成,给出线加速度、角速度与姿态,是计步、运动识别、AR 头部追踪与电子防抖的底座——但单独使用会漂移,需要传感器融合与校准(iOS 经 Core Motion 已给出融合后的姿态)。UWB 超宽带基于 IEEE 802.15.4z,发射 >500MHz 极宽带脉冲,用飞行时间(ToF)做厘米级、抗中继攻击的安全测距与到达角定向,Apple 自 iPhone 11 起内置 U 系列芯片(现为 U2),用于精准查找、数字车钥匙与空间感知;2024 年 UWB 芯片出货已近 4.5 亿颗。dToF(直接飞行时间,即 LiDAR/dToF 一类)按单个光脉冲往返时间直接测距,用于深度图与近距 3D 重建(与本图谱 sensing 分类的 AVDepthData/LiDAR 条目相承)。三者都属端侧器件,接入分别走 Core Motion / Sensor、Nearby Interaction / UWB API,以及 ARKit / ARCore 的深度融合。
