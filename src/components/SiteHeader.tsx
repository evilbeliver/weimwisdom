import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import { navLinks } from '@/data/siteContent';

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky" color="inherit" elevation={0} sx={{ borderBottom: '1px solid rgba(73, 97, 122, 0.12)' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: { xs: 80, md: 96 }, gap: 2 }}>
          <Box
            component={Link}
            href="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              textDecoration: 'none',
              mr: 3,
            }}
          >
            <Box
              component="img"
              src="/images/weim-logo.png"
              alt="WeimWisdom Logo"
              sx={{
                height: { xs: 56, md: 72 },
                width: 'auto',
                objectFit: 'contain',
                borderRadius: 2,
              }}
            />
            <Typography variant="h5" sx={{ fontWeight: 900, color: 'primary.dark', fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
              WeimWisdom
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Stack direction="row" spacing={0.5} sx={{ display: { xs: 'none', md: 'flex' } }}>
            {navLinks.map((link) => (
              <Button 
                key={link.href} 
                component={Link} 
                href={link.href} 
                color="inherit"
                sx={{ 
                  px: { md: 1, lg: 1.5 },
                  fontSize: { md: '0.875rem', lg: '0.9375rem' },
                  whiteSpace: 'nowrap'
                }}
              >
                {link.label}
              </Button>
            ))}
          </Stack>
          <IconButton
            aria-label="Open navigation menu"
            sx={{ display: { xs: 'inline-flex', md: 'none' } }}
            onClick={() => setOpen(true)}
          >
            <MenuRoundedIcon />
          </IconButton>
        </Toolbar>
      </Container>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 280, p: 2 }} role="presentation">
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              px: 2,
              pt: 1,
              pb: 2,
            }}
          >
            <Box
              component="img"
              src="/images/weim-logo.png"
              alt="WeimWisdom Logo"
              sx={{
                height: 40,
                width: 'auto',
                objectFit: 'contain',
                borderRadius: 1.5,
              }}
            />
            <Typography variant="h6" sx={{ fontWeight: 900, color: 'primary.dark' }}>
              Explore
            </Typography>
          </Box>
          <List>
            {navLinks.map((link) => (
              <ListItemButton component={Link} href={link.href} key={link.href} onClick={() => setOpen(false)}>
                <ListItemText primary={link.label} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}
