---
title: "VibeVoice / Dia2"
category: tts
source: open
deployment: hybrid
badge: "开源"
role: "长篇 / 多人对话合成 · 播客级"
desc: "面向长音频与多说话人对话的开源模型：VibeVoice 擅长长篇富表现力叙述（整集播客），Dia2 擅长多说话人对话。适合做有声书、播客、剧情配音。"
capability: "长篇连贯、多说话人、富表现力"
limitation: "资源消耗较高；需 GPU"
invocation: "开源权重"
tags: [vibevoice, 长音频, 播客, 多说话人, dialogue, 长篇, 对话, dia2]
license: "开源权重"
cost: "免费 / 自托管"
platforms: [Server, 跨平台]
updated: "2026-06"
order: 50
related:
  - { to: "chatterbox", as: "同类" }
  - { to: "elevenlabs", as: "竞品" }
  - { to: "suno", as: "常配合" }
  - { to: "pytorch-jax", as: "底层框架" }
---

## 一句话

面向长音频与多说话人对话的开源 TTS:VibeVoice 擅长长篇富表现力叙述,Dia2 擅长多说话人对话。

## 适用场景

有声书、整集播客、剧情配音等需要长时连贯与多角色切换的内容生产。能在单次生成中维持多个说话人的音色与对话节奏。

## 对比要点

- 与单句/短文 TTS 的关键差异在「长篇连贯」与「多说话人」:可生成数分钟乃至整集的连续音频而不跑偏。
- 相比 ElevenLabs 的 Studio:开源可自托管、数据不出域,但资源消耗高、需 GPU,工程化要自己做。
- 与音乐生成(如 Suno)可配合,做有人声叙述 + 配乐的成品播客/有声内容。
