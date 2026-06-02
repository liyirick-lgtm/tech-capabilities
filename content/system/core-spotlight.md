---
title: "Core Spotlight"
category: system
source: native
deployment: on-device
badge: "Apple 原生"
role: "应用内内容索引 + 语义搜索 · 端侧"
desc: "把 App 内容写入端侧 Spotlight 索引，让用户在系统搜索中找到 App 的具体条目并直达。iOS 18/iOS 26 起支持语义搜索（SemanticSearch）：基于本地向量嵌入按「意思相近」而非精确字面匹配，可用自然语言搜索完全私有的端侧索引，适合文本与图片/视频等媒体。"
capability: "贡献可搜索条目、深链直达、自然语言语义搜索"
limitation: "索引与嵌入在端侧生成有时延；语义搜索对机型/系统版本有要求"
invocation: "CoreSpotlight 框架，CSSearchableItem / CSSearchableIndex"
tags: [core spotlight, corespotlight, spotlight, 索引, 语义搜索, semantic search, 应用内搜索, embedding]
license: "随 SDK 提供"
cost: "免费"
platforms: [iOS, iPadOS, macOS]
repo: "https://developer.apple.com/documentation/corespotlight/cssearchableitem"
links:
  - { label: "WWDC24 · Support semantic search with Core Spotlight", url: "https://developer.apple.com/videos/play/wwdc2024/10131/" }
  - { label: "CSSearchableIndex", url: "https://developer.apple.com/documentation/corespotlight/cssearchableindex" }
updated: "2026-06"
order: 50
---

Core Spotlight 让 App 把自身内容贡献到端侧 Spotlight 索引：每条内容用一个 CSSearchableItem 表示，写入 CSSearchableIndex 后，用户在系统搜索中即可找到 App 的具体条目并深链直达。近年的关键升级是语义搜索（SemanticSearch，WWDC24 引入）：系统对索引内容生成本地向量嵌入，使搜索按「意思相近」而非仅精确字面匹配，用户可用自然语言在完全私有的端侧索引中查找，对文本与图片/视频等媒体尤其有效。需要注意，嵌入生成在端侧进行、有一定时延（早期版本曾出现文本嵌入超时等问题），实际效果与机型和系统版本相关，接入时应做好降级到词法搜索的处理。
