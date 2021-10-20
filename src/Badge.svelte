<script lang="ts">
  import '@vtmn/css-badge'
  // https://github.com/Decathlon/vitamin-web/blob/main/packages/sources/css/src/components/badge/src/index.css
  import { classnames, gen_variant, vitamin } from './utils';

  export let empty: boolean;
  export let variant: 'default' | 'brand' | 'reversed' | 'accent';
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
