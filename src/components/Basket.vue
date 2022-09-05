<template>
  <div class="wrapper">
      <Header/>
      <div class="content">
        <div class="container">
           <Navigation title="Корзина"/> 
           <div class="cart" v-if="cart.length">
               <div class="cart__title title">
                    Корзина
                </div>  
                <div class="cart__row">
                    <div class="cart__block block-cart">            
                        <div v-for="(item, index) in countRows" :key="index" class="block-cart__row ">
                            <Basketproduct v-for="(cart, index) in getProducts(item)" :key="index"
                             :id="cart.id" :title="cart.title" :price="cart.price.toString()" :path="cart.path" :count="cart.count"/>
                        </div>    
                    </div>
                    <div class="cart__total total-cart">
                        <div class="total-cart__block">
                            <div class="total-cart__title title">
                                Сумма заказа
                            </div>
                            <div class="total-cart__items">
                                <div class="total-cart__item">
                                    <p class="total-cart__name">Товары</p>
                                    <p class="total-cart__sum">{{getTotalPrice}} ₽</p>
                                </div>
                                <div class="total-cart__item">
                                    <p class="total-cart__name">Доставка</p>
                                    <p class="total-cart__sum">{{getTax}} ₽</p>
                                </div>
                                <div class="total-cart__item">
                                    <p class="total-cart__name">Общая стоимость</p>
                                    <p class="total-cart__sum">{{getTotalPrice > 599 ? getTotalPrice + 0 : getTotalPrice+100}} ₽</p>
                                </div>
                            </div>
                            <div class="total-cart__button">
                                <router-link to="/ordering" class="button">Оформить заказ</router-link>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
           <div class="cart" v-if="!cart.length">
                <div class="cart__title title">
                    Корзина пуста
                </div>
                <div class="cart__catalog">
                    <router-link class="cart__link" to="/catalog">Перейти в каталог</router-link>
                </div>
            </div>
        </div>
      </div>
      <Footer/>
  </div>
</template>

<script>

import Header from './Header.vue'
import Navigation from './Navigation.vue'

import Basketproduct from './Basketproduct.vue'
import Footer from './Footer.vue'

export default {
    name: 'Basket',
    data(){
        return{
            cart:[
            ],
            tax:this.getTotalPrice > 599 ? 0 : 100,
        }
    },
    components:{
        Header,
        Navigation,
        Basketproduct,
        Footer,
    },
    computed:{
        countRows(){
            return Math.ceil(this.cart.length/1)
        },
        getProductsCart(){
            return this.$store.getters['cart/getProductsCart']
        },
        getTotalPrice(){
            return this.$store.getters['cart/getTotalPrice']
        },
        getTax(){
            return this.getTotalPrice > 599 ? 0 : 100
        }
    },
    methods:{
        getProducts(count){          
            return this.cart.slice(count*1-1,count*1)
        },
    },
    mounted(){
        this.cart = this.getProductsCart
        
    },
    unmounted(){
        this.saveCart
    }
}
</script>

<style>

</style>