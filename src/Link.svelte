<script>
  import { classnames, gen_variant, vitamin } from './utils';
  // vtmn variants
  export let size;
  export let standalone;
  export let external;
  // go through
  let className = '';
  export { className as class };

  $: classes = classnames(
    vitamin('link'),
    size && gen_variant('link', 'size', size),
    standalone && [vitamin('link'), 'standalone'].join('--'), // TODO: refactor that in utils
    external && [vitamin('link'), 'icon-along'].join('--'), // TODO: refactor that in utils
    className
  );
</script>

<a {...$$restProps} class={classes} href={$$props.href}>
  <slot />
</a>
