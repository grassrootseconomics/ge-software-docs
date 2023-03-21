import React from 'react'
import Image from 'next/image'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
 logo: (
    <>
    <Image src="https://docs.grassecon.org/assets/favicon.svg" alt='CIC Stack' width={30} height={30} />
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
  footer: {
    text: 'CIC Stack',
  },
  nextThemes: {
    defaultTheme: 'light'
  },
}

export default config
