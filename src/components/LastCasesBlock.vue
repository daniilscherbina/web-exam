<script>
import CaseBlockFull from "./case/CaseBlockFull.vue";
import CaseBlockFullBig from "./case/CaseBlockFullBig.vue";
import CaseBlockHalf from "./case/CaseBlockHalf.vue";
import pic1 from "../assets/img/cases/picture_2.jpg"
import pic2 from "../assets/img/cases/picture_1.jpg"
import pic3 from "../assets/img/cases/picture_3.jpg"
import pic4 from "../assets/img/cases/picture_4.jpg"
import pic5 from "../assets/img/cases/picture_5.jpg"

export default {
    name: "LastCases",
    components: { CaseBlockFull, CaseBlockFullBig, CaseBlockHalf },
    data: () => {
        return {
            pic1, pic2, pic3, pic4, pic5,
            header1: "Настройка кэширования данных. Апгрейд сервера. Ускорение работысайта в 30 раз!",
            text1: "Влияние скорости загрузки страниц сайта на отказы и конверсии. Кейс ускорения...",
            date1: "03.12.23",
            header2: "Использование отчетов Ecommerce в Яндекс.Метрике",
            header3: "Повышение конверсии страницы с формой заявки с применением AB-тестирования",
            date3: "24.10.23",
            header4: "Drupal 7: ускорение времени генерации страниц интернет-магазина на 32%",
            date4: "11.11.23",
            header5: "Обмен товарами и заказами интернет-магазинов на Drupal 7 с 1C: Предприятие, МойСклад, Класс365",
            text5: "Опубликован релиз модуля...",
            date5: "22.07.23",
        }
    }
}
</script>

<template>
    <div class="super-main-block">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12">
                    <h1 class="super-title text-center">
                        Последние кейсы
                    </h1>
                </div>
            </div>
            <div class="row flex-row mx-auto">
                <CaseBlockHalf :image="pic1" :header="header1" :text="text1" :date="date1" />
                <CaseBlockFullBig :image="pic2" :header="header2" />
                <CaseBlockFull :image="pic3" :header="header3" :date="date3" />
                <CaseBlockFull :image="pic5" :header="header4" :date="date4" />
                <CaseBlockHalf :image="pic4" :header="header5" :text="text5" :date="date5" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.super-main-block {
    margin-bottom: 0;
    position: relative;
}

.super-title {
    padding-top: 20px;
    margin-bottom: 20px;
    text-align: center;
    color: #050c33;
    font-weight: 700;
    font-size: 24px;
}
</style>