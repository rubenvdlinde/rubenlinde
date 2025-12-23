import React from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

interface BlogCardProps {
  title: string;
  permalink: string;
  date: string;
  readingTime?: number;
  author?: {
    name: string;
    title?: string;
    imageURL?: string;
  };
  description?: string;
  status?: 'concept' | 'draft' | 'published';
  tags?: Array<{ label: string; permalink: string }>;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  permalink,
  date,
  readingTime,
  author,
  description,
  status,
  tags,
}) => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return new Date(dateString).toLocaleDateString('nl-NL', options);
  };

  const getStatusColor = (statusType?: string) => {
    switch (statusType) {
      case 'concept':
        return '#8b6914'; // Dark yellow/brown
      case 'draft':
        return '#1e40af'; // Dark blue
      default:
        return '#065f46'; // Dark green
    }
  };

  const getStatusText = (statusType?: string) => {
    switch (statusType) {
      case 'concept':
        return 'CONCEPT';
      case 'draft':
        return 'DRAFT';
      default:
        return 'PUBLISHED';
    }
  };

  return (
    <article className="blog-card">
      <Link to={permalink} className="blog-card__link">
        <Heading as="h2" className="blog-card__title">
          {title}
        </Heading>
      </Link>

      <div className="blog-card__meta">
        <time dateTime={date} className="blog-card__date">
          {formatDate(date)}
        </time>
        {readingTime && (
          <>
            <span className="blog-card__separator"> · </span>
            <span className="blog-card__reading-time">
              {Math.ceil(readingTime)} minuten leestijd
            </span>
          </>
        )}
      </div>

      {author && (
        <div className="blog-card__author">
          {author.imageURL && (
            <img
              src={author.imageURL}
              alt={author.name}
              className="blog-card__author-avatar"
            />
          )}
          <div className="blog-card__author-info">
            <div className="blog-card__author-name">{author.name}</div>
            {author.title && (
              <div className="blog-card__author-title">{author.title}</div>
            )}
          </div>
        </div>
      )}

      {status && status !== 'published' && (
        <div
          className="blog-card__status"
          style={{ backgroundColor: getStatusColor(status) }}
        >
          <span className="blog-card__status-icon">⚠</span>
          <span className="blog-card__status-text">
            STATUS: {getStatusText(status)}
          </span>
          <div className="blog-card__status-message">
            Deze blog is nog in {status}-fase en wordt mogelijk nog aangepast
            voor publicatie.
          </div>
        </div>
      )}

      {description && <p className="blog-card__description">{description}</p>}

      {tags && tags.length > 0 && (
        <div className="blog-card__tags">
          {tags.map((tag) => (
            <Link
              key={tag.permalink}
              to={tag.permalink}
              className="blog-card__tag"
            >
              {tag.label}
            </Link>
          ))}
        </div>
      )}
    </article>
  );
};

export default BlogCard;
