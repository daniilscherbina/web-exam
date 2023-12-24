<!-- пример использования -->
<!-- <LineLeftMarkedText :heading-large-text="'#1'" :image-src="'https://github.com/daniilscherbina/web-exam/blob/master/src/assets/img/cup.png?raw=true'" :com-text="'Настройка события GA в интернет-магазине'" /> -->
<!-- <LineLeftMarkedText :heading-text="'#2'" :com-text="'Настройка события GA в интернет-магазине'" /> -->
<!-- <LineLeftMarkedText :com-text="'Настройка события GA в интернет-магазине'" /> -->

<template>
  <div class="line-left-marked-text">
    <h3 v-if="headingText != null" class="line-left-marked-text-heading">{{ headingText }}</h3>
    <div v-if="headingLargeText != null" class="large">
      <div class="line-left-marked-text-up">{{ headingLargeText }}</div>
      <img v-if="imageSrc != null" class="line-left-marked-text-img none-select" :src="imageSrc" draggable="false" />
    </div>
    <div v-html="comText" class="line-left-marked-text-comment"></div>
  </div>
</template>

<script>
  export default {
    name: 'LineLeftMarkedText',
    props: {
      imageSrc: {
        type: String,
        required: false
      },
      headingText: {
        type: String,
        required: false
      },
      headingLargeText: {
        type: String,
        required: false
      },
      comText: {
        type: String,
        required: true
      }
    }
  }
</script>

<style>
  .line-left-marked-text {
    border-left: 3px solid red;
    padding-left: 10px;
    padding-bottom: 10px;
    height: 100%;
    width: 100%;
    color: white;
  }

  .line-left-marked-text-heading {
    margin-bottom: 25px;
  }

  .line-left-marked-text-img {
    width: 59px;
    transform: translateY(-30px);
  }

  .line-left-marked-text-up {
    font-size: 40px;
    font-weight: 700;
    transform: translateY(-15px);
  }

  .large {
    display: flex;
    flex-direction: row;
  }

  .line-left-marked-text-comment {
    margin-top: -15px;
    opacity: 70%;
  }

  .line-left-marked-text a {
    color: red;
  }
</style>