import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { readdirSync, copyFileSync, existsSync, mkdirSync } from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/',
  build: {
    assetsDir: 'assets',
    assetsInclude: "**/*.glb",
    outDir: './build',
    emptyOutDir: true,
    rollupOptions: {
      plugins: [
        {
          name: 'copy-glb-files',
          async generateBundle(options, bundle) {

            const srcDir = './public'; // Change this to your directory containing .glb files
            const destDir = './build/assets'; // Change this to your assets directory

            // Ensure destination directory exists
            if (!existsSync(destDir)) {
              mkdirSync(destDir, { recursive: true });
            }

            // Copy .glb files to assets directory
            const files = readdirSync(srcDir);
            files.forEach(file => {
              if (file.endsWith('.glb')) {
                const srcPath = resolve(srcDir, file);
                const destPath = resolve(destDir, file);
                copyFileSync(srcPath, destPath);
              }
            });
          }
        }
      ]
    }
  },
})
