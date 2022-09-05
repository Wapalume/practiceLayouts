<template>
    <div class="product__column">
        <div class="product__image" @click="changeModalStatus">
            <img v-bind:src="imgUrl" alt="">
        </div>
        <div class="product__title">
                {{title }}
        </div>
        <div class="product__description">
            <div class="product__grame">280 г</div>
            <div class="product__text">
                {{ text }}
            </div>
        </div>
        <div class="product__items">
            <div class="product__price">{{price}} ₽</div>    
            <div class="product__basket" @click="addToCart(id,title,path,price)">
                   <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.59701 9.19462C1.55795 9.03803 1.55508 8.8746 1.58862 8.71673C1.62215 8.55886 1.69121 8.41071 1.79055 8.28351C1.88989 8.15631 2.0169 8.05342 2.16194 7.98264C2.30698 7.91186 2.46625 7.87504 2.62764 7.875H21.1576C21.319 7.87504 21.4783 7.91186 21.6233 7.98264C21.7684 8.05342 21.8954 8.15631 21.9947 8.28351C22.0941 8.41071 22.1631 8.55886 22.1967 8.71673C22.2302 8.8746 22.2273 9.03803 22.1883 9.19462L20.2641 16.8903C20.1492 17.35 19.8839 17.7582 19.5104 18.0498C19.1369 18.3415 18.6767 18.4999 18.2028 18.5H5.58245C5.10858 18.4999 4.64834 18.3415 4.27486 18.0498C3.90139 17.7582 3.63611 17.35 3.5212 16.8903L1.59701 9.19569V9.19462Z" stroke-width="2" stroke-linejoin="round"/>
                  <path d="M8.70508 12.125V14.25" stroke-width="2" stroke-linecap="round"/>
                  <path d="M15.0801 12.125V14.25" stroke-width="2" stroke-linecap="round"/>
                  <path d="M5.51758 7.875L9.76758 1.5" stroke-width="2" stroke-linecap="round"/>
                  <path d="M18.2676 7.875L14.0176 1.5" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </div>
        </div>
    </div>
</template>

<script>



export default {
    name: 'Product',
    components:
    {
        
    },
    props: 
    {
        id:Number,
        title: String,
        price: String,
        path: String,
        text: String,
    },  
    data(){
        return {
            modalWindowOpened: false,
        }
    },      
    computed: {
        imgUrl() {
            return require(`../img/${this.path}`)
        },
    },
    methods:{
        changeModalStatus(){
            this.modalWindowOpened = !this.modalWindowOpened;
        },
        addToCart(...item){
            let product = {};
            product.id = item[0]
            product.title = item[1]
            product.path = item[2]
            product.price = item[3]
            this.$store.dispatch('cart/addProduct', product)
        }
    }
}
</script>



<style lang="scss">

</style>