<script lang="ts">
  import '@vtmn/css-loader';
  // https://github.com/Decathlon/vitamin-web/blob/main/packages/sources/css/src/components/loader/src/index.css
  import { classnames, gen_variant, vitamin } from './utils';

  export let size;
  let className = '';
  export { className as class };

  const LOADER = 'loader';
  $: classes = classnames(
    vitamin(LOADER),
    size && gen_variant(LOADER, 'size', size),
    className
  );
</script>

<div class={classes} {...$$restProps} />
