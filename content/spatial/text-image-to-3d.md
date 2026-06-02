---
title: "文生 3D / 图生 3D"
category: spatial
source: open
deployment: hybrid
badge: "开源 / API"
role: "文本或图片生成 3D 资产"
desc: "用文本或单张图片直接生成带网格与 PBR 材质的 3D 资产，几十秒级出模。代表开源项目有 Microsoft TRELLIS（结构化潜变量 SLAT，可解码为辐射场/高斯/网格）与 Tencent Hunyuan3D（几何 + 纹理两段式扩散）；云端商用 API 有 Meshy、Tripo、Rodin 等，适合游戏/电商/概念设计快速产模。"
capability: "文/图生网格、PBR 纹理、秒级到分钟级出模、多格式导出"
limitation: "拓扑/细节不及人工精修；复杂结构与小物件易失真；部分许可限地区/商用"
invocation: "开源权重本地/云 GPU 推理，或商用云 API"
tags: [文生3d, 图生3d, text-to-3d, image-to-3d, trellis, hunyuan3d, meshy, tripo, rodin, 3d生成, ai建模]
license: "MIT（TRELLIS）/ Apache-2.0（Hunyuan3D，部分地区受限）/ 商用 API"
cost: "免费自托管（开源）/ 按量（云 API）"
platforms: [Server, 跨平台, Web]
repo: "https://github.com/microsoft/TRELLIS"
links:
  - { label: "Microsoft TRELLIS", url: "https://github.com/microsoft/TRELLIS" }
  - { label: "Tencent Hunyuan3D-2.1", url: "https://github.com/Tencent-Hunyuan/Hunyuan3D-2.1" }
updated: "2026-06"
order: 60
related:
  - { to: "gaussian-splatting", as: "可输出" }
  - { to: "object-capture", as: "替代" }
  - { to: "diffusion-model", as: "底层引擎" }
  - { to: "flux-2", as: "常配合" }
---

文生/图生 3D 在 2025–2026 进入实用化。Microsoft TRELLIS 以统一的结构化潜变量（SLAT）表示为核心，可同时解码为辐射场、3D 高斯与网格，模型与多数代码采用 MIT 许可，单图即可生成精细 3D 资产（TRELLIS.2 达 4B 参数）。Tencent Hunyuan3D 采用几何与纹理分离的两段式扩散 Transformer，2.5 版几何分辨率升到 1024、纹理保真度提升，开源权重可本地运行（最低约 6GB 显存），但在欧盟/英国/韩国等地区受许可限制。云端则有 Meshy、Tripo、Rodin 等成熟 API，覆盖 PBR 贴图、拓扑控制与多格式导出，适合接入游戏与电商素材管线。
