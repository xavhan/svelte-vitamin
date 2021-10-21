<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import faker from 'faker';
  import { Block } from './utils';
  import { Alert } from './../lib';

  const variants = ['info', 'success', 'warning', 'danger'];
</script>

<Meta title="Alert" component={Alert} />

<Story name="variants">
  <Block>
    <Alert>no variant</Alert>
  </Block>
  {#each variants as variant}
    <Block>
      <Alert {variant}>variant='{variant}'</Alert>
    </Block>
  {/each}
</Story>

<Story name="slots">
  <Block>
    <Alert>title</Alert>
  </Block>
  <Block>
    <Alert>
      <svelte:fragment slot="title">title</svelte:fragment>
    </Alert>
  </Block>
  <Block>
    <Alert>
      <svelte:fragment slot="title">title</svelte:fragment>
      <svelte:fragment slot="description">description</svelte:fragment>
    </Alert>
  </Block><Block>
    <Alert>
      <svelte:fragment slot="title">title</svelte:fragment>
      <svelte:fragment slot="description"
        >{faker.lorem.paragraph()}</svelte:fragment
      >
    </Alert>
  </Block>
  <Block>
    <Alert>
      <svelte:fragment slot="description">description</svelte:fragment>
    </Alert>
  </Block>
</Story>
