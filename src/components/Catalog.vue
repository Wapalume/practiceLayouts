<template>
  <div class="wrapper">
    <Header/>
    <div class="content">
        <div class="main indent">
            <div class="main__container container">
                <div class="main__block">
                    <div class="main__product-day">
                        <div class="main__image">
                            <img src="../img/1.jpg" alt="">
                        </div>
                        <div class="main__section">
                            <div class="main__title">
                                Товар дня
                            </div>
                            <div class="main__items">
                                <div class="main__price">499 ₽</div>
                                <div class="main__item">
                                    <div class="main__subtitle">Лосось запеченный в тирияки</div>
                                    <button class="main__cart" @click="addToCart(56,'Лосось запеченный в тирияки','1.jpg',499)" >добавить <span></span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="main__product-week">
                        <div class="main__image">
                            <img src="../img/2.jpg" alt="">
                        </div>
                        <div class="main__section">
                            <div class="main__title">
                                Товар недели
                            </div>
                            <div class="main__items">
                                <div class="main__price">299 ₽</div>
                                <div class="main__item">
                                    <div class="main__subtitle">Овощной салат с шампиньонами</div>
                                    <button class="main__cart" @click="addToCart(33,'Овощной салат с шампиньонами','2.jpg',299)">добавить <span></span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="menu indent">
            <div class="menu__container container">
                <div key="index" class="menu__row">
                    <Category  v-for="(category, index) in categories" :key="index" 
                     :title="category.title" :path="category.path" :href="category.href"/>
                </div>
            </div>
        </div>
        <div class="about indent">
            <div class="about__container container">
                <div class="about__block">
                    
                    <div class="about__icon">
                        <svg width="57" height="56" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M34.3825 52.882C40.05 52.075 45.6457 47.7972 49.1716 42.7201C52.6975 37.643 54.2468 31.5424 53.5282 25.403C52.8096 19.2636 49.8726 13.5983 45.2696 9.47266C40.6665 5.34703 34.7147 3.04539 28.5335 3.00066C22.3524 2.95594 16.3678 5.1712 11.7056 9.22978C7.0433 13.2884 4.0246 18.9106 3.21723 25.039C2.40986 31.1673 3.86947 37.3795 7.32153 42.5071C10.7736 47.6347 15.9802 51.3243 21.962 52.882" stroke="#D8C3A5" stroke-width="5"/>
                            <path d="M23.6108 26.1948L24.0562 15.9504C24.0981 14.9862 23.5877 14.0821 22.7404 13.62C21.692 13.0481 20.3977 13.7173 20.2581 14.9033L18.3569 31.0643C18.0972 33.2713 18.7673 35.4869 20.2066 37.1802L23.0734 40.553C23.3193 40.8422 23.3802 41.2457 23.2306 41.5946L21.8481 44.8204C21.6347 45.3183 21.5247 45.8544 21.5247 46.3961V51.1001C21.5247 51.7092 21.2203 52.278 20.7135 52.6159L19.5747 53.3751L20.622 53.8239C21.4375 54.1734 22.292 54.4238 23.1672 54.5697C24.5191 54.795 25.7497 53.7525 25.7497 52.382V51.8146C25.7497 47.8563 27.4879 44.0976 30.5038 41.5341L36.5723 36.3759C37.9536 35.2017 38.7497 33.4803 38.7497 31.6673C38.7497 31.1901 38.7083 30.7137 38.6258 30.2436L35.8545 14.4471C35.692 13.5212 34.6094 13.0928 33.8574 13.6568C33.2545 14.109 32.8997 14.8185 32.8997 15.5721V28.3251C32.8997 28.8773 32.452 29.3251 31.8997 29.3251H31.6497C30.5451 29.3251 29.6497 28.4296 29.6497 27.3251V14.2306C29.6497 13.5924 29.1324 13.075 28.4942 13.075C27.6964 13.075 27.0497 13.7217 27.0497 14.5195V28.3501C27.0497 28.4882 26.9205 28.685 26.5524 28.8657C25.0192 29.6183 23.5366 27.9011 23.6108 26.1948Z" fill="#D8C3A5" stroke="#D8C3A5"/>
                            <path d="M33.875 48.3582C33.875 47.4194 34.636 46.6583 35.5748 46.6583C36.4531 46.6583 37.1868 47.3274 37.2675 48.2019L37.5927 51.7252C37.6995 52.8819 36.9956 53.9598 35.8935 54.3272L35.3027 54.5241C35.0142 54.6203 34.6987 54.5909 34.4329 54.4433C34.0886 54.252 33.875 53.889 33.875 53.4951V48.3582Z" fill="#D8C3A5"/>
                        </svg>
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

import Category from './Category.vue'
import Footer from './Footer.vue'
export default {
    name: 'Main',
    data(){
        return{
            categories:[
                {title: 'Роллы',
                path: '3.jpg',
                href:'rolls'
                },
                {title: 'Закуски',
                path: '4.jpg',
                href:'rolls'
                },
                {title: 'Супы',
                path: '5.jpg',
                href:'rolls'
                },
                {title: 'Салаты',
                path: '6.jpg',
                href:'rolls'
                },
                {title: 'Пицца',
                path: '7.jpg',
                href:'rolls'
                },
                {title: 'Поке',
                path: '8.jpg',
                href:'rolls'
                },
                {title: 'Обеды',
                path: '9.jpg',
                href:'rolls'
                },
                {title: 'На углях',
                path: '10.jpg',
                href:'rolls'
                },
                {title: 'Десерты',
                path: '11.jpg',
                href:'rolls'
                },
                {title: 'Напитки',
                path: '12.jpg',
                href:'rolls'
                },
            ]
        }
    },
    components:{
        Header,
        Category,
        Footer
    },
    computed:{
        countRows(){
            return Math.ceil(this.categories.length/4)
        },
        getCategories(){
            return this.$store.getters['category/getAllCategory']
        },
    },
    methods:{
        rowCategories(count){          
            return this.categories.slice(count*5-5,count*5)
        },
        addToCart(...item){
            let product = {};
            product.id = item[0]
            product.title = item[1]
            product.path = item[2]
            product.price = item[3]
            this.$store.dispatch('cart/addProduct', product)
        }
    },
    mounted(){
        this.$store.dispatch('category/getAllCategory')
        .then(()=>this.categories = this.getCategories.filter(el=>el.available==true))
        
    }
}

</script>

<style>

</style>