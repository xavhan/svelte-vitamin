<script>
  import { classnames, variant, vitamin } from './utils';
  // vtmn variants
  export let size;
  export let standalone;
  export let external;
  // go through
  let className = '';
  export { className as class };

  $: classes = classnames(
    vitamin('link'),
    size && variant('link', 'size', size),
    standalone && [vitamin('link'), 'standalone'].join('--'),
    external && [vitamin('link'), 'icon-along'].join('--'),
    className
  );
</script>

<a {...$$restProps} class={classes} href={$$props.href}>
  <slot />
</a>
