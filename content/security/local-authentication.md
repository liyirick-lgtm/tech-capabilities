---
title: "LocalAuthentication"
category: security
source: native
deployment: on-device
badge: "Apple 原生"
role: "生物识别框架 · Face ID / Touch ID"
desc: "iOS/macOS 调用 Face ID、Touch ID 或设备密码做本地身份验证的系统框架。用 LAContext 一次调用即可弹出系统验证 UI；App 永远拿不到指纹或人脸数据——比对全程在 Secure Enclave 内完成，只返回成功或失败。常用于解锁敏感页面、为本地存储授权、配合 Keychain 做带生物识别保护的密钥。"
capability: "Face ID/Touch ID/密码验证，biometryType 探测能力，可绑定 Keychain 访问控制"
limitation: "仅本地验证身份「这台设备的主人在场」，不替代服务端鉴权"
invocation: "LocalAuthentication（LAContext.evaluatePolicy）"
tags: [localauthentication, face id, touch id, 生物识别, biometric, lacontext, 人脸, 指纹, 解锁]
license: "商用闭源"
cost: "免费（系统内置）"
platforms: [iOS, macOS, iPadOS, watchOS]
repo: "https://developer.apple.com/documentation/localauthentication"
updated: "2026-06"
order: 20
related:
  - { to: "secure-enclave", as: "底层硬件（比对在此）" }
  - { to: "passkeys", as: "常配合（授权签名）" }
  - { to: "face-landmark-detection", as: "同类（人脸）" }
---

biometryType 枚举给出设备支持哪种生物识别（none / touchID / faceID / opticID）。生物特征模板与比对都封装在 Secure Enclave，框架只暴露「在场验证」的结果。截至 2026 年实现思路与早期版本保持一致，是几乎所有需要本地授权场景的标准入口。
