import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import BlogLayout from '@theme/BlogLayout';
import BlogListPaginator from '@theme/BlogListPaginator';
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
  return (
    <BlogLayout>
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--12">
            {items.map(({ content: BlogPostContent }) => {
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
              const status = frontMatter.status || undefined;

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
            <BlogListPaginator metadata={metadata} />
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
