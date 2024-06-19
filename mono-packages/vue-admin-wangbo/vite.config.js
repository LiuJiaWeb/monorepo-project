import { fileURLToPath, URL } from 'node:url';
import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import pxtovw from 'postcss-px-to-viewport-8-plugin';
import autoprefixer from 'autoprefixer';
import dayjs from 'dayjs';
import cssSort from 'postcss-sorting';

const pxtovw_config = pxtovw({
  viewportWidth: 1920,
  exclude: [/node_modules/],
});

const app_version = dayjs().format('YYYYMMDD-HHmmss');

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      vue(),
      AutoImport({
        imports: ['vue', 'vue-router'],
      }),
      Components({
        resolvers: [
          AntDesignVueResolver({
            importStyle: false,
          }),
        ],
      }),
      UnoCSS(),
    ],

    optimizeDeps: {
      include: ['ant-design-vue', '@ant-design/icons-vue'],
    },

    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },

    css: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtovw_config,
          cssSort({
            'properties-order': [
              'position',
              'z-index',
              'top',
              'right',
              'bottom',
              'left',
              'display',
              'visibility',
              'float',
              'clear',
              'overflow',
              'overflow-x',
              'overflow-y',
              '-ms-overflow-x',
              '-ms-overflow-y',
              'clip',
              'zoom',
              'flex-direction',
              'flex-order',
              'flex-pack',
              'flex-align',
              '-webkit-box-sizing',
              '-moz-box-sizing',
              'box-sizing',
              'width',
              'min-width',
              'max-width',
              'height',
              'min-height',
              'max-height',
              'margin',
              'margin-top',
              'margin-right',
              'margin-bottom',
              'margin-left',
              'padding',
              'padding-top',
              'padding-right',
              'padding-bottom',
              'padding-left',
            ],
          }),
        ],
      },
    },
    server: {
      hmr: true,
      usePolling: true,
      port: '3000',
      host: true,
      https: false,
      cors: true, // 默认启用并允许任何源
      open: true, // 在服务器启动时自动在浏览器中打开应用程序
      proxy: {
        // '/v1': {
        //   target: 'https://test-api-sqk.saiqike.com',
        //   changeOrigin: true,
        // },
      },
    },
    build: {
      outDir: 'dist', // 指定输出路径
      minify: 'terser', // 混淆器，terser构建后文件体积更小
      brotliSize: true, //压缩大型输出文件可能会很慢，因此禁用该功能可能会提高大型项目的构建性能
      cssCodeSplit: false, //整个项目中的所有 CSS 将被提取到一个 CSS 文件中
      chunkSizeWarningLimit: 5000, //chunk 大小警告的限制（以 kbs 为单位）
      sourcemap: false, //构建后是否生成 source map 文件
      assetsDir: 'resource', //指定生成静态资源的存放路径
      emptyOutDir: true, //默认情况下，若 outDir 在 root 目录下，则 Vite 会在构建时清空该目录
      terserOptions: {
        compress: {
          drop_console: mode === 'build_prod',
          drop_debugger: mode === 'build_prod',
        },
      },
      rollupOptions: {
        output: {
          chunkFileNames: `resource/js/[name]-${app_version}.js`,
          entryFileNames: `resource/js/[name]-${app_version}.js`,
          assetFileNames: `resource/[ext]/[name]-${app_version}.[ext]`,
        },
      },
    },
  };
});
