import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',

      includeAssets: [
        'favicon.ico',
        'apple-touch-icon.png',
        'mask-icon.svg'
      ],

      manifest: {
        name: 'Innova Mentor',
        short_name: 'Innova',
        description: 'Aplicación Web Progresiva para acompañar a personas adultas a recuperar el hábito del estudio.',

        theme_color: '#4F46E5',
        background_color: '#F3F4F6',

        display: 'standalone',
        orientation: 'portrait',

        start_url: '/',

        icons: [
          {
            src: '/icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})