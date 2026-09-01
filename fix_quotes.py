#!/usr/bin/env python3
"""Fix double quotes in frontmatter by switching to single quotes."""
import os
import re

blog_dir = '/Users/yahya/uxintoax-blog/src/content/blog'

for filename in sorted(os.listdir(blog_dir)):
    if not filename.endswith('.md'):
        continue
    
    filepath = os.path.join(blog_dir, filename)
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Find frontmatter block (between --- markers)
    if not content.startswith('---'):
        print(f"SKIP {filename}: no frontmatter")
        continue
    
    parts = content.split('---', 2)
    if len(parts) < 3:
        print(f"SKIP {filename}: malformed frontmatter")
        continue
    
    fm = parts[1]
    body = parts[2]
    
    # Check for unescaped double quotes inside description
    # Pattern: description: "..." where ... contains double quotes
    has_inner_quotes = bool(re.search(r'description: ".*".*"', fm))
    
    if not has_inner_quotes:
        print(f"OK {filename}")
        continue
    
    # Fix: switch description to single quotes
    # description: "..." -> description: '...'
    new_fm = re.sub(
        r'description: "((?:[^"\\]|\\.)*)"',
        r"''',\n                'description': lambda m: m.group(1)",
        fm
    )
    
    # Simpler approach: just find description line and wrap in single quotes
    def fix_description(m):
        value = m.group(1)
        # Replace double quotes with single quotes
        value = value.replace('"', "'")
        return f"description: '{value}'"
    
    new_fm = re.sub(r'description: "((?:[^"\\]|\\.)*?)"', fix_description, fm)
    
    new_content = '---\n' + new_fm + '\n---\n' + body
    
    with open(filepath, 'w') as f:
        f.write(new_content)
    
    print(f"FIXED {filename}")

print("\nDone!")