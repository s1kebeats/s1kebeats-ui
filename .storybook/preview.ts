import { type Preview } from '@storybook/vue3'

import './tailwind.css'
import '../src/assets/main.scss'

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
