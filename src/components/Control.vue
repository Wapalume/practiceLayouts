<template>
  <div class="wrapper">
      <div class="control">
          <div class="control__container container">
              <div class="control__row">
                  <div class="control__column">
                      <AdminMenu/>
                  </div>
                  <div class="control__block">
                      <div class="control__head">
                            <router-link to="products/add" class="control__button button"><svg width="18" height="18" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="6.09961" y1="2.18557e-08" x2="6.09961" y2="12" stroke="white"/>
                                <line y1="5.89999" x2="12" y2="5.89999" stroke="white"/>
                                </svg>
                            </router-link>
                        </div>
                        <table class="control__table">
                            <thead class="control__thead">
                                <tr class="control__tr">
                                    <th class="control__th">Фото</th>
                                    <th class="control__th">Наименование</th>
                                    <th class="control__th">Цена</th>
                                    <th class="control__th">Состав</th>
                                    <th class="control__th">Категория</th>
                                    <th class="control__th">Подкатегория</th>
                                    <th class="control__th">Доступность</th>
                                    <th class="control__th">Действия</th>
                                </tr >
                            </thead>
                            <tbody class="control__tbody" v-if="ready">
                                <Controltr  v-for="(item,index) in getProducts" :key="index" :IdCtrl="index" :product="item"/>
                            </tbody>
                        </table>
                  </div>
              </div>
            </div>
        </div>
  </div>
</template>

<script>
import Controltr from './Controltr.vue'
import AdminMenu from './AdminMenu.vue'
export default {
    name:"Control",
    components:{
        Controltr,
        AdminMenu,    
    },
    data(){
        return {
            ready:false,
        }
    },
    methods:{
        getAllProducts(){
            this.$store.dispatch('products/SET_ALL_PRODUCTS')
            .then(()=>this.ready = true)
        }
    },
    computed:{
        getProducts(){
            console.log(this.$store.getters['products/getProducts'])
            return this.$store.getters['products/getProducts']
        }
    },
    mounted(){
        this.getAllProducts()
    }

}
</script>

<style>

</style>