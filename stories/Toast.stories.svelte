<script lang="ts">
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import faker  from "faker"
  import { Block } from "./utils";
  import { Toast, Button } from "svelte-vitamin";
</script>

<Meta title="Toast" component={Toast} />

<Story name="overview">
  <Block>
    <Toast>no variant</Toast>
  </Block>
  <Block>
    <Toast>{faker.lorem.paragraph()}</Toast>
  </Block>
</Story>
