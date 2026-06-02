---
title: "Secure Enclave"
category: security
source: native
deployment: on-device
badge: "Apple 原生"
role: "硬件安全子系统 · 密钥底座"
desc: "集成在 Apple SoC 内、与主处理器隔离的专用安全子系统，独立管理密钥与加解密。私钥在其中生成且永不以明文离开芯片——你只能让它「用」密钥而拿不到密钥本身，主系统内核即便被攻破也保护用户数据。生物识别、Passkeys、App Attest、设备加密等都以它为信任根。"
capability: "片上生成/保管 NIST P-256 密钥，签名/密钥交换/对称加密，独立内存加密(AES-XEX)"
limitation: "仅 P-256 曲线；通过上层框架间接调用，非通用加速器"
invocation: "经 CryptoKit SecureEnclave / Keychain (kSecAttrTokenIDSecureEnclave) 访问"
tags: [secure enclave, sep, apple, 安全隔区, 硬件安全, 密钥, keychain, p-256, 信任根, fips]
license: "商用闭源"
cost: "免费（系统内置）"
platforms: [iOS, macOS, iPadOS, watchOS]
repo: "https://support.apple.com/guide/security/secure-enclave-sec59b0b31ff/web"
links:
  - { label: "Apple Platform Security", url: "https://support.apple.com/guide/security/welcome/web" }
updated: "2026-06"
order: 10
related:
  - { to: "cryptokit", as: "上层框架" }
  - { to: "passkeys", as: "信任根支撑" }
  - { to: "local-authentication", as: "信任根支撑" }
  - { to: "private-cloud-compute", as: "架构被复用" }
---

Apple 全部设备安全能力的硬件信任根。自 2020 年起 A13/M 系列等芯片陆续通过 FIPS 140-3（含物理安全 Level 3）验证。开机时 Boot ROM 为内存保护引擎生成随机临时密钥，写入专用内存区时用 AES（Mac XEX 模式）加密并计算 CMAC 校验。Private Cloud Compute 的服务器也复用了同一套 Secure Enclave 架构。
