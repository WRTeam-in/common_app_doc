// @ts-check
import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "General Doc",
  tagline: "WRTeam",
  url: "https://wrteam-in.github.io",
  baseUrl: "/common_app_doc/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "WRTeam-in", // Usually your GitHub org/user name.
  projectName: "common_app_doc", // Usually your repo name.

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [
    require.resolve("@easyops-cn/docusaurus-search-local"),
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            from: "/common_app_doc/category/general-settings",
            to: "/common_app_doc/general-settings",
          },
          {
            from: "/category/general-settings",
            to: "/common_app_doc/general-settings",
          },
          // Handle URLs without baseUrl
          {
            from: "/general-settings",
            to: "/common_app_doc/general-settings",
          },
        ],
      },
    ],
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          routeBasePath: "/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      //   image: "",
      navbar: {
        title: "General Doc",
        items: [
          {
            type: "search",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright ${new Date().getFullYear()} WRTeam.`,
      },
      colorMode: {
        defaultMode: "dark",
      },
      prism: {
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
