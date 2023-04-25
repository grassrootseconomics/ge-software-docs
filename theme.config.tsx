import React from 'react'
import Image from 'next/image'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
 logo: (
    <>
    <Image src="/logo.svg" alt='CIC Stack' width={30} height={30} />
      <span style={{ marginLeft: '.4em' }}>
        CIC Stack
      </span>
    </>
  ),
  project: {
    link: 'https://github.com/grassrootseconomics',
  },
  chat: {
    link: 'https://discord.gg/xayVsrkHPQ',
  },
  docsRepositoryBase: 'https://github.com/grassrootseconomics/cic-stack-docs',
  useNextSeoProps: () => ({
    titleTemplate: "%s | CIC Stack",
  }),
  sidebar: {
    defaultMenuCollapseLevel: 2,
  },
  head: function Head() {
    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <meta name="msapplication-TileColor" content="#111111" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@grassecon" />
        <meta name="twitter:creator" content="@grassecon" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="CIC Stack" />
      </>
    );
  },  
  footer: {
    text: 'Grassroots Economics CC BY-SA 4.0',
  },
  nextThemes: {
    defaultTheme: 'light'
  },
}

export default config
