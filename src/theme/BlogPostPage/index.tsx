import React from 'react';
import clsx from 'clsx';
import {
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import {
  BlogPostProvider,
  useBlogPost,
} from '@docusaurus/plugin-content-blog/client';
import BlogLayout from '@theme/BlogLayout';
import BlogPostItem from '@theme/BlogPostItem';
import BlogPostPaginator from '@theme/BlogPostPaginator';
import type { Props } from '@theme/BlogPostPage';

function BlogPostPageContent({ children }: { children: React.ReactNode }) {
  const { metadata } = useBlogPost();

  return (
    <BlogLayout>
      {/* No container wrapper - let content be full width */}
      <main className="margin-vert--lg" style={{ padding: '0 2rem' }}>
        {children}
      </main>
    </BlogLayout>
  );
}

export default function BlogPostPage(props: Props): JSX.Element {
  const BlogPostContent = props.content;
  return (
    <BlogPostProvider content={props.content} isBlogPostPage>
      <HtmlClassNameProvider
        className={clsx(
          ThemeClassNames.wrapper.blogPages,
          ThemeClassNames.page.blogPostPage
        )}
      >
        <BlogPostPageContent>
          <BlogPostItem>
            <BlogPostContent />
          </BlogPostItem>
          <BlogPostPaginator />
        </BlogPostPageContent>
      </HtmlClassNameProvider>
    </BlogPostProvider>
  );
}
