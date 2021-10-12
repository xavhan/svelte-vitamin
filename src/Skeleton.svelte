<script>
  import { classnames, vitamin } from './utils';

  let className = '';
  export { className as class };
  export let type = "line";
  export let percent = '100';

  const SKELETON = 'skeleton'
  $: classes = classnames(
    vitamin(SKELETON),
    {
      block: '',
      line: 'vtmn-skeleton_line',
      avatar: 'vtmn-skeleton_avatar',
    }[type],
    className
  );
  $: style = [
    type!=='avatar' ? ['width', percent + '%'] : [],
    type==='block' ? ['height', '100%'] : [],
  ].map(x => x.join(':')).join(';')
</script>

<span class={classes} {...$$restProps} style={style}></span>
