<script setup>
  import IconTextTile from './reused/IconTextTile.vue';
</script>

<template>
  <div class="time-speed-block container">
    <div class="col">
      <div class="row time-speed-block-head">
        <div class="col-xs-12 col-md-1"></div>
        <h2 class="col-xs-12 col-md-10">Наши профессиональные разработчики выполняют быстро любые задачи</h2>
      </div>
      <div class="row">
        <div class="col-xs-12 col-md-1"></div>
        <div class="col-xs-12 col-md-2 d-block d-flex justify-content-center justify-content-md-start time-speed-block-tile">
          <IconTextTile
            :image-src="'https://raw.githubusercontent.com/daniilscherbina/web-exam/40212ddbd57dd3a1e1658e95304edd7727d99b74/src/assets/img/icons/competency/competency-20.svg'"
            :heading-text="'от 1ч'"
            :com-text="'Настройка события GA в интернет-магазине'"
          />
        </div>
        <div class="col-xs-12 col-md-1"></div>
        <div class="col-xs-12 col-md-2 d-block d-flex justify-content-center justify-content-md-start time-speed-block-tile">
          <IconTextTile
            :image-src="'https://raw.githubusercontent.com/daniilscherbina/web-exam/40212ddbd57dd3a1e1658e95304edd7727d99b74/src/assets/img/icons/competency/competency-21.svg'"
            :heading-text="'от 20ч'"
            :com-text="'Разработка мобильной версии сайта'"
          />
        </div>
        <div class="col-xs-12 col-md-1"></div>
        <div class="col-xs-12 col-md-2 d-block d-flex justify-content-center justify-content-md-start time-speed-block-tile">
          <IconTextTile
            :image-src="'https://raw.githubusercontent.com/daniilscherbina/web-exam/40212ddbd57dd3a1e1658e95304edd7727d99b74/src/assets/img/icons/competency/competency-22.svg'"
            :heading-text="'от 8ч'"
            :com-text="'Интеграция модуля оплаты'"
          />
        </div>
        <div class="col-xs-12 col-md-1"></div>
      </div>
    </div>
  </div>
</template>

<style>
  .time-speed-block-head {
    margin-bottom: 25px;
  }

  .time-speed-block {
    padding-top: 150px;
    padding-bottom: 150px;
  }

  .time-speed-block-tile {
    margin-top: 15px;
    margin-bottom: 15px;
  }
</style>