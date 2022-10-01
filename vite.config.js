import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgSprites from 'rollup-plugin-svg-sprites'
import ViteYaml from '@modyfi/vite-plugin-yaml'
import Markdown from 'vite-plugin-md'
import code from '@yankeeinlondon/code-builder'
import hljs from 'highlight.js'

function randomHex() {
  const randomUnit = () => "abcdefghijklmnopqrstuvwxyz".charAt(Math.floor(Math.random() * 26))
  return Array.from({ length: 10 }, () => randomUnit()).join("")
}


export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    svgSprites({
      vueComponent: true,
      exclude: ['node_modules/**']
    }),
    ViteYaml(),
    Markdown({
      style: {
        baseStyle: 'none',
      },
      builders: [code({
        // 'base' | 'solarizedLight' | 'material' | 'dracula' | 'tomorrow' | 'duotone'
        theme: 'solarizedLight',
      })],
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true,
        highlight: function (str, lang) {
          if (lang && hljs.getLanguage(lang)) {
            try {
              return hljs.highlight(str, { language: lang }).value;
            } catch (__) { }
          }

          return ''
        }
      }
    })
  ],
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: 'js/[name].[hash].js',
        entryFileNames: 'js/[name].[hash].js',
        assetFileNames: 'assets/[ext]/[name].[hash].[ext]',
        manualChunks(id) {
          if (/node_modules/.test(id)) {
            return id.match(/(?<=node_modules\/).+?(?=\/)/)[0]
          }
          if (/posts.+\.md$/.test(id)) {
            return randomHex()
          }
        }
      }
    }
  }
})