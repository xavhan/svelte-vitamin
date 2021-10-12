<script>
  import { classnames, vitamin, random_id } from "./utils";
  const CHECKBOX = 'checkbox'

  // go through
  let className = "";
  export { className as class };
  export let checked;
  export let indeterminate;

  const INPUT = vitamin(CHECKBOX)
  $: classes = classnames(
    INPUT,
    checked && indeterminate && 'vtmn-checkbox--indeterminate', // TODO: refactor that
    className
  )

  const id = $$props.id || random_id();

</script>


<div>
  <input class={classes} type="checkbox" bind:checked {id} {...$$restProps}/>
  <label for={id}>
    <slot />
    <slot name="label"/>
  </label>
</div>
