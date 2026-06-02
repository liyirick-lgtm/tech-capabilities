---
title: "Google TPU(Ironwood)"
category: hardware
source: cloud
deployment: cloud
badge: "云算力"
role: "训练 / 推理 ASIC · Google Cloud"
desc: "Google 自研张量处理单元,第七代 Ironwood(TPU7x)为首款面向推理时代设计的 TPU。单芯片 192GB HBM3e、约 7.4TB/s 带宽、约 4.6 PFLOPS 稠密 FP8(略超 B200);可扩展至 9216 芯片的 superpod,经 ICI 互联(9.6Tb/s)共享约 1.77PB HBM。仅经 Google Cloud 租用,非散售硬件。"
capability: "单芯片 192GB HBM3e、约 7.4TB/s;约 4.6 PFLOPS FP8;superpod 至 9216 芯片、约 1.77PB 共享 HBM"
limitation: "仅 Google Cloud 提供,不可自购;生态以 JAX/TF 为主,PyTorch 经 PyTorch/XLA;迁移有锁定成本"
invocation: "Google Cloud TPU VM;JAX 或 TensorFlow 原生,PyTorch 经 PyTorch/XLA"
tags: [google, tpu, ironwood, tpu7x, asic, 云算力, hbm3e, jax, xla, 推理, 训练, superpod]
license: "商用闭源(云服务)"
cost: "企业级(按 Google Cloud 用量计费)"
platforms: [Server]
repo: "https://cloud.google.com/tpu"
links:
  - { label: "Ironwood 介绍", url: "https://blog.google/products/google-cloud/ironwood-tpu-age-of-inference/" }
  - { label: "TPU7x 文档", url: "https://docs.cloud.google.com/tpu/docs/tpu7x" }
updated: "2026-06"
order: 40
related:
  - { to: "pytorch-jax", as: "调用它的框架" }
  - { to: "nvidia-blackwell-datacenter-gpu", as: "竞品" }
  - { to: "mixture-of-experts", as: "支撑模型" }
---

TPU 是 Google 用专用 ASIC 自建算力、绕开 GPU 供给约束的路线。第七代 Ironwood(TPU7x)首次"从头为推理设计":单芯片 192GB HBM3e(约为上代 Trillium 的 6 倍)、约 7.4TB/s 带宽、约 4.6 PFLOPS 稠密 FP8——单芯片即可在 BF16 下放下 70B 模型,数颗即可服务 405B 级模型。规模上可堆到 9216 芯片的 superpod,经 ICI 高速互联共享约 1.77PB HBM。与 GPU 最大的不同是它不散售:只能在 Google Cloud 上以 TPU VM 形式租用,软件栈以 JAX / TensorFlow 为主,PyTorch 需经 PyTorch/XLA,迁移存在一定锁定成本。
