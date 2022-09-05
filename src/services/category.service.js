import axios from 'axios'

const API_URL = 'http://localhost:8080/api/category/'

class Category {
  getAllCategory(){
    return axios.post(API_URL+'getAll')
    .then((res)=>res.data)
  }
  getCurrentCategory(href){
    return axios.post(API_URL+'getCurrentCategory',{
      params:{
        href
    }})
    .then((res)=>{
      return res.data
    })
  }
}

export default new Category()