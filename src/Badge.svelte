<script>
  import { classnames, variant, vitamin } from './utils';
  // vtmn variants
  export let empty;
  export let color;
  // go through
  let className = '';
  export { className as class };

  $: classes = classnames(
    vitamin('badge'),
    color && variant('badge', 'variant', color),
    empty && variant('badge', 'size', 'without-value'),
    className
  );
</script>

<span {...$$restProps} class={classes}>
  <slot />
</span>
