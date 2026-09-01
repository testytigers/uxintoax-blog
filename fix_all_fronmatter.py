#!/usr/bin/env python3
"""Rewrite all frontmatter with proper YAML escaping."""
import os
import json
import re

# Load topics
with open('/Users/yahya/uxintoax-blog/topics.json') as f:
    topics = json.load(f)

blog_dir = '/Users/yahya/uxintoax-blog/src/content/blog'

def slugify(text):
    text = text.lower()
    text = re.sub(r'[^a-z0-9\s\-]', '', text)
    text = re.sub(r'\s+', '-', text).strip('-')
    return text

def yaml_escape(s):
    """Escape a string for YAML double-quoted string."""
    s = s.replace('\\', '\\\\')
    s = s.replace('"', '\\"')
    s = s.replace('\n', '\\n')
    return s

for topic in topics:
    title = topic['title']
    description = topic.get('description', title)
    slug = slugify(title)
    filepath = os.path.join(blog_dir, f"{topic['id']:02d}-{slug}.md")
    
    if not os.path.exists(filepath):
        print(f"MISSING: {filepath}")
        continue
    
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Extract body (everything after --- ... ---)
    parts = content.split('---', 2)
    if len(parts) < 3:
        print(f"SKIP {topic['id']}: {slug} - no frontmatter")
        continue
    
    body = parts[2]
    # Clean up leading newline
    body = body.lstrip('\n')
    
    # Create proper YAML frontmatter
    date = f"2026-09-{topic['id']:02d}"
    
    frontmatter = f"""---
title: {yaml_escape(title)}
description: {yaml_escape(description)}
date: {date}
tags: ['ai', 'ux', 'signal-vs-noise']
---"""
    
    new_content = frontmatter + '\n\n' + body
    
    with open(filepath, 'w') as f:
        f.write(new_content)
    
    print(f"REWRITTEN {topic['id']:02d}-{slug}")

print("\nDone!")
