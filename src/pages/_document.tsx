import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="theme-color" content="#49617a" />
        <link rel="icon" href="/images/weim-favicon.png" />
        <link rel="apple-touch-icon" href="/images/weim-favicon.png" />
        <link rel="shortcut icon" href="/images/weim-favicon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
