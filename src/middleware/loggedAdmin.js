const status = async ()=>localStorage.getItem('user')

const loggedAdmin = async ({redirect})=>{
  if(await status()){
    if(JSON.parse(await status()).email !== "MaxKendal@yandex.ru"){
      redirect('/')
    }
  }
  else{
    redirect('/')
  }
}

export default loggedAdmin