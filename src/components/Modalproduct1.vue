<template>
<div class="modal">
        <div class="modal__block"> 
            <div class="modal__close" @click="closeModalWindow"> 
                <button><img src="../img/delete.png" alt=""></button>
            </div>
    <div class="modal-product">
        <div class="modal-product__block">
            <div class="modal-product__image">
                <img :src="imgUrl" alt="">
            </div>
            <div class="modal-product__info">
                <div class="modal-product__title" @click="changeClassClose">
                    {{title}}
                </div>
                <div class="modal-product__subtitle">
                    225 грамм, 380 Ккал, 8 шт.
                </div>
                <div class="modal-product__price">320 ₽</div>
                <div class="modal-product__description">
                    <span>Состав:</span> лосось, сыр, авокадо, икра тобико
                </div>
                <form action="" class="modal-product__button">
                    <button class="modal-product__backet button">Добавить в корзину <img src="../img/basket.png" alt=""></button>
                </form>
            </div>
        </div>
    </div>
    </div>
    </div>
</template>

<script>

export default {
    name: "Modalproduct",
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
        }
    }
}
</script>