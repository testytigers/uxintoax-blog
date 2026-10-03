---
title: "Garbage In, Garbage Out: The Data Food Chain"
description: "Most of your impact is decided before you open an AI tool. It comes down to what you feed it. Here is a simple ladder for judging your inputs."
date: 2026-09-24
tags: ["Research", "ai", "ux"]
---

The model only sees what you give it. So the next question is simple: what are you giving it?

Here is a way to think about it. Picture your design inputs as a food chain, from smallest to biggest.

- **Plankton:** your personal taste and current trends.
- **Shrimp:** early sketches and wireframes. More structure, but still only your own opinion.
- **Carp:** a project brief handed down by someone else, with no access to real users.
- **Dolphin:** five user interviews. A big step up, because you hear real voices.
- **Shark:** interviews plus survey data, so you know how common a problem is.
- **Whale:** thousands of real signals, like support tickets, search terms, cancellation reasons and session recordings.

Most of us spend our time somewhere between plankton and dolphin. Not because we are lazy, but because reading 10,000 support tickets in a normal sprint used to be impossible.

## What changed

Reading volume used to be the bottleneck. AI reads fast and sorts things consistently. That removes the barrier.

On one project, AI was used to sort about 10,800 support tickets that held years of user complaints.

The sorting was roughly 80 to 88 percent accurate. Some tickets landed in the wrong group. Some were missed. The project still worked. Here is why.

The goal was never perfect counts. The goal was finding the biggest problems. And rankings survive noise.

If a problem appears in 900 tickets and the model gets 15 percent of them wrong, it still counts about 750. That problem is still clearly near the top.

The team took the top eight problems from that ranking and ran a workshop with more than twenty real users. People recognised the issues straight away. These were the exact pains they had lived with for years.

## Two rules worth keeping

**A big pile of imperfect data beats a tiny perfect sample.** This holds when you are looking for patterns and rankings, not exact numbers.

**AI moves the bottleneck. It does not remove you.** The machine sorts the volume. Real users and real tests confirm whether the conclusions are right. In that project, the workshop was what made the findings trustworthy.

## How to move up one level this month

You do not need to jump to whale. Pick one step up from where you usually work.

- If you design from briefs, ask for access to five users.
- If you run interviews, add a short survey to see how common each problem is.
- If you have access to support tickets or reviews, export a few hundred and ask the AI to group them, with ticket IDs next to every group so you can check.

## The one line to remember

The model is only as good as the data in front of it. Most of your impact is decided before you even open the tool.

Data tells you what people say. Next, why that is not the whole story: [listening is a skill, and AI does not have it](/blog/listening-is-a-skill-ai-does-not-have).
