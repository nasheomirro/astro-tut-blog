import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://main--marvelous-basbousa-bd7333.netlify.app/",
  build: {
    inlineStylesheets: "never"
  },
  integrations: [preact()]
});