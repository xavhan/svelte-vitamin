<script>
  import { classnames, gen_variant, vitamin } from './utils';
  // vtmn variants
  export let empty;
  export let variant;
  // go through
  let className = '';
  export { className as class };

  $: classes = classnames(
    vitamin('badge'),
    variant && gen_variant('badge', 'variant', variant),
    empty && gen_variant('badge', 'size', 'without-value'),
    className
  );
</script>

<span {...$$restProps} class={classes}>
  <slot />
</span>
