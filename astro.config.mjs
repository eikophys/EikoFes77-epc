import { defineConfig } from 'astro/config';
import compress from "astro-compress";
import critters from "astro-critters";
import relativeLinks from "astro-relative-links";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [compress(), critters(), icon()]
});