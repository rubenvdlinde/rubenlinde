import React, { useState, useMemo, useEffect } from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import { translate } from '@docusaurus/Translate';
import BlogLayout from '@theme/BlogLayout';
import SearchMetadata from '@theme/SearchMetadata';
import type { Props } from '@theme/BlogListPage';
import BlogCard from '@site/src/components/BlogCard';
import { useHistory, useLocation } from '@docusaurus/router';

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
  const history = useHistory();
  const location = useLocation();

  // Parse query parameters to get initial selected tags
  const getTagsFromUrl = (): string[] => {
    const params = new URLSearchParams(location.search);
    const tags = params.getAll('tags[]');
    return tags;
  };

  const [selectedTags, setSelectedTags] = useState<string[]>(getTagsFromUrl);

  // Update URL when selected tags change
  useEffect(() => {
    const params = new URLSearchParams();
    selectedTags.forEach((tag) => {
      params.append('tags[]', tag);
    });
    const newUrl =
      selectedTags.length > 0
        ? `${location.pathname}?${params.toString()}`
        : location.pathname;

    // Only push if the URL actually changed
    if (
      location.search !== `?${params.toString()}` &&
      selectedTags.length > 0
    ) {
      history.replace(newUrl);
    } else if (selectedTags.length === 0 && location.search !== '') {
      history.replace(location.pathname);
    }
  }, [selectedTags, history, location.pathname]);

  // Sync selectedTags with URL on navigation (back/forward buttons)
  useEffect(() => {
    const tags = getTagsFromUrl();
    setSelectedTags(tags);
  }, [location.search]);

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

  // Filter items based on selected tags (AND logic: post must have ALL selected tags)
  const filteredItems = useMemo(() => {
    if (selectedTags.length === 0) return items;
    return items.filter(({ content: BlogPostContent }) => {
      // Check if metadata exists before accessing tags
      if (!BlogPostContent?.metadata?.tags) return false;
      const postTags = BlogPostContent.metadata.tags.map((t) => t.label);
      // Post must have ALL selected tags
      return selectedTags.every((selectedTag) =>
        postTags.includes(selectedTag)
      );
    });
  }, [items, selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const clearAllTags = () => {
    setSelectedTags([]);
  };

  return (
    <BlogLayout>
      <div className="container margin-vert--lg">
        {/* Tag Filter Section */}
        <div className="blog-tags-filter">
          <div className="blog-tags-filter__header">
            <h2>
              {translate({
                id: 'blog.filterByTags.title',
                message: 'Filter op Tags',
                description: 'Title for the tag filter section',
              })}
            </h2>
            {selectedTags.length > 0 && (
              <button
                className="blog-tags-filter__clear"
                onClick={clearAllTags}
              >
                {translate({
                  id: 'blog.filterByTags.clear',
                  message: '✕ Wis Filter',
                  description: 'Button to clear the selected tag filter',
                })}
              </button>
            )}
          </div>
          <div className="blog-tags-filter__tags">
            {allTags.map((tag) => (
              <button
                key={tag}
                className={clsx('blog-tag-button', {
                  'blog-tag-button--active': selectedTags.includes(tag),
                })}
                onClick={() => toggleTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
          {selectedTags.length > 0 && (
            <div className="blog-tags-filter__count">
              {translate(
                {
                  id: 'blog.filterByTags.count',
                  message: '{count} blog{plural} gevonden',
                  description: 'Count of filtered blog posts',
                },
                {
                  count: filteredItems.length,
                  plural: filteredItems.length !== 1 ? 's' : '',
                }
              )}
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
