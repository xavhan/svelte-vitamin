<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { Button } from 'svelte-vitamin';

  const sizes = ['small', 'medium', 'large'];
  const variants = [
    'primary',
    'primary-reversed',
    'secondary',
    'tertiary',
    'conversion',
    'ghost',
    'ghost-reversed',
  ];
</script>

<Meta title="Button" component={Button} />

<Story name="sizes">
  <div>
    <Button>no size</Button>
  </div>
  {#each sizes as size}
    <div>
      <Button {size}>size='{size}'</Button>
    </div>
  {/each}
</Story>

<Story name="variants">
  <div>
    <Button>no variant</Button>
  </div>
  {#each variants as variant}
    <div>
      <Button color={variant}>color='{variant}'</Button>
    </div>
  {/each}
</Story>
