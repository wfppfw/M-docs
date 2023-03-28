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
    siteTitle: "Moon's docs",
    logo: './moonLogo.png',
    nav: [
      { text: 'Guide', link: '/guide/installation' },
      { text: 'Component', link: '/components/' },
      {
        text: 'Extension Docs',
        link: '/chromedocs/index',
      },
      {
        text: 'Tool',
        link: '/tools/community',
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
              link: '/chromedocs/Whats new in Chrome extensions - Chrome Developers.md',
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
          items: [
            {
              text: 'API reference',
              link: '/chromedocs/API reference - Chrome Developers.md',
            },
          ],
        },
        {
          text: 'Samples',
          items: [
            {
              text: 'Samples',
              link: 'https://github.com/GoogleChrome/chrome-extensions-samples',
            },
          ],
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
            },
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
      tools: [
        {
          text: '导航分类',
          items: [
            {
              text: '社区文档网站收集',
              link: '/tools/community.md',
            },
            {
              text: '工具网站收集',
              link: '/tools/tools.md',
            },
            {
              text: '资源网站收集',
              link: '/tools/resources.md',
            },
            {
              text: 'demo',
              link: '/tools/demo.md',
            },
            {
              text: '没啥用的小玩意',
              link: '/tools/toy.md',
            },
          ],
        },
      ],
    },
  },
};
