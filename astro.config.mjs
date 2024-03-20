import { defineConfig } from 'astro/config';
import compress from "astro-compress";
import critters from "astro-critters";

import relativeLinks from "astro-relative-links";

// https://astro.build/config
export default defineConfig({
  integrations: [compress(), critters(), relativeLinks()]
});