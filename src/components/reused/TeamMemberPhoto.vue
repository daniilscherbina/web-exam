<!-- пример использования -->
<!-- <IconOnBGLogo :image-src="'https://raw.githubusercontent.com/daniilscherbina/web-exam/df0e4098895b2844e0e9dc9f07096ebce61b787e/src/assets/img/icons/competency/competency-22.svg'" /> -->

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