<!-- пример использования -->
<!-- <IconOnBGLogo :image-src="'src/assets/img/icons/competency/competency-22.svg'" /> -->

<template>
    <div>
      <img class="photo" :src="imageSrc" draggable="false" />
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

  </style>