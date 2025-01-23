// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  env: {
    schema: {
      SITE_NAME: envField.string({ context: "server", access: "public", default: "ThaiDevChannels" }),
      SITE_DESCRIPTION: envField.string({ context: "server", access: "public", default: "เว็บรวบรวมช่องของคอนเทนครีเอเตอร์สายเขียนโค้ด" }),
    },
  },
  integrations: [tailwind()]
});