---
title: "Passkeys"
category: security
source: native
deployment: hybrid
badge: "Apple 原生"
role: "无密码登录 · WebAuthn"
desc: "基于 WebAuthn/FIDO2 公钥密码学的无密码登录方案。注册时设备生成一对密钥，私钥留在 Secure Enclave、经 iCloud 钥匙串端到端同步到用户其他 Apple 设备，公钥交给服务端；登录用生物识别授权签名，天生抗钓鱼、无密码可泄露。原生 App 用 AuthenticationServices，网页用浏览器 WebAuthn API，跨平台可经混合传输登录电视等设备。"
capability: "抗钓鱼无密码登录，iCloud 钥匙串跨设备同步，生物识别授权"
limitation: "需服务端支持 WebAuthn；跨生态迁移仍在完善"
invocation: "AuthenticationServices（ASAuthorizationController / ASAuthorizationPlatformPublicKeyCredentialProvider）"
tags: [passkeys, 通行密钥, webauthn, fido2, 无密码, passwordless, 抗钓鱼, authenticationservices, asauthorization]
license: "商用闭源（标准开放）"
cost: "免费（系统内置）"
platforms: [iOS, macOS, iPadOS, tvOS, Web]
repo: "https://developer.apple.com/documentation/authenticationservices/supporting-passkeys"
links:
  - { label: "WebAuthn 标准", url: "https://www.w3.org/TR/webauthn-3/" }
updated: "2026-06"
order: 30
---

iOS 26 起新增 ASAuthorizationAccountCreationProvider，用一次原生系统 UI 调用同时完成建号与通行密钥发放，实现「默认无密码」注册；并通过 WebAuthn Signal API（ASCredentialUpdater）让服务端主动同步通行密钥的元数据变化，保持记录一致。私钥始终不离开 Secure Enclave。
