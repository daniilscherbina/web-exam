<script setup>
  import LineLeftMarkedText from '../reused/LineLeftMarkedText.vue'
</script>

<template>
  <div class="header-tiles-div">
    <div class="header-tile">
      <LineLeftMarkedText 
        :heading-large-text="'#1'"
        :image-src="'https://github.com/daniilscherbina/web-exam/blob/master/src/assets/img/cup.png?raw=true'"
        :com-text="'Drupal-разработчик в России по версии Рейтинга Рунета'"
      />
    </div>
    <div class="header-tile">
      <LineLeftMarkedText
        :heading-text="'3+'"
        :com-text="'средний опыт специалистов более 3 лет'"
      />
    </div>
    <div class="header-tile">
      <LineLeftMarkedText
        :heading-text="'14'"
        :com-text="'лет опыта в сфере Drupal'"
      />
    </div>
    <div class="header-tile">
      <LineLeftMarkedText
        :heading-text="'50+'"
        :com-text="'модулей и тем в формате DrupalGive'"
      />
    </div>
    <div class="header-tile">
      <LineLeftMarkedText
        :heading-text="'90 000+'"
        :com-text="'часов поддержки сайтов на Drupal'"
      />
    </div>
    <div class="header-tile">
      <LineLeftMarkedText
        :heading-text="'300+'"
        :com-text="'проектов на поддержке'"
      />
    </div>
  </div>
</template>

<style>
  .header-tiles-div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  .header-tile {
    width: 150px;
    margin-bottom: 40px;
    margin-right: 25px;
  }

  .header-tiles .line-left-marked-text .line-left-marked-text-comment {
    font-size: 14px;
  }
</style>