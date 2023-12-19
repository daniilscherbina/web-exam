<!-- пример использования -->
<!-- <IconTextTile :image-src="'src/assets/img/icons/competency/competency-22.svg'" :heading-text="'Head'" :com-text="'commlkhw ckjhwljch wlcwhckw lhjcwklchwkchj'" /> -->
<!-- в случае отсутствия параметра :heading-text заголовка у тайла не будет -->


<template>
  <div class="team_member_tile">
    <img src='imageSrc' alt="Image description">
    <h3 v-if="headingText != null" class="icon_text_tile_heading">{{ headingText }}</h3>
    <div class="icon_text_tile_com">{{ comText }}</div>
  </div>
</template>
  
<script>
  export default {
    props: {
      imageSrc: {
        type: String,
        required: true
      },
      headingText: {
        type: String,
        required: false
      },
      comText: {
        type: String,
        required: true
      }
    }
  }
</script>
  
<style>
  .icon_text_tile {
    width: 181px;
  }

  .icon_text_tile_heading {
    margin: 0;
    margin-top: 12px;
    padding: 0;
    text-align: center;
  }

  /* центрирование иконки по ширине */
  .icon_text_tile_icon {
    margin-left: 50px;
  }

  .icon_text_tile_com {
    margin-top: 5px;
    font-size: 16px;
    color: #050C33;
    opacity: 70%;
  }

  @media (min-width: 767px) {
    .icon_text_tile_heading {
      text-align: left;
    }

    .icon_text_tile_icon {
      margin-left: 0px;
    }
  }
</style>