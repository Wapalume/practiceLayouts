<template>
    <router-link :to="{name:'categoryTitle',params:{title:href}}" class="menu__column">    
            <div class="menu__img">
                <img v-bind:src="imgUrl" alt="">
                <div class="menu__title title"> {{ title }}</div>
            </div>
    </router-link>
</template>

<script>
export default {
    name: 'Category',
    props: {
            path: String,
            title: String,
            href: String,
        },        
        computed: {
        imgUrl() {
            return require(`../img/${this.path}`)
        },
        }
}
</script>

<style>

</style>