<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import { Block } from "./utils";
  import { Loader } from "svelte-vitamin";

  const sizes = ["small", "medium", "large"];
  const LINK =
    "https://decathlon.github.io/vitamin-web/@vtmn/showcase-css/?path=/docs/components-link--overview";
  const BLOCK_STYLE = 'display: flex; align-items: center'
</script>

<Meta title="Loader" component={Loader} />

<Story name="sizes">
  <Block style={BLOCK_STYLE}>
    <Loader/> no size
  </Block>
  {#each sizes as size}
    <Block style={BLOCK_STYLE}>
      <Loader {size}/>size='{size}'
    </Block>
  {/each}
</Story>
