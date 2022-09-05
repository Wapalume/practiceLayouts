<template>
  <div class="wrapper">
    <Header/>
    <div class="content">
        <div class="container">
           <Navigation :title="category"/> 
        </div>
        <div class="filter">
            <div class="filter__container container">
                 <Filter :subCategory="subCategory" v-on:changeSubCat="changeSubCategory"/>
            </div>
        </div>
        <div class="catalog indent">
            <div class="catalog__container container">
                <div class="catalog__product product">
                    <Preloader v-if="preload"/>
                 <div v-for="(item, index) in countRows" :key="index" class="product__row">
                        <Product v-for="(product, index) in filterProducts(item,subCategoryId)" :key="index" :id="product.id" :title="product.title" :text="product.description"
                        :price="product.price.toString()" :path="product.path"/>
                    </div>     
                </div>
            </div>
        </div>
    </div>
    <Footer/>
  </div>
  <div>
  </div>
</template>

<script>
//import axios from 'axios'
import {mapGetters,mapActions} from 'vuex'
import Header from './Header.vue'
import Navigation from './Navigation.vue'
import Filter from './Filter.vue'
import Product from './Product.vue'
import Preloader from './Preloader.vue'
import Footer from './Footer.vue'


export default {
    name: 'Catalog',
    components:{
        Header,
        Navigation,
        Filter,
        Product,
        Preloader,
        Footer
    },
    props:{
        title:String,
    },
    data(){
        return{
            preload:true,
            subCategoryId:0,
            subCategory:[],
            category:'',
            products: [
               
            ]
        }
    },
    watch:{
        title:function(){
            this.getProducts()
            this.getCurrentCategory()
            this.getSubCategories()
        }
    },
    computed:{
        countRows(){
            return Math.ceil(this.products.length/4)
        },
        ...mapGetters({
            getsProducts:'products/getProducts',
            getsSubCategories:'subCategory/getSubCategories',
            getsCurrentCategory:'category/getCurrentCategory'
        })
    },
    methods:{
        filterProducts(count,subCatId = 0){          
            return this.products.filter(el=>{
                if(subCatId==0){
                   return el.subCategoryId!==0;
                }
                else{
                    return el.subCategoryId==subCatId
                }}).slice(count*4-4,count*4)
        },
        changeSubCategory(subCatId){
            this.subCategoryId = subCatId
        },
        setLoad(){
            this.preload = false
        },
        ...mapActions({
            set_products: 'products/SET_PRODUCTS',
            set_subCategories: 'subCategory/getAllSubCategory',
            set_current_category:'category/getCurrentCategory'
        }),
        getProducts(){
            this.set_products(this.title)
            .then(()=>{
            this.setLoad()
            this.products = this.getsProducts
            })
        },
        getCurrentCategory(){
            this.set_current_category(this.title)
            .then(()=>{
                this.category = this.getsCurrentCategory
                if(!this.category){
                    this.$router.push('/catalog')
                }
            })
        },
        getSubCategories(){
            this.set_subCategories(this.title)
            .then(()=>this.subCategory = this.getsSubCategories)
        }
    },
    mounted(){
        this.getProducts()
        this.getCurrentCategory()
        this.getSubCategories()
        
/*        axios.post('http://localhost:8080/api/goods/getGoods', {
            params:{
                href: this.title
            }
        })
        .then(res=>{
            console.log(res)
            this.category = res.data[1].title;
            this.subCategory = res.data[2].map(el=>{
                return {
                    id: el.id,
                    title: el.title,
                }
            })
            console.log(this.subCategory)
            this.products = res.data[0].map(el=>{
                return {
                    title: el.title,
                    text: el.description,
                    price: el.price,
                    path: el.path,
                    subCategoryId: el.subCategoryId,
                }                
        })        
        })*/
    }
}
</script>
<style>

</style>