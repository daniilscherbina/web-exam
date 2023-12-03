<template>
  <div class="review-div">
    <img class="review-div-logo none-select" :src="imageSrc" draggable="false" />
    <div class="review-div-text">{{ text }}</div>
    <div v-html="footer" class="review-div-footer"></div>
  </div>
</template>

<script>
  export default {
    props: {
      imageSrc: {
        type: String,
        required: true
      },
      text: {
        type: String,
        required: true
      },
      footer: {
        type: String,
        required: true
      }
    }
  }
</script>

<style>
  .review-div-logo {
    height: 50px;
    margin-bottom: 50px;
    user-select: none;
  }
  .review-div-text {
    font-size: 13px;
    font-weight: 700;
    margin-bottom: 35px;
  }
  .review-div-footer {
    color: rgba(0, 0, 0, 0.5);
    font-size: 13px;
    font-weight: 700;
  }

  .review-div-footer a {
    color: rgba(0, 0, 0, 1);
    border-bottom: 2px solid black;
  }
</style>