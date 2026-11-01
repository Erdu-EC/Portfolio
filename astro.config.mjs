// @ts-check
import {defineConfig, logHandlers} from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    site: 'https://erdu.dev',
    logger: logHandlers.compose(
        logHandlers.console(),
        //logHandlers.json()
    ),
    vite: {
        plugins: [tailwindcss()]
    },
    image: {
        domains: ['fonts.googleapis.com']
    }
});