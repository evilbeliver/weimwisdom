import { Alert, Box, Container, Stack, Typography } from '@mui/material';
import { ReactNode } from 'react';

type SectionBlockProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description: string | string[];
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
          <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }}>{title}</Typography>
          {Array.isArray(description) ? (
            <Stack spacing={2} maxWidth={760}>
              {description.map((paragraph, index) => (
                <Typography key={index} component="p" variant="body1" color="text.secondary">
                  {paragraph}
                </Typography>
              ))}
            </Stack>
          ) : (
            <Typography component="p" variant="body1" color="text.secondary" maxWidth={760}>
              {description}
            </Typography>
          )}
        </Stack>
        {hasContent ? children : <Alert severity="info">{fallback}</Alert>}
      </Container>
    </Box>
  );
}
