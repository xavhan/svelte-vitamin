# NOTES

- svelte kit / storybook do not play well together with `.js` config files -> `.cjs` seems to do the trick (follow https://github.com/storybookjs/storybook/issues/11587)
- preview-head is loading `@vtmn/design-tokens` from a CDN (this is only necessary within storybook, and I did not manage to fix the `.storybook/webpack.config.cjs`)
