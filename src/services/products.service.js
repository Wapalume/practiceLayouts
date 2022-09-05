import axios from 'axios'

const API_URL = 'http://localhost:8080/api/goods/'

class Products {
  getProductsByCategory(title){
    return axios.post(API_URL+'getGoods',{
      params:{
        href:title
      }
    })
    .then((res)=>res.data)
  }
  getAllProducts(){
    return axios.get(API_URL + 'getAll')
    .then(res=>res.data)
  }
  addProduct(product){
    return axios.post(API_URL + 'addProduct', {product})
    .then(res=>res.data)
  }
  changeAvlProduct(id,value){
    console.log(value)
    return axios.post(API_URL + 'changeAvl', {id,value})
    .then(res=>res.data)
  }
  deleteProduct(id){
    console.log(id)
    return axios.post(API_URL+'deleteProduct', {id})
    .then(res=>res.data)
  }
}

export default new Products()