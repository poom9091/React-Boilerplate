
import "@storybook/addon-console";
import 'tailwindcss/tailwind.css';
import '../src/App.css'
import '../src/index.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'bluetheam',
    values: [
      {
        name: 'write',
        value: '#fff',
      },
      {
        name: 'bluetheam',
        value: '#3482F6',
      },
    ],
  },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
}
