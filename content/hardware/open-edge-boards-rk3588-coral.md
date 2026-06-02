---
title: "开放边缘板(RK3588 / Coral Edge TPU)"
category: hardware
source: open
deployment: hybrid
badge: "开放生态"
role: "低成本边缘 AI 开发板 · 端/边两用"
desc: "面向 DIY、原型与轻量边缘部署的低成本算力。Rockchip RK3588 是 8nm 八核 SoC(4×A76 + 4×A55)+ Mali-G610 GPU + 6 TOPS NPU,支持 INT4–FP16 与 8K 编解码,生态以开放开发板与开源驱动为主;Google Coral Edge TPU(USB/M.2/SoM)4 TOPS、约 2W,跑 TensorFlow Lite,可给树莓派等任意主机外挂推理。"
capability: "RK3588 六 TOPS NPU、八核 CPU、8K 编解码;Coral 4 TOPS、约 2W、MobileNet 近 400fps"
limitation: "算力远低于 Jetson;模型需量化/转换;RK3588 NPU 调优依赖 RKNN 工具链,Coral 仅吃 TFLite int8"
invocation: "RK3588 经 RKNN-Toolkit;Coral 经 PyCoral / TensorFlow Lite + Edge TPU Compiler"
tags: ["rk3588", rockchip, coral, "edge tpu", npu, 边缘, edge, 开发板, sbc, rknn, "tflite", 树莓派, 开源硬件, "hybrid"]
license: "开放硬件生态 / 部分开源驱动"
cost: "消费级(开发板数百元;Coral USB 约 $60)"
platforms: [Linux, 跨平台]
repo: "https://coral.ai/"
links:
  - { label: "Coral 文档", url: "https://www.coral.ai/docs/edgetpu/faq/" }
  - { label: "RK3588 (Rockchip)", url: "https://www.rock-chips.com/" }
updated: "2026-06"
order: 70
related:
  - { to: "litert-executorch", as: "调用它的运行时" }
  - { to: "nvidia-jetson", as: "竞品" }
  - { to: "model-quantization", as: "依赖" }
  - { to: "onnx-runtime", as: "常配合" }
---

当不需要 Jetson 那么强、但要把推理放到端侧或边缘时,低成本开放板是务实选择。Rockchip RK3588 是 8nm 八核 SoC(4×Cortex-A76 + 4×A55)配 Mali-G610 GPU 与 6 TOPS NPU,支持 INT4/INT8/INT16/FP16/BF16 与 8K 编解码;它本身是商用芯片,但围绕它有大量开放开发板(YY3588、ArmSoM、Orange Pi 等)与开源 Linux/Android 驱动,部署既可端侧也可做边缘盒子,故标 hybrid。Google Coral Edge TPU 走外挂路线:USB / M.2 / SoM 形态,4 TOPS、约 2W,跑量化后的 TensorFlow Lite 模型,MobileNet v2 近 400fps,可给树莓派等任意主机加一块推理协处理器。两者算力都远低于 Jetson,模型需量化转换(RK3588 用 RKNN-Toolkit,Coral 用 Edge TPU Compiler 编译 int8 TFLite)。
