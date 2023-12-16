<template>
  <div class="mobile-menu-list">
    <div class="mobile-menu-item">Поддержка Drupal</div>
    <div class="mobile-menu-item accordion">Администрирование</div>
    <div class="panel">
      <p>Содержимое секции 1.</p>
    </div>
    <div class="mobile-menu-item">Продвижение</div>
    <div class="mobile-menu-item">Реклама</div>
    <div class="mobile-menu-item accordion">О нас</div>
    <div class="panel">
      <p>Содержимое секции 2.</p>
    </div>
    <div class="mobile-menu-item">Проекты</div>
    <div class="mobile-menu-item">Контакты</div>
  </div>
</template>

<script>
  /*global $*/
  $(document).ready(function() {
    $('.accordion').accordion({
      heightStyle: 'content'
    });
  });
</script>

<style>

</style>