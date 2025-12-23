import React, { useState, useMemo } from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import BlogLayout from '@theme/BlogLayout';
import SearchMetadata from '@theme/SearchMetadata';
import type { Props } from '@theme/BlogListPage';
import BlogCard from '@site/src/components/BlogCard';

function BlogListPageMetadata(props: Props): JSX.Element {
  const { metadata } = props;
  const {
    siteConfig: { title: siteTitle },
  } = useDocusaurusContext();
  const { blogDescription, blogTitle, permalink } = metadata;
  const isBlogOnlyMode = permalink === '/';
  const title = isBlogOnlyMode ? siteTitle : blogTitle;
  return (
    <>
      <PageMetadata title={title} description={blogDescription} />
      <SearchMetadata tag="blog_posts_list" />
    </>
  );
}

function BlogListPageContent(props: Props): JSX.Element {
  const { metadata, items } = props;
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Extract all unique tags from all blog posts
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    items.forEach(({ content: BlogPostContent }) => {
      // Check if metadata exists before accessing tags
      if (BlogPostContent?.metadata?.tags) {
        BlogPostContent.metadata.tags.forEach((tag) => tagSet.add(tag.label));
      }
    });
    return Array.from(tagSet).sort();
  }, [items]);

  // Filter items based on selected tag
  const filteredItems = useMemo(() => {
    if (!selectedTag) return items;
    return items.filter(({ content: BlogPostContent }) => {
      // Check if metadata exists before accessing tags
      if (!BlogPostContent?.metadata?.tags) return false;
      const { tags } = BlogPostContent.metadata;
      return tags?.some((tag) => tag.label === selectedTag);
    });
  }, [items, selectedTag]);

  return (
    <BlogLayout>
      <div className="container margin-vert--lg">
        {/* Tag Filter Section */}
        <div className="blog-tags-filter">
          <div className="blog-tags-filter__header">
            <h2>Filter op Tags</h2>
            {selectedTag && (
              <button
                className="blog-tags-filter__clear"
                onClick={() => setSelectedTag(null)}
              >
                ✕ Wis Filter
              </button>
            )}
          </div>
          <div className="blog-tags-filter__tags">
            {allTags.map((tag) => (
              <button
                key={tag}
                className={clsx('blog-tag-button', {
                  'blog-tag-button--active': selectedTag === tag,
                })}
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
              >
                {tag}
              </button>
            ))}
          </div>
          {selectedTag && (
            <div className="blog-tags-filter__count">
              {filteredItems.length} blog{filteredItems.length !== 1 ? 's' : ''}{' '}
              gevonden
            </div>
          )}
        </div>

        <div className="row">
          <div className="col col--12">
            {filteredItems.map(({ content: BlogPostContent }) => {
              // Check if metadata exists
              if (!BlogPostContent?.metadata) {
                console.error('Blog post missing metadata:', BlogPostContent);
                return null;
              }

              const { metadata: postMetadata, frontMatter } = BlogPostContent;
              const {
                title,
                permalink,
                date,
                tags,
                authors,
                description,
                readingTime,
              } = postMetadata;

              // Get the first author or use default
              const author =
                authors && authors.length > 0
                  ? authors[0]
                  : {
                      name: 'Ruben van der Linde',
                      title: 'Software Developer',
                      imageURL: 'https://github.com/rubenvdlinde.png',
                    };

              // Determine status from frontMatter
              const status = frontMatter?.status || undefined;

              return (
                <BlogCard
                  key={permalink}
                  title={title}
                  permalink={permalink}
                  date={date}
                  readingTime={readingTime}
                  author={author}
                  description={description}
                  status={status}
                  tags={tags}
                />
              );
            })}
          </div>
        </div>
      </div>
    </BlogLayout>
  );
}

export default function BlogListPage(props: Props): JSX.Element {
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage
      )}
    >
      <BlogListPageMetadata {...props} />
      <BlogListPageContent {...props} />
    </HtmlClassNameProvider>
  );
}
