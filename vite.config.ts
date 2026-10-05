import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/kendo-shinpan-simulator/',
  plugins: [
    tailwindcss(),
  ],
});
