---
title: "AI Just Predicts the Next Word"
description: "Every strange thing AI does comes from one simple mechanism. Once you see it, the rest makes sense."
date: 2026-09-21
tags: ["Basics", "ai", "ux"]
---

Finish this sentence in your head:

"The sky is blue, but the grass is ___."

You said green. You did not look anything up or think about plants. The word just showed up, because you have seen that pattern many times.

That is how a large language model works.

It looks at the text so far and predicts the word most likely to come next. It adds that word, then predicts the next one, and the next, until it stops. That is the whole trick.

## How it was built

Engineers gathered a huge library of text: books, websites, articles, code, forum posts and manuals.

Then they ran a guessing game. The program saw a sentence with the last word hidden, made a guess, and checked it against the real text. When it guessed wrong, it adjusted its internal numbers a tiny bit.

It played this game billions of times.

At the end, it did not have a database of facts. What it had learned was the shape of language: how sentences flow, how arguments are built, how ideas usually connect.

## Where the knowledge lives

Think of a TV show you have watched many times. You cannot replay every scene in your head. But if someone asks what happened in an episode, you can describe it well, because you absorbed the patterns.

A model works the same way. It does not store articles. It absorbed the patterns of how people write about things. That is also why it rarely invents something truly new. It remixes what people have already written.

## What the numbers mean

You will see models called 8B, 27B or 70B. The B means billions of parameters, which are the numbers the model tuned during training.

A bigger number means more room to hold detailed patterns. It does not mean better results on its own. A smaller model trained on clean material often beats a bigger one trained on messy data.

## What this means for your work

**Good writing is no longer proof of good thinking.** Clean writing used to mean someone spent time on it. Now it can be produced in seconds. A polished research summary tells you nothing about whether the research is sound. Judge the content, not the polish.

**Sounding like an expert is a style.** The model has read thousands of expert reviews, so it can sound like a senior specialist. That does not mean it looked at your problem correctly.

**It leans towards agreeing with you.** Polite agreement is common in the text it learned from, and models are tuned to be helpful. Ask "is this a good idea?" and it will usually say yes. If you want real critique, ask it how the idea could fail, or ask it to argue the other side.

**Average is its comfort zone.** It is great at standard things, like a normal settings page or a login flow. It is weak when you need something nobody has done before. Knowing which one you need is part of your job.

## The one line to remember

The model is not answering your question. It is producing text that looks like an answer to your question.

Most of the time those two are the same. The trouble lives in the gap between them. The next article is about that gap: [why AI makes things up](/blog/why-ai-makes-things-up).
