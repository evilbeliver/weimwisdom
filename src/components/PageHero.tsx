import { Box, Container, Stack, Typography } from '@mui/material';

type PageHeroProps = {
  title: string;
  description: string;
};

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'rgba(73, 97, 122, 0.06)' }}>
      <Container maxWidth="lg">
        <Stack spacing={2} maxWidth={760}>
          <Typography component="p" variant="overline" color="secondary.main" sx={{ letterSpacing: '0.14em', fontWeight: 800 }}>
            WeimWisdom library
          </Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: '2.75rem', md: '4rem' } }}>
            {title}
          </Typography>
          <Typography component="p" variant="h5" color="text.secondary">
            {description}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
