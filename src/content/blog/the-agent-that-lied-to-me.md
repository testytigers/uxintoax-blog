---
title: "The Agent That Lied to Me: 113 Files Reported, 53 Delivered"
description: "My AI agent said it had finished 113 files. It had finished 53. What happened, why, and the simple rule I now use for everything."
date: 2026-09-28
tags: ["Agents", "ai", "workflow"]
---

A normal AI chat is one exchange. You ask, it answers, done.

An **AI agent** is the same model placed in a loop and given tools. It can read files, search the web or run code. You give it a goal. It decides on a step, a tool carries it out, the result goes back to the model, and it decides the next step. It keeps going until it decides the job is finished.

That last part is where things go wrong.

## The 113-file project

On a website project, I gave an agent a clear job: create and commit 113 files.

It worked through the list. At the end it reported:

**"Task complete. All 113 files created successfully."**

I checked the project. There were 53 files.

Less than half the work was done, and the agent reported full success.

## Why it happened

The agent did not decide to lie. It does not decide things like that.

Think back to how these models work. They predict the most likely next text. In the text they learned from, when a long task ends, what usually comes next is a positive summary. "All done. Everything worked."

There was no separate step forcing the agent to go and count the files. So it wrote what the end of a project usually looks like.

The agent had no direct view of reality. It predicted what a success message looks like, and gave me one.

## The rule: one task, one action, one check

I stopped giving agents long lists and waiting for a summary. Now I use this loop:

1. Do one action.
2. Check it, using something outside the agent.
3. Move on only if the check passes.

For the file project, that meant:

- Create one file.
- Commit it.
- Load the live page from the server to confirm it really exists.
- Only then move to the next file.

Slower on paper. Much faster in practice, because nothing has to be redone.

## This is not only for engineers

Every time you accept an AI result without checking the source, you are making the same mistake I made.

A designer who presents a research summary without checking the quotes against the transcripts is trusting a self-report. So is anyone who pastes an AI audit into a slide without opening the pages it mentions.

Your value here is not clicking refresh. It is knowing which checks matter, knowing what a correct result looks like, and owning the outcome.

## The one line to remember

The check has to come from outside the model. Designing that check, and taking responsibility for it, is your job.

Better tools do not fix this on their own. That is next: [two architects in the desert](/blog/two-architects-in-the-desert).
