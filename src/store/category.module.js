import Category from '../services/category.service'

export const category = {
  namespaced:true,
  state:{
    category:[],
    currentCategory:[],
  },
  mutations:{
    SET_ALL_CATEGORY:(state, payload)=>{
      state.category = payload
      console.log(state.category)
    },
    SET_CURRENT_CATEGORY:(state,payload)=>{
      state.currentCategory = payload
    }
  },
  actions:{
    getAllCategory({commit}){
      return Category.getAllCategory()
      .then(res=>{
        
        commit('SET_ALL_CATEGORY',res.map(el=>{
          return {
            id:el.id,
            title:el.title,
            path:el.pathPht, 
            href:el.href,
            available:el.available
          }
        }))
      })
    },
    getCurrentCategory({commit},href){
      return Category.getCurrentCategory(href)
      .then(res=>commit('SET_CURRENT_CATEGORY',res))
    }
  },
  getters:{
    getAllCategory(state){
      return state.category
    },
    getCurrentCategory(state){
      return state.currentCategory.title
    }
  }
}