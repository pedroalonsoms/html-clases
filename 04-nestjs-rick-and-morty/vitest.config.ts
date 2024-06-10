/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import path from 'path'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    setupFiles: 'src/helpers/setupTests.ts',
    environment: 'jsdom',
    coverage: {
      // files to include in metrics for coverage
      // add your folders, adjust based on yor structure
      include: [
        'src/app/**/*.{ts,tsx}',
        'src/ui/**/*.{ts,tsx}',
        'src/controllers/**/*.{ts,tsx}',
      ],
      // if you want to exclude some files
      exclude: [],
      reporter: ['html', 'text-summary', 'json'],
      thresholds: {
        functions: 1,
        lines: 1,
        branches: 1,
        statements: 1,
      },
    },
  },
  resolve: {
    alias: {
      // add this section if you are using an alias
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
