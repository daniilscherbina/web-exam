<script setup>
  import TeamMemberTile from './reused/TeamMemberTile.vue'
</script>

<template>
  <div class="container">
    <h2 class="team-block-title">Команда</h2>
    <div class="row">
      <div class="col-xs-6 col-sm-6 col-md-4 justify-content-center">
        <TeamMemberTile :image-src="'src/assets/img/team/1.jpg'" :heading-text="'Сергей Синица'" :com-text="'Руководитель отдела веб-разработки, канд. техн.наук, заместитель директора'" />
      </div>
      <div class="col-xs-6 col-sm-6 col-md-4 justify-content-center">
        <TeamMemberTile :image-src="'src/assets/img/team/4.jpg'" heading-text="Роман Агабеков"  :com-text="'Руководитель отдела DevOps, директор'" />
      </div>
      <div class=" col-xs-6 col-sm-6 col-md-4 justify-content-center">
        <TeamMemberTile :image-src="'src/assets/img/team/2.jpg'" heading-text="Алексей Синица" :com-text="'Руководитель отдела поддержки сайтов'" />
      </div>
      <div class="col-xs-6 col-sm-6 col-md-4 justify-content-center">
        <TeamMemberTile :image-src="'src/assets/img/team/3.jpg'" heading-text="Дарья Бочкарева"  :com-text="'Руководитель отдела продвижения, контекстной рекламы и контент подержки сайтов'" />
      </div>
      <div class="col-xs-6 col-sm-6 col-md-4 justify-content-center">
        <TeamMemberTile :image-src="'src/assets/img/team/5.jpg'" heading-text="Ирина Торкунова"  :com-text="'Менежер по работе с клиентами'" />
      </div>
    </div>
    <div class="team-block-padding"><button class="team-block-button">ВСЯ КОМАНДА</button></div>
  </div>
</template>


 <style>
 .team-block-padding {
  padding-bottom: 100px;
 }
  .team-block-title{
    text-align: center;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .team-block-button {
    position: absolute;
    margin-top: 50px;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 175px;
    height: 60px;
    border-style: solid;
    background-color: #ffff;
    font-size: 14px;
    border: 1px solid grey;
    box-sizing: border-box;
    border-radius: 5px;
  }

</style>

<script>
</script>