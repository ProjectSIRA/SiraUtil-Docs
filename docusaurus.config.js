/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'SiraUtil Documentation',
  tagline: 'The best modding utility for Beat Saber',
  url: 'https://docs.sira.pro',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'projectsira',
  projectName: 'sirautil-docs',
  themeConfig: {
    navbar: {
      title: 'SiraUtil',
      logo: {
        alt: 'SIRA Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Guide',
        }
      ],
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/ProjectSIRA/SiraUtil-Docs/tree/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
