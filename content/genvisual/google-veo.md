---
title: "Google Veo"
category: genvisual
source: cloud
deployment: cloud
badge: "云端"
role: "文生视频 · 原生同步音轨"
desc: "Google DeepMind 的文生/图生视频模型，主打 1080p 画面 + 原生音频（对白、音效、口型同步）与更可信的物理运动。Veo 3.1 支持首尾帧过渡、续接长视频与跨镜头角色一致性，已开放 Gemini API。"
capability: "原生音画同步、1080p、首尾帧/续接、角色一致、电影感运镜"
limitation: "闭源云服务、按秒计费偏贵、需联网"
invocation: "Gemini API / Vertex AI / Flow；按秒计费（约 $0.40/s，Fast $0.15/s）"
tags: [veo, "veo-3", google, deepmind, 文生视频, "text-to-video", 图生视频, 音画同步, 视频生成, gemini]
license: "商用闭源"
cost: "按量（约 $0.15–0.40/s）/ 订阅（AI Ultra $249.99/月）"
platforms: [Web, Server, 跨平台]
links:
  - { label: "Veo 3 进 Gemini API", url: "https://developers.googleblog.com/veo-3-now-available-gemini-api/" }
  - { label: "Veo 3.1 公告", url: "https://developers.googleblog.com/introducing-veo-3-1-and-new-creative-capabilities-in-the-gemini-api/" }
updated: "2026-06"
order: 40
---

Veo 是 2026 年云端文生视频第一梯队，最大差异化是原生生成与画面同步的音频（对白+音效+口型），加上 API 化与首尾帧/续接能力，适合广告片、分镜预演与短片创作。OpenAI Sora 2 同属顶级阵营，但其消费 App 已于 2026-04 下线、API 计划于 2026-09 退役，故此处以仍在迭代的 Veo 为代表。
