<script lang="ts">
  import '@vtmn/css-snackbar';
  // https://github.com/Decathlon/vitamin-web/blob/main/packages/sources/css/src/components/snackbar/src/index.css
  import { classnames, vitamin } from './utils';

  const SNACKBAR = 'snackbar';
  let className = '';
  export { className as class };

  $: classes = classnames(vitamin(SNACKBAR), className);
</script>

<div class={classes} {...$$restProps}>
  <slot />
</div>
