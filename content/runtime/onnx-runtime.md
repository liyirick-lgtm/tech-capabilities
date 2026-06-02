---
title: "ONNX Runtime"
category: runtime
source: open
deployment: hybrid
badge: "开源"

role: "跨平台推理/训练加速器 · 一处导出处处跑"
desc: "微软主导的跨平台推理（兼训练）引擎，吃 ONNX 标准模型格式，通过「执行提供器（Execution Provider）」对接各类硬件后端：CUDA、TensorRT、DirectML、OpenVINO、CoreML、QNN、WebGPU、WebNN 等。从 PyTorch/TensorFlow/scikit-learn 等导出后即可在服务器、桌面、移动、浏览器统一部署，配合图优化与量化获取性能。"
capability: "跨框架/跨硬件、图优化、量化、Web/移动/服务端统一部署"
limitation: "需先转 ONNX；最新算子/前沿模型支持可能滞后"
invocation: "Python/C++/C#/JS 等多语言 API；加载 .onnx + 选择 EP"
tags: [onnx, onnxruntime, 推理, 跨平台, execution-provider, directml, openvino, webgpu, webnn, 量化, hybrid, 微软]

license: "MIT"
cost: "免费 / 自托管"
platforms: [Server, Web, 跨平台]
repo: "https://github.com/microsoft/onnxruntime"
links:
  - { label: "ONNX Runtime", url: "https://onnxruntime.ai/" }
  - { label: "GitHub", url: "https://github.com/microsoft/onnxruntime" }
updated: "2026-06"
order: 40
---

`ONNX Runtime` 的卖点是「一处导出、处处运行」：把模型转成 ONNX 标准格式后，靠可插拔的执行提供器映射到具体硬件——服务器上走 CUDA/TensorRT，Windows 走 DirectML，Intel 走 OpenVINO，苹果走 CoreML，高通走 QNN，浏览器走 WebGPU/WebNN。它跨深度学习框架（PyTorch、TensorFlow/Keras）也跨经典 ML（scikit-learn、XGBoost、LightGBM），并内置图优化与量化通道。因此既能在云端做高性能服务，也能塞进移动端或网页，是典型的「端云皆可」运行时。代价是模型须先转 ONNX，且对最前沿算子的支持偶有滞后。
