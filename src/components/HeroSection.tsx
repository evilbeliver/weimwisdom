import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { Box, Button, Chip, Container, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { galleryImages, heroStats } from '@/data/siteContent';
import { ResponsiveImage } from './ResponsiveImage';

export function HeroSection() {
  return (
    <Box sx={{ py: { xs: 7, md: 10 }, background: 'linear-gradient(180deg, #eef4fb 0%, #f5f7fb 100%)' }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 1.05fr) minmax(0, 0.95fr)' },
            gap: 5,
            alignItems: 'center',
          }}
        >
          <Box>
            <Stack spacing={3}>
              <Chip label="Modern guide to the silver shadow" color="secondary" sx={{ alignSelf: 'flex-start' }} />
              <Typography variant="h1" sx={{ fontSize: { xs: '3rem', md: '4.75rem' } }}>
                Sleek, smart, and endlessly devoted Weimaraners.
              </Typography>
              <Typography component="p" variant="h5" color="text.secondary" sx={{ maxWidth: 620 }}>
                Explore breed info, practical training ideas, rescue support, and fun ways to keep an active Weimaraner fulfilled.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button component={Link} href="/breed-info" variant="contained" endIcon={<ArrowForwardRoundedIcon />}>
                  Explore breed info
                </Button>
                <Button component={Link} href="/training" variant="outlined">
                  Start training plan
                </Button>
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} useFlexGap flexWrap="wrap">
                {heroStats.map((stat) => (
                  <Box
                    key={stat.label}
                    sx={{
                      px: 2.2,
                      py: 1.5,
                      borderRadius: 999,
                      bgcolor: 'white',
                      border: '1px solid rgba(73, 97, 122, 0.12)',
                    }}
                  >
                    <Typography variant="caption" color="text.secondary">
                      {stat.label}
                    </Typography>
                    <Typography fontWeight={800}>{stat.value}</Typography>
                  </Box>
                ))}
              </Stack>
            </Stack>
          </Box>
          <Box>
            <ResponsiveImage src={galleryImages[0]?.src} alt={galleryImages[0]?.alt ?? 'Weimaraner hero'} caption={galleryImages[0]?.caption} height={500} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
