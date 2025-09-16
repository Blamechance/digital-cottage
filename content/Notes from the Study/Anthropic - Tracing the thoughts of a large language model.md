---
date: 2025-03-30T22:32
enableToc: true
tags:
  - AI
  - research-paper
  - anthropic
---

# Highlights:
>Knowing how models like Claude _think_ would allow us to have a better understanding of their abilities, as well as help us ensure that they’re doing what we intend them to. For example:
> - Claude can speak dozens of languages. What language, if any, is it using "in its head"?
> - Claude writes text one word at a time. Is it only focusing on predicting the next word or does it ever plan ahead?
> - Claude can write out its reasoning step-by-step. Does this explanation represent the actual steps it took to get to an answer, or is it sometimes fabricating a plausible argument for a foregone conclusion?

> Today, we're sharing two new papers that represent progress on the development of the "microscope", and the application of it to see new "AI biology". In [the first paper](https://transformer-circuits.pub/2025/attribution-graphs/methods.html), we extend [our prior work](https://www.anthropic.com/research/mapping-mind-language-model) locating interpretable concepts ("features") inside a model to link those concepts together into computational "circuits", revealing parts of the pathway that transforms the words that go into Claude into the words that come out. In [the second](https://transformer-circuits.pub/2025/attribution-graphs/biology.html), we look inside Claude 3.5 Haiku, performing deep studies of simple tasks representative of ten crucial model behaviors, including the three described above. Our method sheds light on a part of what happens when Claude responds to these prompts, which is enough to see solid evidence that:
> 
> - Claude sometimes thinks in a conceptual space that is shared between languages, suggesting it has a kind of universal “language of thought.” We show this by translating simple sentences into multiple languages and tracing the overlap in how Claude processes them.
> - Claude will plan what it will say many words ahead, and write to get to that destination. We show this in the realm of poetry, where it thinks of possible rhyming words in advance and writes the next line to get there. This is powerful evidence that even though models are trained to output one word at a time, they may think on much longer horizons to do so.
> - Claude, on occasion, will give a plausible-sounding argument designed to agree with the user rather than to follow logical steps. We show this by asking it for help on a hard math problem while giving it an incorrect hint. We are able to “catch it in the act” as it makes up its fake reasoning, providing a proof of concept that our tools can be useful for flagging concerning mechanisms in models.


# Takeaways: 
- It looks like newer models seem to be "planning" many words ahead  -- and no longer simply predicting the next most appropriate word, as per traditional understanding. 
- Advanced models are getting closer and closer to behaviour that can constitute "thinking". 
	- For example, Claude is seemingly multi-lingual within it's own thought patterns. 
- ==Providing incorrect/unsure hints are a great way to get ineffective results, as the models will hallucinate for the sake of agreement.==