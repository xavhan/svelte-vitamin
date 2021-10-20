<script lang="ts">
  import '@vtmn/css-select';
  // https://github.com/Decathlon/vitamin-web/blob/main/packages/sources/css/src/components/select/src/index.css
  import { classnames, random_id } from './utils';

  let className = '';
  export { className as class };

  $: classes = classnames(error && 'vtmn-select--error', className);
  export let id = random_id();
  export let error;
  export let value;
  const CONTAINER = 'vtmn-select_container';
  const ERROR = 'vtmn-select_error-text';
</script>

<div class={CONTAINER}>
  {#if $$slots.label}
    <label for={id}>
      <slot name="label" />
    </label>
  {/if}

  <select {...$$restProps} {id} class={classes} bind:value>
    <slot />
  </select>

  {#if $$slots.error}
    <p class={ERROR}>
      <slot name="error" />
    </p>
  {/if}
</div>
