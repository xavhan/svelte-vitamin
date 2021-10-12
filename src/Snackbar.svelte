<script>
  import { classnames, vitamin } from "./utils";

  const SNACKBAR = "snackbar";
  let className = "";
  export { className as class };

  $: classes = classnames(
    vitamin(SNACKBAR),
    className
  );
</script>

<div class={classes} {...$$restProps}>
  <slot/>
</div>
