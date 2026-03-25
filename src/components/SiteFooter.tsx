import { Box, Container, Link as MuiLink, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { navLinks } from '@/data/siteContent';

export function SiteFooter() {
  return (
    <Box component="footer" sx={{ bgcolor: 'primary.dark', color: 'white', mt: 8, py: 6 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1.4fr 1fr 1fr' },
            gap: 4,
          }}
        >
          <Box>
            <Stack spacing={1.5}>
              <Typography component="p" variant="h5" fontWeight={900}>
                WeimWisdom
              </Typography>
              <Typography component="p" sx={{ opacity: 0.82 }}>
                Breed facts, activities & jobs, training plans, and adoption guidance for life with your gray ghost.
              </Typography>
            </Stack>
          </Box>
          <Box>
            <Stack spacing={1.2}>
              <Typography component="p" variant="overline" sx={{ opacity: 0.7 }}>
                Explore
              </Typography>
              {navLinks.map((link) => (
                <MuiLink key={link.href} component={Link} href={link.href} color="inherit" underline="hover">
                  {link.label}
                </MuiLink>
              ))}
            </Stack>
          </Box>
          <Box>
            <Stack spacing={1.2}>
              <Typography component="p" variant="overline" sx={{ opacity: 0.7 }}>
                Standards
              </Typography>
              <Typography component="p" sx={{ opacity: 0.82 }}>
                Built for WCAG-minded navigation, responsive browsing, and static deployment.
              </Typography>
              <Typography component="p" sx={{ opacity: 0.82 }}>
                Use the resource pages as a starting point and adapt them to your region and rescue network.
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
