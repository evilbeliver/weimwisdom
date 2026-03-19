import Head from 'next/head';
import { Box } from '@mui/material';
import { ReactNode } from 'react';
import { SiteFooter } from './SiteFooter';
import { SiteHeader } from './SiteHeader';

type SiteLayoutProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export function SiteLayout({ title, description, children }: SiteLayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <SiteHeader />
      <Box component="main">{children}</Box>
      <SiteFooter />
    </>
  );
}
