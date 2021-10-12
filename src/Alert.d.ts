import { SvelteComponentTyped } from 'svelte';

export interface AlertProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['div']> {
  variant?: 'info' | 'success' | 'warning' | 'danger'
}

export default class Alert extends SvelteComponentTyped<
  AlertProps,
  {},
  { default: {} }
  > {}
