<script>
  import { classnames, random_id } from './utils';

  let className = '';
  export { className as class };

  $: classes = classnames(
    error && 'vtmn-select--error',
    className
  );
  export let id = random_id()
  export let error;
  export let value;
  const CONTAINER = 'vtmn-select_container'
  const ERROR = 'vtmn-select_error-text'
</script>

<div class={classes} ></div>

<div class={CONTAINER}>
  {#if $$slots.label}
    <label for={id}>
      <slot name="label"></slot>
    </label>
  {/if}

  <select {...$$restProps} id={id} class={classes} bind:value>
    <slot/>
  </select>

  {#if $$slots.error}
    <p class={ERROR}>
     <slot name="error"></slot>
    </p>
  {/if}
</div>
