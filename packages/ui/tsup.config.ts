import { defineConfig } from 'tsup';

export default defineConfig({
  clean: true,
  dts: true,
  entry: ['src/index.ts', 'src/styles.ts'],
  external: ['react', 'react-dom'],
  format: ['esm'],
  sourcemap: true,
  treeshake: true,
});
