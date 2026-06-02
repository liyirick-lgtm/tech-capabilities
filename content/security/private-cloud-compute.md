---
title: "Private Cloud Compute"
category: security
source: native
deployment: hybrid
badge: "Apple 原生"
role: "隐私云端推理 · 端云协同"
desc: "Apple Intelligence 在端侧算力不够时，把请求安全卸载到运行 Apple Silicon 的专用服务器处理的隐私推理系统。服务器复用 iPhone 同款 Secure Enclave 架构，数据传输加密、仅在内存中临时处理，不落盘、不画像、不留日志，连 Apple 自己也无法访问；并提供可验证透明性——独立研究者可审计实际运行的镜像。把端侧的隐私保证延伸到云端。"
capability: "更大模型的云端推理，无状态计算、内存内临时处理、可验证透明性"
limitation: "仅服务 Apple Intelligence；非通用云推理 API"
invocation: "由 Apple Intelligence/Foundation Models 自动路由，开发者不直接调用"
tags: [private cloud compute, pcc, apple intelligence, 端云协同, 隐私推理, 机密计算, secure enclave, 可验证透明]
license: "商用闭源"
cost: "免费（随 Apple Intelligence）"
platforms: [iOS, macOS, iPadOS]
repo: "https://security.apple.com/blog/private-cloud-compute/"
links:
  - { label: "PCC 安全研究", url: "https://security.apple.com/blog/pcc-security-research/" }
updated: "2026-06"
order: 40
---

设计上满足五项要求：无状态计算、可强制执行的保证、无特权访问、不可定向、可验证透明。节点必须在生成响应后删除请求数据。2026 年 2 月起 PCC 服务器硬件升级到 M5 芯片；专用 AI 服务器芯片量产预计 2026 下半年启动。是「端云协同」最具代表性的隐私架构范例。
