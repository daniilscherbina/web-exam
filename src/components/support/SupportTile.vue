<template>
  <div class="support-tile-wrapper">
    <div class="support-tile">
      <div class="support-tile-number-text">{{ numberText }}.</div>
      <div class="support-tile-heading-text">{{ headingText }}</div>
      <div class="support-tile-com-text">{{ comText }}</div>
      <img class="none-select" :src="imageSrc" alt="картинка">
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      imageSrc: {
        type: String,
        required: true
      },
      headingText: {
        type: String,
        required: true
      },
      numberText: {
        type: String,
        required: true
      },
      comText: {
        type: String,
        required: true
      }
    }
  }
</script>

<style>
  .support-tile {
    position: relative;
    border: 1px solid #e9f2ea;
    border-radius: 10px;
    padding-top: 25px;
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 60px;
    height: 100%;
    box-shadow: 0px 5px 25px -1px rgba(34, 60, 80, 0.2);
    background-color: white;
  }

  .support-tile-wrapper {
    padding: 3px;
  }

  .support-tile-heading-text {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 30px;
  }

  .support-tile-com-text {
    font-weight: 500;
    color: #4e5a73;
  }

  .support-tile-number-text {
    color: gray;
    font-weight: 700;
    font-size: 12px;
    margin-bottom: 15px;
  }

  .support-tile img {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 3;
  }
</style>