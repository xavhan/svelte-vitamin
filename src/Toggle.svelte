<script>
  import { classnames, vitamin, random_id } from "./utils";

  const TOGGLE = "toggle";
  let className = "";
  export { className as class };

  export let id = random_id();
  export let checked;
  export let disabled;
  $: classes = classnames(
    vitamin(TOGGLE),
    className
  );

  const SWITCH = 'vtmn-toggle_switch'
</script>

<div class={classes} {...$$restProps}>
  <div class={SWITCH}>
    <input type="checkbox" {id} {disabled} bind:checked={checked}/>
    <span aria-hidden="true"></span>
  </div>
  <label for={id}>
    <slot />
    <slot name="label"/>
  </label>
</div>
