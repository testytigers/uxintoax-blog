---
title: "What AI Can Actually See: The Context Window"
description: "AI has no memory between messages. It only sees what is on the table right now. Learning to fill that table well is the most useful skill you can build."
date: 2026-09-23
tags: ["Basics", "ai", "workflow"]
---

An AI model has no memory between requests. It does not know who you are, what you talked about yesterday, or what you said twenty minutes ago.

What it has is a **context window**. Think of it as a table. Whatever is on the table, it can see. Whatever is not, it cannot.

Every time you press send, the model reads the whole table from scratch:

- Hidden instructions set by the app
- The conversation so far
- Anything you pasted: notes, documents, data
- Your new message

It writes its answer. Then it forgets everything until your next message.

## What this explains

**Why the same question gets different answers.** The table was not exactly the same, or the model's built-in randomness picked a different path.

**Why it forgets your rules.** The table has a size limit. In long chats, the earliest messages fall off. It is not ignoring your instructions. They are gone.

**Why long chats get worse.** As the chat grows, early details drop out and the table fills with clutter.

## The real skill is context, not phrasing

People spend a lot of energy on clever prompts, like "Act as a world-class researcher with 20 years of experience". Modern models do not need that.

What they cannot do is guess facts, limits and data you never gave them.

Compare these two requests.

**Generic:** "What usability problems do people have with payment forms?"

You get textbook advice you could find in any article.

**With context:** "Here are 3,000 support tickets about our payment form. Group them by the underlying problem and tell me which one comes up most."

You get findings about your actual product.

The second one is not a smarter prompt. It just puts better material on the table.

## Four habits for better results

**Keep a context document.** Write one short text file with your product's rules, user types, tone of voice and technical limits. Paste it at the start of any session where it matters.

**Start fresh often.** When a chat starts to drift, close it. Open a new one, paste your context, and ask cleanly.

**Put the important instruction last.** Models pay the most attention to what sits right next to your question.

**Check for cut-offs.** If you paste a very long document, make sure the end did not get dropped.

## The one line to remember

The model can only work with what is in front of it. Deciding what goes in front of it is your craft.

And the quality of what you put there matters a lot. That is next: [garbage in, garbage out](/blog/garbage-in-garbage-out).
