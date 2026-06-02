---
title: "Demucs"
category: audio
source: open
deployment: on-device
badge: "开源"
role: "人声/音轨分离标杆 · 本地可跑"
desc: "Meta 研究院开源的音乐源分离模型,把混音拆成人声、鼓、贝斯、其他等 stem。默认 htdemucs 为 Hybrid Transformer 架构,另有 6 源版(加吉他/钢琴)与 fine-tuned 档。MIT 许可、可商用,本地即可运行,Apple Silicon 上经 MLX 移植可数秒分离一首歌。"
capability: "高质量 4/6 源分离、纯本地离线、MIT 可商用、有 MLX/Rust 等加速移植"
limitation: "纯分离不生成、最高质量档较慢、对极端混音偶有残留串音"
invocation: "开源命令行/Python(pip install demucs);MIT"
tags: [demucs, htdemucs, 音轨分离, 人声分离, source separation, stem, meta, 开源, mit, karaoke]
license: "MIT"
cost: "免费 / 自托管"
platforms: [跨平台, macOS, Server]
repo: "https://github.com/facebookresearch/demucs"
links:
  - { label: "GitHub", url: "https://github.com/facebookresearch/demucs" }
  - { label: "demucs-mlx(Apple Silicon)", url: "https://github.com/ssmall256/demucs-mlx/" }
updated: "2026-06"
order: 50
---

Demucs(Deep Extractor for Music Sources)是开源音乐源分离的事实标准,把一段混音拆成人声、鼓、贝斯、其他等独立 stem,常用于制作伴奏/去人声、提取人声做翻唱、重混与采样。默认模型 htdemucs 采用 Hybrid Transformer,还有加入吉他、钢琴的 6 源版本(htdemucs_6s)和更精细但更慢的 fine-tuned 版本(htdemucs_ft)。MIT 许可可自由商用,纯本地离线运行,数据不出设备;社区已有 Rust 与 Apple Silicon(MLX)等加速实现,M 系 Mac 上可在十几秒内分离一首歌。
