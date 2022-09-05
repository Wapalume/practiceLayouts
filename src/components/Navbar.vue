<template>
  <div class="profile__navbar navbar-profile">          
        <router-link v-if="currentUser" to="/profile" class="navbar-profile__link">Профиль</router-link>
        <router-link to="/basket" class="navbar-profile__link _active">Корзина</router-link>                  
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    computed:{
        currentUser() {
            return this.$store.state.auth.user;
        },
    }
}
</script>

<style>

</style>