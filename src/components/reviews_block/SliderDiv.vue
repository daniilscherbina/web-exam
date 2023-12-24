<script setup>
  import ReviewDiv from './ReviewDiv.vue'
</script>

<template>
  <div class="slider-div">
    <h1 class="slider-div-heading">Отзывы</h1>
    <div class="slider-div-op-one slider-div-box"></div>
    <div class="slider-div-op-two slider-div-box"></div>
    <div class="slider-div-container slider-div-box">
      <div class="sliderss">
        <ReviewDiv 
          :image-src="'src/assets/img/logo/logo_0.png'" 
          :text="'Долгие поиски единственного и неповторимого мастера на многострадальный сайт www.cielparfum.com, который был собран крайне некомпетентным программистом и раз в месяц стабильно грозил погибнуть, привели меня на сайт и, в итоге, к ребятам из Drupabcoder. И вот уже практически полгода как не проходит и дня, чтобы я не поудивлялась и не порадовалась своему везению! починили все, что не работало - от поиска до отображения меню. Провели редизайн - не отходя от желаемого, но со своими существенными и качественными дополнениями. Осуществили ряд проектов - конкурсы, тесты и тд. А уж мелких починок и доработок - не счестЫ И главное - все качественно и быстро (не взирая на не самый “быстрый“ тариф). Есть вопросы - замечательный Алексей всегда подскажет, поддержит, отремонтирует и/или просто сделает с нуля. Есть задумка для реализации - замечательный Сергей обсудит и предложит идеальный вариант. Есть проблема - замечательные надежда и Роман починят, поправят, сделают! Ребята доказали, что эта CMS - мощная и грамотная система управления. надеюсь, что наше сотрудничество затянется надолго! Спасибо!!!'" 
          :footer="'С уважением, Наталья Сушкова руководитель Отдела веб-проектов группы компаний «Си Эль парфюм» <a href=\'\'>http://www.cielparfum.com/</a>'"
        />
        <ReviewDiv 
          :image-src="'src/assets/img/logo/logo_0.png'" 
          :text="'2 А уж мелких починок и доработок - не счестЫ И главное - все качественно и быстро (не взирая на не самый “быстрый“ тариф). Есть вопросы - замечательный Алексей всегда подскажет, поддержит, отремонтирует и/или просто сделает с нуля. Есть задумка для реализации - замечательный Сергей обсудит и предложит идеальный вариант. Есть проблема - замечательные надежда и Роман починят, поправят, сделают! Ребята доказали, что эта CMS - мощная и грамотная система управления. надеюсь, что наше сотрудничество затянется надолго! Спасибо!!!'" 
          :footer="'С уважением, Наталья Сушкова руководитель Отдела веб-проектов группы компаний «Си Эль парфюм» <a href=\'\'>http://www.cielparfum.com/</a>'"
        />
        <ReviewDiv 
          :image-src="'src/assets/img/logo/logo_0.png'" 
          :text="'3 А уж мелких починок и доработок - не счестЫ И главное - все качественно и быстро (не взирая на не самый “быстрый“ тариф). Есть вопросы - замечательный Алексей всегда подскажет, поддержит, отремонтирует и/или просто сделает с нуля. Есть задумка для реализации - замечательный Сергей обсудит и предложит идеальный вариант. Есть проблема - замечательные надежда и Роман починят, поправят, сделают! Ребята доказали, что эта CMS - мощная и грамотная система управления. надеюсь, что наше сотрудничество затянется надолго! Спасибо!!!'" 
          :footer="'С уважением, Наталья Сушкова руководитель Отдела веб-проектов группы компаний «Си Эль парфюм» <a href=\'\'>http://www.cielparfum.com/</a>'"
        />
        <ReviewDiv 
          :image-src="'src/assets/img/logo/logo_0.png'" 
          :text="'3 А уж мелких починок и доработок - не счестЫ И главное - все качественно и быстро (не взирая на не самый “быстрый“ тариф). Есть вопросы - замечательный Алексей всегда подскажет, поддержит, отремонтирует и/или просто сделает с нуля. Есть задумка для реализации - замечательный Сергей обсудит и предложит идеальный вариант. Есть проблема - замечательные надежда и Роман починят, поправят, сделают! Ребята доказали, что эта CMS - мощная и грамотная система управления. надеюсь, что наше сотрудничество затянется надолго! Спасибо!!!'"
          :footer="'С уважением, Наталья Сушкова руководитель Отдела веб-проектов группы компаний «Си Эль парфюм» <a href=\'\'>http://www.cielparfum.com/</a>'"
        />
      </div>

      <div class="slider-div-counter">
        <div class="slider-div-arrow sliderss-prev"></div>
        <div id="slider-div-counter-text" class="slider-div-counter-text" max-count=" / 08">01</div>
        <div class="slider-div-arrow sliderss-next"></div>
      </div>
    </div>
  </div>
</template>

<script>
  /*global $*/
  $(document).ready(function() {
    $(".sliderss").slick({
      arrows: true,
      dots: false,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.sliderss-prev'),
      nextArrow: $('.sliderss-next'),
      speed: 500
    });
    
    $('.sliderss').on('afterChange', function() {
        var dataId = $('.slick-current').attr("data-slick-index");
        var counter = document.getElementById("slider-div-counter-text");
        counter.setAttribute('max-count', " / 0" + $(".sliderss").slick("getSlick").slideCount);
        counter.innerHTML = "0" + (parseInt(dataId) + 1);
    });

    document.getElementById("slider-div-counter-text").setAttribute('max-count', " / 0" + $(".sliderss").slick("getSlick").slideCount);
  });
</script>

<style>
  .sliderss {
    max-width: 100%;
  }

  .sliderss-prev {
    width: 28px;
    height: 28px;
    background-image: url("../../assets/slider/arrow_left.svg");
    background-repeat: no-repeat;
  }

  .sliderss-next {
    width: 28px;
    background-image: url("../../assets/slider/arrow_right.svg");
    background-repeat: no-repeat;
  }

  .slider-div-box {
    box-sizing: border-box;
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0px 4px 60px rgba(162, 162, 162, 0.25);
    border-radius: 5px;
  }

  .slider-div-heading {
    text-align: center;
    margin-top: -50px;
    margin-bottom: 50px;
  }

  .slider-div-op-one {
    position: relative;
    opacity: 33%;
    max-width: 100%;
    height: 100px;
    margin-bottom: -80px;
    margin-left: 10%;
    margin-right: 10%;
    z-index: 0;
  }

  .slider-div-op-two {
    position: relative;
    opacity: 50%;
    max-width: 100%;
    height: 100px;
    margin-bottom: -80px;
    margin-left: 5%;
    margin-right: 5%;
    z-index: 1;
  }

  .slider-div-container {
    position: relative;
    display: flex;
    flex-direction: column;
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 50px;
    z-index: 5;
  }

  .slider-div-arrow {
    height: 28px;
  }

  .slider-div-counter {
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    justify-content: center;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
    margin-top: 20px;
    margin-bottom: 20px;
    padding-top: 30px;
  }

  .slider-div-counter-text {
    margin-left: 25px;
    margin-right: 25px;
    font-size: 28px;
    width: 100px;
  }

  .slider-div-counter-text:after {
    content: attr(max-count);
    color: #E0E0E0;
  }

  @media ((min-width: 900px) and (max-width: 992px)) or (min-width: 1200px) {
    .slider-div-counter {
      margin-right: 20px;
      padding-left: 40px;
      padding-right: 40px;
      margin-top: 0px;
      margin-bottom: 0px;
      margin-left: 40px;
      border-top: none;
      border-left: 1px solid rgba(0, 0, 0, 0.2);
    }

    .sliderss {
      max-width: 60%;
    }

    .slider-div-container {
      flex-direction: row;
      padding-right: 0%;
      padding-bottom: 50px;
    }

    .slider-div-op-one {
      margin-bottom: -70px;
    }

    .slider-div-op-two {
      margin-bottom: -70px;
    }
  }
</style>