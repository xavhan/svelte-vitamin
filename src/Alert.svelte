<script>
  import { classnames, gen_variant, vitamin } from "./utils";

  const ALERT = "alert";
  // vtmn variants
  export let variant;
  // go through
  let className = "";
  export { className as class };

  $: classes = classnames(
    vitamin(ALERT),
    variant && gen_variant(ALERT, "variant", variant),
    className
  );

  const CONTENT = "vtmn-alert_content";
  const CONTENT_TITLE = "vtmn-alert_content-title";
  const CONTENT_DESCRIPTION = "vtmn-alert_content-description";
</script>

<div {...$$restProps} class={classes}>
  <div class={CONTENT}>
    {#if $$slots.title || $$slots.default}
      <div class={CONTENT_TITLE}>
        <slot/>
        <slot name="title"/>
      </div>
    {/if}
    {#if $$slots.description}
      <span class={CONTENT_DESCRIPTION}>
        <slot name="description"/>
      </span>
    {/if}
  </div>
</div>
