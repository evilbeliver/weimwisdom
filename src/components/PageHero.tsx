import { Box, Container, Stack, Typography } from '@mui/material';

type PageHeroProps = {
  title: string;
  description: string;
};

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <Box sx={{ py: { xs: 4, sm: 5, md: 8 }, bgcolor: 'rgba(73, 97, 122, 0.06)' }}>
      <Container maxWidth="lg">
        <Stack spacing={2} maxWidth={760}>
          <Typography component="p" variant="overline" color="secondary.main" sx={{ letterSpacing: '0.14em', fontWeight: 800 }}>
            WeimWisdom library
          </Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: '1.85rem', sm: '2.5rem', md: '4rem' } }}>
            {title}
          </Typography>
          <Typography component="p" variant="h5" color="text.secondary" sx={{ fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' } }}>
            {description}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
