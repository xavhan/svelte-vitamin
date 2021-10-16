<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { TextInput } from 'svelte-vitamin';

  let input_value = 'test';
</script>

<Meta title="TextInput" />

<Story name="overview">
  <TextInput bind:value={input_value}>label</TextInput>

  <br />
  <hr />
  <br />

  <TextInput bind:value={input_value} valid>valid</TextInput>

  <br />
  <hr />
  <br />

  <TextInput bind:value={input_value} valid>
    valid + helper
    <svelte:fragment slot="helper">the helper text</svelte:fragment>
  </TextInput>

  <br />
  <hr />
  <br />

  <TextInput bind:value={input_value} error>
    error
    <svelte:fragment slot="error">the helper text</svelte:fragment>
  </TextInput>

  <br />
  <hr />
  <br />

  <TextInput bind:value={input_value} disabled>disabled</TextInput>

  <br />
  <hr />
  <br />

  <TextInput bind:value={input_value} multiline valid
    >multiline + valid</TextInput
  >

  <br />
  <hr />
  <br />

  <pre>
    value: {input_value}
  </pre>
</Story>
