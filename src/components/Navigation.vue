<template>
    <div class="navigation">
        <p><router-link tag="span" to="/catalog">Каталог</router-link></p>
        <p>/</p>
        <p>{{title}}</p>
    </div>
</template>


<script>
export default {
    name: 'Navigation',
    props: {
        title: String,
        
    }
}
</script>

<style>
.navigation a{
    color: #000;
}
</style>