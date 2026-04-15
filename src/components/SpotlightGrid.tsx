import { Box, Card, CardContent, Link, Stack, Typography } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { SpotlightCard } from '@/data/siteContent';

type SpotlightGridProps = {
  items: SpotlightCard[];
};

export function SpotlightGrid({ items }: SpotlightGridProps) {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          md: 'repeat(2, minmax(0, 1fr))',
          lg: 'repeat(3, minmax(0, 1fr))',
        },
        gap: 3,
      }}
    >
      {items.map((item) => (
        <Box key={item.title}>
          <Card sx={{ height: '100%' }}>
            <CardContent sx={{ p: 3.5 }}>
              <Stack spacing={1.5}>
                {item.eyebrow ? (
                  <Typography component="p" variant="overline" color="secondary.main" fontWeight={800}>
                    {item.eyebrow}
                  </Typography>
                ) : null}
                <Typography variant="h5" component="h3">
                  {item.title}
                </Typography>
                <Typography component="p" color="text.secondary">
                  {item.description}
                </Typography>
                {item.link && (
                  <Link
                    href={item.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 0.5,
                      mt: 1,
                      fontWeight: 600,
                      textDecoration: 'underline',
                      '&:hover': {
                        textDecoration: 'none',
                      },
                    }}
                  >
                    {item.link.label}
                    <OpenInNewIcon sx={{ fontSize: 16 }} />
                  </Link>
                )}
              </Stack>
            </CardContent>
          </Card>
        </Box>
      ))}
    </Box>
  );
}
