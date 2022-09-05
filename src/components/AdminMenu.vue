<template>
  <nav class="control__menu">
        <ul class="control__list">
            <li>Редактирование</li>
            <li><router-link to="/adminpanel/products" class="control__link ">Товары</router-link></li>
            <li><router-link to="/adminpanel/categoriesAdmin" class="control__link">Категории</router-link></li>
            <li><router-link to="/adminOrders" class="control__link">Заказы</router-link></li>
            <li><router-link to="/adminUser" class="control__link">Пользователи</router-link></li>
            <router-link to="/"><li class="link">Выход</li></router-link>
        </ul>
    </nav>
</template>

<script>
export default {
name:"AdminMenu"
}
</script>

<style>
li>.link:visited{
    text-decoration: none;
}
</style>