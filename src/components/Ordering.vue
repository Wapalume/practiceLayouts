<template>
  <div class="wrapper">
      <Header/>
      <div class="content">
           <div class="container">
           <Navigation title="Оформление заказа"/> 
            <div class="cart">
                <div class="cart__title title">Оформление заказа</div>
                <div class="cart__row" v-if="successful">
                    <span>Заказ успешно оформлен! </span><router-link class="header__link" to="/history"> Перейти в историю заказов</router-link>
                </div>
                <div class="cart__row" v-if="!successful">
                    <div class="cart__personal personal">
                        <div class="personal__block">
                            <div class="personal__title">Личные данные</div>
                            <div class="personal__date">
                                <div class="personal__items">
                                    <div class="personal__input">
                                        <input type="text" class="input" readonly v-model="name" placeholder="Имя">
                                    </div>
                                    <div class="personal__input">
                                        <input type="text" class="input" readonly v-model="secondName" placeholder="Фамилия">
                                    </div>
                                </div>
                                <div class="personal__items">
                                    <div class="personal__input">
                                        <input type="text" class="input" readonly v-model="phone" placeholder="Номер телефона">
                                    </div>
                                </div>
                            </div>
                            <div class="personal__title">Адрес</div>
                            <div class="personal__date">
                                <div class="personal__items">
                                    <div class="personal__input">
                                        <input type="text" class="input" v-model="street" placeholder="Улица">
                                    </div>
                                    <div class="personal__input">
                                        <input type="text" class="input" v-model="strNum" placeholder="Дом">
                                    </div>
                                </div>
                                <div class="personal__items">
                                    <div class="personal__input">
                                        <input type="text" class="input" v-model="entrance" placeholder="Подъезд">
                                    </div>
                                    <div class="personal__input">
                                        <input type="text" class="input" v-model="houseNum" placeholder="Квартира">
                                    </div>
                                </div>
                                <div class="personal__items">
                                    <div class="personal__input">
                                        <input type="text" class="input" v-model="stage" placeholder="Этаж">
                                    </div>
                                    <div class="personal__input">
                                        <p>Домофон</p>
                                        <div class="personal__block-radio">                                        
                      <div class="pay-way__radio pay-way__radio_l">
                        <input type="radio" v-model="housePhone" id="1" name="radio" class="pay-way__radio-input" value="1"/>
                        <label for="1"  class="pay-way__radio-label">Есть</label> 
                      </div>
                      <div class="pay-way__radio pay-way__radio_l">
                        <input type="radio" v-model="housePhone" id="2" name="radio" class="pay-way__radio-input" value="0"/>
                        <label for="2" class="pay-way__radio-label">Отсутствует</label> 
                      </div>
                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="cart__pay-way pay-way">
                        <div class="pay-way__block">
                            <div class="pay-way__title">Способ оплаты</div>
                            <div class="pay-way__items">
                                    <div class="pay-way__radio" action="">
                                        <input type="radio" v-model="paymentType" id="3" name="radio2" class="pay-way__radio-input" value="1"/>
                                        <label for="3"  class="pay-way__radio-label">наличными</label> 
                                    </div>
                                    <div class="pay-way__radio" action="">
                                        <input type="radio" v-model="paymentType" id="4" name="radio2" class="pay-way__radio-input" value="2"/>
                                        <label for="4" class="pay-way__radio-label">картой курьеру</label> 
                                    </div>
                            </div>
                            <div class="pay-way__sum">
                                <p class="total-cart__name">Сумма заказа</p>
                                <p class="total-cart__sum">{{total}} ₽</p>
                            </div>
                            <div class="pay-way__button">
                                <button class="button" @click="addNewOrder( street || -1, strNum || -1, entrance || -1, houseNum || -1, stage || -1, housePhone || -1)">заказать</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           </div>
      </div>
      <Footer/>
  </div>
</template>

<script>
import Footer from './Footer.vue'
import Header from './Header.vue'
import Navigation from './Navigation.vue'
import axios from 'axios'

export default {
    name: 'Ordering',
    components: { 
        Header, 
        Footer,
        Navigation
    },
    data(){
        return {
            total: 0,
            name: null,
            secondName: null,
            phone: null,
            street: null,
            strNum: null,
            entrance: null,
            houseNum: null,
            stage: null,
            housePhone: null,
            msg:null,
            paymentType: 1,
            successful:false,
        }
    },
    methods:{
        getData(){
            axios.post('http://localhost:8080/api/user/getData', {id:this.currentUser.id})
            .then(res=>{
                this.name = res.data.name
                this.secondName = res.data.secondname
                this.phone = res.data.phone
                let adress = res.data.adress.split(',;')
                this.street = adress[0] == "-1" ? null : adress[0] 
                this.strNum = adress[1] == "-1" ? null : adress[1] 
                this.entrance = adress[2] == "-1" ? null : adress[2] 
                this.houseNum = adress[3] == "-1" ? null : adress[3] 
                this.stage = adress[4] == "-1" ? null : adress[4] 
                this.housePhone = adress[5] == "-1" ? null : adress[5] 
            })
        },
        addNewOrder(...adress){
            axios.post('http://localhost:8080/api/order/addNewOrder',{
                id:this.currentUser.id,
                paymentType:this.paymentType,
                adress:adress.join(',;'),       
                products: this.getProducts,
                total: this.getTotal > 599 ? this.getTotal + 0 : this.getTotal+100
                })
            .then(()=>{this.successful = true})
        },
    },
    computed: {
        currentUser() {
            return this.$store.state.auth.user;
        },
        getProducts(){
            return this.$store.getters['cart/getProductsCart']
        },
        getTotal(){
            return this.$store.getters['cart/getTotalPrice']
        }
    },
    
    mounted(){
        this.getData()
        console.log(this.getProducts)
        let totalPrice = this.$store.getters['cart/getTotalPrice'] 
        this.total = totalPrice > 599 ? totalPrice : totalPrice + 100
    }
 
}
</script>

<style>

</style>