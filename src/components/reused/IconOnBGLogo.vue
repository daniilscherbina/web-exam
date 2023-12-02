<template>
  <div class="icon_on_background_of_logo">
    <!-- TODO: найти иконку которая действительно находится на фоне в макете -->
    <img class="back-icobgl" src="../../assets/logo.svg" />
    <img class="front-icobgl" :src="imageSrc" />
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