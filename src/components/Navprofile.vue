<template>
    <div class="navigation">
        <p><router-link tag="span" to="/profile">Профиль</router-link></p>
        <p>|</p>
        <p><router-link tag="span" to="/history">История заказов</router-link></p>
    </div>
</template>


<script>
export default {
    name: 'NavProfile',
}
</script>

<style>
.navigation a{
    color: #000;
}
</style>