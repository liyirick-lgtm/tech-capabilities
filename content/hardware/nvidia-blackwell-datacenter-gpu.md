---
title: "NVIDIA Blackwell 数据中心 GPU"
category: hardware
source: native
deployment: cloud
badge: "NVIDIA"
role: "训练 / 推理算力底座 · 数据中心"
desc: "NVIDIA Blackwell 架构数据中心 GPU(B200 / GB200),H100·H200 的继任者。B200 双 die、2080 亿晶体管、180GB HBM3e、8TB/s 带宽,第五代 Tensor Core 原生 FP4。相对 H100,Transformer 训练吞吐约 3–4×、FP4 推理约 3×。GB200 Grace-Blackwell 超级芯片把 1 颗 Grace CPU + 2 颗 B200 经 NVLink-C2C 相连,NVL72 整机柜级互联。"
capability: "B200 180GB HBM3e、8TB/s;FP4/FP8 第五代 Tensor Core;NVLink 5.0 1.8TB/s;较 H100 训练约 3–4×"
limitation: "企业/数据中心级,价格与功耗极高(GB200 超级芯片约 $6–7 万);供货紧张;基本只经云租用"
invocation: "CUDA / cuDNN / TensorRT-LLM,经 PyTorch、JAX 等框架;多由云厂商以 GPU 实例提供"
tags: [nvidia, blackwell, b200, gb200, h100, gpu, 数据中心, datacenter, cuda, fp4, hbm3e, nvlink, 算力, 训练]
license: "商用闭源"
cost: "企业级(超级芯片约 $6–7 万 / 多按云时计费)"
platforms: [Server]
repo: "https://www.nvidia.com/en-us/data-center/technologies/blackwell-architecture/"
links:
  - { label: "Blackwell 架构", url: "https://www.nvidia.com/en-us/data-center/technologies/blackwell-architecture/" }
  - { label: "GB200 NVL72", url: "https://www.nvidia.com/en-us/data-center/gb200-nvl72/" }
updated: "2026-06"
order: 30
related:
  - { to: "nvidia-tensorrt", as: "调用它的运行时" }
  - { to: "serving-engines-vllm-sglang", as: "调用它的运行时" }
  - { to: "google-tpu", as: "竞品" }
  - { to: "mixture-of-experts", as: "支撑模型" }
---

Blackwell 是当下大模型训练与高吞吐推理的事实底座。B200 采用双 die(两颗 GB100 经 10TB/s 片间互联)、TSMC 4NP 工艺,配 180GB HBM3e 与 8TB/s 带宽;第五代 Tensor Core 原生支持 FP4,相对 H100 在 Transformer 上训练吞吐约 3–4×、FP4 推理约 3×。GB200 Grace-Blackwell 超级芯片把 1 颗 Grace CPU 与 2 颗 B200 经 900GB/s NVLink-C2C 整合,再以 GB200 NVL72 做机柜级互联。对绝大多数 App 团队而言,这类算力不直接采购,而是经各云厂商的 GPU 实例按时计费使用;接入仍走 CUDA / TensorRT-LLM 与上层框架。2025 年底起 B200 开始出货,云端实例在 2026 年陆续铺开。
