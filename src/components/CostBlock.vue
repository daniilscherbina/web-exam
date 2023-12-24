<script setup>
  import TilesBlock from './cost_block/TilesBlock.vue';
</script>


<template>
  <div id="cost" class="cost-block-background">
        <div class="cost-block-first-text op">Тарифы</div>
        <div class="op">
            <div class="col">
            
              <TilesBlock class="col-xs-12 col-lg-10" />
              <div>
                <p class = "cost-block-second-text">Вам не подходят наши тарифы? Оставьте заявку и мы предложим вам индивидуальные условия!</p>
              </div>
            <div>
                <p class = "cost-block-third-text">ПОЛУЧИТЬ ИНДИВИДУАЛЬНЫЙ ТАРИФ</p>
            </div>
            </div>
        </div>
  </div>
</template>

<style>

.cost-block-first-text {
  display: flex;
  justify-content: center;
  font-size: 30px;
  font-weight: 800;
  padding-top: 169px;
  padding-bottom: 50px;
}

.cost-block-second-text {
  display: flex;
  justify-content: center;
  text-align: center;
  margin-left: 25%;
  margin-right: 25%;
  margin-top: 50px;
  font-size: 14px;
  color: grey;
}

.cost-block-third-text {
  display: flex;
  justify-content: center;
  text-align: center;
  margin-left: 25%;
  margin-right: 25%;
  margin-top: -25px;
  font-size: 14px;
  color: rgb(0, 12, 51);
  text-decoration: underline;
  margin-bottom: 70px;
  padding: 30px;
}

.cost-block-background {
  background-image: url('../assets/img/icons/bckg.png');
  background-repeat: no-repeat;
  background-position: right;
  background-size: 320%;
}

@media (min-width: 992px) {
  .cost-block-background {
  background-image: url('../assets/img/icons/bckg.png');
  background-repeat: no-repeat;
  background-position: top;
  background-size: 120%;
} 
}
</style>
