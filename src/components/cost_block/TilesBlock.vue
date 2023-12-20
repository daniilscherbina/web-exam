<script setup>
  import CostTile from './CostTile.vue';
</script>


<template>
    <div class="tiles-block">
        <CostTile class="tiles-block-tile" :headingText="'Стартовый'" :listLines="[
            'Консультации и работы по SEO', 
            'Услуги дизайнера', 
            'Неиспользованные оплаченные часы переносятся на следующий месяц',
            'Предоплата от 6000 рублей в месяц'
        ]" />
        <CostTile class="tiles-block-tile" :headingText="'Бизнес'" :listLines="[
            'Консультации и работы по SEO', 
            'Услуги дизайнера', 
            'Высокое время реакции - до 2 рабочих дней',
            'Неиспользованные оплаченные часы не переносятся',
            'Предоплата от 30 000 рублей в месяц'
        ]" />
        <CostTile class="tiles-block-tile" :headingText="'VIP'" :listLines="[
            'Консультации и работы по SEO', 
            'Услуги дизайнера', 
            'Максимальное время реакции - в день сообщения',
            'Предоплата от 270 000 рублей в месяц'
        ]" />   
                
    </div>
</template>

<style>

.tiles-block {
    display: flex;
    flex-direction: column;
    align-items: center;
}


@media (min-width:992px) {
    .tiles-block {
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
    margin: 0 auto;
    }    
    .tiles-block-tile {
        width: 30%;
    }
}

</style>




<script>

</script>