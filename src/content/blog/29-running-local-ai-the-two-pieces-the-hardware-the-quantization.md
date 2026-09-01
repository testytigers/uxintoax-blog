---
title: "Running Local AI: The Two Pieces, The Hardware, The Quantization"
description: "Local AI runs on two components: the model (a static file of trained weights) and the engine (software that loads weights into memory). Performance de"
date: 2026-09-29
tags: ["ai", "ux", "signal-vs-noise"]
---

# Running Local AI: The Two Pieces, The Hardware, The Quantization

Here is the essential guide to understanding how local AI runs on personal hardware.

## The Two Core Components

The Model: A large file containing the trained connection weights. Stored on your hard drive, it is completely static.

The Engine: The software that loads those weights into your computer's memory and executes the mathematical predictions. The industry-standard engine is llama.cpp, and tools like Ollama wrap this engine in a simple, one-command interface.

These two components are independent. You can swap models without changing the engine. You can swap engines without changing the model. Understanding this separation is key to understanding how local AI works.

## What Determines Performance?

Two hardware factors matter most:

### Memory Capacity (RAM)

The total amount of memory available for the model. A model in uncompressed form needs roughly 2 GB of memory for every 1 billion parameters. A 30-billion parameter model (30B) would require 60 GB of RAM.

### Memory Bandwidth (Speed)

How fast the memory can be read. This determines inference speed. Apple Silicon processors have exceptionally high memory bandwidth compared to traditional CPUs.

## Quantization (Smart Compression)

Quantization compresses model weights without significantly reducing quality. The standard labels are Q8, Q6, Q5, Q4, Q3.

Q4 is the sweet spot: it reduces the model to about one-third of its original size with almost no noticeable drop in everyday quality. That 30B model shrinks from 60 GB down to about 18-20 GB, allowing it to run on standard modern laptops.

## Allocating Your RAM

Your operating system and background applications (Slack, browser tabs, design software) need 6 to 8 GB of RAM to run smoothly.

On a 16 GB machine, you have roughly 8 to 10 GB available for a model (best suited for small 7B to 9B models).

On a 32 GB machine, you have 22 to 24 GB available, which easily accommodates solid mid-sized models at Q4 compression.

## The Unified Memory Advantage

Traditional computers split memory between system RAM and dedicated graphics cards (VRAM). Apple Silicon processors use a unified memory pool shared between the CPU and graphics cores, allowing the system to allocate massive memory blocks to AI models without requiring expensive specialized graphics hardware.

On Windows or Linux, dedicated GPU VRAM is the key number to watch.

## How to Get Started in 5 Steps

Check your total RAM: Look up your system hardware specifications.
Subtract 8 GB: The remaining number is your available model budget.
Install an engine: Download and install a clean runner like Ollama.
Start with a proven small model: Download a model in the 7B to 9B parameter range at Q4 compression.
Run a real-world test: Feed it a local text file of raw feedback notes and ask it to extract key pain points with direct quotes.

## The Real Takeaway

Size, quantization, memory bandwidth, and context overhead determine your local AI capabilities.

When you understand these fundamentals, you can make informed decisions about hardware, models, and workflows. You stop guessing and start optimizing.

Remember: Two hardware factors matter most: Memory Capacity and Memory Bandwidth. Quantization is your primary tool for fitting models to your hardware.

Remember: Start small. A 7B to 9B model at Q4 compression is the best starting point for most users. Verify with real data before scaling up.