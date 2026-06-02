---
title: "LoRA / PEFT 微调"
category: algorithm
source: open
deployment: hybrid
badge: "训练方法"

role: "参数高效微调 · 低成本定制大模型"
desc: "参数高效微调（PEFT）只训练极小一部分新增参数而冻结原模型，让大模型能在单张消费级 GPU 上定制。代表 LoRA：在权重旁注入低秩矩阵 A·B，只训练这对小矩阵，推理时可合并回原权重零额外开销。QLoRA 进一步把基座以 4-bit 加载再训 LoRA，效果接近全量 16-bit 微调而显存骤降；DoRA、AdaLoRA、VeRA 等改进在更少参数下追平甚至超过 LoRA。是行业定制、领域适配、风格对齐的默认手段。"
capability: "单卡可微调、训练/存储成本降 10–20 倍、可热插拔多套适配器、质量保留 90–95%"
limitation: "能力受限于低秩假设，难注入大量新知识；多适配器管理与秩选择需调参"
invocation: "HuggingFace PEFT、Unsloth、Axolotl；LoRA/QLoRA/DoRA，产出可合并或挂载的适配器"
tags: [lora, qlora, peft, 微调, "fine-tuning", dora, adalora, 低秩, "low-rank", 参数高效, adapter, 适配器]

license: "方法公开 / 工具 Apache-2.0、MIT"
cost: "免费 / 自托管，单卡可行"
platforms: [Server, 跨平台]
repo: "https://github.com/huggingface/peft"
links:
  - { label: "LoRA 论文", url: "https://arxiv.org/abs/2106.09685" }
  - { label: "QLoRA 论文", url: "https://arxiv.org/abs/2305.14314" }
updated: "2026-06"
order: 70
related:
  - { to: "pytorch-jax", as: "训练框架" }
  - { to: "model-quantization", as: "常配合" }
  - { to: "rlhf-dpo-alignment", as: "同属后训练" }
  - { to: "opensource-local-llm", as: "微调对象" }
---

全量微调一个几十亿参数的模型要存全部梯度与优化器状态，动辄多卡集群。PEFT 的思路是冻结绝大部分原权重、只训练极少量新增参数。LoRA 是其代表：注意到微调引起的权重更新往往是低秩的，于是在原权重旁并联一对低秩矩阵 A·B，只训这对小矩阵，参数量常只占原模型的零点几个百分点；推理时把 A·B 合并回原权重即可，无额外延迟，还能为不同任务各训一套适配器热插拔。QLoRA 再叠加量化——把基座以 4-bit NF4 加载后在其上训 LoRA，显存需求大幅下降而效果接近全量 16-bit 微调，让单张消费级 GPU 也能微调 70B 级模型。2024–2026 年涌现的 DoRA（把权重拆成幅度与方向分别适配）、AdaLoRA、VeRA 等在更少参数下追平或超过 LoRA。PEFT 通常能以约 10–20 倍更低的成本保留 90–95% 的全量微调质量，是领域适配与风格对齐的默认方案；局限是低秩假设使其更擅长「调整行为」而非「灌入大量新知识」。
