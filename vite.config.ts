import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig(({ command }) => {
  const isProduction = command === 'build'

  return {
    plugins: [
      react(),
      ...(isProduction
        ? [
            dts({
              insertTypesEntry: true,
              exclude: ['**/*.test.*', '**/*.spec.*'],
            }),
          ]
        : []),
    ],
    ...(isProduction
      ? {
          build: {
            lib: {
              entry: resolve(__dirname, 'src/index.ts'),
              name: 'NumericBackground',
              formats: ['es', 'umd'],
              fileName: (format) =>
                `index.${format === 'es' ? 'esm' : format}.js`,
            },
            rollupOptions: {
              external: ['react', 'react-dom'],
              output: {
                globals: {
                  react: 'React',
                  'react-dom': 'ReactDOM',
                },
              },
            },
            target: 'es2020',
          },
        }
      : {}),
    define: {
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development'
      ),
    },
  }
})
