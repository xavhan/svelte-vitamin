<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { Select } from 'svelte-vitamin';

  let selectedValue1 = 'value1';
  let selectedValue2 = 'value1';
  let selectedValue3 = 'value1';
  let selectedValue4 = 'value1';
</script>

<Meta title="Select" />

<Story name="overview">
  <Select bind:value={selectedValue1}>
    <option value="value1">option1</option>
    <option value="value2">option2</option>
    <option value="value3">option2</option>
  </Select>
  <pre>
    selected: {selectedValue1}
  </pre>

  <br />
  <hr />
  <br />

  with label
  <Select bind:value={selectedValue2}>
    <svelte:fragment slot="label">label</svelte:fragment>
    <option value="value1">option1</option>
    <option value="value2">option2</option>
    <option value="value3">option2</option>
  </Select>
  <pre>
    selected: {selectedValue2}
  </pre>

  <br />
  <hr />
  <br />

  with label and errors
  <Select bind:value={selectedValue3}>
    <svelte:fragment slot="label">label</svelte:fragment>
    <option value="value1">option1</option>
    <option value="value2">option2</option>
    <option value="value3">option2</option>
    <svelte:fragment slot="error">this is an error message</svelte:fragment>
  </Select>

  <pre>
    selected: {selectedValue3}
  </pre>

  <br />
  <hr />
  <br />

  disabled
  <Select bind:value={selectedValue3} disabled>
    <svelte:fragment slot="label">label</svelte:fragment>
    <option value="value1">option1</option>
    <option value="value2">option2</option>
    <option value="value3">option2</option>
  </Select>

  <pre>
    selected: {selectedValue3}
  </pre>
</Story>
