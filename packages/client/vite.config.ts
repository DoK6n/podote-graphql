import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from '@svgr/rollup';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    svgr(),
    VitePWA({
      injectRegister: 'auto', // 서비스 작업자를 자동으로 등록합니다
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      },
      devOptions: {
        enabled: true,
      },
      includeAssets: ['logo.svg'],
      manifest: {
        name: 'Podote App',
        short_name: 'Podote',
        description: 'Purple TodoList Note App',
        theme_color: '#3b305a',
        icons: [
          {
            src: 'logo.svg',
            sizes: '192x192',
            type: 'image/svg+xml',
          },
          {
            src: '/logo.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
          {
            src: 'logo.svg', // <== don't add slash, for testing
            sizes: '512x512',
            type: 'image/png',
            purpose: 'image/svg+xml',
          },
        ],
      },
    }),
  ],
  server: {
    host: true,
    port: 3005,
  },
});
