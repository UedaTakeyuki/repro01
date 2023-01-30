import { defineConfig } from 'vite'
import { viteExternalsPlugin } from 'vite-plugin-externals'
import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      plugins: [
        visualizer(),
      ],
    },
  },
  plugins: [
    vue(),
    // It should be under @vitejs/plugin-vue
    viteExternalsPlugin({
      vue: 'Vue',
    }),
  ],
})
