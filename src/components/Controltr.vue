<template>
   <tr class="control__tr control__tr_b">
                <td class="control__td">
                    <div class="control__img">
                        <img  :src="getImg" alt="">
                    </div>
                </td>
                <td class="control__td">{{product.title}}</td>
                <td class="control__td">{{product.price}}</td>
                <td class="control__td">{{product.description}}</td>
                <td class="control__td">{{product.category.title}}</td>
                <td class="control__td">{{product.subCategory.title}}</td>
                <td class="control__td">
                    <div class="checkbox">
                        <input type="checkbox" :id="IdCtrl" class="checkbox-input" :checked="product.available" @change="switchAvail(product.id,!product.available)" />
                        <label :for="IdCtrl" class="checkbox-label"></label> 
                    </div>
                </td>
                <td class="control__td">
                    <div>
                        <div class="control__edit">
                            <button>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.4375 11.25C19.4375 11.0345 19.5198 10.8278 19.6663 10.6755C19.8128 10.5231 20.0115 10.4375 20.2188 10.4375C20.426 10.4375 20.6247 10.5231 20.7712 10.6755C20.9177 10.8278 21 11.0345 21 11.25V20.1875C21 20.403 20.9177 20.6097 20.7712 20.762C20.6247 20.9144 20.426 21 20.2188 21H3.03125C2.82405 21 2.62534 20.9144 2.47882 20.762C2.33231 20.6097 2.25 20.403 2.25 20.1875V2.3125C2.25 2.09701 2.33231 1.89035 2.47882 1.73798C2.62534 1.5856 2.82405 1.5 3.03125 1.5H11.625C11.8322 1.5 12.0309 1.5856 12.1774 1.73798C12.3239 1.89035 12.4062 2.09701 12.4062 2.3125C12.4062 2.52799 12.3239 2.73465 12.1774 2.88702C12.0309 3.0394 11.8322 3.125 11.625 3.125H3.8125V19.375H19.4375V11.25Z" fill="#25251C"/>
                                    <path d="M11.0145 12.99L12.252 12.813L19.854 5.21251C19.9256 5.14332 19.9827 5.06056 20.0221 4.96906C20.0614 4.87756 20.082 4.77914 20.0829 4.67956C20.0838 4.57997 20.0648 4.48122 20.0271 4.38904C19.9894 4.29687 19.9337 4.21313 19.8633 4.14271C19.7929 4.07229 19.7091 4.0166 19.6169 3.97889C19.5248 3.94118 19.426 3.92221 19.3264 3.92307C19.2268 3.92394 19.1284 3.94463 19.0369 3.98393C18.9454 4.02324 18.8627 4.08038 18.7935 4.15201L11.19 11.7525L11.013 12.99H11.0145ZM20.9145 3.09001C21.1236 3.29896 21.2894 3.54706 21.4026 3.82014C21.5158 4.09321 21.574 4.38591 21.574 4.68151C21.574 4.9771 21.5158 5.2698 21.4026 5.54288C21.2894 5.81596 21.1236 6.06406 20.9145 6.27301L13.137 14.0505C13.0223 14.1656 12.8733 14.2404 12.7125 14.2635L10.2375 14.6175C10.1221 14.6341 10.0045 14.6235 9.89395 14.5867C9.78339 14.5499 9.68293 14.4879 9.60053 14.4055C9.51813 14.3231 9.45607 14.2226 9.41926 14.112C9.38245 14.0015 9.37191 13.8839 9.38848 13.7685L9.74248 11.2935C9.7652 11.1329 9.83942 10.9839 9.95398 10.869L17.733 3.09151C18.1549 2.6697 18.7271 2.43274 19.3237 2.43274C19.9203 2.43274 20.4925 2.6697 20.9145 3.09151V3.09001Z" fill="#25251C"/>
                                </svg>
                            </button>
                        </div>
                        <div class="control__delete">
                            <button @click="deleteProduct(product.id)">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 9H10.5V18H9V9ZM13.5 9H15V18H13.5V9Z" fill="#25251C"/>
                                    <path d="M3 4.5V6H4.5V21C4.5 21.3978 4.65804 21.7794 4.93934 22.0607C5.22064 22.342 5.60218 22.5 6 22.5H18C18.3978 22.5 18.7794 22.342 19.0607 22.0607C19.342 21.7794 19.5 21.3978 19.5 21V6H21V4.5H3ZM6 21V6H18V21H6ZM9 1.5H15V3H9V1.5Z" fill="#25251C"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </td>
            </tr>
</template>

<script>
export default {
    name: "Controltr",
    props:{
        IdCtrl:Number,
        product:Object,
    },
    methods:{
        deleteProduct(id){
            console.log(id)
            this.$store.dispatch('products/DELETE_PRODUCT', id)
            .then(
                ()=>{this.$store.dispatch('products/SET_ALL_PRODUCTS')
            })
        },
        switchAvail(id,value){
            this.$store.dispatch('products/SWITCH_AVAILABLE_PRODUCT', {id, value})
            .then(
                ()=>{this.$store.dispatch('products/SET_ALL_PRODUCTS')
            })
        }   
    },
    computed:{
        getImg(){
            return require(`../img/${this.product.path}`)
        }
    }
}
</script>

<style>

</style>