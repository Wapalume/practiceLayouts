<template>
    <div class="block-cart__block">
        <div class="block-cart__image">
            <img :src="imgUrl" alt="">
        </div>
        <div class="block-cart__body">
            <div class="block-cart__name">
                {{title}}             
            </div> 
            <div class="block-cart__number">
                <button @click="decreaseProduct(id)" class="block-cart__button">
                    <svg width="12" height="1" viewBox="0 0 12 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="0.5" x2="12" y2="0.5"/>
                    </svg>
                </button>       
                <p class="block-cart__count">{{count}}</p>     
                <button @click="increaseProduct(id)" class="block-cart__button">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="6.09961" y1="2.18557e-08" x2="6.09961" y2="12" />
                        <line y1="5.89999" x2="12" y2="5.89999" />
                    </svg>
                </button>   
            </div>
            <div class="block-cart__price">
                <p>{{price}} ₽</p>                
            </div> 
        </div>
        <div @click="removeProduct(id)" :id="id">
            <button class="block-cart__button block-cart__button_r">
                    <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="6.95316" y1="8.04675" x2="21.0953" y2="22.1889" />
                        <line x1="7.18942" y1="22.189" x2="21.3316" y2="8.0469" />
                    </svg>
            </button>                
        </div>  
    </div> 
</template>

<script>

import { mapActions } from 'vuex'

export default {
    name: 'Basketproduct',
    props: {
            id:Number,
            title: String,
            price: String,
            path: String,
            count: Number
        },
    computed: {
        imgUrl() {
            return require(`../img/${this.path}`)
        },                
    },
    methods:{
        ...mapActions('cart',{
            increaseProduct: 'increaseProduct',
            decreaseProduct: 'decreaseProduct',
            removeProduct: 'removeProduct',
        })
    }
}
</script>

<style>

</style>