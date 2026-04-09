import { fileURLToPath, URL } from 'node:url';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig(({ command }) => ({
  plugins: [react()],
  resolve: command === 'serve' ? { conditions: ['source'] } : undefined,
  server: {
    fs: {
      allow: [fileURLToPath(new URL('../..', import.meta.url))],
    },
    host: true,
  },
}));
