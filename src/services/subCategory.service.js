import axios from 'axios'

const API_URL = 'http://localhost:8080/api/subCategory/'

class subCategory {
  getAllSubCategory(param){
    return axios.post(API_URL +'getAllSubCategory',{
      params:{
        href:param,
      }
    })
    .then(res=>res.data)
  }


}


export default new subCategory()