<template>
<div class="wrapper">
  <Header/>
  <div class="content">
    <div class="container" >
      <Navprofile/> 
      <div class="profile" v-if="this.$store.state.auth.status.loggedIn">
        <div class="profile__title title">
          Профиль
        </div>
        <div class="profile__row">
          <div class="profile__column">
            <div class="profile__block">
              <div class="personal__title">Личные данные</div>
                <div class="personal__date">
                  <div class="personal__items">
                    <div class="personal__input">
                      <input type="text" readonly class="input" placeholder="Имя" :value="currentUser.name">
                    </div>
                    <div class="personal__input">
                      <input type="text" readonly class="input" placeholder="Фамилия" :value="currentUser.secondName">
                    </div>
                    </div>
                    <div class="personal__items">
                      <div class="personal__input">
                        <input type="text" readonly class="input" placeholder="Номер телефона" :value="currentUser.phone">
                      </div>
                    </div>
                </div>
            </div>
          </div>
          <div class="profile__column">
            <div class="profile__block">
              <div class="personal__title">Адрес</div>
              <div class="personal__date">
                <div class="personal__items">
                  <div class="personal__input">
                    <input type="text" class="input" v-model="street" placeholder="Улица">
                  </div>
                  <div class="personal__input">
                    <input type="text" class="input" v-model="strNum" placeholder="Дом">
                  </div>
                </div>
                <div class="personal__items">
                  <div class="personal__input">
                    <input type="text" class="input" v-model="entrance" placeholder="Подъезд">
                  </div>
                  <div class="personal__input">
                    <input type="text" class="input" v-model="houseNum" placeholder="Квартира">
                  </div>
                </div>
                <div class="personal__items">
                  <div class="personal__input">
                    <input type="text" class="input" v-model="stage" placeholder="Этаж">
                  </div>
                  <div class="personal__input">
                    <p>Домофон</p>
                    <div class="personal__block-radio">
                      <div class="pay-way__radio pay-way__radio_l">
                        <input type="radio" v-model="housePhone" id="1" name="radio" class="pay-way__radio-input" value="1"/>
                        <label for="1"  class="pay-way__radio-label">Есть</label> 
                      </div>
                      <div class="pay-way__radio pay-way__radio_l">
                        <input type="radio" v-model="housePhone" id="2" name="radio" class="pay-way__radio-input" value="0"/>
                        <label for="2" class="pay-way__radio-label">Отсутствует</label> 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
        <div class="profile__button">
          <button class="button" @click="joinAdress( street || -1, strNum || -1, entrance || -1, houseNum || -1, stage || -1, housePhone || -1)">сохранить</button>
        </div>
        <div v-if="msg">{{msg}}</div>
      </div>
        <!--<header class="jumbotron">
          <h3>
            <strong>{{ currentUser.username }}</strong> Profile
          </h3>
        </header>
        <p>
          <strong>Token:</strong>
            {{ currentUser.accessToken.substring(0, 20) }} ...
            {{ currentUser.accessToken.substr(currentUser.accessToken.length - 20) }}
        </p>
      <p>
        <strong>Id:</strong>
        {{ currentUser.id }}
      </p>
      <p>
        <strong>Email:</strong>
        {{ currentUser.email }}
      </p>
      <a class="nav-link" @click.prevent="logOut">
        LogOut
      </a>-->
    </div>
  </div>
  <Footer/>
</div>
</template>

<script>
import axios from 'axios'
import Navprofile from './Navprofile.vue'
import Header from './Header.vue'
import Footer from './Footer.vue'
export default {
  name: "Profile",
  components:{
        Navprofile,
        Header,
        Footer,
  },
  data(){
    return {
      street: null,
      strNum: null,
      entrance: null,
      houseNum: null,
      stage: null,
      housePhone: null,
      msg:null,

    }
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/signin");
    },
    joinAdress(...adress){
      axios.post('http://localhost:8080/api/user/changeInfo',{id:this.currentUser.id,adress:adress.join(',;')})
      .then(res=>{
        this.msg = res.data.msg
        setTimeout(()=>this.msg = null, 3000)
        })
    },
    getData(){
      axios.post('http://localhost:8080/api/user/getData', {id:this.currentUser.id})
      .then(res=>{
        let adress = res.data.adress.split(',;')
        this.street = adress[0] == "-1" ? null : adress[0] 
        this.strNum = adress[1] == "-1" ? null : adress[1] 
        this.entrance = adress[2] == "-1" ? null : adress[2] 
        this.houseNum = adress[3] == "-1" ? null : adress[3] 
        this.stage = adress[4] == "-1" ? null : adress[4] 
        this.housePhone = adress[5] == "-1" ? null : adress[5] 
      })
    }
  },
  mounted() {
    if(this.$store.state.auth.status.loggedIn){
      this.getData()
    }
    // if (!this.currentUser) {
    //   this.$router.push("/signin");
    // }
  },
};
</script>
