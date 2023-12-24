
<script setup>
  import TeamMemberPhoto from './TeamMemberPhoto.vue';
</script>

<template>
  <div class="tile">
    <div class = "container">
      <TeamMemberPhoto class="photo" :image-src="imageSrc"/>
      <p class="heading-text">{{ headingText }}</p>
      <div class="com-text">{{ comText }}</div>
    </div>
    
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
        required: true
      },
      comText: {
        type: String,
        required: true
      }
    }
  }
</script>
  
<style>
@media (min-width: 576px) {
  .container {
    width: 100%; 
    margin: 0 auto;
    box-sizing: border-box;
  }
  
}


@media (min-width: 992px) {
  .container {
    width: 90%; 
    margin: 0 auto;
    box-sizing: border-box;
  }
  
}

@media (min-width: 1200px) {
  .container {
    width: 80%; 
    margin: 0 auto;
    box-sizing: border-box;
  }

}

.photo {
    width: 100%;
    padding: 5px;
  }
  
  .tile {
    margin-top: 50px;
  }
  
  .heading-text {
    margin-top: 10px;
    margin-left: 10px;
    font-weight: 600;
    font-size: 16px;
  }

  .com-text {
    margin-left: 10px;
    margin-top: -10px;
  }

</style>