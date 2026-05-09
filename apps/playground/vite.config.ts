import { fileURLToPath, URL } from 'node:url';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig(() => ({
  plugins: [react()],
  resolve: { conditions: ['source'] },
  server: {
    fs: {
      allow: [fileURLToPath(new URL('../..', import.meta.url))],
    },
    host: true,
  },
}));
