---
title: "App Attest / DeviceCheck"
category: security
source: native
deployment: hybrid
badge: "Apple 原生"
role: "设备与 App 完整性证明"
desc: "DeviceCheck 框架帮你判断「请求确实来自正版 App、运行在未越狱的真机上」，对抗欺诈与刷量。App Attest 用 Secure Enclave 里的私钥对服务端下发的挑战值签名，由 Apple 与你的服务端共同校验；DeviceCheck 还能给设备打两位持久标记位（如「是否已领过新人福利」)，跨重装保留。"
capability: "App 完整性证明、请求合法性断言(attest/assert)、每设备两位持久状态"
limitation: "仅未越狱 iOS 真机；需自建服务端校验，覆盖面有限"
invocation: "DeviceCheck（DCAppAttestService / DCDevice），配合自有服务端"
tags: [app attest, devicecheck, 设备完整性, attestation, 防欺诈, 反作弊, secure enclave, dcdevice]
license: "商用闭源"
cost: "免费（系统内置）"
platforms: [iOS, iPadOS, tvOS]
repo: "https://developer.apple.com/documentation/devicecheck"
links:
  - { label: "建立 App 完整性", url: "https://developer.apple.com/documentation/devicecheck/establishing-your-app-s-integrity" }
updated: "2026-06"
order: 60
related:
  - { to: "secure-enclave", as: "运行硬件（私钥驻留）" }
  - { to: "cryptokit", as: "常配合（签名）" }
---

流程：服务端下发随机挑战 → App 用 DeviceCheck API 在 Secure Enclave 生成密钥对并对挑战 attest → 服务端经 Apple 校验后信任该公钥，后续请求用 assert 签名。App Attest 自 iOS 14 随 DeviceCheck 推出，私钥始终驻留 Secure Enclave。注意它只覆盖未修改的 iOS 设备，面对高级威胁能力有限，常与其他风控手段叠加使用。
