import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Dev server binds to a stable non-8080 port on all interfaces so the
// Alloy preview proxy (localhost:8080) can reach it inside the sandbox.
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
  },
})
