# svelte-vitamin

Try to build on my own a svelte wrapper around [vitamin design system](https://www.decathlon.design/)

Goal is to do some experiments and maybe, be integrated in or replace [@vtmn/svelte](https://www.decathlon.design/726f8c765/p/41193f-ui-libraries/t/23bddb)

## Ideas

- only abstract markup and class mechanics, avoid state mechanics such as hide/show (for now?)
- try to find some logic to classes naming construction (still work in progress)
- inspired by the code simplicity of [sveltestrap](https://github.com/bestguy/sveltestrap)
- build as much as possible to catch up with the other wrappers
- Use kit and new packaging features

## Overview

- light use of typescript (not much to do with it)
- storybook
- svelte/kit
- cover the existing css as much as possible (some features are not yet implemented)
- 12/18 components available

---

### How to use in a Svelte App?

Install

```shell
npm install --save svelte-vitamin
```

and use it like that

```sveltehtml
<script>
  import { Button, Snackbar } from "svelte-vitamin";
  let clicked = 0;
</script>

<style>
  main {
    font-family: sans-serif;
    text-align: center;
  }
</style>

<main>
  <Snackbar>
    Hello Vitamin {clicked ? clicked : ''}
    <Button
      size='small'
      variant="conversion"
      on:click={() => clicked++}>
      click me
    </Button>
  </Snackbar>
</main>
```

### How to develop?

```sh
npm run dev # alias to npm run storybook for convenience
```

### How to publish a new version?

```sh
# bump the root package.json (Important to avoid 403 on NPM)
npm version
# bundle everything using svelte kit package command
# https://kit.svelte.dev/docs#packaging
npx svelte-kit package #
# Publish to NPM
npm publish ./package
```
