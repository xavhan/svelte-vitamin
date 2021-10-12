<script>
  import { classnames, vitamin } from "./utils";

  const TOAST = "toast";
  let className = "";
  export { className as class };

  $: classes = classnames(
    vitamin(TOAST),
    className
  );

  // Warning: info icon and close icon are vtmx dependant
</script>

<div class={classes} {...$$restProps}>
  <slot/>
</div>
