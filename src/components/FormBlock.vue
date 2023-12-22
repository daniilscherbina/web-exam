<script setup>
  import FormDivBlock from './reused/FormDivBlock.vue'
</script>

<template>
    <div class="form-block container">
    <div class="row">
      <div class="col-xs-12 col-md-1"></div>
      <div class="form-block-left col-xs-12 col-md-5">
        <div class="form-block-heading">Оставить заявку на поддержку сайта</div>
        <div class="form-block-comm">Срочно нужна поддержка сайта? Ваша команда не успевает справиться самостоятельно или предыдущий подрядчик не справился с работой? Тогда вам точно к нам! Просто оставьте заявку и наш менеджер с вами свяжется!</div>
        <div class="form-block-phone">
          <img src="../assets/img/icons/phone.svg" class="none-select" />
          8 800 222-26-73
        </div>
        <div class="form-block-mail">
          <img src="../assets/img/icons/mail.svg" class="none-select" />
          info@drupal-coder.ru
        </div>
      </div>
      <div class="col-xs-12 col-md-1"></div>
      <FormDivBlock class="form-block-form col-xs-12 col-md-5" />
    </div>
  </div>
</template>

<script>
</script>

<style>
  .form-block-phone {
    margin-top: 40px;
    margin-bottom: 20px;
    margin-left: 15px;
    font-size: 20px;
    font-weight: 700;
  }

  .form-block-phone img {
    margin-right: 15px;
  }

  .form-block-mail {
    margin-bottom: 30px;
    margin-left: 15px;
    font-size: 18px;
    font-weight: 700;
    font-style: inherit;
    text-decoration: underline;
  }

  .form-block-mail img {
    margin-right: 15px;
  }

  .form-block-left {
    color: white;
    margin-top: 40px;
  }

  .form-block-heading {
    margin-bottom: 30px;
    font-size: 24px;
    font-weight: 700;
    text-align: center;
  }

  .form-block-comm {
    opacity: 70%;
    text-align: justify;
  }

  .form-block {
    border-bottom: 1px solid rgba(255, 255, 255, 30%);
    background-image: url(../assets/img/icons/d-flying.svg);
    background-repeat: no-repeat;
    background-position-x: 55%;
  }

  @media (min-width: 767px) {
    .form-block-heading {
      text-align: left;
      font-size: 42px;
    }
    .form-block-comm {
      margin-bottom: 120px;
      text-align: left;
    }
    .form-block-form {
      margin-top: 15px;
    }
  }
</style>