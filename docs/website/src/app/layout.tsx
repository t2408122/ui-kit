import { Footer, Layout, Navbar } from 'nextra-theme-docs';
import { Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import 'nextra-theme-docs/style.css';
import '@iocare-ui-kit/themes/index.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://github.com/t2408122/ui-kit'),
  title: {
    template: '%s - Iocare UI Kit',
    absolute: 'Iocare UI Kit',
  },
  description: 'Iocare UI Kit',
  applicationName: 'Iocare UI Kit',
  generator: 'Next.js',
  appleWebApp: {
    title: 'Iocare UI Kit',
  },
  other: {
    'msapplication-TileImage': '/ms-icon-144x144.png',
    'msapplication-TileColor': '#fff',
  },
  twitter: {
    site: 'https://github.com/t2408122/ui-kit',
  },
};

const navbar = (
  <Navbar logo={<b>Iocare UI Kit</b>} projectLink="https://t2408122.github.io/ui-kit" />
);
const footer = <Footer>MIT {new Date().getFullYear()} © Iocare UI Kit.</Footer>;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" dir="ko" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/t2408122/ui-kit/tree/main/docs/website"
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
