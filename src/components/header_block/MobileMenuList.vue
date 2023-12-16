<template>
  <div class="mobile-menu-list">
    <div class="mobile-menu-item"><a>ПОДДЕРЖКА DRUPAL</a></div>
    <div class="mobile-menu-item accordion">
      <a>АДМИНИСТРИРОВАНИЕ</a>
      <div class="panel">
        <div class="mobile-menu-item-link-div"><a>МИГРАЦИЯ</a></div>
        <div class="mobile-menu-item-link-div"><a>БЭКАПЫ</a></div>
        <div class="mobile-menu-item-link-div"><a>АУДИТ БЕЗОПАСНОСТИ</a></div>
        <div class="mobile-menu-item-link-div"><a>ОПТИМИЗАЦИЯ СКОРОСТИ</a></div>
        <div class="mobile-menu-item-link-div-last"><a>ПЕРЕЕЗД НА HTTPS</a></div>
      </div>
    </div>
    <div class="mobile-menu-item"><a>ПРОДВИЖЕНИЕ</a></div>
    <div class="mobile-menu-item"><a>РЕКЛАМА</a></div>
    <div class="mobile-menu-item accordion">
      <a>О НАС</a>
      <div class="panel">
        <div class="mobile-menu-item-link-div"><a>КОМАНДА</a></div>
        <div class="mobile-menu-item-link-div"><a>DRUPALGIVE</a></div>
        <div class="mobile-menu-item-link-div"><a>БЛОГ</a></div>
        <div class="mobile-menu-item-link-div-last"><a>КУСЫ DRUPAL</a></div>
      </div>
    </div>
    <div class="mobile-menu-item"><a>ПРОЕКТЫ</a></div>
    <div class="mobile-menu-item"><a>КОНТАКТЫ</a></div>
  </div>
</template>

<script>
  /*global $*/
  $(document).ready(function() {
    $(".accordion").accordion({collapsible: true, active: false});
  });
</script>

<style>
  .mobile-menu-list {
    width: 100%;
    background-color: black;
    color: white;
  }
  .mobile-menu-item {
    border-bottom: 1px solid #312a2a;
    border-top: 1px solid #312a2a;
  }

  .mobile-menu-item a {
    padding: 15px;
    font-size: 14px;
    color: white;
  }

  .mobile-menu-item {
    padding-top: 15px;
    padding-bottom: 15px;
  }

  .mobile-menu-item-link-div {
    border-top: 2px solid #312a2a;
    padding-top: 15px;
    padding-bottom: 15px;
  }

  .mobile-menu-item-link-div-last {
    border-top: 2px solid #312a2a;
    padding-top: 15px;
  }

  .mobile-menu-item-link-div a {
    padding-left: 40px;
  }

  .mobile-menu-item-link-div-last a {
    padding-left: 40px;
  }

  .mobile-menu-item .panel {
    display: none;
    display: flex;
    padding-top: 15px;
    flex-direction: column;
  }
  </style>