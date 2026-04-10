import React, { useState, useEffect } from 'react';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
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
  Pagination,
} from '@mui/material';
import { SiteLayout } from '@/components/SiteLayout';
import { PageHero } from '@/components/PageHero';
import type { BlogPostMeta } from '@/lib/blog';

interface BlogPageProps {
  posts: BlogPostMeta[];
}

const POSTS_PER_PAGE = 6;

// Format date on client side
function formatDate(dateString: string): string {
  // Parse as local date to avoid timezone issues
  const [year, month, day] = dateString.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogPage({ posts }: BlogPageProps) {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);

  // Get page from URL query parameter
  useEffect(() => {
    const pageParam = router.query.page;
    if (pageParam) {
      const pageNum = parseInt(pageParam as string, 10);
      if (!isNaN(pageNum) && pageNum > 0) {
        setCurrentPage(pageNum);
      }
    }
  }, [router.query.page]);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  // Calculate the posts to display on current page
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = posts.slice(startIndex, endIndex);

  const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
    // Update URL without page reload
    router.push(`/blog?page=${value}`, undefined, { shallow: true });
    // Scroll to top of page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
            <>
              <Grid container spacing={4}>
                {currentPosts.map((post) => (
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
                            image={post.image}
                            alt={post.title}
                            sx={{
                              width: '100%',
                              height: 'auto',
                              maxHeight: 300,
                              objectFit: 'contain',
                              backgroundColor: '#f5f5f5',
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

              {totalPages > 1 && (
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    mt: { xs: 4, sm: 6, md: 8 },
                  }}
                >
                  <Pagination
                    count={totalPages}
                    page={currentPage}
                    onChange={handlePageChange}
                    color="primary"
                    size="large"
                    showFirstButton
                    showLastButton
                    sx={{
                      '& .MuiPaginationItem-root': {
                        fontSize: { xs: '0.875rem', sm: '1rem' },
                        minWidth: { xs: 32, sm: 40 },
                        height: { xs: 32, sm: 40 },
                      },
                    }}
                  />
                </Box>
              )}
            </>
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
