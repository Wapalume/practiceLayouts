<template>
  <div class="modal" @click.self="closeModalWindow">
        <div class="modal__block">
            <div class="modal__body">
                <div class="modal__close" @click="closeModalWindow">
                    <span></span>
                    <span></span>
                </div>
                <div class="modal__product product-modal">
                    <div class="product-modal__row">     
                        <div class="product-modal__image">
                            <img :src="imgUrl" alt="">
                        </div>
                        <div class="product-modal__item">
                            <div class="product-modal__title">{{title}}</div>
                            <div class="product-modal__text">225 грамм, 380 Ккал, 8 шт.</div>
                            <div class="product-modal__price">390 ₽</div>
                            <div class="product-modal__description">
                                <span>Состав: </span>икра тобиколосось, сыр, авокадо, икра тобико 
                            </div>
                            <div class="product-modal__form">
                                <div class="product-modal__button">
                                    <button class="product-modal__backet button" @click="addToCart(id,title,path,price)">в корзину <img src="../img/basket.png" alt=""></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
name: 'Modal',
props:{
        title:String,
        price:String,
        path:String,
        text:String,
    },
    computed: {
        imgUrl() {
            return require(`../img/${this.path}`)
        },
    },
    methods:{
        closeModalWindow(){
            this.$emit("closeWindow")
        },
        addToCart(...item){
            console.log(item)
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

<style>

</style>