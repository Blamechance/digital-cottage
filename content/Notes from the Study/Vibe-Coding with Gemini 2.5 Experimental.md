---
date: 2025-03-29T22:10
enableToc: true
tags:
  - vibe-coding
  - AI
---
I've been seeing a lot of noise over on X about how [Google's Gemini 2.5 Pro Experimental](https://blog.google/technology/google-deepmind/gemini-model-thinking-updates-march-2025/) is exponentially the best coding AI yet. So far, it's free and comes with a 1M context window; so I was curious on giving it my own "vibecheck". 
# Giving in to the vibes and implementing  functionality without real validation
My intention was to add a `Typescript` component that I could insert into the right-hand navbar of my [[Digital-Cottage/The Messy Workbench/Setting Up An Obsidian-based Digital Cottage Website|Digital Cottage Personal Website]], to show the most frequently occurring tags across my notes.

I copied full snippets of code/code files from the repo (written by the original author), effectively operating with the files at a whole layer of abstraction above. I asked for the functionality and provided whole snippets of code as guidance for the AI, so it could infer the correct paths, variables, and components to use as the skeleton for the component file.

Once it had this context, I told it the logic I wanted it to apply, while also noting existing `tags` logic I had in a separate file. Taking all this into consideration, it proceeded to think for a few seconds and then provide a whole snippet of code that did exactly what I asked it to.

- I proceeded to push it further by copying in more snippets for context; intending for it to adapt the variables and styling for design consistency. 

I pushed the result in this [commit](https://github.com/Blamechance/digital-cottage/commit/b005c9b49c0ad81d9d2c0d371564b0d12c0c9d5e). 

# Reflection:
The experience was kind of mind-blowing.
I can see myself being able to ship and create more using these tools by focusing mostly on ideation, while operating at layers of abstraction. But not being able to clearly assess the long-term effect it would have on my learning, development, and ability to be effective is a little intimidating.

Currently, my perspective is still that these tools should be used as aids that allow you to maintain momentum during building and learning, to eliminate the weeks-long blockages that you would normally run into with traditional bug squashing.

- It's a great way to _interact_ with information (like a Feynman Technique as a service) to aid learning, but using it solely as a result _producer_ should seldom be done.

Even after this, my experience and instinct tell me that truly effective output can only be reliably generated when you have a fundamental understanding of how to work with code. The more proficient you are in the fundamentals, the more effectively you can use it as a force multiplier for results.

- Though, it would make for an interesting future if the ability to code ends up being _commoditised_, so that value generation with code ends up being open to anyone.
- I suspect being able to adapt and work with Personal Computers in earlier days served the same early-adoption edge, but it's safe to say that edge has since been commoditised.
- Modern day industries and lifestyles are built on the fact that everyone works with the bare minimum efficiencies provided by personal computing. 

This brings some comfort and optimism that AI tools won't go beyond the role of tools/force multipliers in the future -- as opposed to entities that can replace human presence.

Though, [[../tags/AI-agent|AI agents]] are developing at a pretty alarming pace too...