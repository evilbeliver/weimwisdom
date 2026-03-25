import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="theme-color" content="#49617a" />
        <link rel="icon" href="/images/weim-favicon.png" />
        <link rel="apple-touch-icon" href="/images/weim-favicon.png" />
        <link rel="shortcut icon" href="/images/weim-favicon.png" />
        {/* Preconnect to external resources for Petfinder widget */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.petfinder.com" />
        <link rel="preconnect" href="https://psl.petfinder.com" />
        <link rel="preconnect" href="https://dbw3zep4prcju.cloudfront.net" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
