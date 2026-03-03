import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
  ],
  server: {
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp',
      'Permissions-Policy': 'display-capture=(self)',
    },
  },
  preview: {
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp',
      'Permissions-Policy': 'display-capture=(self)',
    },
  },
  // The alias is no longer needed with the stable ffmpeg version
  // and was causing resolution issues for other @ffmpeg packages.
  // resolve: {
  //   alias: {
  //     '@ffmpeg/ffmpeg': path.resolve(__dirname, 'node_modules/@ffmpeg/ffmpeg/dist/ffmpeg.min.js'),
  //   },
  // },
});
