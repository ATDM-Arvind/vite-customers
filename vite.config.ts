/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // Add the extensions you use
    alias: {
      "@acc/api": "http://arvind-api-vite.s3-website-us-east-1.amazonaws.com"
    }
  },
  build: {
    rollupOptions: {
      input: "src/acc-profile.ts",
      preserveEntrySignatures: "exports-only",
      output: {
        exports: "auto",
        format: "esm",
        entryFileNames: "[name].js"
      },
    },
  },
  plugins: [
    react()
  ],
  server: {
    host: "localhost",
    port: 4172
  },
  test: {
    environment: 'jsdom',
    globals:true,
    setupFiles:'./src/_test_/setup.tsx',
    css:true,
    reporters: ['default'],
    coverage: {
      provider: 'istanbul', // or 'v8'
      reporter: ['text', 'json', 'html'],
    },
  }
});
