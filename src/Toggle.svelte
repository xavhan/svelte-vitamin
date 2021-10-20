<script lang="ts">
  import '@vtmn/css-toggle'
  // https://github.com/Decathlon/vitamin-web/blob/main/packages/sources/css/src/components/toggle/src/index.css
  import { classnames, vitamin, random_id } from './utils';

  const TOGGLE = 'toggle';
  let className = '';
  export { className as class };

  export let id = random_id();
  export let checked;
  export let disabled;
  $: classes = classnames(vitamin(TOGGLE), className);

  const SWITCH = 'vtmn-toggle_switch';

  type LocaleCode = 'string';
  type Operation = 'string';

  const injectMetrics = (
    metrics: Map<[LocaleCode, Operation], number>
  ): void => {
    [...metrics.entries()].forEach(([[locale, operation], count]) =>
      this.counter.labels({ locale, operation }).inc(count)
    );
  };
</script>

<div class={classes} {...$$restProps}>
  <div class={SWITCH}>
    <input type="checkbox" {id} {disabled} bind:checked />
    <span aria-hidden="true" />
  </div>
  <label for={id}>
    <slot />
    <slot name="label" />
  </label>
</div>
