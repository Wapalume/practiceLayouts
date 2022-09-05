<template>
<div class="wrapper">
  <Header/>
  <div class="content">
    <div class="container" >
      <Navprofile/> 
      <div class="order-history indent">
        <div class="order-history__title title">
          История заказов
        </div>
            <div class="order-history__row">
                <div class="order-history__column" v-for="(el,key) in orders" :key="key">
                    <div class="order-history__block">
                        <div class="order-history__button" @click="activeClick(key)" :class="isActive === key ? '_active' : ''"> 
                           Заказ №{{el.id}}
              
                        </div>
                        <div class="order-history__panel" @click="activeClick(key)" :class="isActive === key ? '_active' : ''">
                            <div class="order-history__items">
                                <p>Наименование</p>
                                <p>Кол-во</p>
                                <p>Цена</p>
                            </div>
                            <div class="order-history__items" v-for="(el,key) in filterOrder(el.id)" :key="key">
                                <p>{{el.title}}</p>
                                <p>{{el.count}}</p>
                                <p>{{el.price}} ₽</p>
                            </div>
                            <div class="order-history__price">
                                <p>Общая стоимость</p>
                                <p>850 ₽</p>
                            </div>
                            <div class="order-history__price">
                                <p>Адрес</p>
                                <p>улица {{getPartAdress(el,0) == -1? "не указана" : getPartAdress(el,0) }}, д.{{getPartAdress(el,1) == -1? "не указан" : getPartAdress(el,1) }},кв.{{getPartAdress(el,3) == -1? "не указана" : getPartAdress(el,3) }}</p>
                            </div>
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
import axios from 'axios'
import Navprofile from './Navprofile.vue'
import Header from './Header.vue'
import Footer from './Footer.vue'
export default {
    name:'OrderHistory',
    components:{
        Navprofile,
        Header,
        Footer,
  },
  data() {
        return {
        isActive:null,
        orders: null,
        orderProducts: null,
        };
    },
    computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
methods: {
        activeClick(id) {
            if(this.isActive == id ){
                this.isActive = null
            }
            else this.isActive = id;
        },
        filterOrder(id){
        console.log(this.orderProducts.filter((el)=>el.id == id))
        return this.orderProducts.filter((el)=>el.id == id)
    },
    getPartAdress(el,i){
        return el.currentAdress.split(',;')[i]
    },
        getOrders(){
            axios.post('http://localhost:8080/api/order/getOrders', {id:this.currentUser.id})
            .then((res)=>{
                this.orders = res.data.Orders
                this.orderProducts = res.data.OrderProducts
                console.log(this.orderProducts)
            })

        }
    },
    mounted(){
        this.getOrders()
    }
}
</script>

<style>

</style>