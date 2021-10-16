<script lang="ts">
  // https://github.com/Decathlon/vitamin-web/blob/main/packages/sources/css/src/components/button/src/index.css
  import { classnames, gen_variant, vitamin } from './utils';

  export let size: 'small' | 'medium' | 'large';
  export let variant:
    | 'primary'
    | 'primary-reversed'
    | 'secondary'
    | 'tertiary'
    | 'conversion'
    | 'ghost'
    | 'ghost-reversed';
  let className = '';
  export { className as class };
  export let disabled: true;

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
