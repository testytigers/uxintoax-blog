#!/usr/bin/env python3
"""Fix all frontmatter with properly YAML-escaped strings."""
import os
import json
import re

with open('/Users/yahya/uxintoax-blog/topics.json') as f:
    topics = json.load(f)

blog_dir = '/Users/yahya/uxintoax-blog/src/content/blog'

def slugify(text):
    text = text.lower()
    text = re.sub(r'[^a-z0-9\s\-]', '', text)
    text = re.sub(r'\s+', '-', text).strip('-')
    return text

def yaml_escape_single(s):
    """Escape a string for YAML single-quoted string."""
    s = s.replace("'", "''")
    s = s.replace('\n', '\\n')
    return s

for topic in topics:
    tid = topic['id']
    title = topic['title']
    description = topic.get('description', title)
    slug = slugify(title)
    
    # Try standard slug first
    filepath = os.path.join(blog_dir, f"{tid:02d}-{slug}.md")
    
    # If not found and it's article 30, look for the actual filename with em-dash
    if not os.path.exists(filepath) and tid == 30:
        for f in os.listdir(blog_dir):
            if f.startswith('30-') and f.endswith('.md'):
                filepath = os.path.join(blog_dir, f)
                break
    
    if not os.path.exists(filepath):
        print(f"MISSING: {tid} - slug={slug}")
        continue
    
    with open(filepath, 'r') as f:
        content = f.read()
    
    parts = content.split('---', 2)
    if len(parts) < 3:
        print(f"SKIP {tid}: no frontmatter")
        continue
    
    body = parts[2].lstrip('\n')
    date = f"2026-09-{tid:02d}"
    
    # Use YAML single-quoted strings (escape ' as '')
    title_escaped = yaml_escape_single(title)
    desc_escaped = yaml_escape_single(description)
    
    fm = f"""---
title: '{title_escaped}'
description: '{desc_escaped}'
date: {date}
tags: ['ai', 'ux', 'signal-vs-noise']
---"""
    
    with open(filepath, 'w') as f:
        f.write(fm + '\n\n' + body)
    
    print(f"FIXED {tid}: {slug}")

print("\nDone!")
