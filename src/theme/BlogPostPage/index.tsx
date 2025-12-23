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
      <div className="container margin-vert--lg">
        <div className="row">
          {/* Only render the main content column, no sidebars */}
          <main className="col col--12">{children}</main>
        </div>
      </div>
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
