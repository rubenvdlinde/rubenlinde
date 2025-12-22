# Blog Organization Guide

Your blog is organized into three main categories to help organize content by topic and audience.

## 📁 Folder Structure

```
blog/
├── personal/                    # Personal reflections and tutorials
│   ├── README.md
│   └── *.md (blog posts)
│
├── platform-ai-en-overheid/     # AI & Government topics
│   ├── README.md
│   └── *.md (blog posts)
│
├── conduction/                  # Conduction projects and work
│   ├── README.md
│   └── *.md (blog posts)
│
└── authors.yml                  # Author information
```

## 📝 Categories

### 1. Personal (`/blog/personal/`)

**Content:** Personal reflections, technical tutorials, and general software development insights.

**Typical Tags:**
- `personal`, `development`, `tutorial`
- Language tags: `javascript`, `php`, `python`, `typescript`
- Framework tags: `react`, `symfony`, `docusaurus`
- Topic tags: `tips`, `best-practices`, `project-showcase`

**Example Topics:**
- Technical tutorials
- Tool comparisons
- Development environment setups
- Side projects
- Learning experiences

---

### 2. Platform AI en Overheid (`/blog/platform-ai-en-overheid/`)

**Content:** Articles about AI platforms in the government sector, digital transformation, and public sector innovation.

**Typical Tags:**
- `ai`, `government`, `overheid`, `platform-ai`
- `digital-transformation`, `privacy`, `security`, `ethics`
- `accessibility`, `policy`, `dutch-government`, `eu-regulations`

**Example Topics:**
- AI implementation in government
- Privacy and GDPR/AVG compliance
- Digital transformation strategies
- Ethical AI guidelines
- Case studies from Dutch government
- EU AI regulations

---

### 3. Conduction (`/blog/conduction/`)

**Content:** Updates and articles about Conduction projects, open-source initiatives, and client work.

**Typical Tags:**
- `conduction`, `opencatalogi`, `common-ground`
- `api`, `api-management`, `opensource`
- `php`, `symfony`, `architecture`
- `case-study`, `interoperability`, `standards`

**Example Topics:**
- OpenCatalogi features and updates
- Common Ground components
- Client case studies
- Technical deep-dives
- Integration guides
- API design patterns

---

## ✍️ Writing a New Blog Post

### 1. Choose the Right Category

Ask yourself:
- Is this about my personal work or learning? → `personal/`
- Is this about AI in government? → `platform-ai-en-overheid/`
- Is this about Conduction projects? → `conduction/`

### 2. Create a New File

File naming convention: `YYYY-MM-DD-title-slug.md`

Example: `2024-12-22-my-blog-post.md`

### 3. Add Frontmatter

```markdown
---
slug: url-friendly-slug
title: Your Blog Post Title
authors: [ruben]
tags: [category-tag, topic-tag1, topic-tag2]
---
```

### 4. Write Content

```markdown
# Your Title

Brief introduction (appears in blog list)...

<!--truncate-->

Full content goes here...
```

## 📋 Complete Example

**File:** `blog/conduction/2024-12-22-new-feature.md`

```markdown
---
slug: opencatalogi-search-feature
title: New Search Feature in OpenCatalogi
authors: [ruben]
tags: [conduction, opencatalogi, api, feature, search]
---

# New Search Feature in OpenCatalogi

We've just released a powerful new search feature in OpenCatalogi that makes finding APIs easier than ever!

<!--truncate-->

## What's New

The new search feature includes:

- Full-text search across API descriptions
- Advanced filtering options
- Instant results
- Search suggestions

## How to Use It

Simply type your query in the search bar...

[rest of content]
```

## 🏷️ Tag Guidelines

### Use Consistent Tags

**Category Tags** (always include one):
- `personal` - For personal blog posts
- `platform-ai`, `government`, `overheid` - For AI & government posts
- `conduction` - For Conduction-related posts

**Technology Tags:**
- `javascript`, `typescript`, `php`, `python`, `react`, `symfony`
- `api`, `rest`, `graphql`
- `docker`, `kubernetes`

**Topic Tags:**
- `tutorial`, `guide`, `best-practices`
- `case-study`, `announcement`, `feature`
- `security`, `performance`, `testing`

### Tag Naming Conventions

- Use lowercase
- Use hyphens for multi-word tags (`digital-transformation`, not `digital_transformation`)
- Be specific but not too granular
- Reuse existing tags when possible

## 🔍 How Docusaurus Handles Folders

### Blog Organization

Docusaurus automatically:
- ✅ Finds all `.md` files in subdirectories
- ✅ Orders posts by date (from filename or frontmatter)
- ✅ Creates tag pages automatically
- ✅ Generates RSS feeds
- ✅ Creates blog list pages

### URL Structure

Posts will have URLs like:
- `/blog/url-friendly-slug` (from the `slug` field)
- Category folders don't affect URLs (unless specified)

### Date Ordering

Posts are ordered by:
1. `date` field in frontmatter (if present)
2. Date in filename (`YYYY-MM-DD-title.md`)
3. File creation date (fallback)

## 📚 Advanced Features

### Multiple Authors

```markdown
---
authors: [ruben, colleague]
---
```

(Make sure to add them to `authors.yml`)

### Custom Date

```markdown
---
date: 2024-12-22T10:00
---
```

### Draft Posts

```markdown
---
draft: true
---
```

(Won't be published in production builds)

### Custom Description

```markdown
---
description: Custom meta description for SEO
---
```

### Featured Image

```markdown
---
image: /img/blog/my-post-image.png
---
```

## 🎨 Markdown Features

### Code Blocks with Titles

\`\`\`php title="src/Controller/ApiController.php"
class ApiController {
    // code here
}
\`\`\`

### Admonitions

```
:::tip Pro Tip
Use meaningful slugs for better SEO!
:::

:::warning Important
Always test locally before pushing!
:::
```

### Images

```markdown
![Alt text](/img/my-image.png)
```

(Place images in `static/img/`)

### Links

```markdown
[Internal doc link](/docs/intro)
[External link](https://example.com)
```

## 📊 Viewing Your Blog

### Locally

```bash
npm start
```

Visit: `http://localhost:3000/blog`

### Category Views

Docusaurus doesn't create separate category pages by default, but you can filter by tags:
- `/blog/tags/personal`
- `/blog/tags/platform-ai`
- `/blog/tags/conduction`

## 💡 Tips

1. **Be Consistent** - Use the same tags and structure
2. **Use README Files** - Each category has a README for guidance
3. **Test Locally** - Always preview with `npm start`
4. **Write Good Slugs** - Keep them short, descriptive, SEO-friendly
5. **Tag Appropriately** - 3-6 tags is usually enough
6. **Use Truncate** - Always use `<!--truncate-->` to control preview length

## 🚀 Quick Commands

```bash
# Start development server
npm start

# Build for production
npm run build

# View all blog posts
# Visit: http://localhost:3000/blog

# View by tag
# Visit: http://localhost:3000/blog/tags/TAG_NAME
```

## 📖 Further Reading

- See category README files for specific guidelines:
  - `blog/personal/README.md`
  - `blog/platform-ai-en-overheid/README.md`
  - `blog/conduction/README.md`

- Docusaurus blog features:
  - [Blog Documentation](https://docusaurus.io/docs/blog)
  - [Markdown Features](https://docusaurus.io/docs/markdown-features)

---

**Happy blogging! 📝**

