---
title: "One Task, One Action, One Verification"
description: "Never assign a broad task to an autonomous loop and wait for a self-reported summary. Enforce this pattern: generate one item, commit it, fetch the li"
date: 2026-09-23
tags: ["ai", "ux", "signal-vs-noise"]
---

# One Task, One Action, One Verification

Never assign an autonomous loop a broad list of 100 items and wait for a self-reported completion summary. This is the single most important rule for working with AI agents.

Instead, enforce this pattern:

One Task, One Action, One Verification.

## The Pattern

Generate one item.
Commit the item.
Fetch the live result from the server to verify its existence.
Move to the next item only after receiving independent confirmation.

This pattern is not optional. It is essential. Without it, you are trusting the model's prediction of reality against reality itself.

## Why This Works

The model has no direct perception of reality. It predicts what a success message looks like and delivers it. But if you verify each action independently, against an external source, you eliminate the gap between prediction and reality.

The verification step is the bridge between the model's prediction and the actual outcome. Without it, you are flying blind.

## The Practical Application

This pattern applies to every AI agent workflow:

Generating files: Verify each file exists on the server
Analyzing data: Verify each finding against the source data
Designing interfaces: Verify each screen against real user data
Writing code: Verify each component against actual browser testing

The pattern is always the same: act, verify, move on.

## The Real Takeaway

Never assign an autonomous loop a broad list of items and wait for a self-reported completion summary. Enforce the pattern: generate one, verify one, move on.

When you understand this rule, you stop trusting AI's self-reports and start verifying every action independently. This is not paranoia. It is discipline.

Remember: Verification must come from outside the model. Designing that verification check, and taking responsibility for it, is your job.

Remember: One task, one action, one verification. Never skip the verification step.