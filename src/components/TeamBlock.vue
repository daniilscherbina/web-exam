<script setup>
  import TeamMemberTile from './reused/TeamMemberTile.vue';
</script>

<template>
  <div class="container">
    <h2 class="team-block-title">Команда</h2>
    <div class="row">
      <div class="col-xs-6 col-sm-6 col-md-4 left">
        <TeamMemberTile :image-src="'src/assets/img/team/1.jpg'" :heading-text="'Сергей Синица'" :com-text="'Руководитель отдела веб-разработки, канд. техн.наук, заместитель директора'" />
      </div>
      <div class="col-xs-6 col-sm-6 col-md-4 center">
        <TeamMemberTile :image-src="'src/assets/img/team/4.jpg'" heading-text="Роман Агабеков"  :com-text="'Руководитель отдела DevOps, директор'" />
      </div>
      <div class=" col-xs-6 col-sm-6 col-md-4 right">
        <TeamMemberTile :image-src="'src/assets/img/team/2.jpg'" heading-text="Алексей Синица" :com-text="'Руководитель отдела поддержки сайтов'" />
      </div>
      <div class="col-xs-6 col-sm-6 col-md-4 left">
        <TeamMemberTile :image-src="'src/assets/img/team/3.jpg'" heading-text="Дарья Бочкарева"  :com-text="'Руководитель отдела продвижения, контекстной рекламы и контент подержки сайтов'" />
      </div>
      <div class="col-xs-6 col-sm-6 col-md-4 center">
        <TeamMemberTile :image-src="'src/assets/img/team/5.jpg'" heading-text="Ирина Торкунова"  :com-text="'Менежер по работе с клиентами'" />
      </div>
    </div>
    <div class="team-block-padding"><button class="team-block-button">ВСЯ КОМАНДА</button></div>
  </div>
</template>


 <style>
  @media (min-width:768px) {
    .left {
      margin-left: 40px;
    }
    .right {
      margin-right: 40px;
    }
    .center {
      margin-right:-40px;
      margin-left: -40px;
    }
  }


  @media (min-width:992px) {
    .left {
    margin-left: 60px;
    }
    .right {
      margin-right: 60px;
    }
    .center {
      margin-right:-60px;
      margin-left: -60px;
    }
  }

  @media (min-width:1200px) {
    .left {
      margin-left: 80px;
    }
    .right {
      margin-right: 80px;
    }
    .center {
      margin-right:-80px;
      margin-left: -80px;
    }
  }
 
 .row {
  margin-top: 100px;
 }
 .team-block-padding {
  padding-bottom: 100px;
 }

  .team-block-title{
    text-align: center;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-bottom: 100px;
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
    transition: background-color 0.3s ease;
  }

  .team-block-button:hover {
    background-color: lightgrey;
  }
</style>