import { Box, Card, CardContent, Stack, Typography } from '@mui/material';
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
              </Stack>
            </CardContent>
          </Card>
        </Box>
      ))}
    </Box>
  );
}
