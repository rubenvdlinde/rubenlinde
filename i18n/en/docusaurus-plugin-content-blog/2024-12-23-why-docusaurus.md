---
title: Why Docusaurus for a Static Site
date: 2024-12-23
authors: [ruben]
tags: [docusaurus, static-site, markdown, performance]
---

When I decided to rebuild my personal website, I deliberately chose Docusaurus. In this blog post I explain why, and what advantages this choice offers.

<!-- truncate -->

## The Advantages of Docusaurus

### Less Maintenance

With a static site generator like Docusaurus, I don't need a database or complex backend. Everything is generated as HTML at build time, which means:

- No security updates for database software
- No complex hosting requirements
- No performance issues with database queries

### Markdown is Sufficient

All my content can be written in Markdown - a simple, readable format that:

- Is version controlled with Git
- Can be easily edited in any text editor
- Is sustainable and platform-independent

### Speed

Static sites are incredibly fast because:

- All pages are pre-generated
- No server-side processing needed
- Easy to cache and distribute via CDN

### Cost-Effective

Hosting a static site is practically free:

- Can be hosted on GitHub Pages
- Minimal server resources required
- No expensive database or application servers needed

### Smaller Attack Surface

A static site has fewer security risks because:

- No database that can be hacked
- No server-side code that can be exploited
- No login systems that can be attacked

## Why Docusaurus Specifically?

Beyond the general advantages of static sites, Docusaurus offers:

- Built-in blog functionality
- Excellent documentation support
- Modern, fast React-based framework
- Great developer experience
- Active community and good documentation

## Conclusion

For a personal website where content is king, Docusaurus is an excellent choice. It offers all the advantages of a static site, with the convenience of a modern framework.
