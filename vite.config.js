import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/api": {
        target:
          "https://script.google.com/macros/s/AKfycby_mMU-guMbmK0kJ8_Q1_sCN2WgBArxBGZUBNSRshLyqJ7BDq2jMgPMhpx45g_5iTUl/exec", // Backend URL
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
