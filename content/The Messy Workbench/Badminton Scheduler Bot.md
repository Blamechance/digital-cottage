---
title: Badminton Scheduler Bot
date: 2025-11-29T12:09
enableToc: true
tags:
  - AI-agent
  - AI
  - project
---
# Concept

My friends and I have a weekly tradition of playing badminton on Sundays, typically in a mixed doubles format. 

Since the number of people who show up varies from week-to-week, there was a constant tediousness to arranging equitable match-up schedules each week that accommodated:
- Equal amount of matches played/rest games
- flexible schedule modifications, to account for skill-gaps
-  Even intervals of matches played + rest games (instead of large streaks of consecutive play time and inactivity)

The naive (and lazy) approach we were using was to simply prompt ChatGPT with the names of the players each week, and working off the output table. 
- This was not flexible or reliable however, due to the non-deterministic nature of simple input prompting. 
- It would often make mistakes
- The most reliable conversation was only on my own OpenAI account history (sharing the conversation didn't yield effective results). 

*ChatGPT Example*:

|Match|Teams|Sitting Out|
|:-:|---|---|
|1|Jacky & Jason vs Tommy & Edward|Geoff, Nathan, Harry|
|2|Geoff & Nathan vs Jacky & Harry|Jason, Tommy, Edward|
|3|Jason & Edward vs Nathan & Harry|Jacky, Tommy, Geoff|
|4|Jacky & Tommy vs Geoff & Edward|Jason, Nathan, Harry|
|5|Nathan & Harry vs Jason & Tommy|Jacky, Geoff, Edward|
|6|Jacky & Geoff vs Nathan & Edward|Jason, Harry, Tommy|
|7|Jason & Harry vs Jacky & Edward|Geoff, Nathan, Tommy|
|8|Tommy & Nathan vs Geoff & Harry|Jacky, Jason, Edward|
|9|Jacky & Nathan vs Jason & Geoff|Edward, Tommy, Harry|
|10|Edward & Harry vs Jacky & Tommy|Jason, Nathan, Geoff|
|11|Jason & Geoff vs Nathan & Edward|Jacky, Tommy, Harry|
|12|Harry & Tommy vs Jason & Nathan|Jacky, Geoff, Edward|
|13|Jacky & Edward vs Geoff & Harry|Jason, Nathan, Tommy|
|14|Nathan & Tommy vs Jason & Edward|Jacky, Geoff, Harry|


I've spent some time drafting how a simple web app could serve this use-case, but after some sketching, it's been sitting in my TODO list ever since. 

Replit announced [free usage of their `fast mode` agent this week,](https://blog.replit.com/fast-mode) so I figured I would take these requirements and ideas and see how good the result would be.

The solution worked basically out the box! 

Check it out here:
- https://baddy-bot.tcao.dev/ 
- [GitHub Repo](https://github.com/Blamechance/badminton-scheduler-bot).  

# Implementation

## Technical approach

**Stack/Tools**: 
- Replit!
	- The agent created a node.js app using primarily HTML/CSS and Typescript. 
- For hosting, I used my existing domain with [fly.io](https://fly.io/).
	- This was my first time using `fly.io`, but the experience was quite seamless. After tweaking some `port` configs and domain verification, `fly.io` is able to auto-magically start and stop the node server and deploy from the github repo directly. 
	- Very suitable for a vibe code project! 


**Key decisions**: 
- I mostly fully gave-in to the LLM and vibe-code process here. This worked since my requirement was very narrow, simple and entirely utilitarian. 
- Mathematically, my naive approach was to simply  ensure equitable play/rest time by ensuring the number of matches scheduled was at least twice as long as the number of players (e.g 12 scheduled matches for a group of 6). 
	- The agent seemingly upgraded on this by creating a complex algorithim that tracked play time/rest-time and greedy logic for "new" pairings, applying it to each round generated. 
- There were some intentional design decisions made, in my guiding of the agent though, including: 
	- To allow stateful interactions, leverage browser `localStorage` instead of any kind of database. 
	- Not over-complicating the front-end elements, so that mobile viewport was simply the same elements with a more narrow width (less chance of things breaking). 
	- Adding UX improvements, like row highlighting for wins/losses, within a players match history. 



##  Conversation with Agent highlights:
```md
> create me an interactive tool for casual badminton players, that will schedule evenly distributed round robin double match schedules, that prioritise mixing up pairings and even playtime (players don't sit out or play matches for too many matches in a row). It should support from 4-10 players.

> Although the functionality is sound, the UI elements for each round looks like it has a lot of empty space. Please add a new element for each round, that allows the tracking of the score. 

Also, make the "Round x" elements under the "Generated Schedule" more compact while maintaining readability.

> Add buttons to the score tracking so that the score may be incremented/decremented instead of needing to add in the integer to a input box.

Make sure that the total generated rounds are at least 2 times the number of players (but make sure it's an even multiple so that the total number of generated rounds allows equal amount of matches played per player).

...

> In the "Player" element for each player statistics, add a collapsible element that shows the match history/scores of the matches they played, based on the "Rounds" above.

...

> implement client-side persistence by saving state of the generated schedule to localStorage. Create a button to "Reset Schedule" to clear this store as needed.

...

> In the match history element, also make it so if the player is on the side which has a lower score, the row is highlighted red (to indicate they lost). If they were instead on the winning side, highlight it in an appropriate green.

// Fixing bugs:

> For each round, allow for match-up players to be modified (such as replacing a player with another). The player that may be replaced in, should only be from the list of original players. The change made should update the player statistics/collapsible elements accordingly.

> Although visually, the atomic change of modified player works, if there are duplicate of the same player in a round's match, trying to edit on of the cell will change the other duplicate cell, so it becomes an infinite loop where you can't effectively undupe the matchup occurrence.

>  Also, when editing the player, i should be able to cancel my edit.
>
```


# Reflection
- This was a huge success -- I was already impressed when I experimenting Gemini 2.5 Pro before to vibe-code a subset of a problem to an existing project, but this end-to-end idea to solution was a whole other level. 
	- See: [[../Notes from the Study/Vibe-Coding with Gemini 2.5 Experimental|Vibe-Coding with Gemini 2.5 Experimental]]




# References


![[attachments/media_Vibe-Coding a Badminton Scheduler Bot.png]]
![[attachments/media_Vibe-Coding a Badminton Scheduler Bot-1.png]]
![[attachments/media_Vibe-Coding a Badminton Scheduler Bot-2.png]]
![[attachments/media_Badminton Scheduler Bot.png]]