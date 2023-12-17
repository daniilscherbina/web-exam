<template>
  <div class="mobile-menu-list">
    <div class="mobile-menu-item"><a href="">ПОДДЕРЖКА DRUPAL</a></div>
    <div class="mobile-menu-item accordion">
      <a>АДМИНИСТРИРОВАНИЕ</a>
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
      <a>О НАС</a>
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
    var icons = {
      header: "ui-icon-circle-arrow-e",
      activeHeader: "ui-icon-circle-arrow-s"
    };
    $(".accordion").accordion({icons: icons, collapsible: true, active: false});
    $('.accordion-head').click(function() {
      $(this).toggleClass('active-item');
    });
  });
</script>

<style>

  .ui-icon-circle-arrow-e::after {
    content: "\25B6";
    float: right;
    margin-left: 5px;
    margin-right: 25px;
  }

  .ui-icon-circle-arrow-s::after {
    content: "\25BC";
    float: right;
    margin-left: 5px;
    margin-right: 25px;
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
    padding: 15px;
    font-size: 14px;
    color: white;
  }

  .mobile-menu-item a:hover {
    color: red;
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

  @media (min-width: 1300px) {
    .mobile-menu-list {
      opacity: 0;
    }
  }
  </style>