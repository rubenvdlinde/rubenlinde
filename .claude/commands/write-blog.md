---
description: Interactive workflow to write a new blog post with clarifying questions
allowed-tools: Bash(npm run quality), Bash(npm start), WebSearch
---

# Write Blog Post Workflow

You are helping Ruben van der Linde write a new blog post for rubenlinde.nl (Docusaurus 3.x).

**CRITICAL: You MUST follow this exact workflow. Do NOT skip the question phase. Do NOT start writing content until all questions are answered.**

## Phase 1: Initial Topic Discovery

The user may have provided a topic hint: $ARGUMENTS

If the user provided a topic, acknowledge it. If not, ask what they want to write about.

Either way, proceed to Phase 2 — you must ALWAYS ask clarifying questions before writing.

## Phase 2: Clarifying Questions (MANDATORY — minimum 5 questions)

Use the AskUserQuestion tool to ask questions. You MUST ask **at least 5 clarifying questions** before writing anything. Ask them in batches of 2-4 using the AskUserQuestion tool (which supports up to 4 questions per call).

### Batch 1 — Category and Audience

Ask these questions first:

1. **Category**: Which blog category does this belong to?
   - `personal/` — Personal posts, developer tutorials, tech experiments
   - `platform-ai-en-overheid/` — AI & Government policy (semi-formal, accessible, educational)
   - `conduction/` — Digital sovereignty, open source, EU policy (professional, opinionated)

2. **Audience depth**: What level of technical knowledge should we assume?
   - Developers (high — can use jargon freely, include code)
   - Government/policy professionals (moderate — explain tech, reference policy frameworks)
   - General public (low — explain everything, use personas and analogies)

### Batch 2 — Content and Framing

After the first batch is answered, ask:

3. **Core argument**: What is the ONE key takeaway or argument the reader should walk away with?

4. **Opening style**: How should the post open?
   - "Stel je voor..." scenario hook
   - Bold declarative statement
   - Scene-setting narrative (for reflections/conference posts)
   - Rhetorical question

5. **Sources**: Do you have specific sources, references, reports, or links that should be included? (footnoted references are standard for policy/Conduction posts)

### Batch 3 — Scope and Details

After the second batch, ask at least one more round:

6. **Length and depth**: How deep should this post go?
   - Short opinion piece (~100-150 lines)
   - Medium analysis (~200-300 lines)
   - Long deep-dive with technical detail (~400+ lines)

7. **Related content**: Should this post link to or build on any existing blog posts? Is it part of a series?

8. **Specific points**: Are there specific sub-topics, examples, comparisons, or arguments you definitely want included?

You may ask additional questions beyond these 8 if the topic warrants it. Always ask follow-up questions if the user's answers are vague or open up new areas that need clarification.

## Phase 3: Research (if needed)

If the blog post requires current facts, statistics, or references:

- Use WebSearch to find relevant sources
- Look for Dutch government sources (Rijksoverheid, VNG, iBestuur), EU sources, and tech news
- Collect URLs for footnoted references

## Phase 4: Outline Proposal

Before writing the full post, present a **structured outline** including:

- Proposed title and slug
- Proposed tags
- Section headers (H2/H3 structure)
- Key points per section
- Planned references/sources
- Proposed opening and closing lines

**Ask the user to approve or adjust the outline before proceeding.**

## Phase 5: Write the Blog Post

Write the complete blog post following ALL style rules from CLAUDE.md. Key reminders:

### Language and Style

- Write in **Dutch**
- English tech terms integrated naturally with Dutch articles ("de vendor lock-in")
- Match tone to the chosen category (informal/semi-formal/professional)
- Use the signature staccato rhythm: short punchy sentences for impact, longer ones for explanation
- Use "Laten we eerlijk zijn" naturally where it fits (don't force it)
- Use rhetorical questions, direct address, and concrete analogies

### Structure

- Start with proper frontmatter (slug, title, authors: [ruben], tags, description)
- Opening paragraph(s) followed by `<!--truncate-->`
- Clear H2/H3 header hierarchy
- Bold-lead bullet lists for key points
- Mermaid diagrams for policy/process flows (if appropriate)
- Footnoted references `[^N]` for policy/Conduction posts
- Close with a punchy summary and/or "Gerelateerd" section

### Recurring Themes (weave in where relevant)

- Digital sovereignty / "Foreign Tech" (not "Big Tech")
- "Publiek geld, publieke code"
- Human in the loop for AI
- Common Ground as positive example
- Pragmatic honesty about trade-offs
- Urgency: "De vraag is niet of... maar hoe snel"

## Phase 6: Review

After writing:

1. Present the complete blog post
2. Ask the user to review
3. Run `npm run quality` to check for lint/formatting issues
4. Make any requested adjustments
5. Save the final file to the correct location: `blog/<category>/YYYY-MM-DD-slug.md`

**Remember: The quality of the questions determines the quality of the blog post. Take the question phase seriously.**
