<script>
  import { classnames, variant, vitamin } from './utils';
  // vtmn variants
  export let size;
  export let color;
  // go through
  let className = '';
  export { className as class };
  export let disabled;

  $: ariaLabel = $$props['aria-label'];
  $: classes = classnames(
    vitamin('btn'),
    color && variant('btn', 'variant', color),
    size && variant('btn', 'size', size),
    className
  );
</script>

<button
  on:click
  {...$$restProps}
  class={classes}
  {disabled}
  aria-label={ariaLabel}
>
  <slot />
</button>
