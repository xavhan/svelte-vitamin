<script>
  import { classnames, gen_variant, vitamin } from './utils';

  export let size;
  let className = '';
  export { className as class };

  const LOADER = 'loader'
  $: classes = classnames(
    vitamin(LOADER),
    size && gen_variant(LOADER, 'size', size),
    className
  );
</script>

<div class={classes} {...$$restProps}></div>
