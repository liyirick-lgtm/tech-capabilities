---
title: "RLHF / DPO / GRPO 对齐"
category: algorithm
source: open
deployment: cloud
badge: "训练方法"

role: "对齐人类偏好与可验证奖励 · 后训练"
desc: "让预训练模型「听话、有用、安全、会推理」的后训练对齐方法。RLHF（基于人类反馈的强化学习）是奠基范式：训练奖励模型再用 PPO 优化策略。DPO 把它简化为直接在偏好数据对上做监督式优化，省掉独立奖励模型与在线 RL，更稳更省。2025–2026 年重心转向可验证奖励 RL（RLVR）——以 GRPO（组内采样多答案、相对比较算优势、无需 critic）、DAPO 等用数学/代码等可自动判分的信号替代人工反馈，是 DeepSeek-R1 等推理模型能力跃升的关键。"
capability: "对齐人类偏好、提升有用性与安全性；GRPO/RLVR 大幅强化数学与推理能力"
limitation: "数据/算力昂贵，奖励易被钻空(reward hacking)；RLVR 仅适用于答案可自动验证的任务"
invocation: "TRL、OpenRLHF、verl 等；SFT→(RLHF/DPO)→(GRPO/RLVR) 的后训练管线"
tags: [rlhf, dpo, grpo, 对齐, alignment, 偏好优化, ppo, rlvr, dapo, 强化学习, "deepseek-r1", 后训练, post-training]

license: "方法公开 / 工具 Apache-2.0、MIT"
cost: "训练昂贵，云/集群"
platforms: [Server]
repo: "https://github.com/huggingface/trl"
links:
  - { label: "InstructGPT (RLHF)", url: "https://arxiv.org/abs/2203.02155" }
  - { label: "DPO 论文", url: "https://arxiv.org/abs/2305.18290" }
updated: "2026-06"
order: 80
---

预训练给了模型知识，但要它真正「有用、诚实、无害且会推理」，靠的是后训练对齐。RLHF 是奠基范式：先用人类对回答的偏好排序训练一个奖励模型，再用 PPO 把策略往高奖励方向优化——效果好但流程重，要维护奖励模型并跑在线强化学习，易不稳、易被「钻奖励空子」。DPO 是关键简化：数学上证明可以跳过独立奖励模型，直接在「优于/劣于」的偏好数据对上做类监督优化，更稳、更省，成为通用对齐的常用选择。2025–2026 年最大的变化是奖励来源——RLVR（可验证奖励强化学习）兴起：对数学、代码这类答案能被程序自动判对错的任务，用确定性验证替代人工反馈，从而去掉人力瓶颈、每天可产生海量训练信号。其代表算法 GRPO 对同一问题采样多个答案、组内相对比较来估计优势，省掉了价值网络（critic），显存与算力更省；DAPO 在其上修复了规模化时的不稳定。DeepSeek-R1 等推理模型能力的跃升很大程度归功于此。截至 2026，典型管线是 SFT →（DPO 或 RLHF）→（GRPO/RLVR），按数据、算力与「输出是否可验证」来取舍。
