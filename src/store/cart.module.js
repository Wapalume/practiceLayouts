
const productsCart = JSON.parse(localStorage.getItem('cart'));
const initialState = productsCart
  ? { products:productsCart }
  : { products:[]};

export const cart = {
  namespaced:true,
  state:initialState,
  mutations:{
    ADD_PRODUCT_TO_CART:(state,product)=>{
      let index = state.products.findIndex(el=>el.id==product.id)
      if(index !== -1){
        state.products[index].count++
      }
      else {
        product.count = 1
        state.products.push(product) 
      }
    },
    INCREASE_PRODUCT:(state,id)=>{
      let index = state.products.findIndex(el=>el.id==id)
      state.products[index].count++
    },
    DECREASE_PRODUCT:(state,id)=>{
      let index = state.products.findIndex(el=>el.id==id)
      state.products[index].count <= 1 ? state.products.splice(index,1):state.products[index].count--
    },
    REMOVE_PRODUCT:(state,id)=>{
      let index = state.products.findIndex(el=>el.id==id)      
      state.products.splice(index,1)
    },
    SAVE_CART:(state)=>{
      localStorage.setItem('cart', JSON.stringify(state.products))
    }
  },
  actions:{
    addProduct({commit},product){
      commit('ADD_PRODUCT_TO_CART',product)
      commit('SAVE_CART')
    },
    increaseProduct({commit},id){ 
      console.log(id)
      commit('INCREASE_PRODUCT',id)
      commit('SAVE_CART')
    },
    decreaseProduct({commit},id){
      commit('DECREASE_PRODUCT',id)
      commit('SAVE_CART')
    },
    removeProduct({commit},id){
      console.log(id)
      commit('REMOVE_PRODUCT',id)
      commit('SAVE_CART')
    },
  },
  getters:{
    getProductsCart(state){
      return state.products
    },
    getCountCart(state){
      let count = 0
      console.log(state.products)
      state.products.filter(product=>count+=product.count
        )
      return count
    },
    getTotalPrice(state){
      let sum = 0
      state.products.filter(item=>{
        sum = sum+item.price*item.count
      })
      return sum
    }
  },
}