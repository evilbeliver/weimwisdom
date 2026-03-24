import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { Box, Button, Chip, Container, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import { galleryImages, heroStats, homeHeroImage } from '@/data/siteContent';

export function HeroSection() {
  const fallbackHero = galleryImages[0];
  const fallbackSrc = fallbackHero?.src ?? '/images/weim-hero.png';
  const [heroSrc, setHeroSrc] = useState(homeHeroImage.src);

  return (
    <Box sx={{ background: 'linear-gradient(180deg, #0f1821 0%, #f5f7fb 70%)', pb: { xs: 6, md: 8 } }}>
      <Box
        sx={{
          position: 'relative',
          minHeight: { xs: 460, md: 640 },
          overflow: 'hidden',
          borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
        }}
      >
        <Box
          component="img"
          src={heroSrc}
          alt={homeHeroImage.alt}
          onError={() => setHeroSrc((current) => (current === fallbackSrc ? current : fallbackSrc))}
          sx={{
            width: '100%',
            height: '100%',
            minHeight: { xs: 460, md: 640 },
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(8, 13, 20, 0.24) 0%, rgba(8, 13, 20, 0.58) 62%, rgba(8, 13, 20, 0.82) 100%)',
          }}
        />
        <Container
          maxWidth="lg"
          sx={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'flex-end',
            pb: { xs: 5, md: 7 },
          }}
        >
          <Stack spacing={2.5} sx={{ maxWidth: 760 }}>
            <Chip label="Modern guide to the gray ghost" color="secondary" sx={{ alignSelf: 'flex-start', fontWeight: 700 }} />
            <Typography variant="h1" sx={{ color: 'common.white', fontSize: { xs: '2.6rem', md: '4.9rem' }, textShadow: '0 4px 26px rgba(0,0,0,0.45)' }}>
              Weimaraners... sleek, smart, and endlessly devoted.
            </Typography>
            <Typography component="p" variant="h5" sx={{ color: 'rgba(255,255,255,0.92)', maxWidth: 700 }}>
              Explore breed info, activities & jobs, training guidance, and adoption resources to keep your Weimaraner fulfilled.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button component={Link} href="/breed-info" variant="contained" endIcon={<ArrowForwardRoundedIcon />}>
                Explore breed info
              </Button>
              <Button component={Link} href="/training" variant="outlined" sx={{ color: 'common.white', borderColor: 'rgba(255,255,255,0.7)' }}>
                Start training plan
              </Button>
            </Stack>
            <Typography component="p" variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
              {homeHeroImage.caption}
            </Typography>
          </Stack>
        </Container>
      </Box>
      <Container maxWidth="lg" sx={{ mt: { xs: 3, md: 4 } }}>
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
      </Container>
    </Box>
  );
}
