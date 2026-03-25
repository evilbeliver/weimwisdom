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
                Contact
              </Typography>
              <MuiLink href="mailto:weimcrime@weimwisdom.com" color="inherit" underline="hover" sx={{ opacity: 0.82 }}>
                weimcrime@weimwisdom.com
              </MuiLink>
              <MuiLink href="tel:+15136076445" color="inherit" underline="hover" sx={{ opacity: 0.82 }}>
                513-607-6445
              </MuiLink>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
