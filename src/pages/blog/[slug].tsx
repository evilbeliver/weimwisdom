import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Box, Container, Typography, Breadcrumbs } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { SiteLayout } from '@/components/SiteLayout';
import type { BlogPost } from '@/lib/blog';

interface BlogPostPageProps {
  post: BlogPost;
}

// Format date on client side
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogPostPage({ post }: BlogPostPageProps) {
  return (
    <SiteLayout title={`${post.title} | WeimWisdom Blog`} description={post.excerpt}>

      <Container maxWidth="md">
        <Box sx={{ py: { xs: 4, sm: 6, md: 8 } }}>
          {/* Breadcrumbs */}
          <Breadcrumbs sx={{ mb: 3 }}>
            <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Home
            </Link>
            <Link href="/blog" style={{ textDecoration: 'none', color: 'inherit' }}>
              WeimWisdom Blog
            </Link>
            <Typography color="text.primary">{post.title}</Typography>
          </Breadcrumbs>

          {/* Post Header */}
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h1"
              component="h1"
              gutterBottom
              sx={{
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                fontWeight: 700,
              }}
            >
              {post.title}
            </Typography>

            <Box
              sx={{
                display: 'flex',
                gap: 2,
                flexWrap: 'wrap',
                color: 'text.secondary',
              }}
            >
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                {formatDate(post.date)}
              </Typography>
              <Typography variant="body1">•</Typography>
              <Typography variant="body1">{post.author}</Typography>
            </Box>
          </Box>

          {/* Featured Image */}
          {post.image && (
            <Box
              sx={{
                mb: 4,
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                position: 'relative',
                width: '100%',
                aspectRatio: '16 / 9',
              }}
            >
              <Image
                src={post.image}
                alt={post.title}
                fill
                style={{
                  objectFit: 'cover',
                }}
                priority
              />
            </Box>
          )}

          {/* Post Content */}
          <Box
            sx={{
              '& h1': {
                fontSize: { xs: '1.75rem', md: '2.25rem' },
                fontWeight: 700,
                mt: 4,
                mb: 2,
              },
              '& h2': {
                fontSize: { xs: '1.5rem', md: '1.875rem' },
                fontWeight: 600,
                mt: 3,
                mb: 2,
              },
              '& h3': {
                fontSize: { xs: '1.25rem', md: '1.5rem' },
                fontWeight: 600,
                mt: 2,
                mb: 1.5,
              },
              '& p': {
                fontSize: '1.125rem',
                lineHeight: 1.7,
                mb: 2,
              },
              '& ul, & ol': {
                fontSize: '1.125rem',
                lineHeight: 1.7,
                mb: 2,
                pl: 4,
              },
              '& li': {
                mb: 0.5,
              },
              '& strong': {
                fontWeight: 600,
              },
              '& a': {
                color: 'primary.main',
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline',
                },
              },
              '& code': {
                backgroundColor: 'action.hover',
                padding: '0.2em 0.4em',
                borderRadius: 1,
                fontSize: '0.9em',
              },
              '& pre': {
                backgroundColor: 'action.hover',
                padding: 2,
                borderRadius: 1,
                overflow: 'auto',
                mb: 2,
              },
              '& blockquote': {
                borderLeft: '4px solid',
                borderColor: 'primary.main',
                pl: 2,
                ml: 0,
                fontStyle: 'italic',
                color: 'text.secondary',
              },
              '& hr': {
                my: 4,
                borderColor: 'divider',
              },
            }}
          >
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </Box>

          {/* Back to Blog Link */}
          <Box sx={{ mt: 6, pt: 4, borderTop: 1, borderColor: 'divider' }}>
            <Link
              href="/blog"
              style={{
                textDecoration: 'none',
                color: 'inherit',
                display: 'inline-flex',
                alignItems: 'center',
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: 'primary.main',
                  fontWeight: 500,
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                ← Back to all posts
              </Typography>
            </Link>
          </Box>
        </Box>
      </Container>
    </SiteLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Import blog utilities only at build time
  const { getPostSlugs } = await import('@/lib/blog');
  const slugs = getPostSlugs();
  const paths = slugs.map((filename) => ({
    params: {
      slug: filename.replace(/\.md$/, ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BlogPostPageProps> = async ({
  params,
}) => {
  // Import blog utilities only at build time
  const { getPostBySlug } = await import('@/lib/blog');
  const slug = params?.slug as string;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
};
