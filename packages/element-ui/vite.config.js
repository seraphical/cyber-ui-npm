import * as path from 'path';
import { createVuePlugin } from 'vite-plugin-vue2';
import { alias } from '../../scripts';
import { defineConfig } from 'vite';

export default defineConfig(async ({ command, mode }) => {
  let docsBuild = {};
  if (mode === 'docs') {
    docsBuild.base = './';
    docsBuild.build = {
      outDir: '../../docs/.vitepress/dist/element-ui',
    };
  }
  return {
    server: {
      hmr: true,
      port: '3000',
    },
    plugins: [createVuePlugin()],
    build: {
      rollupOptions: {
        external: ['element-ui', 'vue'],
      },
      lib: {
        entry: path.resolve(__dirname, './components/index.js'),
        name: 'cyberUi',
        fileName: 'cy-element-ui',
        formats: ['es', 'cjs', 'umd', 'iife'],
      },
    },
    resolve: {
      alias: await alias(),
    },
    ...docsBuild, //将整个项目打包到 vitepress 中
  };
});
