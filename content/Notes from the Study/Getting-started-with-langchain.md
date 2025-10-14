---
date: 2025-09-20T12:46
enableToc: true
tags:
  - AI
  - vector-search
---

Langchain provides components and abstraction that is useful to for quick prototypes/POCs, while also allowing vendor agnostic way to work with LLMs.
- By being vendor agnostic, users can interact with provider APIs in a consistent way. 
- Provided convenient components include: 
	- A `text splitter` function. 
	- A PDF loader etc. 
	- A lightweight `InMemoryVectorStore` implementation. 

Langchain has many [resources](https://python.langchain.com/docs/tutorials/) which makes it easy to get started. 

Specifically, I suggest the following:
- [Build a semantic search engine](https://python.langchain.com/docs/tutorials/retrievers/) 
	- Build a simple semantic search engine. 
	- Familiarises you with LangChain's [document loader](https://python.langchain.com/docs/concepts/document_loaders/), [embedding](https://python.langchain.com/docs/concepts/embedding_models/), and [vector store](https://python.langchain.com/docs/concepts/vectorstores/) abstractions.
- [Build a simple LLM application with chat models and prompt templates](https://python.langchain.com/docs/tutorials/llm_chain/)
	- Build a simple LLM app. 
- [Build a Retrieval Augmented Generation (RAG) App](https://python.langchain.com/docs/tutorials/rag/)
	- Build a simple RAG implementation. 

# Methods: 
### Invoking: 
Runnable methods that result in the execution of the Runnable (e.g., `invoke`, `batch`, `stream`, `astream_events`) work with these input and output types.

- invoke: Accepts an input and returns an output.
- batch: Accepts a list of inputs and returns a list of outputs.
- stream: Accepts an input and returns a generator that yields outputs.

The **input type** and **output type** vary by component:

| Component    | Input Type                                       | Output Type           |
| ------------ | ------------------------------------------------ | --------------------- |
| Prompt       | dictionary                                       | PromptValue           |
| ChatModel    | a string, list of chat messages or a PromptValue | ChatMessage           |
| LLM          | a string, list of chat messages or a PromptValue | String                |
| OutputParser | the output of an LLM or ChatModel                | Depends on the parser |
| Retriever    | a string                                         | List of Documents     |
| Tool         | a string or dictionary, depending on the tool    | Depends on the tool   |
[*(Documentation link)*](https://python.langchain.com/docs/concepts/runnables/#input-and-output-types)

