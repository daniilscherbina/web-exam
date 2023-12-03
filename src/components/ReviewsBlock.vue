<script setup>
  import SliderDiv from './reviews_block/SliderDiv.vue'
</script>

<template>
  <div class="reviews-block">
    <img class="quotation_marks" src="../assets/quotation_marks.svg" draggable="false" />
    <div class="row reviews-block-slider-container">
      <div class="col-xs-1 col-md-2"></div>
      <SliderDiv class="reviews-block-slider col-xs-12 col-lg-8"/>
    </div>
  </div>
</template>

<script>
</script>

<style>
  .quotation_marks {
    position: absolute;
    left: 0;
    height: 130px;
    user-select: none;
    z-index: 1;
    opacity: 4%;
  }

  .reviews-block-slider {
    margin-top: 60px;
    z-index: 3;
    margin-bottom: 80px;
  }
  .reviews-block-slider-container {
    margin-left: 15px;
    margin-right: 15px;
  }

  @media (min-width: 767px) {
    .quotation_marks {
      height: 550px;
    }
    .reviews-block-slider {
      margin-top: 130px;
    }
  }
</style>