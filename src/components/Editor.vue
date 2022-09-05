<template>
  <router-link v-for="(item, index) in links" :key="index" :to="`/adminpanel/${item.href}`">
    {{item.title}}
  </router-link>
</template>

<script>
export default {
   data(){
    return {
      links:[
        {
          title:'Редактирование товара',
          href:'products'
        },
         {
          title:'Редактирование категорий',
          href:'category',
        },
        {
          title:'Редактирование пользователей',
          href:'users'
        },
        {
          title:'Редактирование заказа',
          href:'orders'
        },
      ]
    }
  }
}
</script>

<style>

</style>