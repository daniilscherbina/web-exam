<script setup>
  import SupportTilesBlock from './support/SupportTilesBlock.vue';
  import SupportDesktopBlock from './support/SupportDesktopBlock.vue';
</script>

<template>
  <div class="support-block">
    <h2>Поддержка
      <br>
      от Drupal-coder
      </h2>
    <SupportTilesBlock class="col-sm-12 col-lg-8" />
    <SupportDesktopBlock />
  </div>
</template>

<style>
  .support-block h2 {
    margin-bottom: 60px;
    margin-top: 20px;
    text-align: center;
  }
</style>