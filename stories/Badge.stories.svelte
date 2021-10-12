<script lang="ts">
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import { Block } from "./utils";
  import { Badge } from "svelte-vitamin";

  const variants = ["default", "brand", "reversed", "accent"];
</script>

<Meta title="Badge" component={Badge} />

<Story name="variants">
  <Block>
    <Badge>no variant</Badge>
  </Block>
  {#each variants as variant}
    <Block>
      <Badge {variant}>variant='{variant}'</Badge>
    </Block>
  {/each}
</Story>

<Story name="without content">
  <Block>
    <Badge empty />
  </Block>
  <Block>
    <Badge>⬅️ with empty binding</Badge>
  </Block>
</Story>
