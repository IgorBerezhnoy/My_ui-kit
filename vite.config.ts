import * as path from 'path'
import { resolve } from 'path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

import { dependencies, devDependencies } from './package.json'

export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.ts'),
      // the proper extensions will be added
      fileName: 'UiKit_PortfolioPlatform',
      formats: ['es'],
      name: '',
    },
    rollupOptions: {
      external: [
        'react/jsx-runtime',
        ...Object.keys(dependencies),
        ...Object.keys(devDependencies),
      ],
    },
    sourcemap: true,
    target: 'esnext',
  },
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
})
