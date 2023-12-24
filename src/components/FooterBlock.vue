<script setup>
  import FormBlock from './FormBlock.vue';
</script>

<template>
  <footer class="footer-block-background footer-background-image-wrapper">
    <div class="fot">
      <FormBlock />
      <div>
        <div class="footer-padding">
          <div class = "row">
            <div class = "col-xs-12 col-sm-12 col-md-12">
              <div class="footer-block-icons">
                <a href="https://example.com">
                  <img src="../assets/img/icons/vk.png" class = "footer-block-icon" alt="Description of the image">
                </a>
                <a href="https://example.com">
                  <img src="../assets/img/icons/fb.png" class = "footer-block-icon" alt="Description of the image">
                </a>
                <a href="https://example.com">
                  <img src="../assets/img/icons/tg.png" class = "footer-block-icon" alt="Description of the image">
                </a>
                <a href="https://example.com">
                  <img src="../assets/img/icons/youtube.png" class = "footer-block-icon" alt="Description of the image">
                </a>
              </div>
            </div>
          </div>

          <div class = "row">
            <div class = "footer-block-text col-xs-10 col-sm-10 col-md-10">
              <p>Проект ООО "Инитлаб", Краснодар, Россия.<br/> Drupal является зарегистрированной торговой маркой Dries Butyaert.</p>
            </div>
          </div>     
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
  footer {
    background: linear-gradient(254.72deg, rgba(255, 255, 255, .276) -114.85%, rgba(255, 255, 255, 0) 69.04%), url('../assets/img/icons/d-flying.svg') no-repeat bottom right, #040613;
  }
  
  .footer-padding {
    padding: 25px;
  }
  
  .footer-block-icon {
    height: 30px;
    width: 30px;
    margin-right: 10px;
    margin-top: 30px;
  }

  .footer-block-text {
    color: white; 
    font-size: 14px;
    margin-top: 15px;
    margin-left: 15%;
  }
  
  @media (min-width: 768px){
    .footer-block-icons {
      margin-left: 15%;
    }   

    .footer-block-icon {
      height: 30px;
      width: 30px;
      margin-right: 10px;
      margin-top: 30px;
    }

    .footer-block-text {
      color: white; 
      font-size: 14px;
      margin-top: 15px;
      margin-left: 15%;
    }
  }
</style>