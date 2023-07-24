export const sidebar = {
  '/src/vue2/': [
    {
      text: '开发指南',
      items: [
        { text: 'vue2开发规范', link: '/src/vue2/guides/code-specification' },
        { text: '日志', link: '/src/vue2/guides/log' },
      ],
    },
    {
      text: '组件',
      items: [{ text: 'table', link: '/src/vue2/components/table' }],
    },
  ],
  '/src/vue3/': [
    {
      text: '开发指南',
      collapsed: false,
      items: [
        { text: 'vue3规范', link: '/src/vue3/guides/code-specification' },
        { text: '日志', link: '/markdown-examples' },
      ],
    },
    {
      text: '组件',
      collapsed: false,

      items: [],
    },
  ],
  '/src/react/': [
    {
      text: '开发指南',
      collapsed: false,

      items: [
        { text: 'react规范', link: '' },
        { text: '日志', link: '' },
      ],
    },
    {
      text: '组件',
      collapsed: false,
      items: [],
    },
  ],
  '/src/tools/': [
    {
      text: '工具',
      collapsed: false,
      items: [{ text: '正则', link: '/src/tools/regexp' }],
    },
  ],
};
