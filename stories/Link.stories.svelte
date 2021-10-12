<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { Link } from 'svelte-vitamin';

  const sizes = ['small', 'medium', 'large'];
  const LINK =
    'https://decathlon.github.io/vitamin-web/@vtmn/showcase-css/?path=/docs/components-link--overview';
</script>

<Meta title="Link" component={Link} />

<Story name="sizes">
  <div>
    <Link href={LINK}>no size</Link>
  </div>
  {#each sizes as size}
    <div>
      <Link {size} href={LINK}>size='{size}'</Link>
    </div>
  {/each}
</Story>

<Story name="standalone">
  <Link standalone href={LINK}>standalone link</Link>
</Story>

<Story name="external">
  <Link external href={LINK} target="_blank">external link</Link>
</Story>
