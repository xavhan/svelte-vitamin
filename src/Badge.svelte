<script>
  import { classnames, gen_variant, vitamin } from './utils';

  export let empty;
  export let variant;
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
