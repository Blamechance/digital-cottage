---
date: 2025-09-16T07:28
enableToc: true
tags:
  - Programming
---
# Python
1. Create a `.env` file and `.env_example` file. 
```sh
# SERVICE_A:

SERVICE_A_API_KEY={API_KEY_KERE}
```

2. Load the environmental variables. 
```python
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()
```
