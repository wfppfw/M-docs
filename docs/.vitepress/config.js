// import { DefaultTheme, defineConfig } from 'vitepress';
// const nav = [
//   { text: '指南', link: '/guide/' },
//   { text: '组件', link: '/components/basic-component1' },
//   // 顶部导航下拉菜单按如下方式：
//   /*
//   {
//     text: 'Dropdown Menu',
//     items: [
//       { text: 'Item A', link: '/item-1' },
//       { text: 'Item B', link: '/item-2' },
//       { text: 'Item C', link: '/item-3' }
//     ]
//   }
//    */
// ];
// const sidebar = {
//   '/guide': [
//     {
//       text: '指南',
//       items: [
//         { text: '组件库介绍', link: '/guide/' },
//         { text: '快速开始', link: '/guide/quickstart' },
//       ],
//     },
//   ],
//   '/components': [
//     {
//       text: '通用基础组件',
//       items: [
//         { text: '基础组件 1', link: '/components/basic-component1' },
//         { text: '基础组件 2', link: '/components/basic-component2' },
//       ],
//     },
//     {
//       text: '通用业务组件',
//       items: [
//         { text: '通用组件 1', link: '/components/common-component1' },
//         { text: '通用组件 2', link: '/components/common-component2' },
//       ],
//     },
//     {
//       text: '高级业务组件',
//       items: [
//         { text: '高级组件 1', link: '/components/pro-component1' },
//         { text: '高级组件 2', link: '/components/pro-component2' },
//       ],
//     },
//   ],
// };

// module.exports = {
//   title: 'Hello VitePress',
//   base: '/',
//   description: 'Just playing around.',
// };

export default {
  title: 'Moon-docs',
  description: 'moon的学习文档组件库',
  head: [
    //站点favicon,图片资源在publi下
    // https://v2.vuepress.vuejs.org/zh/guide/assets.html#public-%E6%96%87%E4%BB%B6
    ['link', { rel: 'icon', href: '/moonLogo.png' }],
    //重定向
    [
      'script',
      {},
      `
          (function() {
 
          })();
          `,
    ],
  ],
  themeConfig: {
    siteTitle: false,
    logo: './moonLogo.png',
    nav: [
      { text: '指南', link: '/guide/installation' },
      { text: '组件库', link: '/components/' },
      {
        text: 'chrome插件文档',
        link: '/chromedocs/index',
      },
    ],
    socialLinks: [{ icon: 'github', link: 'https://gitee.com/geeksdidi' }],
    sidebar: {
      '/chromedocs/': [
        {
          text: 'welcome',
          collapsible: true,
          items: [
            {
              text: 'Index',
              link: '/chromedocs/index',
            },
            {
              text: 'welcome',
              link: '/chromedocs/Welcome - Chrome Developers.md',
            },
            {
              text: "What's new in Chrome extensions",
              link: "/chromedocs/Whats new in Chrome extensions - Chrome Developers.md",
            },
          ],
        },
        {
          text: 'Getting Started Guides',
          collapsible: true,
          items: [
            {
              text: 'Welcome',
              link: '/chromedocs/Getting Started Guides/Welcome - Chrome Developers.md',
            },
            {
              text: 'Extensions 101',
              link: '/chromedocs/Getting Started Guides/Extensions 101 - Chrome Developers.md',
            },
            {
              text: 'Development basics',
              link: '/chromedocs/Getting Started Guides/Development basics - Chrome Developers.md',
            },
            {
              text: 'Reading time',
              link: '/chromedocs/Getting Started Guides/Reading time - Chrome Developers.md',
            },
            {
              text: 'Focus Mode',
              link: '/chromedocs/Getting Started Guides/Focus Mode - Chrome Developers.md',
            },
            {
              text: 'Tabs Manager',
              link: '/chromedocs/Getting Started Guides/Tabs Manager - Chrome Developers.md',
            },
          ],
        },
        {
          text: 'Manifest V3',
          collapsible: true,
          items: [
            {
              text: 'Welcome to Manifest V3',
              link: '/chromedocs/Manifest V3/Welcome to Manifest V3 - Chrome Developers.md',
            },
            {
              text: 'Extensions platform vision',
              link: '/chromedocs/Manifest V3/Extensions platform vision - Chrome Developers.md',
            },
            {
              text: 'Overview of Manifest V3',
              link: '/chromedocs/Manifest V3/Overview of Manifest V3 - Chrome Developers.md',
            },
          ],
        },

        {
          text: 'Overview',
          collapsible: true,
          items: [
            {
              text: 'What are extensions?',
              link: '/chromedocs/Overview/What are extensions_ - Chrome Developers.md',
            },
            {
              text: 'What are themes?',
              link: '/chromedocs/Overview/What are themes_ - Chrome Developers.md',
            },
            {
              text: 'Frequently asked questions',
              link: '/chromedocs/Overview/Frequently asked questions - Chrome Developers.md',
            },
            {
              text: 'Extensions quality guidelines FAQ',
              link: '/chromedocs/Overview/Extensions quality guidelines FAQ - Chrome Developers.md',
            },
          ],
        },
        {
          text: 'Migrate from Manifest V2 to Manifest V3',
          collapsible: true,
          items: [
            {
              text: 'Migrating to Manifest V3',
              link: '/chromedocs/Migrate from Manifest V2 to Manifest V3/Migrating to Manifest V3 - Chrome Developers.md',
            },
            {
              text: 'Manifest V3 migration checklist',
              link: '/chromedocs/Migrate from Manifest V2 to Manifest V3/Manifest V3 migration checklist - Chrome Developers.md',
            },
            {
              text: 'Migrating from background pages to service workers',
              link: '/chromedocs/Migrate from Manifest V2 to Manifest V3/Migrating from background pages to service workers - Chrome Developers.md',
            },
            {
              text: 'Manifest V2 support timeline',
              link: '/chromedocs/Migrate from Manifest V2 to Manifest V3/Manifest V2 support timeline - Chrome Developers.md',
            },
            {
              text: 'Known issues when migrating to Manifest V3',
              link: '/chromedocs/Migrate from Manifest V2 to Manifest V3/Known issues when migrating to Manifest V3 - Chrome Developers.md',
            },
          ],
        },
        {
          text: 'API reference',
          items:[{
            text: 'API reference',
            link: '/chromedocs/API reference - Chrome Developers.md',
          }],
        },
        {
          text: 'Samples',
          items:[{
            text: 'Samples',
            link: 'https://github.com/GoogleChrome/chrome-extensions-samples',
          }],
          
        },
        {
          text: 'Develop extensions and themes',
          collapsible: true,
          items: [
            {
              text: 'Extension development overview',
              link: '/chromedocs/Develop extensions and themes/Extension development overview - Chrome Developers.md',
            },
            {
              text: 'Manifest file format.md',
              link: '/chromedocs/Develop extensions and themes/Manifest file format - Chrome Developers.md',
            },
            {
              text: 'Architecture overview',
              link: '/chromedocs/Develop extensions and themes/Architecture overview - Chrome Developers.md',
            },
            {
              text: 'Declare permissions',
              link: '/chromedocs/Develop extensions and themes/Declare permissions - Chrome Developers.md',
            },
            {
              text: 'Design the user interface',
              link: '/chromedocs/Develop extensions and themes/Design the user interface - Chrome Developers.md',
            },
            {
              text: 'Debugging extensions',
              link: '/chromedocs/Develop extensions and themes/Chrome Extensions Tutorial_ Debugging extensions - Chrome Developers.md',
            },
          ],
        },
        {
          text: 'In depth_ core concepts',
          collapsible: true,
          items: [
            {
              text: 'Message passing',
              link: '/chromedocs/In depth_ core concepts/Message passing - Chrome Developers.md',
            },
            {
              text: 'Content scripts',
              link: '/chromedocs/In depth_ core concepts/Content scripts - Chrome Developers.md',
            },
            {
              text: 'Manage events with service workers',
              link: '/chromedocs/In depth_ core concepts/Manage events with service workers - Chrome Developers.md',
            },
            {
              text: 'Match patterns',
              link: '/chromedocs/In depth_ core concepts/Match patterns - Chrome Developers.md',
            },
            {
              text: 'Using promises',
              link: '/chromedocs/In depth_ core concepts/Using promises - Chrome Developers.md',
            },
            {
              text: 'Cross-origin isolation',
              link: '/chromedocs/In depth_ core concepts/Cross-origin isolation - Chrome Developers.md',
            }
          ],
        },
        {
          text: 'In depth_ security',
          collapsible: true,
          items: [
            {
              text: 'Cross-origin XMLHttpRequest',
              link: '/chromedocs/In depth_ security/Cross-origin XMLHttpRequest - Chrome Developers.md',
            },
            {
              text: 'Using eval in Chrome extensions',
              link: '/chromedocs/In depth_ security/Using eval in Chrome extensions - Chrome Developers.md',
            },
          ],
        },
        {
          text: 'In depth_ more topics',
          collapsible: true,
          items: [
            {
              text: 'Overriding Chrome settings',
              link: '/chromedocs/In depth_ more topics/Overriding Chrome settings - Chrome Developers.md',
            },
            {
              text: 'Extending DevTools',
              link: '/chromedocs/In depth_ more topics/Extending DevTools - Chrome Developers.md',
            },
            {
              text: 'OAuth2 - Authenticate users with Google',
              link: '/chromedocs/In depth_ more topics/Chrome Extensions Tutorial_ OAuth2 - Authenticate users with Google - Chrome Developers.md',
            },
            {
              text: 'Overriding Chrome pages',
              link: '/chromedocs/In depth_ more topics/Overriding Chrome pages - Chrome Developers.md',
            },
            {
              text: 'Rich notifications API',
              link: '/chromedocs/In depth_ more topics/Rich notifications API - Chrome Developers.md',
            },
          ],
        },
        {
          text: 'Best practices',
          collapsible: true,
          items: [
            {
              text: 'Protect user privacy',
              link: '/chromedocs/Best practices/Protect user privacy - Chrome Developers.md',
            },
            {
              text: 'Declare permissions and warn users',
              link: '/chromedocs/Best practices/Declare permissions and warn users - Chrome Developers.md',
            },
            {
              text: 'Stay secure',
              link: '/chromedocs/Best practices/Stay secure - Chrome Developers.md',
            },
            {
              text: 'Accessibility (a11y)',
              link: '/chromedocs/Best practices/Accessibility (a11y) - Chrome Developers.md',
            },
            {
              text: 'Localization message formats',
              link: '/chromedocs/Best practices/Localization message formats - Chrome Developers.md',
            },
            {
              text: 'Give users options',
              link: '/chromedocs/Best practices/Give users options - Chrome Developers.md',
            },
          ],
        },
        {
          text: 'distributing you extensions',
          collapsible: true,
          items: [
            {
              text: 'Extension hosting',
              link: '/chromedocs/distributing you extensions/Extension hosting - Chrome Developers.md',
            },
            {
              text: 'Alternative Chrome extension installation methods',
              link: '/chromedocs/distributing you extensions/Alternative Chrome extension installation methods - Chrome Developers.md',
            },
            {
              text: 'Installing extensions on Linux',
              link: '/chromedocs/distributing you extensions/Installing extensions on Linux - Chrome Developers.md',
            },
            {
              text: 'Tutorial_ Google analytics',
              link: '/chromedocs/distributing you extensions/Tutorial_ Google analytics - Chrome Developers.md',
            },
          ],
        },
        {
          text: '个人学习笔记',
          collapsible: true,
          items: [
            {
              text: '基本入门',
              link: '/chromedocs/notebook/index.md',
            },
          ],
        },

      ],
      '/guide/': [
        {
          text: '基础',
          items: [
            {
              text: '安装',
              link: '/guide/installation',
            },
            {
              text: '快速开始',
              link: '/guide/quickstart',
            },
          ],
        },
        {
          text: '进阶',
          items: [
            {
              text: 'xx',
              link: '/xx',
            },
          ],
        },
      ],
      '/examples/': [
        {
          text: '基础组件',
          link: '/guide/installation',
        },
      ],
    },
  },
};
