<script setup>
  import FormBlock from './FormBlock.vue'
</script>

<template>
    <footer class="footer-block-background">
        <FormBlock />
        <div>
        <div class="container">
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
            <div class = "row">
                <div class = "col-xs-8 col-sm-8 col-md-8 col-lg-8"></div>
                <div class = "col-xs-4 col-sm-4 col-md-4 col-lg-4 footer-block-fly-container"><img src="../assets/img/icons/d-flying.svg" class = "footer-block-fly" alt="Description of the image"></div>
                </div>
            </div>

            
        </div>
    </div>
    </footer>
</template>

<script>
</script>

<!-- потом градиент добавь, добавил т.к. чтобы было видно текст в моем блоке -->
<style>
    .footer-block-background {
        background: linear-gradient(261.2deg, rgba(255, 255, 255, 0.276) -114.85%, rgba(255, 255, 255, 0) 69.04%), #040613;
    }

    .footer-block-icon {
        width: 40px;
        height: 40px;
        margin-top: 40px;
        margin-right: 10px;
    }

    .footer-block-icons {
        padding-left: 0px;
    }

    .footer-block-text {
        font-size: 16px;
        color: white;
        margin-top: 20px;
    }

    .footer-block-fly-container {
        display: flex;
        align-items: right;
    }
    .footer-block-fly {
        margin-top: -30px;
        margin-left: 10px;
        width: 150px;
        height: 150px;    
    }
    @media (min-width: 992px){
        .footer-block-icon {
        width: 30px;
        height: 30px;
        margin-right: 10px;
        margin-top: 40px;
    }

    .footer-block-icons {
        margin-left: 150px;
    }

    .footer-block-text {
        font-size: 14px;
        color: white;
        margin-top: 20px;
        margin-left: 150px;
    }

    .footer-block-fly {
        width: 350px;
        height: 350px;
        margin-top: -100px;    
    }
    }
</style>