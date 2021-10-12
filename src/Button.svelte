<script>
  import { classnames, gen_variant, vitamin } from './utils';

  export let size;
  export let variant;
  let className = '';
  export { className as class };
  export let disabled;

  $: ariaLabel = $$props['aria-label'];
  $: classes = classnames(
    vitamin('btn'),
    variant && gen_variant('btn', 'variant', variant),
    size && gen_variant('btn', 'size', size),
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
