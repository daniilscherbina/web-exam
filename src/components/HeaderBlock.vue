<script setup>
  import HeaderTiles from './header_block/HeaderTiles.vue';
  import MobileMenu from './header_block/MobileMenu.vue';
  import MobileMenuList from './header_block/MobileMenuList.vue';
</script>

<template>
  <header>
    <div class="header-content">
      <video autoplay muted loop>
          <source src="../assets/header.mp4" type="video/mp4" />
      </video>
      <div class="caption">
        <div class="col-lg-2"></div>
        <nav class="desktop-menu col-lg-8">
          <img class="logo" src="../assets/img/icons/drupal-coder.svg">
          <a class="desktop-menu-item">Поддержка Drupal</a>
          <a class="desktop-menu-item">Администрирование</a>
          <a class="desktop-menu-item">Продвижение</a>
          <a class="desktop-menu-item">Реклама</a>
          <a class="desktop-menu-item">О нас</a>
          <a class="desktop-menu-item">Проекты</a>
          <a class="desktop-menu-item">Контакты</a>
        </nav>
        <div class="col-lg-2"></div>
        <div class="col-sm-1 col-lg-2"></div>
        <div class="header-text col-sm-10 col-lg-4">
          <div class="header-heading">Поддержка сайтов на Drupal</div>
          <div class="header-com">Сопровождение и поддержа сайтов на CMS Drupal любых версий и запущенности</div>
          <button onclick="window.location.href='#cost'" class="header-costs-button">Тарифы</button>
        </div>
        <HeaderTiles class="header-tiles col-sm-11 col-md-9 col-lg-5" />
      </div>
    </div>
    <MobileMenuList />
    <MobileMenu />
  </header>
</template>

<script>
</script>

<style>

  .logo {
    height: 25px;
  }

  .desktop-menu .logo {
    margin-right: 25px;
  }

  .desktop-menu-item {
    margin-left: 25px;
  }

  .header-tiles {
    padding: 10px;
    max-width: 600px;
  }
  
  .header-content {
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: #0e1636;
  }

  .header-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 100px;
    padding: 10px;
  }

  .header-heading {
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    width: 240px;
    margin-top: 50px;
  }

  .header-com {
    font-size: 14px;
    opacity: 70%;
    text-align: center;
    margin-top: 35px;
  }

  .header-content video {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    z-index: 0;
    filter: blur(3px) brightness(35%);
  }

  .header-content .caption {
    z-index: 1;
    position: relative;
    max-width: 100%;
    color: white;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }

  .header-content .caption::before {
    z-index: 0;
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url(../assets/img/drupal.svg);
    background-repeat: no-repeat;
    background-size: 110%;
    background-position-y: -20%;
    background-position-x: -60px;
    filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7500%) hue-rotate(357deg) brightness(106%) contrast(99%) opacity(70%);
  }

  .desktop-menu {
    padding-top: 50px;
    font-size: 14px;
    display: none;
  }

  .desktop-menu a {
    color: white;
  }

  .header-costs-button {
    background-color: rgba(0, 0, 0, 0);
    color: white;
    border: 2px solid #f04d34;
    border-radius: 3px;
    padding: 15px;
    text-align: center;
    font-size: 16px;
    margin-top: 60px;
    width: 220px;
    height: 60px;
    position: relative;
    z-index: 10;
    transition-property: background-color, color;
    transition-duration: 0.3s, 0.2s;
    transition-timing-function: ease, linear;
  }

  .header-costs-button:hover {
    background-color: #f04d34;
    color: black;
  }

  @media (min-width: 768px) {
    .header-heading {
      font-size: 40px;
      text-align: left;
      width: 100%;
    }
    .header-text {
      padding-right: 50px;
      align-items: start;
    }
    .header-com {
      text-align: left;
      font-size: 18px;
    }
    .header-content .caption {
      flex-direction: row;
      align-items: baseline;
    }
    .desktop-menu {
      display: block;
    }
    .desktop-menu-item {
      display: none;
    }
    .desktop-menu .logo {
      display: none;
    } 
  }

  @media (min-width: 910px) {
    .header-content .caption::before {
      background-size: 65%;
      background-position-y: 85%;
      background-position-x: -30%;
    }
  }

  @media (min-width: 1300px) {
    .desktop-menu-item {
      display: inline-block;
    }
    .desktop-menu .logo {
      display: inline-block;
    } 
  }
</style>