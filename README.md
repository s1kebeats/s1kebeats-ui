### Usage (Tailwind required):

1. `pnpm i @s1kebeats/s1kebeats-ui`
2. add library path to `tailwind.config.js`:

```
module.exports = {
  ...
  content: [
    ...
    './node_modules/@s1kebeats/s1kebeats-ui/dist/*.js'
   ...
  ],
  ...
}
```

3. connect output css file - `~/node_modules/@s1kebeats/s1kebeats-ui/dist/style.css` (nuxt.config.ts css)
