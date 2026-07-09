import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/developer-profile-card/',
  plugins: [react()],
})