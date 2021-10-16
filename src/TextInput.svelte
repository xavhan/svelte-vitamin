<script lang="ts">
  // https://github.com/Decathlon/vitamin-web/blob/main/packages/sources/css/src/components/text-input/src/index.css
  import { classnames, random_id, vitamin } from './utils';

  let className = '';
  export { className as class };

  export let valid;
  export let error;
  export let multiline;

  $: classes = classnames(
    vitamin('text-input'),
    error && 'vtmn-text-input--error',
    !error && valid && 'vtmn-text-input--valid',
    className
  );
  $: helper_classes = classnames(
    'vtmn-text-input_helper-text',
    error && 'vtmn-text-input_helper-text--error'
  );
  export let id = random_id();
  export let value;
  const HELPER = 'vtmn-text-input_helper-text';
</script>

<label for={id} class="vtmn-text-input_label">
  <slot />
  <slot name="label" />
</label>

<div class="vtmn-text-input_container">
  {#if multiline}
    <textarea {...$$restProps} type="text" bind:value class={classes} {id} />
  {:else}
    <input {...$$restProps} type="text" bind:value class={classes} {id} />
  {/if}
</div>

{#if $$slots.helper}
  <p class={helper_classes}>
    <slot name="helper" />
  </p>
{/if}

{#if $$slots.error}
  <p class={helper_classes}>
    <slot name="error" />
  </p>
{/if}
