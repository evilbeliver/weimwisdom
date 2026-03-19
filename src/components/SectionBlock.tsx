import { Alert, Box, Container, Stack, Typography } from '@mui/material';
import { ReactNode } from 'react';

type SectionBlockProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description: string;
  fallback?: string;
  hasContent?: boolean;
  children?: ReactNode;
};

export function SectionBlock({
  id,
  eyebrow,
  title,
  description,
  fallback,
  hasContent = true,
  children,
}: SectionBlockProps) {
  return (
    <Box component="section" id={id} sx={{ py: { xs: 7, md: 10 } }}>
      <Container maxWidth="lg">
        <Stack spacing={2.5} mb={4}>
          {eyebrow ? (
            <Typography component="p" variant="overline" color="secondary.main" sx={{ letterSpacing: '0.14em', fontWeight: 800 }}>
              {eyebrow}
            </Typography>
          ) : null}
          <Typography variant="h2">{title}</Typography>
          <Typography component="p" variant="body1" color="text.secondary" maxWidth={760}>
            {description}
          </Typography>
        </Stack>
        {hasContent ? children : <Alert severity="info">{fallback}</Alert>}
      </Container>
    </Box>
  );
}
