---
title: "MCP 与工具调用"
category: retrieval
source: open
deployment: hybrid
badge: "开源 / 协议"

role: "模型连接外部工具与数据的标准 · Agent 接口"
desc: "Model Context Protocol（MCP）是 Anthropic 2024 年开源、2025 年被各家广泛采纳的开放协议，统一了 AI 应用调用外部工具、数据源与服务的方式。它位于各厂商「function calling / tool use」之上：function calling 是模型 API 层，MCP 是其上的集成层——一个 MCP server 可被任意 MCP client 复用，不绑定具体模型。是 Agent 接入检索、文件、数据库与企业系统的事实标准。"
capability: "工具/资源标准化、跨模型复用、可组合 server、Agent 生态"
limitation: "需部署/信任 server，权限与安全需治理；协议仍在演进"
invocation: "MCP server 暴露 tools/resources；客户端经 stdio/HTTP 连接调用"
tags: [mcp, model context protocol, 工具调用, function calling, tool use, agent, 智能体, anthropic, langgraph, 协议, 编排]

license: "MIT（规范与官方 SDK）"
cost: "免费 / 自托管"
platforms: [Server, 跨平台]
repo: "https://github.com/modelcontextprotocol"
links:
  - { label: "MCP 官方", url: "https://modelcontextprotocol.io/" }
  - { label: "MCP GitHub", url: "https://github.com/modelcontextprotocol" }
updated: "2026-06"
order: 70
related:
  - { to: "rag-frameworks", as: "常配合" }
  - { to: "cloud-frontier-llm", as: "运行模型" }
  - { to: "vector-database", as: "可接入" }
---

让模型「会用工具」是 Agent 的核心，而 MCP 解决了「每家工具调用格式各异」的碎片化问题。OpenAI 的 function calling、Anthropic 的 tool use、Google 的 function calling 格式互不相同；MCP 在其上定义统一协议，使同一个 MCP server（如检索、文件、数据库、企业 API）能被任意 MCP client 复用。2025 年起 Anthropic（Claude Desktop/Code）、OpenAI（Agents SDK、ChatGPT 桌面端）、Microsoft、Google、Cursor 等纷纷支持；2025 年底 Anthropic 将协议捐给 Linux 基金会下的 Agentic AI Foundation，官方 SDK 覆盖 TypeScript/Python/C#/Java/Swift，社区 server 已超 500 个。实践中 MCP 与 function calling 并用：function calling 是模型侧能力，MCP 是其上的集成与编排层，常与 LangGraph 等 Agent 框架配合构建多步工作流。
