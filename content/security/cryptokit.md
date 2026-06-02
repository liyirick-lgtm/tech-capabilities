---
title: "Apple CryptoKit"
category: security
source: native
deployment: on-device
badge: "Apple 原生"
role: "端侧加密框架 · 含后量子"
desc: "Apple 的现代 Swift 加密框架，提供哈希、HMAC、对称加密(AES-GCM/ChaChaPoly)、密钥协商(ECDH)与签名等原语，API 类型安全、难误用。可直接驱动 Secure Enclave 生成与使用片上私钥。iOS 26 起新增后量子密码：ML-KEM(768/1024) 密钥封装与 ML-DSA(65/87) 签名，让开发者在自家 App 里就能用上抗量子加密。"
capability: "AES-GCM/ChaChaPoly、ECDH、Ed25519/P-256 签名、ML-KEM/ML-DSA 后量子、Secure Enclave 密钥"
limitation: "Swift-first；底层算法库非全部开源"
invocation: "CryptoKit（SymmetricKey / SecureEnclave.P256 / KEM / MLDSA）"
tags: [cryptokit, apple, 加密, 端侧加密, aes-gcm, ecdh, 后量子, ml-kem, ml-dsa, pqc, swift]
license: "商用闭源"
cost: "免费（系统内置）"
platforms: [iOS, macOS, iPadOS, tvOS, watchOS]
repo: "https://developer.apple.com/documentation/cryptokit/"
links:
  - { label: "后量子加密说明", url: "https://support.apple.com/guide/security/secc7c82e533/web" }
updated: "2026-06"
order: 50
---

后量子能力自 iOS/iPadOS/macOS/tvOS/watchOS 26 全平台落地，系统侧已用于 iMessage、VPN 与 TLS；CryptoKit 把同样的抗量子原语开放给第三方 App，覆盖端到端加密通信、文档签名、更新校验等需要直接访问 KEM/签名原语的场景。2026 年 5 月 Apple 还在 GitHub 公开了相关后量子加密实现代码。
