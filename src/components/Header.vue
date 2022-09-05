<template>
  <header class="header">
    <div class="header__container container">
      <div class="header__block">
        <router-link to="/catalog" class="header__logo">
          iFood
        </router-link>
        <div @click="activeClick">
          <div class="header__burger" :class="isActive ? '_active' : ''">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div
          class="header__categories categories-header"
          :class="isActive ? '_active' : ''"
          @click="activeClick"
        >
          <ul class="categories-header__list">
            <li v-for="(item,index) in this.getCategory" :key="index" >
               <router-link :to="{name:'categoryTitle',params:{title:item.href}}" class="categories-header__link"
                >{{item.title}}</router-link>
            </li>            
          </ul> 
          <ul v-if="small" class="list _active">
            <li>
              <router-link to="/catalog" class="header__link"
                >Оплата и доставка</router-link>
            </li>
            <li>
              <router-link to="/contacts" class="header__link"
                >Контакты</router-link>
            </li>
          </ul>
        </div>
        <nav class="header__menu">
          <ul v-if="!small" class="header__list">
            <li>
              <router-link to="/delivery" class="header__link ">
                Оплата и доставка
              </router-link>
            </li>
            <li>
              <router-link to="/contacts" class="header__link">
                Контакты
              </router-link>
            </li>
          </ul>
          <ul class="header__list">
            <li>
              <router-link to="/basket" class="header__basket">
                <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.59701 9.19462C1.55795 9.03803 1.55508 8.8746 1.58862 8.71673C1.62215 8.55886 1.69121 8.41071 1.79055 8.28351C1.88989 8.15631 2.0169 8.05342 2.16194 7.98264C2.30698 7.91186 2.46625 7.87504 2.62764 7.875H21.1576C21.319 7.87504 21.4783 7.91186 21.6233 7.98264C21.7684 8.05342 21.8954 8.15631 21.9947 8.28351C22.0941 8.41071 22.1631 8.55886 22.1967 8.71673C22.2302 8.8746 22.2273 9.03803 22.1883 9.19462L20.2641 16.8903C20.1492 17.35 19.8839 17.7582 19.5104 18.0498C19.1369 18.3415 18.6767 18.4999 18.2028 18.5H5.58245C5.10858 18.4999 4.64834 18.3415 4.27486 18.0498C3.90139 17.7582 3.63611 17.35 3.5212 16.8903L1.59701 9.19569V9.19462Z" stroke-width="2" stroke-linejoin="round"/>
                  <path d="M8.70508 12.125V14.25" stroke-width="2" stroke-linecap="round"/>
                  <path d="M15.0801 12.125V14.25" stroke-width="2" stroke-linecap="round"/>
                  <path d="M5.51758 7.875L9.76758 1.5" stroke-width="2" stroke-linecap="round"/>
                  <path d="M18.2676 7.875L14.0176 1.5" stroke-width="2" stroke-linecap="round"/>
                </svg>
                <p class="header__count">{{getCountCart}}</p>
              </router-link>
            </li>
            <li>
              <router-link to="/signin" class="header__profile">
              <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7.53839" cy="5.43078" r="4.23077" stroke-width="2"/>
                <path d="M14.0769 17.2001C14.0769 13.589 11.1496 10.6616 7.53846 10.6616C3.92737 10.6616 1 13.589 1 17.2001" stroke-width="2"/>
              </svg>
              </router-link>
            </li>
            <li v-if="getStatus">
              <a @click="this.$router.push('/adminpanel/products');" class="header__profile header__link" >
              Админпанель
              </a>
            </li>
            <li v-if="this.$store.state.auth.status.loggedIn">
              <a @click="this.$store.dispatch('auth/logout'); this.$router.push('/');" class="header__profile header__link">
              Выйти
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: "HeaderDefault",
  data() {
    return {
      isActive: false,
      small:false,
    };
  },
  computed:{
    getCountCart(){
      return this.$store.getters['cart/getCountCart']
    },
    ...mapGetters('category',{
      getCategory:'getAllCategory'
    }),
    getStatus(){
      if(this.$store.state.auth.user !== null)
      {
        return this.$store.state.auth.user.email === "MaxKendal@yandex.ru" ? true : false
      }
      else{
        return false
      }
    }
  },
  methods: {
    activeClick() {
      this.isActive = !this.isActive;
    },
    onResize(){
      this.small = document.documentElement.clientWidth <= 480;
    }
  },
  created(){
    window.addEventListener('resize', this.onResize)
    this.onResize();
  },
  unmounted(){
    window.removeEventListener('resize',this.onResize)
  }
};
</script>
