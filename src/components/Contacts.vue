<template>
  <div class="wrapper">
    <Header/>
    <div class="content">
        <div class="contacts indent">
            <div class="contacts__container container">
            <div class="contacts__row">
                <div class="contacts__column">
                    <div class="contacts__title title">Контакты</div>
                    <div class="contacts__item">
                        <p>Работаем с 10:00 до 22:00</p>
                        <p>54-75-78 / 81234567890</p>
                        <p>428000, Россия, Чебоксары, К. Марка, 56</p>
                        <p>Desccs@yandex,ru</p>
                    </div>
                </div>
                <div class="contacts__map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2223.4426627624753!2d47.24532119730513!3d56.13215736409796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1655815254602!5m2!1sru!2sru" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            </div>
        </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
export default {
name: "Contacts",
  components:{
        Header,
        Footer,
  },
}
</script>

<style>

</style>