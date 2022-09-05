<template>
  <footer class="footer">
    <div class="footer__container container">
        <div class="footer__block">
            <div class="footer__column">
                <router-link to="" class="footer__logo">
                    iFood
                </router-link>
            </div>
            <div class="footer__column">
                <div class="footer__items">
                    <p>Работаем с 10:00 до 22:00</p>
                    <p>54-75-78 / 81234567890</p>
                    <p>428000, Россия, 
                        Чебоксары, К. Марка, 56</p>
                    <p>Desccs@yandex,ru</p>
                </div>
            </div>
            <div class="footer__column">
                <div class="footer__items">
                    <router-link to="" class="footer__link">Публичная оферта</router-link>
                    <router-link to="" class="footer__link">Пользовательское соглашение</router-link>
                    <router-link to="" class="footer__link">Политика обработки персональных данных</router-link>
                </div>
            </div>
        </div>
    </div>
  </footer>
</template>

<script>
export default {
    name:'Footer'

}
</script>

<style>

</style>