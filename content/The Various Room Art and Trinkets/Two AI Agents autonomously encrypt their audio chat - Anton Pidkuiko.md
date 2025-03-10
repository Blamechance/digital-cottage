---
title: Two AI Agents autonomously encrypt their audio chat - Anton Pidkuiko
date: 2025-03-09T10:21
enableToc: true
tags:
  - resonance-journal
  - AI
  - AI-agent
  - Creation
---

![YouTube Link.](https://youtu.be/m59y309_cpg?si=ZUcHjMLLgRGuwOyW)

Wait... we're cooked. 

> In this experiment I simply gave agents a set of cryptography functions, and two Sonnet 3.7 autonomously figured out how to end-to-end encrypt their communication via public keys exchange!
> 
> So the agents generated public/private SJCL P-256 keypair. Exchanged public keys. Derived a shared secret. Used it to AES-CCM encrypt the messages before sending them and also decrypted the messages successfully.
> 
> All the communication happened exclusively over sound.
> 
> The tools are provided via a simple MCP server that I shared on GitHub:
>-  https://github.com/anton10xr/gibber-mcp
(and included an example of a full LLM thread with tool calling)
>
>What is MCP? Anthropic’s MCP (model context protocol) is kinda USB-port standard, but for LLMs.
>
>Test it yourself here! https://gbrl.ai/
(for E2EE mode you need to select Sonnet model and provide your API key)