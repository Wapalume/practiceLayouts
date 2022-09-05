const status = async ()=>localStorage.getItem('user')

const loggedIn = async ({redirect})=>{
  if(!await status()){
    redirect('/signin')
  }
}

export default loggedIn