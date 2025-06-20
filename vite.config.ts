import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      react: path.resolve(__dirname, 'node_modules/react'),
      'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
    },
  },
server: {
  proxy: {
    '/api/v1/lease/billing/soa/all': {
      target: 'http://localhost:3002',
      rewrite: (path) => path.replace(/^\/api\/v1\/lease\/billing\/soa\/all/, '/soa'),
      changeOrigin: true,
    },
    '/api/v1/lease/billing/bs/all': {
      target: 'http://localhost:3002',
      rewrite: (path) => path.replace(/^\/api\/v1\/lease\/billing\/bs\/all/, '/bs'),
      changeOrigin: true,
    },
    '/api/v1/lease/billing/dtp/all': {
      target: 'http://localhost:3002',
      rewrite: (path) => path.replace(/^\/api\/v1\/lease\/billing\/dtp\/all/, '/dtp'),
      changeOrigin: true,
    },
  },
}

});