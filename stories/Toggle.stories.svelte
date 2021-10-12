<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { Block } from "./utils";
  import { Toggle } from "svelte-vitamin";

  let toggle1 = false;
  let toggle2 = true;
  let toggle3 = false;
  let toggle4 = true;
</script>

<Meta title="Toggle" component={Toggle} />

<Story name="overview">
  <Block>
    <Toggle bind:checked={toggle1}>toggle1 label</Toggle>
  </Block>
  <Block>
    <Toggle bind:checked={toggle2}>toggle2 label</Toggle>
  </Block>
  <Block>
    <Toggle bind:checked={toggle3} disabled>toggle3 label</Toggle>
  </Block>
  <Block>
    <Toggle bind:checked={toggle4} disabled>toggle4 label</Toggle>
  </Block>

  <hr>

  <pre>
  States of toggles checked prop:
    checkbox1: toggle={toggle1}
    checkbox2: toggle={toggle2}
    checkbox3: toggle={toggle3} + disabled=true
    checkbox4: toggle={toggle4} + disabled=true
  </pre>
</Story>
