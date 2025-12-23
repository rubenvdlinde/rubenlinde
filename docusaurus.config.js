// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ruben van der Linde',
  tagline: 'Software Developer & Open Source Enthusiast',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://rubenvdlinde.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/rubenlinde/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'rubenvdlinde', // Usually your GitHub org/user name.
  projectName: 'rubenlinde', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'nl',
    locales: ['nl', 'en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/rubenvdlinde/rubenlinde/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/rubenvdlinde/rubenlinde/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
          title: 'Ruben van der Linde',
        logo: {
          alt: 'Ruben van der Linde',
          src: 'https://github.com/rubenvdlinde.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/rubenvdlinde',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '> Navigation',
            items: [
              {
                label: 'Documentation',
                to: '/docs/intro',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Conduction',
                href: 'https://www.conduction.nl',
              },
            ],
          },
          {
            title: '> Social',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/rubenvdlinde',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/rubenlinde/',
              },
              {
                label: 'X (Twitter)',
                href: 'https://x.com/rubenlinde',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/rubenlinde1985/',
              },
            ],
          },
          {
            title: '> Topics',
            items: [
              {
                label: 'Open Source',
                to: '/blog/tags/open-source',
              },
              {
                label: 'AI & Innovation',
                to: '/blog/tags/ai',
              },
              {
                label: 'Digital Sovereignty',
                to: '/blog/tags/soevereiniteit',
              },
            ],
          },
        ],
        copyright: `<div class="footer-terminal">
          <div class="footer-prompt">root@rubenlinde:~$ echo "Built with ❤️ and Open Source"</div>
          <div class="footer-output">Copyright © ${new Date().getFullYear()} Ruben van der Linde | Powered by Docusaurus</div>
        </div>`,
      },
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
        additionalLanguages: ['php', 'bash', 'json', 'yaml'],
      },
    }),
};

export default config;

