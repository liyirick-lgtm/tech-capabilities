---
title: "Diffusion 扩散模型"
category: algorithm
source: open
deployment: hybrid
badge: "生成方法"

role: "图像/视频/音频生成的主流原理 · 去噪生成"
desc: "扩散模型通过「逐步加噪→学习逐步去噪」来生成数据：训练时把真实样本加噪到纯噪声，模型学习反向去噪；采样时从随机噪声出发迭代还原出图像/视频/音频。是 Stable Diffusion、FLUX、Sora/Veo 等文生图、文生视频的底层方法。2024 年起主干普遍从 U-Net 转向 Transformer（DiT），并用 flow matching / rectified flow 简化训练目标、把多步采样压到极少步，显著提速。是生成式视觉与音频的事实标准方法。"
capability: "高保真多样生成、可文本/图像条件控制、覆盖图像视频音频与超分编辑"
limitation: "原始多步采样推理慢算力高；需蒸馏/少步采样加速；可控性依赖额外条件机制"
invocation: "Diffusers 库；Stable Diffusion 3、FLUX、Sora/Veo 等，DiT 主干 + rectified flow"
tags: [diffusion, 扩散模型, 去噪, ddpm, "flow-matching", "rectified-flow", dit, "stable-diffusion", flux, sora, 文生图, 文生视频]

license: "方法公开 / 实现与权重多为开源或开放权重"
cost: "免费自托管 / 云 GPU"
platforms: [Server, 跨平台]
repo: "https://github.com/huggingface/diffusers"
links:
  - { label: "DDPM 论文", url: "https://arxiv.org/abs/2006.11239" }
  - { label: "Stable Diffusion 3 (rectified flow)", url: "https://arxiv.org/abs/2403.03206" }
updated: "2026-06"
order: 40
---

扩散模型把生成拆成一条「加噪—去噪」的轨迹：前向过程把真实图像一步步加高斯噪声直到变成纯噪声，模型学习的是反向的去噪函数；采样时从随机噪声出发，迭代去噪逐渐显影出清晰内容。相比 GAN，它训练更稳、覆盖度更好、可控性更强，因此成为 Stable Diffusion、FLUX、Sora、Veo 等文生图与文生视频的底层方法，也广泛用于超分、修复与编辑。架构上 2024 年起出现关键转向——主干从卷积 U-Net 换成 Transformer（DiT），Stable Diffusion 3 等改用 rectified flow / flow matching，把训练目标简化为学习「噪声到数据」的直线流，既稳定又能把原本几十上百步的采样压到极少步。它最大的痛点是采样的迭代成本，故常配合一致性模型、少步蒸馏等手段加速。截至 2026 年，扩散（含 flow matching 变体）仍是高保真视觉与音频生成的主导范式。
