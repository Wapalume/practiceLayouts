<template>
    <div class="wrapper">
        <div class="control">
            <div class="control__container container">
                <div class="control__row">
                    <div class="control__column">
                        <AdminMenu />
                    </div>
                    <div class="control__block">
                        <div class="adminorders">
                            <div class="adminorders__menu">
                                <div class="adminorders__list">
                                    <div class="adminorders__click" >
                                        <router-link to="/adminOrders">Новые заказы</router-link>
                                    </div>
                                    <div class="adminorders__click _active">
                                        <router-link to="/adminOrders2">В работе</router-link>
                                    </div>
                                    <div class="adminorders__click">
                                        <router-link to="/adminOrders3">Завершенные</router-link>
                                    </div>
                                </div>
                            </div>
                            <div class="">
                                <input type="text" class="input-admin" placeholder="Поиск заказа"/>
                            </div>
                            <div class="adminorders__block">
                                    <div class="adminorders__row">
                                        <div class="adminorders__column">
                                            <div class="adminorders__title">
                                                Заказ №
                                            </div>
                                        </div>
                                        <div class="adminorders__column">
                                            <div class="adminorders__title">
                                                ФИ клиента
                                            </div>
                                        </div>
                                        <div class="adminorders__column">
                                            <div class="adminorders__title">
                                                Адрес доставки
                                            </div>
                                        </div>
                                        <div class="adminorders__column">
                                            <div class="adminorders__title">
                                                Дейсвтия
                                            </div>
                                        </div>
                                    </div>
                                   <AdminOrdersRowWork/>
                                   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AdminMenu from "./AdminMenu.vue";
import AdminOrdersRowWork from "./AdminOrdersRowWork.vue";
export default {
name:'AdminOrders2',
components: {
    AdminMenu,
    AdminOrdersRowWork,
   
  },
}
</script>

<style>

</style>