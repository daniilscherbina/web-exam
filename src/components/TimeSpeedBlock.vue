<script setup>
  import IconTextTile from './reused/IconTextTile.vue'
</script>

<template>
  <div class="time-speed-block container">
    <div class="col">
      <div class="row time-speed-block-head">
        <div class="col-xs-12 col-md-2"></div>
        <h2 class="col-xs-12 col-md-10">Наши профессиональные разработчики выполняют быстро любые задачи</h2>
      </div>
      <div class="row ">
        <div class="col-xs-12 col-md-2"></div>
        <div class="col-xs-12 col-md-2 d-block d-flex justify-content-center justify-content-md-start">
          <IconTextTile :image-src="'src/assets/img/icons/competency/competency-20.svg'" :heading-text="'от 1ч'" :com-text="'Настройка события GA в интернет-магазине'" />
        </div>
        <div class="col-xs-12 col-md-1"></div>
        <div class="col-xs-12 col-md-2 d-block d-flex justify-content-center justify-content-md-start">
          <IconTextTile :image-src="'src/assets/img/icons/competency/competency-21.svg'" :heading-text="'от 20ч'" :com-text="'Разработка мобильной версии сайта'" />
        </div>
        <div class="col-xs-12 col-md-1"></div>
        <div class="col-xs-12 col-md-2 d-block d-flex justify-content-center justify-content-md-start">
          <IconTextTile :image-src="'src/assets/img/icons/competency/competency-22.svg'" :heading-text="'от 8ч'" :com-text="'Интеграция модуля оплаты'" />
        </div>
        <div class="col-xs-12 col-md-1"></div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
</style>