
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: 'Mentor Innova Demo',
        short_name: 'Mentor',
        description: 'Demo de PWA para el equipo 12',
        theme_color: '#4F46E5', // Color principal de la barra
        background_color: '#F3F4F6',
        display: 'standalone', // Oculta el navegador
        icons: [
          {
            src: 'https://via.placeholder.com/192/4F46E5/FFFFFF?text=M',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'https://via.placeholder.com/512/4F46E5/FFFFFF?text=M',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})