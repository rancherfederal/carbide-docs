// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Rancher Government Carbide',
  tagline: 'Securing Cloud Native Missions',
  url: 'https://rancherfederal.github.io',
  baseUrl: '/carbide-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/carbide-logo.ico',
  trailingSlash: false,
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'rancherfederal', // Usually your GitHub org/user name.
  projectName: 'carbide-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [ require.resolve('docusaurus-lunr-search'),
      {
        languages: ['en'],
        indexBaseUrl: true,
        highlightResult: true
      }
    ]
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/rancherfederal/carbide-docs/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:


    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        // https://docusaurus.io/docs/api/themes/configuration
        title: '',
        logo: {
          alt: 'Carbide Logo',
          // src: 'img/rgs_navbar_spaced.svg',
          src: 'img/rancher_carbide_long_light_bg.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://ranchergovernment.com/contact',
            label: 'Contact Sales',
            position: 'right',
          },
          {
            href: 'https://github.com/rancherfederal/carbide-docs/issues',
            label: 'Submit Feedback',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Carbide Registry Docs',
                to: '/docs/registry-docs/introduction',
              },
              {
                label: 'STIGATRON Docs',
                to: '/docs/stigatron-docs/introduction',
              },
              {
                label: 'Airgapped Docs',
                to: '/docs/airgapped-docs/introduction',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Rancher',
                href: 'https://rancher.com',
              },
              {
                label: 'Rancher GitHub',
                href: 'https://github.com/rancher',
              },
              {
                label: 'Rancher Slack',
                href: 'https://rancher-users.slack.com',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'RGS Blog',
                to: 'https://ranchergovernment.com/blog',
              },
              {
                label: 'RGS GitHub',
                href: 'https://github.com/rancherfederal',
              },
              {
                label: 'RGS ZenDesk',
                href: 'https://support.rancherfederal.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Rancher Government Solutions. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
