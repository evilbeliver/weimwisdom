import { Box } from '@mui/material';
import { ImageItem } from '@/data/siteContent';
import { ResponsiveImage } from './ResponsiveImage';

type GalleryGridProps = {
  items: ImageItem[];
};

export function GalleryGrid({ items }: GalleryGridProps) {
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
        <Box key={item.src}>
          <ResponsiveImage {...item} />
        </Box>
      ))}
    </Box>
  );
}
