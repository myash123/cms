/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Allows using global test functions like `it` and `expect` without importing them
    environment: 'jsdom', // Mimics browser environment for testing React components
    setupFiles: './src/setupTests.ts', // Initializes test environment
  },
});
