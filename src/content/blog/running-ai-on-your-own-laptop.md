---
title: "Running AI on Your Own Laptop: A Plain Guide"
description: "You do not need to be an engineer to run a model locally. Here is what the pieces are, what your computer needs, and how to start in five steps."
date: 2026-10-01
tags: ["Local AI", "ai", "tools"]
---

Running AI on your own computer sounds technical. It is simpler than it looks. You only need to understand two pieces and two numbers.

## The two pieces

**The model.** A big file full of the numbers the model learned during training. It sits on your hard drive and never changes.

**The engine.** The program that loads the model into memory and runs it.

The most common engine is called llama.cpp. Tools like Ollama wrap it in something friendly, so you can download and run a model with one command.

So: model file, engine, answers on your machine. That is the whole setup.

## The two numbers that matter

Your computer needs enough **memory (RAM)** to hold the model, and enough **memory speed** to run it smoothly. Memory is usually the limit you hit first.

### Compression makes it fit

A model at full size needs roughly 2 GB of memory for every billion parameters. A 30B model would need about 60 GB. That is more than most laptops have.

Compression, called **quantization**, fixes this. You will see labels like Q8, Q6, Q5, Q4 and Q3. The lower the number, the smaller the file.

**Q4 is the sweet spot.** It shrinks the model to about a third of its size with very little loss in everyday quality. That 30B model drops from 60 GB to around 18 to 20 GB.

### How much memory you actually have

Your system and your apps need their share. Slack, a browser full of tabs and a design tool can easily take 6 to 8 GB.

- **16 GB laptop:** about 8 to 10 GB left for a model. Good for small models, around 7B to 9B.
- **32 GB laptop:** about 22 to 24 GB left. Enough for solid mid-sized models at Q4.

### A note on Apple computers

Most computers split memory between the main system and the graphics card. Apple Silicon Macs use one shared pool, so a large part of it can go to the model. That is why Macs are popular for local AI.

On Windows or Linux, the number to watch is the memory on your graphics card, called VRAM.

## Get started in five steps

1. **Check your total RAM** in your system settings.
2. **Subtract 8 GB.** What is left is your model budget.
3. **Install an engine.** Ollama is the easiest place to start.
4. **Download a small, proven model** in the 7B to 9B range at Q4.
5. **Run a real test.** Give it a text file of real feedback notes and ask it to list the main pain points, with a direct quote for each one. Then check a few quotes against the file.

That last step matters. Everything from earlier in this series still applies. A local model can make things up too. The difference is that your data stays with you.

## The one line to remember

A local model is a file plus an engine. If you have the memory, you have the tool.

To wrap up the series: [what stays yours when AI does the rest](/blog/what-stays-yours).
