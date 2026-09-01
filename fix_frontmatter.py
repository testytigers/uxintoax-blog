#!/usr/bin/env python3
"""Add frontmatter to all 30 blog articles."""
import json
import os
import re

def slugify(text):
    text = text.lower()
    text = re.sub(r'[^a-z0-9\s\-]', '', text)
    text = re.sub(r'\s+', '-', text).strip('-')
    return text

# Load topics
with open('/Users/yahya/uxintoax-blog/topics.json') as f:
    topics = json.load(f)

blog_dir = '/Users/yahya/uxintoax-blog/src/content/blog'

for i, topic in enumerate(topics, 1):
    title = topic['title']
    description = topic.get('description', title)
    slug = slugify(title)
    filepath = os.path.join(blog_dir, f"{i:02d}-{slug}.md")
    
    if not os.path.exists(filepath):
        print(f"MISSING: {filepath}")
        continue
    
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Check if already has frontmatter
    if content.strip().startswith('---'):
        print(f"SKIP: {i:02d}-{slug} (already has frontmatter)")
        continue
    
    # Generate description (truncate to ~150 chars)
    desc = description[:150]
    
    # Date assignment
    date = f"2026-09-{i:02d}"
    
    # Create frontmatter
    frontmatter = f"""---
title: "{title}"
description: "{desc}"
date: {date}
tags: ["ai", "ux", "signal-vs-noise"]
---
"""
    
    with open(filepath, 'w') as f:
        f.write(frontmatter + '\n' + content)
    
    print(f"FIXED: {i:02d}-{slug}")

print("\nDone!")