---
title: "文档理解 (OCR-Free VLM / dots.ocr)"
category: multimodal
source: open
deployment: hybrid
badge: "开源"
role: "PDF·扫描件→结构化文本/版面 · 端到端"
desc: "用视觉语言模型直接「读」文档,把 PDF、扫描件、票据、表格转成带版面结构的文本,替代传统 OCR 多段流水线。dots.ocr(rednote-hilab,基于 1.7B LLM)在单一 VLM 内联合做版面检测、内容识别与关系理解,OmniDocBench/OLMoOCR 上达 SOTA,多栏与老旧扫描件尤强;olmOCR 2(AllenAI)用 GRPO 强化学习+单元测试奖励训练。适合文档抽取、知识库构建、合同/报表解析。"
capability: "版面解析、表格/公式还原、多语种、多栏与扫描件"
limitation: "超长文档需切页;手写/极端版面仍有误差"
invocation: "开源权重,vLLM / Transformers 自托管;亦可调云端 VLM"
tags: [文档理解, "document-understanding", ocr, "ocr-free", "dots.ocr", olmocr, 版面解析, 表格识别, pdf, 多语种]
license: "dots.ocr: MIT / olmOCR: Apache-2.0"
cost: "免费 / 自托管"
platforms: [Server, 跨平台]
repo: "https://github.com/rednote-hilab/dots.ocr"
links:
  - { label: "dots.ocr GitHub", url: "https://github.com/rednote-hilab/dots.ocr" }
  - { label: "OCR in the Era of LLMs (清单)", url: "https://github.com/Yuliang-Liu/AWESOME-OCR-LLM" }
updated: "2026-06"
order: 50
---

文档理解是多模态里最落地的子领域:目标是把「图片形态的文档」变成机器可用的结构化数据。趋势是从 Donut/Nougat 这类 OCR-free 文本识别,走向端到端 VLM 版面解析——一次前向同时输出文字、版面框与阅读顺序/关系,取代「检测+识别+后处理」的模块化管线。dots.ocr 用仅 1.7B 的小模型在 OLMoOCR benchmark 拿到 79.1,超过 MonkeyOCR-Pro-3B,在多栏页和老扫描件上甚至胜过 GPT-4o、Gemini Flash 2;olmOCR 2 则把大规模 SFT 与 RL 结合提升保真度。需要更强语义推理时,也可直接把 PDF 喂给云端旗舰 VLM,但自托管小模型在成本、隐私和批量吞吐上更划算。
