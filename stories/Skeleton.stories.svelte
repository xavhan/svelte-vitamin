<script lang="ts">
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import {Skeleton} from 'svelte-vitamin'

  let percent = '66';
</script>

<Meta title="Skeleton" component={Skeleton} />

<Story name="overview">
  <div class="card">
    <div class="card-figure">
      <Skeleton type="block"/>
    </div>
    <div class="card-content">
      <Skeleton type="avatar"/>
      <Skeleton/>
      <br>
      <Skeleton percent="75"/>
      <Skeleton percent="50"/>
      <br>
      <Skeleton percent="25"/>
      <Skeleton percent="25"/>
      <Skeleton percent="25"/>
      <br>
      <Skeleton percent={percent}/>
    </div>
  </div>
</Story>

<style>
  .card {
    display: flex;
    max-width: 400px;
    flex-direction: column;
    box-shadow: 0 6px 6px 0 #00537d1a;
    border-radius: 8px;
  }
  .card-figure {
    width: 100%;
    height: 100px;
    border-radius: 8px 8px 0 0;
    overflow: hidden;
  }
  .card-content {
    width: 100%;
    padding: 16px;
  }
</style>
