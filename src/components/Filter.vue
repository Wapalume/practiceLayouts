<template>
    <div class="filter__row">
        <nav class="filter__block">
            <ul class="filter__list">
                <li class="filter__link" > <p :class="activeLink==-1?'_active':''"  
                    @click="changeSubCategory(0);changeActiveLink(-1)">Все</p></li>
                <li v-for="(item, index) in subCategory"
                    :key="index" 
                    class="filter__link" > <p @click="changeSubCategory(item.id);changeActiveLink(index)" :class="activeLink==index?'_active':''">{{item.title}}</p></li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Filter',
    props:{
        subCategory:Array,
    },
    data(){
        return{
            activeLink:-1,
        }
    },
    methods:{
        changeSubCategory(id){
            this.$emit('changeSubCat',id)
            console.log(id)
        },
        changeActiveLink(idLink){
            this.activeLink = idLink
        }
    }
}
</script>

<style>
.filter__link{
    cursor: pointer;
}
</style>