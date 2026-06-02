---
title: "3D Gaussian Splatting"
category: spatial
source: open
deployment: hybrid
badge: "开源"
role: "实时辐射场重建与新视图合成"
desc: "用一组带位姿的照片/视频重建场景，以大量 3D 高斯点（位置、协方差、颜色、不透明度）表示辐射场，可在 1080p 下实时（≥30fps）渲染新视角。训练快、渲染快，已成为体积重建与新视图合成的事实标准，质量比肩或超过 Mip-NeRF 360。"
capability: "实时新视图合成、训练分钟级、高画质重建、可编辑性强"
limitation: "需多视角输入与相机位姿（COLMAP 等）；动态场景/反光仍具挑战；模型体积较大"
invocation: "开源训练 + 实时查看器；亦可云 GPU 训练后端侧/Web 渲染"
tags: [gaussian splatting, 高斯泼溅, 3dgs, radiance field, 辐射场, 新视图合成, novel view synthesis, gsplat, 3d重建]
license: "研究/非商用（INRIA 原始实现）"
cost: "免费 / 自托管"
platforms: [Server, 跨平台, Web]
repo: "https://github.com/graphdeco-inria/gaussian-splatting"
links:
  - { label: "项目主页（INRIA）", url: "https://repo-sam.inria.fr/fungraph/3d-gaussian-splatting/" }
  - { label: "论文 arXiv:2308.04079", url: "https://arxiv.org/abs/2308.04079" }
updated: "2026-06"
order: 40
related:
  - { to: "nerfstudio", as: "常配合" }
  - { to: "text-image-to-3d", as: "可解码为" }
  - { to: "object-capture", as: "同类" }
  - { to: "nvidia-blackwell-datacenter-gpu", as: "运行硬件" }
---

3D Gaussian Splatting（3DGS）由 INRIA 提出，是当前体积重建与新视图合成的「金标准」。相比传统 NeRF 的神经网络逐点查询，它用显式的 3D 高斯点表示场景，在保留连续体积辐射场优良性质的同时跳过空白区域计算，从而做到训练分钟级、渲染实时。截至 2026 年，社区围绕可扩展性、梯度控制、深度一致性、动态场景与压缩等方向持续演进，并广泛用于数字孪生、影视特效、文旅与电商展示。注意原始实现为研究/非商用许可，商用需评估替代实现（如 gsplat）与授权。
