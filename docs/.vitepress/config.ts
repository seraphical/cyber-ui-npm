import { defineConfig } from 'vitepress';
import { sidebar } from './themeConfig/sidebar';
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Cyber UI',
  description: 'A Component Doc',
  //配置图标
  head: [['link', { rel: 'icon', href: '/favicon.svg' }]],
  themeConfig: {
    logo: '/favicon.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'vue2', link: '/src/vue2/guides/code-specification' },
      { text: 'vue3', link: '/src/vue3/guides/code-specification' },
      { text: 'react', link: '/src/react/index' },
      { text: '工具文档', link: '/src/tools/regexp' },
    ],
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://vitepress.dev/guide/what-is-vitepress' },
    ],
  },
});
