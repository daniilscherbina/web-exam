
<script setup>
  import TeamMemberPhoto from './TeamMemberPhoto.vue';
</script>

<template>
  <div class="tile">
    <div class = "container">
      <TeamMemberPhoto class="photo" :image-src="imageSrc"/>
      <h5 class="heading-tile">{{ headingText }}</h5>
      <div class="comText-tile">{{ comText }}</div>
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
@media (min-width: 992px) {
  .container {
  width: 90%; 
  margin: 0 auto;
  box-sizing: border-box;
  
}

.photo {
  padding: 5px;
}
  .tile {
    margin-top: 50px;
  }
  
  .heading-tile {
    margin-top: 20px;
    margin-left: 10px;
  }

  .comText-tile {
    margin-left: 10px;
    margin-top: 10px;
  }
  
}


@media (max-width: 575px) {
  .photo {
    width: 90%;
  }
  .container {
  width: 100%; 
  margin: 0 auto;
  box-sizing: border-box;
  
}

  .photo {
    padding: 5px;
  }
  .tile {
    margin-top: 50px;
  }
  
  .heading-tile {
    margin-top: 20px;
    margin-left: 5px;
  }

  .comText-tile {
    margin-top: 10px;
    margin-left: 5px;
  }
    
}

.container {
  width: 100%; 
  margin: 0 auto;
  box-sizing: border-box;
  
}

.photo {
  width: 100%;
}

.tile {
    margin-top: 50px;
}
  
.heading-tile {
    margin-top: 20px;
}

.comText-tile {
    margin-top: 10px;
}


</style>