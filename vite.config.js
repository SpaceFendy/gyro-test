import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                app: resolve(__dirname, 'index.html'),
                remote: resolve(__dirname, 'remote.html'),
            },
        },
    },
});