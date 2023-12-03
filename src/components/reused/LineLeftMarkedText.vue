<!-- пример использования -->
<!-- <LineLeftMarkedText :heading-large-text="'#1'" :image-src="'src/assets/img/cup.png'" :com-text="'Настройка события GA в интернет-магазине'" /> -->
<!-- <LineLeftMarkedText :heading-text="'#2'" :com-text="'Настройка события GA в интернет-магазине'" /> -->
<!-- <LineLeftMarkedText :com-text="'Настройка события GA в интернет-магазине'" /> -->

<template>
  <div class="line-left-marked-text">
    <h3 v-if="headingText != null" class="line-left-marked-text-heading">{{ headingText }}</h3>
    <div v-if="headingLargeText != null" class="large">
      <h1 class="line-left-marked-text-up">{{ headingLargeText }}</h1>
      <img v-if="imageSrc != null" class="line-left-marked-text-img" :src="imageSrc" />
    </div>
    <div v-html="comText" class="line-left-marked-text-comment"></div>
  </div>
</template>

<script>
  export default {
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
    padding-right: 10px;
    margin: 50px;
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
</style>