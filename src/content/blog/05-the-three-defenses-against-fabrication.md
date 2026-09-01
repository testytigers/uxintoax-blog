---
title: 'The Three Defenses Against Fabrication'
description: 'You cannot stop hallucination inside the model, but you can build three external defenses: force the model to work from your source material, demand receipts and citations for every assertion, and sort tasks by the cost of being wrong.'
date: 2026-09-05
tags: ['ai', 'ux', 'signal-vs-noise']
---

# The Three Defenses Against Fabrication

You cannot stop the model from hallucinating. It is built to predict, not verify. But you can build three external defenses that make fabrication impossible to slip past unnoticed.

These are not prompt tricks. They are structural changes to how you work with AI. Each one targets a different way that fabrications enter your workflow.

## Defense One: Force It to Work From Your Source Material

The single most effective defense against hallucination is simple: do not let the model guess.

Paste the raw notes or transcripts directly into the prompt and tell it: "Extract themes only from the text provided above."

When the model only sees your data, it can only generate what your data supports. It cannot invent a theme that does not exist in your transcripts. It cannot fabricate a user quote that was never said. It cannot hallucinate a pattern that is not there.

This works because the model's prediction is constrained by the context window. If the information is not in the window, the model cannot predict it.

In practice, this looks like:

- Paste 30 customer support tickets about payment failures
- Add the instruction: "Group these by underlying problem. Do not add themes that are not present in the tickets above."
- The model returns a classification of issues that are grounded entirely in your data

The result is not perfect. Some tickets may be misclassified. Some may be missed. But every theme the model identifies is traceable back to actual text in your source material. You can verify, because the evidence is right there.

## Defense Two: Demand Receipts and Citations

The second defense targets the most common type of hallucination: fabricated details presented as facts.

Require a direct quote or a ticket ID next to every assertion. For example:

"Issue: Drop-off at checkout. Source: Tickets #1024, #1089, #1103"

Fabrications have nowhere to hide when you can check IDs in seconds. If the ticket does not exist, the claim is immediately exposed. If the quote is not in the transcript, the theme is immediately exposed.

This changes the model's behavior significantly. When the model knows you will demand receipts, it is more likely to only surface claims it can actually support. It is still predicting, but the prediction is now anchored to verifiable evidence.

## Defense Three: Sort by the Cost of Being Wrong

Not all outputs need the same level of scrutiny. This is the third defense: categorize your AI outputs by the cost of error, and apply verification proportionally.

### Low-cost outputs (no verification needed)

Brainstorming ideas. Naming conventions. Initial draft text. Generic explanations. These can be used without fact-checking because the cost of being wrong is minimal.

### High-cost outputs (direct verification required)

Anything that influences product roadmaps, client presentations, legal compliance, or user-facing content. These require direct manual verification against the source data.

### Medium-cost outputs (spot-check verification)

Research summaries. Competitive analyses. Design critiques. These benefit from spot-checking a sample of claims rather than verifying everything.

This sorting system prevents verification fatigue. You do not waste time checking everything. You focus verification on the outputs where being wrong would actually matter.

## Putting It All Together

Use all three defenses together for maximum protection:

1. Provide your raw data as context (Defense One)
2. Ask for ticket IDs and direct quotes (Defense Two)
3. Sort the output by cost of being wrong and verify proportionally (Defense Three)

This system is not perfect. It does not eliminate the need for human judgment. But it makes hallucination detectable and manageable at every stage.

## The Real Takeaway

The model does not know when it does not know. Confidence tells you nothing about correctness. Verification must always come from outside the model.

These three defenses shift the burden of truth from the model to you. That is correct. The model's job is prediction. Your job is verification. The system works when each party does its part.

Remember: The model is a prediction engine. You are the truth engine. Never confuse the two.

Remember: A hallucination is not a bug. It is the expected output. Your defenses are the only thing that makes it useful.