import React from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  Grid,
} from '@mui/material';
import { SiteLayout } from '@/components/SiteLayout';
import { PageHero } from '@/components/PageHero';
import type { BlogPostMeta } from '@/lib/blog';

interface BlogPageProps {
  posts: BlogPostMeta[];
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

export default function BlogPage({ posts }: BlogPageProps) {
  return (
    <SiteLayout
      title="WeimWisdom Blog | Weim Wisdom"
      description="Stories, tips, and insights about life with Weimaraners"
    >

      <PageHero
        title="WeimWisdom Blog"
        description="Stories, tips, and insights from the Weimaraner community"
      />

      <Container maxWidth="lg">
        <Box sx={{ py: { xs: 4, sm: 6, md: 10 } }}>
          {posts.length === 0 ? (
            <Typography variant="body1" align="center" color="text.secondary">
              No blog posts yet. Check back soon!
            </Typography>
          ) : (
            <Grid container spacing={4}>
              {posts.map((post) => (
                <Grid size={{ xs: 12, md: 6 }} key={post.slug}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'transform 0.2s, box-shadow 0.2s',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: 4,
                      },
                    }}
                  >
                    <CardActionArea
                      component={Link}
                      href={`/blog/${post.slug}`}
                      sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'stretch',
                      }}
                    >
                      {post.image && (
                        <CardMedia
                          component="img"
                          height="240"
                          image={post.image}
                          alt={post.title}
                          sx={{
                            objectFit: 'cover',
                          }}
                        />
                      )}
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography
                          variant="h5"
                          component="h2"
                          gutterBottom
                          sx={{ fontWeight: 600 }}
                        >
                          {post.title}
                        </Typography>
                        
                        <Box
                          sx={{
                            display: 'flex',
                            gap: 2,
                            mb: 2,
                            flexWrap: 'wrap',
                          }}
                        >
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ fontWeight: 500 }}
                          >
                            {formatDate(post.date)}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            •
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {post.author}
                          </Typography>
                        </Box>

                        <Typography variant="body1" color="text.secondary">
                          {post.excerpt}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      </Container>
    </SiteLayout>
  );
}

export const getStaticProps: GetStaticProps<BlogPageProps> = async () => {
  // Import blog utilities only at build time
  const { getAllPosts } = await import('@/lib/blog');
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
};
