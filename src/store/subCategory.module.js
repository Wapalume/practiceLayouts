import SubCategory from '../services/subCategory.service'

export const subCategory = {
  namespaced: true,
  state:{
    subCategory:[],
  },
  mutations:{
    SET_ALL_SUBCATEGORY:(state,payload)=>{
      state.subCategory = payload
    }
  },
  actions:{
    getAllSubCategory({commit},href){
      return SubCategory.getAllSubCategory(href)
      .then(res=>{
        commit("SET_ALL_SUBCATEGORY",res)
      })
    }
  },
  getters:{
    getSubCategories(state){
      return state.subCategory
    }
  },
}