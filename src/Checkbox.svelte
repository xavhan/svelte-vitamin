<script lang="ts">
  import '@vtmn/css-checkbox'
  // https://github.com/Decathlon/vitamin-web/blob/main/packages/sources/css/src/components/checkbox/src/index.css
  import { classnames, vitamin, random_id } from './utils';

  let className = '';
  export { className as class };
  export let checked;
  export let indeterminate;

  const CHECKBOX = 'checkbox';

  $: classes = classnames(
    vitamin(CHECKBOX),
    checked && indeterminate && 'vtmn-checkbox--indeterminate', // TODO: refactor that
    className
  );
  const id = $$props.id || random_id();
</script>

<div>
  <input class={classes} type="checkbox" bind:checked {id} {...$$restProps} />
  <label for={id}>
    <slot />
    <slot name="label" />
  </label>
</div>
