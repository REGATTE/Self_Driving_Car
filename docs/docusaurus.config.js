const path = require('path');

const BASE_URL = '/docs';

module.exports = {
  title: 'Sef Driving Car Documentation',
  url: '#',
  baseUrl: `/`,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja'], // ja
    localeConfigs: {
      en: { label: 'English' },
      ja: { label: '日本語' },
    },
  },
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'self-driving-cars',
  projectName: 'selfdrivingcars',
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
    },
    navbar: {
      hideOnScroll: false,
      logo: {
        alt: 'Site Logo',
        src: `img/meta/logo_light.png`,
        srcDark: `img/meta/logo_dark.png`,
        href: '/',
        target: '_self',
        width: 140,
        height: 60,
      },
      items: [
        {
          type: 'doc',
          docId: 'index',
          // id is the name of index file
          label: 'HOME',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'model_index',
          // id is the name of index file
          label: 'MODEL',
          position: 'left',
        },
        {
          type: 'search',
          position: 'right',
        },
        {
          label: 'Support',
          position: 'right',
          items: [
            {
              href: '#',
              label: 'Raise an Issue',
              target: '_blank',
              rel: null,
            },
            {
              href: '#',
              label: 'Request Documentation',
              target: '_blank',
              rel: null,
            },
          ],
          className: 'navbar__link--support',
        },
        {
          type: 'separator',
          position: 'right',
        },

      ],
    },
    tagManager: {
      trackingID: '#',
    },
    prism: {
      theme: { plain: {}, styles: [] },
      additionalLanguages: ['shell-session', 'http'],
    },
    algolia: {
      appId: 'EBADZUXU7S',
      apiKey: '865feac8fcaa06ccbd404fce533c3329',
      indexName: 'selfdrivingcardocs',
      contextualSearch: true,
    }, 
  },
  plugins: [
    'docusaurus-plugin-sass',
    [
      'docusaurus-plugin-module-alias',
      {
        alias: {
          'styled-components': path.resolve(__dirname, './node_modules/styled-components'),
          react: path.resolve(__dirname, './node_modules/react'),
          'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
          '@components': path.resolve(__dirname, './src/components'),
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        routeBasePath: '/',
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: ({ versionDocsDirPath, docPath, locale }) => {
          if (locale != 'en') {
            return '#';
          }
          return `#`;
        },
        exclude: ['README.md'],
        lastVersion: 'current',
        versions: {
          current: {
            label: 'v6',
            banner: 'none',
          },
        },
      },
    ],
    '@docusaurus/plugin-content-pages',
    '@docusaurus/plugin-debug',
    '@docusaurus/plugin-sitemap',
    '@ionic-internal/docusaurus-plugin-tag-manager',
  ],
  themes: [
    [
      //overriding the standard docusaurus-theme-classic to provide custom schema
      path.resolve(__dirname, 'docusaurus-theme-classic'),
      {
        customCss: [
          require.resolve('./node_modules/modern-normalize/modern-normalize.css'),
          require.resolve('./node_modules/@ionic-internal/ionic-ds/dist/tokens/tokens.css'),
          require.resolve('./src/styles/custom.scss'),
        ],
      },
    ],
    path.resolve(__dirname, './node_modules/@docusaurus/theme-search-algolia'),
  ],
  customFields: {},
};