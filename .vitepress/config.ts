import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'Ducktors',
  description: 'to the rescue',
  lastUpdated: true,
  outDir: './public',
  srcDir: './src',
  base: '/website/',
  themeConfig: {
    nav: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'The Collective',
        link: '/team',
      },
      {
        text: 'Blog',
        link: 'https://backend.cafe',
      },
      {
        text: 'Projects',
        items: [
          {
            text: 'Turborepo Remote Cache',
            link: 'https://github.com/ducktors/turborepo-remote-cache',
          },
          { text: 'Arecibo', link: 'https://github.com/ducktors/arecibo' },
          { text: 'Carretto', link: 'https://github.com/ducktors/carretto' },
          {
            text: 'Storagebus',
            link: 'https://github.com/ducktors/storagebus',
          },
          { text: 'Crane', link: 'https://github.com/ducktors/crane' },
        ],
      },
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/ducktors' }],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Ducktors',
    },
    editLink: {
      pattern: 'https://github.com/ducktors/website/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
  },
})
