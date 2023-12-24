<!-- пример использования -->
<!-- <IconOnBGLogo :image-src="'https://raw.githubusercontent.com/daniilscherbina/web-exam/40212ddbd57dd3a1e1658e95304edd7727d99b74/src/assets/img/icons/competency/competency-22.svg'" /> -->

<template>
  <div class="icon_on_background_of_logo">
    <img class="back-icobgl none-select" src="https://raw.githubusercontent.com/daniilscherbina/web-exam/40212ddbd57dd3a1e1658e95304edd7727d99b74/src/assets/logo_not_pix.svg" draggable="false" />
    <img class="front-icobgl none-select" :src="imageSrc" draggable="false" />
  </div>
</template>

<script>
  export default {
    props: {
      imageSrc: {
        type: String,
        required: true
      }
    }
  }
</script>

<style>
  .icon_on_background_of_logo {
    position: relative;
    size: 81px;
  }

  .front-icobgl {
    size: 81px;
  }

  .back-icobgl {
    position: absolute;
    top: 15px;
    left: -52px;
    z-index: 1;
    width: 114px;
    height: 71px;
    filter: invert(54%) sepia(84%) saturate(683%) hue-rotate(340deg) brightness(99%) contrast(95%);
    opacity: 7%;
  }
</style>