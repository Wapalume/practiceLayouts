<template>
  <div class="wrapper">
      <Header/>
      <div class="content">
          <div class="delivery">
              <div class="delivery__container container">
                  <div class="delivery__content">
                  <div class="delivery__title title">Доставка</div>
                  <div class="delivery__row">
                      <div class="delivery__column">
                          <div class="delivery__block">
                              <div class="delivery__items">
                                    <img src="../img/icon/Delivery.svg" alt="">
                              </div>
                              <div class="delivery__items">
                                  <div class="delivery__subtitle">Чебоксары</div>
                                  <div class="delivery__text">
                                      Доставка осуществляется по городу Чебоксары<br>
                                      Стоимость доставки - 100 рублей
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="delivery__column">
                          <div class="delivery__block">
                              <div class="delivery__items">
                                   <img src="../img/icon/Delivery.svg" alt="">
                              </div>
                              <div class="delivery__items">
                                  <div class="delivery__subtitle">Бесплатная доставка</div>
                                  <div class="delivery__text">
                                        Бесплатная доставка<br>
                                        По Чебоксарам за заказ от 600 рублей<br>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="delivery__column">
                          <div class="delivery__block">
                              <div class="delivery__items">
                                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.6832 11.3166C21.9769 9.61038 19.7457 8.74996 17.4998 8.74996V17.5L11.3165 23.6833C14.729 27.0958 20.2707 27.0958 23.6978 23.6833C27.1103 20.2708 27.1103 14.7291 23.6832 11.3166ZM17.4998 2.91663C9.44984 2.91663 2.9165 9.44996 2.9165 17.5C2.9165 25.55 9.44984 32.0833 17.4998 32.0833C25.5498 32.0833 32.0832 25.55 32.0832 17.5C32.0832 9.44996 25.5498 2.91663 17.4998 2.91663ZM17.4998 29.1666C11.054 29.1666 5.83317 23.9458 5.83317 17.5C5.83317 11.0541 11.054 5.83329 17.4998 5.83329C23.9457 5.83329 29.1665 11.0541 29.1665 17.5C29.1665 23.9458 23.9457 29.1666 17.4998 29.1666Z" fill="black"/>
                                    </svg>
                              </div>
                              <div class="delivery__items">
                                  <div class="delivery__subtitle">Время доставки</div>
                                  <div class="delivery__text">
                                      Среднее время доставки составляет<br> ~ от 60 мин. 
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  </div>
                  <div class="delivery__content">
                  <div class="delivery__title title">Оплата</div>
                  <div class="delivery__row">
                      <div class="delivery__column">
                          <div class="delivery__block">
                              <div class="delivery__items">
                                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M27.7085 20.4167V8.75004C27.7085 7.14587 26.396 5.83337 24.7918 5.83337H4.37516C2.771 5.83337 1.4585 7.14587 1.4585 8.75004V20.4167C1.4585 22.0209 2.771 23.3334 4.37516 23.3334H24.7918C26.396 23.3334 27.7085 22.0209 27.7085 20.4167ZM14.5835 18.9584C12.1627 18.9584 10.2085 17.0042 10.2085 14.5834C10.2085 12.1625 12.1627 10.2084 14.5835 10.2084C17.0043 10.2084 18.9585 12.1625 18.9585 14.5834C18.9585 17.0042 17.0043 18.9584 14.5835 18.9584ZM33.5418 10.2084V26.25C33.5418 27.8542 32.2293 29.1667 30.6252 29.1667H5.8335V26.25H30.6252V10.2084H33.5418Z" fill="black"/>
                                    </svg>
                              </div>
                              <div class="delivery__items">
                                  <div class="delivery__subtitle">Наличными</div>
                                  <div class="delivery__text">
                                      Оплата производится в момент доставки заказа. Клиент передает деньги курьеру и получает заказ
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="delivery__column">
                          <div class="delivery__block">
                              <div class="delivery__items">
                                    <img src="../img/icon/Card.svg" alt="">
                              </div>
                              <div class="delivery__items">
                                  <div class="delivery__subtitle">Банковской картой</div>
                                  <div class="delivery__text">
                                        Оплата производится в момент получения заказа, клиент оплачивает картой через терминал.
                                  </div>
                              </div>
                          </div>
                      </div>
                      <!-- <div class="delivery__column">
                          <div class="delivery__block">
                              <div class="delivery__items">
                                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M29.1665 5.83337H5.83317C4.21442 5.83337 2.93109 7.13129 2.93109 8.75004L2.9165 26.25C2.9165 27.8688 4.21442 29.1667 5.83317 29.1667H29.1665C30.7853 29.1667 32.0832 27.8688 32.0832 26.25V8.75004C32.0832 7.13129 30.7853 5.83337 29.1665 5.83337ZM29.1665 26.25H5.83317V17.5H29.1665V26.25ZM29.1665 11.6667H5.83317V8.75004H29.1665V11.6667Z" fill="black"/>
                                    </svg>

                              </div>
                              <div class="delivery__items">
                                  <div class="delivery__subtitle">Банковской картой онлайн</div>
                                  <div class="delivery__text">
                                      Оплата производится онлайн на сайте.
                                  </div>
                              </div>
                          </div>
                      </div> -->
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
name:'Delivery',
components:{
        Header,
        Footer,
    },
}
</script>

<style>

</style>