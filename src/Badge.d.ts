import { SvelteComponentTyped } from 'svelte';

export interface BadgeProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['span']> {
  empty?: true;
  color?: 'default' | 'brand' | 'reversed' | 'accent'
}

export default class Badge extends SvelteComponentTyped<
  BadgeProps,
  {},
  { default: {} }
  > {}
