<template>
  <div class="mobile-menu-list">
    <div class="mobile-menu-item"><a href="">ПОДДЕРЖКА DRUPAL</a></div>
    <div class="mobile-menu-item accordion">
      <a class="mobile-menu-item-head">АДМИНИСТРИРОВАНИЕ</a>
      <div class="panel">
        <div class="mobile-menu-item-link-div"><a href="">МИГРАЦИЯ</a></div>
        <div class="mobile-menu-item-link-div"><a href="">БЭКАПЫ</a></div>
        <div class="mobile-menu-item-link-div"><a href="">АУДИТ БЕЗОПАСНОСТИ</a></div>
        <div class="mobile-menu-item-link-div"><a href="">ОПТИМИЗАЦИЯ СКОРОСТИ</a></div>
        <div class="mobile-menu-item-link-div-last"><a href="">ПЕРЕЕЗД НА HTTPS</a></div>
      </div>
    </div>
    <div class="mobile-menu-item"><a href="">ПРОДВИЖЕНИЕ</a></div>
    <div class="mobile-menu-item"><a href="">РЕКЛАМА</a></div>
    <div class="mobile-menu-item accordion">
      <a class="mobile-menu-item-head">О НАС</a>
      <div class="panel">
        <div class="mobile-menu-item-link-div"><a href="">КОМАНДА</a></div>
        <div class="mobile-menu-item-link-div"><a href="">DRUPALGIVE</a></div>
        <div class="mobile-menu-item-link-div"><a href="">БЛОГ</a></div>
        <div class="mobile-menu-item-link-div-last"><a href="">КУСЫ DRUPAL</a></div>
      </div>
    </div>
    <div class="mobile-menu-item"><a href="">ПРОЕКТЫ</a></div>
    <div class="mobile-menu-item"><a href="">КОНТАКТЫ</a></div>
  </div>
</template>

<script>
  /*global $*/
  $(document).ready(function() {
    $(".accordion").accordion({collapsible: true, active: false});
    $('.accordion-head').click(function() {
      $(this).toggleClass('active-item');
    });
  });
</script>

<style>
  .mobile-menu-item-head {
    display: flex;
  }

  .mobile-menu-item-head::after {
    content: '';
    display: flex;
    margin-left: 15px;
    height: 12px;
    width: 12px;
    margin-top: 2px;
    background-image: url("../../assets/img/icons/caret-up-fill.svg");
    background-size: 12px;
    transition: transform 0.5s ease;
  }

  .ui-state-active::after {
    transform: rotate(180deg) translateY(-2px);
  }

  .mobile-menu-list {
    width: 100%;
    background-color: black;
    color: white;
    position: fixed;
    z-index: 80;
    bottom: 50px;
  }

  .mobile-menu-item {
    border-bottom: 1px solid #312a2a;
    border-top: 1px solid #312a2a;
  }

  .mobile-menu-item a {
    padding-left: 15px;
    font-size: 12px;
    color: white;
  }

  .mobile-menu-item a:hover {
    filter: brightness(0) saturate(100%) invert(16%) sepia(91%) saturate(5611%) hue-rotate(357deg) brightness(101%) contrast(117%);
  }

  .mobile-menu-item {
    padding-top: 7px;
    padding-bottom: 7px;
  }

  .mobile-menu-item-link-div {
    border-top: 2px solid #312a2a;
    padding-top: 7px;
    padding-bottom: 7px;
  }

  .mobile-menu-item-link-div-last {
    border-top: 2px solid #312a2a;
    padding-top: 7px;
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

  @media (min-width: 1300px) {
    .mobile-menu-list {
      opacity: 0;
    }
  }
</style>