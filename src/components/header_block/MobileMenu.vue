<template>
    <div class="mobile-menu-line">
      <img class="logo" src="https://raw.githubusercontent.com/daniilscherbina/web-exam/15f5d9d9bf0f7ba4902d647d1a295755bc5e7570/src/assets/img/icons/drupal-coder.svg">
      <div class="menu-button"></div>
  </div>
</template>

<script>
  /*global $*/
  $(document).ready(function(){
    $('.mobile-menu-list').slideToggle();
    $('.menu-button').click(function(){
      $('.mobile-menu-list').slideToggle();
      $(this).toggleClass('active');
    });
  });
</script>

<style>
  footer {
    margin-bottom: 50px;
  }

  .mobile-menu-line {
    height: 50px;
    width: 100%;
    background-color: #181818;
    padding-top: 15px;
    padding-bottom: 15px;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1000;
  }

  .menu-button,
  .menu-button::before,
  .menu-button::after {
    display: block;
    background-color: #8e8e8e;
    position: absolute;
    right: 15px;
    height: 4px;
    width: 30px;
    transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
    border-radius: 2px;
    margin-top: -15px;
  }

  .menu-button::before {
    content: '';
    margin-top: -8px;
    margin-right: -15px;
  }

  .menu-button::after {
    content: '';
    margin-top: 8px;
    margin-right: -15px;
  }

  .menu-button.active::before {
    transform: translateY(8px) rotate(45deg);
  }

  .menu-button.active::after {
    transform: translateY(-8px) rotate(-45deg);
  }

  .menu-button.active {
    background-color: transparent;
  }

  @media (min-width: 1300px) {
    .mobile-menu-line {
      width: 0px;
      height: 0px;
      display: none;
    }
    footer {
      margin-bottom: 0;
    }
  }
</style>