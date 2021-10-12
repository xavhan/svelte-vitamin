<script>
  import { classnames, gen_variant, vitamin } from './utils';
  const LOADER = 'loader'
  // vtmn variants
  export let size;
  // go through
  let className = '';
  export { className as class };

  $: classes = classnames(
    vitamin(LOADER),
    size && gen_variant(LOADER, 'size', size),
    className
  );
</script>

<div class={classes} {...$$restProps}></div>
