<script setup>
  import SupportDesktopBlockContent from './SupportDesktopBlockContent.vue';
</script>

<template>
  <div class="support-desktop-block">
    <img class="none-select" src="https://raw.githubusercontent.com/daniilscherbina/web-exam/master/src/assets/img/laptop.png">
    <div class="support-desktop-block-content-wraper">
      <SupportDesktopBlockContent  />
    </div>
  </div>
</template>

<style>
  .support-desktop-block {
    background: linear-gradient(261.2deg, rgba(255, 255, 255, 0.276) -114.85%, rgba(255, 255, 255, 0) 69.04%), #040613;
    background-image: url("https://raw.githubusercontent.com/daniilscherbina/web-exam/40212ddbd57dd3a1e1658e95304edd7727d99b74/src/assets/img/drupal.svg");
    background-repeat: no-repeat;
    background-position: right;
    background-size: contain;
    margin-top: -200px;
    position: relative;
    z-index: 0;
    padding-top: 250px;
    display: flex;
    flex-direction: row;
    width: 100%;
  }

  .support-desktop-block img {
    position: absolute;
    left: 0;
    bottom: 0px;
    margin-bottom: -110px;
    width: 35%;
    min-width: 340px;
  }

  .support-desktop-block-content-wraper {
    display: flex;
    flex-direction: row;
    margin-left: 50%;
  }
    
  @media screen and (max-width: 1100px) {
    .support-desktop-block-content-wraper {
      margin-left: 20%;
      padding-bottom: 150px;
    }
  }

  @media screen and (max-width: 760px) {
    .support-desktop-block-content-wraper {
      margin-left: 2%;
      padding-bottom: 150px;
    }
    
    .support-desktop-block img {
      margin-bottom: -55px;
    }
  }
</style>