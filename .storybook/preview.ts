import type { Preview } from '@storybook/vue3'
import { setup } from '@storybook/vue3'
import { type App } from 'vue';

import './tailwind.css'

import { createPinia } from 'pinia';

const pinia = createPinia();

setup((app: App) => {
  app.use(pinia);
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
}

export default preview
