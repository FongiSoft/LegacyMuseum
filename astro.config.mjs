// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import vercel from '@astrojs/vercel/serverless';

import db from '@astrojs/db';

// https://astro.build/config
export default defineConfig({
  prefetch: false,
  output: "server",
  integrations: [tailwind(), db()],
  adapter: vercel()
});