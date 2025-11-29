---
title: Labbing Vector Search, Langchain and local LLMs
date: 2025-11-09T12:36
enableToc: true
tags:
  - AI
  - vector-search
  - langchain
  - LLM
  - mongodb
---
# Repo:
- [Blamechance/quickstart-AI-labs](https://github.com/Blamechance/quickstart-AI-labs) 

### Week 1: LangChain Basics
- [ ] Complete LangChain `Build a semantic search engine` tutorial. 
	- [Link](https://docs.langchain.com/oss/python/langchain/knowledge-base). 
	- Use Voyage AI to create embeddings.
	- Store vectors locally/in-memory for now. 
	- Related Note: [[../Notes from the Study/Getting-started-with-langchain|Getting-started-with-langchain]]
#### Resources:
- [Integrate MongoDB with LangChain](https://www.mongodb.com/docs/atlas/ai-integrations/langchain/#integrate-mongodb-with-langchain)
- [VoyageAI Quick-Start Guide.](https://docs.voyageai.com/docs/quickstart-tutorial)
- Markdown loader:
	- [UnstructuredMarkdownLoader | 🦜️🔗 LangChain](https://python.langchain.com/docs/integrations/document_loaders/unstructured_markdown/) 


### Week 2: Integrating LangChain with MongoDB Atlas
- [ ] Complete tutorial for integrating MongoDB with Langchain.
	- [ ] [MongoDB Vector Search Quick Start - Atlas - MongoDB Docs](https://www.mongodb.com/docs/atlas/atlas-vector-search/tutorials/vector-search-quick-start/?deployment-type=atlas&interface-atlas-only=driver&language-atlas-only=python) 
	- [ ] [Integrate MongoDB with LangChain](https://www.mongodb.com/docs/atlas/ai-integrations/langchain/#integrate-mongodb-with-langchain). 

### Week 3: Re-write app using `VoyageAI` Python SDK. 
To learn the nuances between leveraging `langchain` abstractions/components, vs. one without a framework dependency. 
- [VoyageAI | API Key and Python Client](https://docs.voyageai.com/docs/api-key-and-installation) 
- Chose to not manually do`sdk<>mongodb` path, since it would take more time than desired to learn to use mongoclient object, uploading embeddings to Atlas etc. 
	- [ ] This can be done when building an actual implementation. 

### Week 4: Develop a tool that solves a problem using these foundations. 
