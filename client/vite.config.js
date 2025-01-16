import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true, // Ouvre automatiquement le navigateur
  },
  base: './', // Spécifie le chemin de base pour les assets
})
