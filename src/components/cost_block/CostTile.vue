<template>
  <div class = "cost-tile"> 
    <p class ="cost-tile-plan-description">{{ headingText }}</p>
    <hr/>
    <ul class="cost-tile-list">
        <li v-for = "item in listLines">{{ item }}</li>
    </ul>
    <button class="cost-tile-button">СВЯЖИТЕСЬ С НАМИ!</button>
  </div>
</template>

<script>
  export default {
    props: {
      headingText: {
        type: String,
        required: true
      },
      listLines: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style>
  .cost-tile-plan-description {
      font-size: 25px;
      color:rgb(252, 75, 11);
      font-weight: 700;
  }
  .cost-tile-button {
    transition: color 0.5s ease;
    transition: background-color 0.5s ease;
    margin-top: 70px;
    border-style: solid;
    color:rgb(252, 75, 11);
    background-color: #ffff;
    font-size: 14px;
    width: 100%;
    height: 75px;
    border: 1px solid rgb(252, 75, 11);
    box-sizing: border-box;
    border-radius: 5px;
}

  .cost-tile-button:hover {
    color: white;
    background-color: #f14d34;
  }

  .cost-tile-list {
      list-style: none; /* Remove the default list-style */
      font-size: 16px;
      margin-left: -40px;
  }
    .cost-tile-list li::before {
      content: "✓"; /* Set the custom mark */
      margin-right: 2%;
      color: red; /* Adjust the spacing between the mark and the text */
    }
    .cost-tile-list li {
      margin-bottom: 3%;
      margin-left: 10px;
      margin-right: 10px;
    }
  
  .cost-tile {
    margin: 20px;
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 100px;
    padding-bottom: 80px;
    max-width: 525px; 
    background-color: #ffff;
    border: 1px solid #f1e7de;
    box-sizing: border-box;
    border-radius: 5px;
    transition: transform 0.5s ease;
  }

  .cost-tile hr {
    margin-bottom: 75px;
    border-top: 2px solid;
    color: #e5e5e5;
  }

  .cost-tile:hover {
    transform: scale(1.1);
  }
</style>
