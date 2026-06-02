---
title: "端侧向量检索"
category: retrieval
source: open
deployment: on-device
badge: "开源"

role: "嵌入式向量库 · 离线本地 RAG"
desc: "在手机、IoT 与桌面应用内进程化运行的向量检索，无需联网或外部服务，数据全程留在设备。代表：sqlite-vec / SQLite-Vector（SQLite 扩展，跨平台、内存占用极小）、ObjectBox（移动端原生 HNSW + 数据同步）、阿里 Zvec（号称「向量库界的 SQLite」）。是端侧 RAG、离线语义搜索与隐私优先应用的检索底座。"
capability: "完全离线、隐私不出设备、内存/体积小、移动端 SDK"
limitation: "规模上限低于服务器向量库；功能较精简"
invocation: "嵌入式库随 App 打包：SQLite 扩展或原生 SDK（Swift/Kotlin/Flutter/C++）"
tags: [端侧, on-device, sqlite-vec, "sqlite-vector", objectbox, zvec, 离线检索, edge, 隐私, 移动端, embedded, rag]

license: "Apache-2.0 / MIT（按项目）"
cost: "免费 / 自托管"
platforms: [iOS, Android, 跨平台]
repo: "https://github.com/asg017/sqlite-vec"
links:
  - { label: "sqlite-vec", url: "https://github.com/asg017/sqlite-vec" }
  - { label: "ObjectBox 向量库", url: "https://objectbox.io/vector-database-for-ondevice-ai/" }
updated: "2026-06"
order: 50
---

当应用要离线工作、或数据敏感到不能上云时，检索就得搬进设备。`sqlite-vec`（及商业版 SQLite-Vector）以 SQLite 扩展形式提供向量检索，跨 iOS/Android/Windows/Linux/macOS、默认仅约 30MB 内存，能把向量和业务数据放在同一个本地 db 文件里；`ObjectBox` 是为移动与 IoT 设计的端侧数据库，内置 HNSW 并支持选择性数据同步，提供 Swift/Kotlin/Flutter/C++ SDK；阿里 2026 年开源的 `Zvec` 以「向量库界的 SQLite」定位，作为库嵌入进程、无外部守护进程。配合端侧小 Embedding 模型，即可在断网手机上做完整的本地 RAG。
