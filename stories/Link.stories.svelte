<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import { Block } from "./utils";
  import { Link } from 'svelte-vitamin';

  const sizes = ["small", "medium", "large"];
  const LINK =
    "https://decathlon.github.io/vitamin-web/@vtmn/showcase-css/?path=/docs/components-link--overview";
</script>

<Meta title="Link" component={Link} />

<Story name="sizes">
  <Block>
    <Link href={LINK}>no size</Link>
  </Block>
  {#each sizes as size}
    <Block>
      <Link {size} href={LINK}>size='{size}'</Link>
    </Block>
  {/each}
</Story>

<Story name="standalone">
  <Link standalone href={LINK}>standalone link</Link>
</Story>

<Story name="external">
  <Link external href={LINK} target="_blank">external link</Link>
</Story>
