<script setup>
	import LineLeftMarkedText from '../reused/LineLeftMarkedText.vue';
</script>

<template>
  <div class="support-desktop-line-content-container">
    <div>
      <h1 style="color: white;">Экспертиза в Drupal,
        <br>
          опыт 17 лет!
        </h1>
    </div>
    <div class="support-desktop-line-content">
      <div class="support-desktop-line-content-tile">
        <LineLeftMarkedText :com-text="'Только системный подход – контроль версий, резервирование и тестирование!'" />
      </div>
      <div class="support-desktop-line-content-tile">
        <LineLeftMarkedText :com-text="'Только Drupal сайты, не берем на поддержку сайты на других CMS!'" />
      </div>
      <div class="support-desktop-line-content-tile">
        <LineLeftMarkedText :com-text="'Участвуем в разработке ядра Drupal и модулей на Drupal.org, разрабатываем <a href=\'\'> свои модули Drupal</a>'" />
      </div>
      <div class="support-desktop-line-content-tile">
        <LineLeftMarkedText :com-text="'Настройка события GA в интернет-магазине'" />
      </div>
    </div>
  </div>
</template>

<style>
	@media screen and (min-width: 760px) {
    .support-desktop-line-content-tile {
      width: 45%;
      padding-top: 40px;
      margin-left: 20px;
	  }

    .support-desktop-line-content-container {
      margin-top: 40px;
      margin-bottom: 200px;
    }

    .support-desktop-line-content {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      width: 100%;
    }
	}

	@media screen and (min-width: 960px) {
  	.support-desktop-line-content {
    	width: 550px;
    }
	}

	.support-desktop-line-content-tile {
		width: 45%;
		padding-top: 40px;
		margin-left: 20px;
	}

	.support-desktop-line-content-container {
		margin-top: 40px;
		margin-bottom: 200px;
	}
  
	.support-desktop-line-content {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		width: 100%;
	}
</style>