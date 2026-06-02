---
title: "端侧 VLM (Apple FastVLM / MLX-VLM)"
category: multimodal
source: open
deployment: on-device
badge: "开源"
role: "手机/Mac 本地实时看图 · 低延迟离线"
desc: "在设备上直接跑视觉语言模型,图像不出端、低延迟、可离线。Apple FastVLM(CVPR 2025,开源)用 FastViTHD 混合视觉编码器,高分辨率下首 token 延迟比同级快约 85 倍,是首个在移动端突破 200ms 的生产级 VLM;MLX-VLM 基于 Apple MLX 框架,可在 MacBook / Mac mini 上推理与微调 Qwen3-VL、Gemma、LLaVA 等主流 VLM。适合实时相机理解、隐私敏感、边缘部署场景。"
capability: "本地实时看图、低延迟、离线、隐私不出端"
limitation: "模型尺寸受内存限制;复杂推理弱于云端大模型"
invocation: "FastVLM iOS/macOS demo(MLX);MLX-VLM 命令行 / Python"
tags: [端侧, "on-device", vlm, fastvlm, "mlx-vlm", apple, mlx, 实时, 离线, 隐私, 边缘]
license: "Apple 模型许可 / MLX-VLM: MIT"
cost: "免费 / 自托管"
platforms: [iOS, macOS]
repo: "https://github.com/apple/ml-fastvlm"
links:
  - { label: "FastVLM (Apple ML Research)", url: "https://machinelearning.apple.com/research/fast-vision-language-models" }
  - { label: "FastVLM GitHub", url: "https://github.com/apple/ml-fastvlm" }
updated: "2026-06"
order: 40
---

端侧 VLM 把「看懂图」搬到设备本地,核心价值是延迟、离线与隐私:图像不上传、首 token 几乎即时,适合相机实时取景理解、辅助功能、AR 等场景。FastVLM 的关键是 FastViTHD 视觉编码器——为高分辨率图像设计、输出更少视觉 token,从而大幅压缩编码耗时,最小档在 TTFT 上比 LLaVA-OneVision-0.5B 快约 85 倍且视觉编码器小 3.4 倍,并附带基于 MLX 的 iOS/macOS demo。MLX-VLM 则是 Apple Silicon 上的通用入口,能直接拉起 Qwen3-VL、Gemma、LLaVA 等小尺寸 VLM 做本地推理与微调,与开源 VLM 条目里的小档模型形成互补。
