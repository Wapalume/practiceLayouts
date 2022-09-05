<template>
  <div class="wrapper">
    <div class="control">
          <div class="control__container container">
              <div class="control__row">
                  <div class="control__column">
                      <AdminMenu/>
                  </div>
                  <div class="control__block">
                      <div class="addproduct">
                        <div class="addproduct__container container">
                          <h1 class="addproduct__title">Новый товар</h1>
                          <div class="addproduct__form">
                              <div class="addproduct__row">
                            <div class="addproduct__column">
                              <div class="addproduct__items">
                                <div class="addproduct__name">Наименование товара</div>
                                <div class="addproduct__item">
                                  <input v-model="product.title" class="addproduct__input input-admin" type="text" name="" id="" />
                                </div>
                              </div>
                              <div class="addproduct__items">
                                <div class="addproduct__name">Цена товара</div>
                                <div class="addproduct__item">
                                  <input v-model="product.price" class="addproduct__input input-admin" type="text" name="" id="" />
                                </div>
                              </div>
                              <div class="addproduct__items">
                                <div class="addproduct__name">Состав товара</div>
                                <div class="addproduct__item">
                                  <input v-model="product.description" class="addproduct__input input-admin" type="text" name="" id="" />
                                </div>
                              </div>
                            </div>
                            <div class="addproduct__column">
                              <div class="addproduct__items">
                                <div class="addproduct__name">Категория товара</div>
                                <div class="addproduct__item">
                                  <select class="addproduct__input input-admin" v-model="category" @change="setAllSubCategory(category)">
                                    <option disabled></option>
                                    <option v-for="(category,index) in getAllCategory" :key="index" :value="{id:category.id,href:category.href}">{{category.title}}</option>
                                  </select>
                                  <div class="addproduct__arrow"></div>
                                </div>
                              </div>
                              <div class="addproduct__items">
                                <div class="addproduct__name">Подкатегория товара</div>
                                <div class="addproduct__item">
                                  <select class="addproduct__input input-admin" v-model="product.subCategoryId">
                                    <option v-for="(subCategory,index) in getAllSubCategory" :key="index" :value="subCategory.id">{{subCategory.title}}</option>
                                  </select>
                                  <div class="addproduct__arrow"></div>
                                </div>
                              </div>
                              <div class="addproduct__items">
                                <div class="addproduct__name">Фото товара</div>
                                <div class="addproduct__item" v-if="!file">
                                  <input
                                    v-on:change="handleFileUploads()"
                                    class="addproduct__input-file"
                                    type="file"
                                    name="file"
                                    ref="file"
                                    accept="image/jpg, image/jpeg"
                                    id="input__file"
                                  />
                                  <label for="input__file" class="addproduct__file">
                                    <span>Выберите файл</span>
                                  </label>
                                </div>
                                <div class="addproduct__item" v-if="file">
                                  <span>{{file.name}}</span>
                                  <br>
                                  <span @click="this.file=''">Отменить</span>
                                </div>
                              </div>
                            </div>
                          </div>
                            <div class="addproduct__items">
                                <div class="addproduct__button">
                                  <button class="button" @click="submitNewProduct()">добавить товар</button>
                                </div>
                            </div>
                            <div class="addproduct__items" v-if="emptyField">
                                Заполните все поля!
                            </div>
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
import axios from 'axios'
import AdminMenu from './AdminMenu.vue'
export default {
  name: "Addproduct",
  components:{
        AdminMenu,    
    },
  data(){
    return {
      category:'',
      product: {
        title: '',
        description: '',
        price: '',
        path:'',
        categoryId: '',
        subCategoryId: '0',
      },
      file: '',
      emptyField:false,
    
    }
  },
  methods:{
    setAllCategory(){
      this.$store.dispatch('category/getAllCategory')
    },
    setAllSubCategory(category){
      this.product.categoryId = category.id
      this.$store.dispatch('subCategory/getAllSubCategory',category.href)
    },
    handleFileUploads(){      
      this.file = this.$refs.file.files[0]
      this.product.path = this.file.name

    },
    submitNewProduct(){
      for(let el in this.product){
        if(this.product[el]== ''){
          console.log(el)
          this.emptyField = true
          return;
        }
        this.emptyField = false
        }
        let formData = new FormData()
          formData.append('image',this.file)
          axios.post('http://localhost:8080/api/goods/updateImg',formData, {
            headers:{
              'Content-Type':'multipart/form-data',
            },
      })
      this.$store.dispatch('products/ADD_NEW_PRODUCT',this.product)
      .then(()=>this.$router.push('/adminpanel/products'))
    }
  },
  computed:{
    getAllCategory(){
      return this.$store.getters['category/getAllCategory']
    },
    getAllSubCategory(){
      return this.$store.getters['subCategory/getSubCategories']
    },
    
  },
  mounted(){
    this.setAllCategory()
  }
};
</script>

<style></style>
