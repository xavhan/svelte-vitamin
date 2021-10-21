<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { Checkbox } from './../lib';

  let checkbox1 = false;
  let checkbox2 = true;
  let checkbox3 = false;
  let checkbox4 = true;
  let checkbox5 = true;
  let checkbox6 = false;
</script>

<Meta title="Checkbox" component={Checkbox} />

<Story name="states">
  <Checkbox bind:checked={checkbox1}>text of label</Checkbox>
  <Checkbox bind:checked={checkbox2}>text of label</Checkbox>
  <Checkbox bind:checked={checkbox3} disabled>disabled</Checkbox>
  <Checkbox bind:checked={checkbox4} disabled>disabled</Checkbox>
  <Checkbox bind:checked={checkbox5} indeterminate>indeterminate</Checkbox>
  <Checkbox bind:checked={checkbox6} indeterminate disabled
    >indeterminate</Checkbox
  >

  <hr />

  <pre>
  States of checkboxes checked prop:
    checkbox1: checked={checkbox1}
    checkbox2: checked={checkbox2}
    checkbox3: checked={checkbox3} + disabled=true
    checkbox4: checked={checkbox4} + disabled=true
    checkbox5: checked={checkbox5} + indeterminate=true
    checkbox6: checked={checkbox6} + indeterminate=true + disabled=true
  </pre>
</Story>
