---
title: "Nerfstudio / NeRF"
category: spatial
source: open
deployment: hybrid
badge: "开源"
role: "NeRF 与高斯泼溅统一开发框架"
desc: "Nerfstudio 是 UC Berkeley 发起、NVIDIA 支持的开源框架，把神经辐射场（NeRF）与 3D 高斯泼溅统一在一套模块化流程里，覆盖训练、评估、实时查看与导出，并内置 CUDA 加速的 gsplat 光栅化器，是社区最广泛采用的神经 3D 重建平台。"
capability: "统一 NeRF/3DGS 流程、模块化方法切换、实时查看器、CUDA 加速"
limitation: "重建质量依赖输入位姿与覆盖度；训练吃 GPU；NeRF 类方法渲染较慢"
invocation: "开源 CLI/查看器；本地 GPU 或云 GPU 训练"
tags: [nerfstudio, nerf, 神经辐射场, neural radiance field, gsplat, 新视图合成, 3d重建, novel view synthesis, 开源框架]
license: "Apache-2.0"
cost: "免费 / 自托管"
platforms: [Server, 跨平台]
repo: "https://github.com/nerfstudio-project/nerfstudio"
links:
  - { label: "论文 arXiv:2302.04264", url: "https://arxiv.org/pdf/2302.04264" }
  - { label: "Radiance Fields 介绍", url: "https://radiancefields.com/platforms/nerfstudio" }
updated: "2026-06"
order: 50
related:
  - { to: "gaussian-splatting", as: "集成" }
  - { to: "object-capture", as: "同类" }
  - { to: "pytorch-jax", as: "底层引擎" }
  - { to: "nvidia-blackwell-datacenter-gpu", as: "运行硬件" }
---

Nerfstudio 把碎片化的辐射场研究方法收敛到一套可复用框架里，既支持经典 NeRF，也支持 3D 高斯泼溅（通过内置 gsplat 库实现 60+ FPS 实时渲染、分钟级训练）。截至 2026 年，社区普遍更偏向高斯泼溅路线（训练更快、可实时渲染、更易编辑），但 NeRF 在隐式表达、机器人感知/建图、特效等场景仍有价值。Nerfstudio 的统一接口便于横向比较与快速试不同方法，是做自定义 3D 重建管线的常用起点。
