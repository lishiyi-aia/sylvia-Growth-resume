import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // GitHub Pages 部署时使用仓库子路径，确保静态资源可正确加载
  base: '/sen-3d-resume/',
  plugins: [react()],
  server: { host: true, port: 5173 },
})
