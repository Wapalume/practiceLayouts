<template>
  <div class="wrapper">
    <div class="control">
      <div class="control__container container">
        <div class="control__row">
          <div class="control__column">
            <AdminMenu />
          </div>
          <div class="control__block">
            <div class="categoriesadmin">
              <div class="categoriesadmin__row">
                <div class="categoriesadmin__column">  
                    <div class="categoriesadmin__items">
                      <div class="categoriesadmin__item">
                        <p class="categoriesadmin__name">
                          Наименование категории
                        </p>
                        <input
                          type="text"
                          class="categoriesadmin__input input-admin"
                          v-model="titleCat"
                        />
                      </div>
                      <div class="categoriesadmin__item">
                        <p class="categoriesadmin__name">
                          Адрес категории
                        </p>
                        <input
                          type="text"
                          class="categoriesadmin__input input-admin"
                          v-model="href"
                        />
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
                      <div class="categoriesadmin__button">
                        <button class="button" @click="submitNewCategory()">добавить категорию</button>
                      </div>
                    </div> 
                </div>
                <div class="categoriesadmin__column">  
                    <div class="categoriesadmin__items">
                      <div class="categoriesadmin__item">
                        <p class="categoriesadmin__name">Выберите категории</p>
                        <select v-model="idCat" class="categoriesadmin__input input-admin">
                          <option disabled>Не выбрано</option>
                          <option v-for="(el,key) in getCategories" :key="key" :value="el.id">{{el.title}}</option>
                        </select>
                        <div class="addproduct__arrow"></div>
                      </div>
                      <div class="categoriesadmin__item">
                        <p class="categoriesadmin__name">
                          Наименование подкатегории
                        </p>
                        <input
                          type="text"
                          class="categoriesadmin__input input-admin"
                          v-model="titleSubCat"
                        />
                      </div>
                      <div class="categoriesadmin__button">
                        <button class="button" @click="createNewSubCat(idCat,titleSubCat)">добавить подкатегорию</button>
                      </div>
                    </div>
                </div>
              </div>
              <div class="categoriesadmin__row">
                  <div class="categoriesadmin__column">
                    <div class="categoriesadmin__control control-categoriesadmin">
                        <div class="control-categoriesadmin__row">
                          <div class="control-categoriesadmin__column">
                            <div class="control-categoriesadmin__title">
                              Все категории
                            </div>
                          </div>
                          <div class="control-categoriesadmin__column">
                            <div class="control-categoriesadmin__title">
                              Доступность
                            </div>
                          </div>
                          <div class="control-categoriesadmin__column">
                            <div class="control-categoriesadmin__title">
                              Действия
                            </div>
                          </div>
                        </div>
                        <CategoriesRow v-for="(el,key) in getCategories" :key="'category'+key" :name="key" :category="el" :setCategory="setCategories"/> 
                      </div>
                </div>
                <div class="categoriesadmin__column">
                  <div class="categoriesadmin__control control-categoriesadmin">
                      <div class="control-categoriesadmin__row">
                        <div class="control-categoriesadmin__column">
                          <div class="control-categoriesadmin__title">
                            Все подкатегории
                          </div>
                        </div>

                        <div class="control-categoriesadmin__column">
                          <div class="control-categoriesadmin__title">
                            Действия
                          </div>
                        </div>
                      </div>
                      <SubCategoriesRow v-for="(el,key) in subCat" :key="key" :subCategory="el" :setSubCategory="setSubCategory"/>
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
import AdminMenu from "./AdminMenu.vue";
import CategoriesRow from "./CategoriesRow.vue";
import SubCategoriesRow from "./SubCategoriesRow.vue"
import axios from 'axios';

export default {
  name: "CategoriesAdmin",
  components: {
    AdminMenu,
    CategoriesRow,
    SubCategoriesRow
  },
  data(){
    return{
      titleCat:'',
      idCat:null,
      titleSubCat:'',
      path:'',
      href:'',
      file: '',
      emptyField:false,
      subCat:null,
    }
  },
  computed:{
    getCategories(){
      return this.$store.getters['category/getAllCategory']
    }
  },
  methods:{
    setCategories(){
      this.$store.dispatch('category/getAllCategory')
    },
    setSubCategory(){
      axios.post('http://localhost:8080/api/subCategory/getAll')
      .then(res=>
      {
        this.subCat = res.data
        console.log(this.subCat)
      })
    },
    createNewCategory(title){
      axios.post('http://localhost:8080/api/category/createCategory',{title})
      .then(()=>this.setCategories())
    },
    createNewSubCat(id,title){
      axios.post('http://localhost:8080/api/subCategory/createSubCategory', {id,title})
      .then(()=>{this.setSubCategory()})
    },  
    handleFileUploads(){      
      this.file = this.$refs.file.files[0]
      this.path = this.file.name
      console.log(this.path)
    },
    submitNewCategory(){
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
     axios.post('http://localhost:8080/api/category/createCategory',{title:this.titleCat,href:this.href,path:this.path})
     .then(()=>this.setCategories())
    }
    // setSubCategories(){
    //   this.$store.dispatch('subCategory/')
    // }
  },
  mounted(){
    this.setCategories()
    this.setSubCategory()
  }
};
</script>

<style></style>
