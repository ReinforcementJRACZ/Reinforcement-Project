import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
	server: {
		proxy: {
			'/api': 'http://localhost:3333'
		}
	},
	optimizeDeps: {
    include: ['@mui/material', '@mui/joy'],
  }
})
