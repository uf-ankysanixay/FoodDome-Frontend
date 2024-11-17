import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 4000, // Set the port to 4000
    host: '127.0.0.1', // Optional: Set the host to 127.0.0.1
  }
})
