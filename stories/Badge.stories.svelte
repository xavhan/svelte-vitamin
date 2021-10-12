<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { Badge } from 'svelte-vitamin';
  const variants = ['default', 'brand', 'reversed', 'accent'];
</script>

<Meta title="Badge" component={Badge} />

<Story name="variants">
  <div>
    <Badge>no variant</Badge>
  </div>
  {#each variants as variant}
    <div>
      <Badge color={variant}>color='{variant}'</Badge>
    </div>
  {/each}
</Story>

<Story name="without content">
  <div>
    <Badge empty />
  </div>
  <div>
    <Badge>⬅️ with empty binding</Badge>
  </div>
</Story>
