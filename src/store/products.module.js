import Products from '../services/products.service'

export const products = {
  namespaced:true,
  state:{
    products:[],
    message:'',
  },
  mutations:{
    SET_PRODUCTS:(state, payload)=>{
      state.products = payload;
    },
    ADD_PRODUCT_STATUS:(state,payload)=>{
      state.message = payload
    },
    SET_MSG:(state,payload)=>{
      state.message = payload
    }
  },
  actions:{
    SET_PRODUCTS({commit},href){
      return Products.getProductsByCategory(href)
      .then(res=>{
        
        commit('SET_PRODUCTS',res)
      })
    },
    SET_ALL_PRODUCTS({commit}){
      return Products.getAllProducts()
      .then(res=>{        
        console.log(res)
        commit('SET_PRODUCTS',res)
      })
    },
    ADD_NEW_PRODUCT({commit},product){
      return Products.addProduct(product)
      .then(res=>{
        commit('ADD_PRODUCT_STATUS',res)
      })
    },
    SWITCH_AVAILABLE_PRODUCT({commit},product){
      return Products.changeAvlProduct(product.id,product.value)
      .then(msg=>{
        commit('SET_MSG',msg)
      })
    },
    DELETE_PRODUCT({commit},product_id){
      console.log(product_id)
      return Products.deleteProduct(product_id)
      .then(msg=>{
        commit('SET_MSG',msg)
      })
    }
  },
  getters:{
    getProducts(state){
      return state.products
    },
    getProductsBySubCat(state,id){
      return state.products.filter((el)=>el.subCategoryId==id)
    }
  }
}