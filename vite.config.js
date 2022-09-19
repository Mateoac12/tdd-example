import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  test: {
    // <-- configuracion de vitest
    environment: 'happy-dom',
  },
})
