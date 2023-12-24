<script setup>
  import IconTextTile from './reused/IconTextTile.vue'
</script>

<template>
  <div class="about-us-block container">
    <div class="col">
      <div class="row about-us-block-head container">
        <h2 class="col-xs-12 col-sm-10 col-md-6">13 лет совершенствуем компетенеции в Друпал поддержке!</h2>
        <div class="col-xs-12 col-sm-2 col-md-6"></div>
        <div class="col-xs-12"></div>
        <p class="col-xs-12 col-sm-10 col-md-6 about-us-block-little-text">Разрабатываем и оптимизируем моудули, расширяем функцинальость сайтов, обновляем дизайн </p>
      </div>
      <div class="row container">
        <div class="col-xs-12 col-sm-12"></div>
        <div class="col-xs-6 col-sm-6 col-sm-5 col-md-3 d-block d-flex justify-content-center  about-us-block-tile icon-size">
          <IconTextTile
            :imageSrc="'src/assets/img/icons/competency/competency-1.svg'"
            :com-text="'Добавление информации на сайт, создание новых разделов'"
          />
        </div>
        <div class="col-xs-6 col-sm-6 col-md-3 d-block d-flex justify-content-center about-us-block-tile icon-size">
          <IconTextTile
            :image-src="'src/assets/img/icons/competency/competency-2.svg'"
            :com-text="'Разработка и оптимизация модулей сайта'"
          />
        </div>
        <div class="col-xs-6 col-sm-6 col-md-3 d-block d-flex justify-content-center about-us-block-tile icon-size">
          <IconTextTile
            :image-src="'src/assets/img/icons/competency/competency-3.svg'"
            :com-text="'Интеграция с CRM, 1C, платежными системами, любыми веб-сервисами'"
          />
        </div>
        <div class="col-xs-6 col-sm-6 col-md-3 d-block d-flex justify-content-left  about-us-block-tile icon-size">
          <IconTextTile
            :image-src="'src/assets/img/icons/competency/competency-4.svg'"
            :com-text="'Любые доработки функционала и дизайна'"
          />
        </div>
        <div class="col-xs-6 col-sm-6 col-md-3 d-block d-flex justify-content-center about-us-block-tile icon-size">
          <IconTextTile
            :image-src="'src/assets/img/icons/competency/competency-5.svg'" 
            :com-text="'Аудит и мониторинг безопасности Drupal сайтов'"
          />
        </div>
        <div class="col-xs-6 col-sm-6 col-md-3 d-block d-flex justify-content-center about-us-block-tile icon-size">
          <IconTextTile
            :image-src="'src/assets/img/icons/competency/competency-6.svg'"
            :com-text="'Миграция, импорт контента и апгрейд Drupal'"
          />
        </div>
        <div class="col-xs-6 col-sm-6 col-md-3 d-block d-flex justify-content-center about-us-block-tile icon-size">
          <IconTextTile
            :image-src="'src/assets/img/icons/competency/competency-7.svg'"
            :com-text="'Оптимизация и апгрейд Drupal-сайтов'"
          />
        </div>
        <div class="col-xs-6 col-sm-6 col-md-3 d-block d-flex justify-content-center about-us-block-tile icon-size">
          <IconTextTile
            :image-src="'src/assets/img/icons/competency/competency-8.svg'"
            :com-text="'Веб-маркетинг, консльтации и работы по SEO'"
          />
        </div>
        <div class="col-xs-12 col-sm-12"></div>
      </div>
    </div>
  </div>
</template>

<style>

  .about-us-block-head {
    margin-bottom: 25px;
  }

  .about-us-block {
    padding-top: 150px;
    padding-bottom: 150px;
  }

  .about-us-block-tile {
    margin-top: 15px;
    margin-bottom: 15px;
  }

  .about-us-block-little-text {
    color: #050C33;
    size: 12px;
  }
  
  @media (max-width: 575px) {
    .icon-size {
      width: 50%;
      height: 100%;
    }
  }
</style>


<script>
</script>