---
date: 2025-02-11T22:14
enableToc: false
tags:
  - SQL
  - database
  - indexing
  - index
---

# Database Indexing explained - Hussein Nasser
[Database Indexing Explained (with PostgreSQL)](https://www.youtube.com/watch?v=-qNSXK7s7_w)
- We try and **avoid reading from disk as much as possible**. 
- When reading from non-indexed columns, the only way to satisfy queries is to **sequentially go through the fields.**

# # How do indexes make databases read faster? - [Arpit Bhayani](https://www.youtube.com/@AsliEngineering)
[How do indexes make databases read faster?](https://www.youtube.com/watch?v=3G293is403I)
- Any reads from disk will made in *`blocks`*,
- These `blocks` are sequential and represent the unit from which *read operations* are made. 
	- Additionally, to read a specific portion of data, the entire block context needs to be read. 
	![[attachments/db-index-fundamentals.png]]
	- If each **record/row** is `200B` large, then a single block could then represent 3 records.
	- These records will be serialised sequentially on disk. 
	![[attachments/db-index-fundamentals-1.png]]

- **Index high level definition**:
	-  Indexes are small referential tables that hold row references against the indexed value. 
	- Functionally, Indexes are virtually **2 column tables.**
	- Indexes are **SORTED by the indexed value**. 
	![[attachments/db-index-fundamentals-2.png]]


## Example flow of index efficiency:
### Query flow for non-indexed output:
- ![[attachments/db-index-fundamentals-3.png]]

#### Output flow if utilising index

![[attachments/db-index-fundamentals-4.png]]
![[attachments/db-index-fundamentals-5.png]]

![[attachments/db-index-fundamentals-6.png]]
A major feature to note is that indexes are **ORDERED**. 
- The natural order for records written to disk is instead in the *natural order the data was written -- unordered*. 
- This allows queries context to optimise WHERE within the index data structure to look, to find the desired records. 
- It eliminates unnecessary iterations over tables. 
This is why we want to make sure we are querying on columns that are indexed! This avoids needing to run sequential reads of entire tables (full table scans/`COLL_SCAN`). 


---
