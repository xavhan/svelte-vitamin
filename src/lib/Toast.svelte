<script lang="ts">
  import '@vtmn/css-toast';
  // https://github.com/Decathlon/vitamin-web/blob/main/packages/sources/css/src/components/toast/src/index.css
  import { classnames, vitamin } from './utils';

  const TOAST = 'toast';
  let className = '';
  export { className as class };

  $: classes = classnames(vitamin(TOAST), className);

  // Warning: info icon and close icon are vtmx dependant
</script>

<div class={classes} {...$$restProps}>
  <slot />
</div>
