<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { Block } from './utils';
  import { Button } from './../lib';

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
  <Block>
    <Button>no size</Button>
  </Block>
  {#each sizes as size}
    <Block>
      <Button {size}>size='{size}'</Button>
    </Block>
  {/each}
</Story>

<Story name="variants">
  <Block>
    <Button>no variant</Button>
  </Block>
  {#each variants as variant}
    <Block>
      <Button {variant}>variant='{variant}'</Button>
    </Block>
  {/each}
</Story>
