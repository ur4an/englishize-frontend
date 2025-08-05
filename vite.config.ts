import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Use @ for src folder
    },
  },
  server: {
    port: 5173, // You can change if needed
    proxy: {
      '/api': 'http://localhost:3000', // Proxy API requests to backend
    },
  },
});
