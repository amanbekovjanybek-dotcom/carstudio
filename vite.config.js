import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/carstudio/',
  plugins: [react()],
  server: {
    watch: {
      ignored: ['**/public/**/*.mp4', '**/public/**/*.mp3', '**/public/**/*.mov'],
    },
  },
})
