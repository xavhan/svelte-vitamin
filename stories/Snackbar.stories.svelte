<script lang="ts">
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import faker  from "faker"
  import { Block } from "./utils";
  import { Snackbar, Button } from "svelte-vitamin";
</script>

<Meta title="Snackbar" component={Snackbar} />

<Story name="overview">
  <Block>
    <Snackbar>no variant</Snackbar>
  </Block>
  <Block>
    <Snackbar>
      {faker.lorem.paragraph()}
      <Button variant="secondary" size="small">action</Button>
    </Snackbar>
  </Block>
</Story>
