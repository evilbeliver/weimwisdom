import { useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';

type ResponsiveImageProps = {
  src?: string;
  alt: string;
  caption?: string;
  height?: number;
};

export function ResponsiveImage({ src, alt, caption, height = 280 }: ResponsiveImageProps) {
  const [hasError, setHasError] = useState(!src);

  if (hasError) {
    return (
      <Stack
        alignItems="center"
        justifyContent="center"
        spacing={1}
        sx={{
          height,
          borderRadius: 4,
          border: '1px dashed',
          borderColor: 'divider',
          bgcolor: 'grey.100',
          p: 3,
          textAlign: 'center',
        }}
      >
        <Typography variant="h6">Image momentarily unavailable</Typography>
        <Typography color="text.secondary">The silver star of this section will return soon.</Typography>
      </Stack>
    );
  }

  return (
    <Box>
      <Box
        component="img"
        src={src}
        alt={alt}
        onError={() => setHasError(true)}
        sx={{
          width: '100%',
          height,
          objectFit: 'cover',
          borderRadius: 4,
          border: '1px solid',
          borderColor: 'rgba(73, 97, 122, 0.1)',
        }}
      />
      {caption ? (
        <Typography mt={1.5} variant="body2" color="text.secondary">
          {caption}
        </Typography>
      ) : null}
    </Box>
  );
}
