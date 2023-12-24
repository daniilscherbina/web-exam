<template>
  <a href="" class="col-12 col-md-4 main-block">
    <div class="advantage" :style="{ backgroundPosition: 'center', backgroundImage: 'url(' + image + ')', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }">
      <div class="overlay">
        <div class="header">{{ header }}</div>
        <div class="date">{{ date }}</div>
      </div>
    </div>
  </a>
</template>

<script>
  export default {
    name: "CaseBlockFull",
    props: {
      image: {
        String,
        required: true
      },
      header: {
        String,
        required: true
      },
      date: {
        String,
        required: true
      },
    }
  };
</script>

<style scoped>
  .main-block {
    height: 360px;
    padding: 0 10px 0 10px;
    margin-bottom: 10px;
    text-decoration: none;
  }

  .advantage {
    border-radius: 5px;
    position: relative;
    height: 100%;
  }

  .advantage img {
    max-width: 75%;
    max-height: 100%;
    object-fit: cover;
  }

  .overlay {
    padding: 20px 15px 15px 15px;
    width: 75%;
    line-height: 1;
    position: absolute;
    bottom: 0;
  }

  .date {
    font-size: 12px;
    color: #BBB;
    margin-bottom: 25px;
  }

  .header {
    font-size: 20px;
    font-weight: 700;
    color: white;
    line-height: 1.22;
  }

  .header:hover {
    text-decoration: underline;
  }

  @media screen and (min-width: 992px) {
    .main-block {
      height: 475px;
    }
  }
</style>