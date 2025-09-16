---
date: 2025-08-21T07:20
enableToc: false
tags:
  - REST
  - api
---
# What is Rest? 
REST (Representational State Transfer) is an architectural style that provides principles and constraints that guide design of "rest-ful" services. Per the [original dissertation](https://ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm) by Roy Fielding (2001):

> REST provides a set of architectural constraints that, when applied as a whole, emphasizes scalability of component interactions, generality of interfaces, independent deployment of components, and intermediary components to reduce interaction latency, enforce security, and encapsulate legacy systems.


> [!NOTE] 
> In practice, modern software design is more often accurately described as being `REST-like`. It's uncommon to see something out in the wild that completely adheres to the following principles. 

# Six Guiding Principles of REST  

### 1. Client–Server Separation  
- Client and server concerns are separated.  
- Client handles UI/experience, server handles data and logic.  
- Improves portability and scalability.  

### 2. Statelessness  
- Each request from client → server must contain all info needed to process it.  
- Server does not store client context between requests.  
- Simplifies scaling, but shifts state management to client.  

### 3. Cacheability  
- Responses should define themselves as cacheable or not.  
- Enables reuse of responses, improves performance, reduces server load.  

### 4. Uniform Interface  
- Standardized, consistent way to interact with resources.  
- Key elements: 
	- resource identification (`URI`), 
	- resource representation (`JSON`/`XML`/etc), 
	- self-descriptive messages, 
	- hypermedia as the engine of application state (`HATEOAS`).  
- Decouples client and server.  

### 5. Layered System  
- Client does not need to know if it is connected directly to the server or through intermediaries (e.g. load balancers, proxies).  
- Enables scalability and security through middle layers.  

### 6. Code on Demand (Optional)  
- Servers can extend client functionality by transferring code (e.g. JavaScript).  
- Rarely emphasized, but part of the formal constraints.  

# Common Practice of Using HTTP to Facilitate REST  

Although REST is not bound to HTTP, it has become the dominant protocol used:  

- **GET**  
  - Retrieve a representation of a resource.  
  - Safe (does not alter state) and idempotent (multiple identical requests give the same result).  
  - Example: `GET /users/123` → returns details for user 123.  

- **POST**  
  - Create a new resource or perform an operation.  
  - Not idempotent (two POSTs can create two resources).  
  - Example: `POST /users` with JSON body → creates new user.  

- **PUT**  
  - Update or replace an existing resource (full update).  
  - Idempotent (repeated PUT with same data results in same state).  
  - Example: `PUT /users/123` with body → replaces user 123.  

- **PATCH**  
  - Partial update of a resource.  
  - More efficient than PUT for small changes.  
  - Example: `PATCH /users/123` with `{ "email": "new@email.com" }`.  

- **DELETE**  
  - Remove a resource.  
  - Idempotent (repeated deletes either remove resource or return “not found”).  
  - Example: `DELETE /users/123`.  

- **HEAD**  
  - Same as GET but returns only headers, no body.  
  - Useful for metadata (e.g. checking if resource exists, or cache validation).  

- **OPTIONS**  
  - Returns supported HTTP methods for a resource.  
  - Useful for discovery and CORS preflight requests.  



































---
### Resources:
- [What is REST? | Restfulapi](https://restfulapi.net/) 