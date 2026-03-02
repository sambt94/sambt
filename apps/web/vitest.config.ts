// ABOUTME: Vitest configuration for the web app.
// ABOUTME: Uses jsdom environment for React component testing.

import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: [],
  },
});
