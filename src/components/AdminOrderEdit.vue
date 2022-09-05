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
                                    <div class="adminorders__click">
                                        <router-link to="/adminOrders2">В работе</router-link>
                                    </div>
                                    <div class="adminorders__click">
                                        <router-link to="/adminOrders3">В завершенные</router-link>
                                    </div>
                                </div>
                            </div>
                            <div class="title">
                                Редактирование заказа
                            </div>
                            <div class="adminorders__block">
                                <div class="adminorders__orders">
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
                                    <div class="adminorders__row adminorders__row_b">
                                        <div class="adminorders__column">
                                            <div class="adminorders__items">
                                                <p>12</p>
                                            </div>
                                        </div>
                                        <div class="adminorders__column">
                                            <div class="adminorders__items">
                                                <input type="text"  value="Иванов Иван" class="adminorders__input">
                                            </div>
                                        </div>
                                        <div class="adminorders__column">
                                            <div class="adminorders__items">
                                                 <input type="text" value="г. Чебоксары, ул. Советская, д.34, кв.75" class="adminorders__input">
                                            </div>
                                        </div>
                                        <div class="adminorders__column">
                                            <div class="adminorders__items">
                                                <div class="adminorders__item">
                                                    <button class="control-categoriesadmin__delete">
                                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M3.4375 5.5H2.0625C1.88016 5.5 1.7053 5.42757 1.57636 5.29864C1.44743 5.16971 1.375 4.99484 1.375 4.8125C1.375 4.63017 1.44743 4.4553 1.57636 4.32637C1.7053 4.19743 1.88016 4.125 2.0625 4.125H7.5625V2.06113C7.5625 1.87879 7.63493 1.70392 7.76386 1.57499C7.8928 1.44606 8.06766 1.37363 8.25 1.37363H13.75C13.9323 1.37363 14.1072 1.44606 14.2361 1.57499C14.3651 1.70392 14.4375 1.87879 14.4375 2.06113V4.125H19.9375C20.1198 4.125 20.2947 4.19743 20.4236 4.32637C20.5526 4.4553 20.625 4.63017 20.625 4.8125C20.625 4.99484 20.5526 5.16971 20.4236 5.29864C20.2947 5.42757 20.1198 5.5 19.9375 5.5H18.5625V19.9375C18.5625 20.1198 18.4901 20.2947 18.3611 20.4236C18.2322 20.5526 18.0573 20.625 17.875 20.625H4.125C3.94266 20.625 3.7678 20.5526 3.63886 20.4236C3.50993 20.2947 3.4375 20.1198 3.4375 19.9375V5.5ZM13.0625 4.125V2.75H8.9375V4.125H13.0625ZM4.8125 19.25H17.1875V5.5H4.8125V19.25ZM8.9375 16.5C8.75516 16.5 8.5803 16.4276 8.45136 16.2986C8.32243 16.1697 8.25 15.9948 8.25 15.8125V8.9375C8.25 8.75517 8.32243 8.5803 8.45136 8.45137C8.5803 8.32243 8.75516 8.25 8.9375 8.25C9.11984 8.25 9.2947 8.32243 9.42364 8.45137C9.55257 8.5803 9.625 8.75517 9.625 8.9375V15.8125C9.625 15.9948 9.55257 16.1697 9.42364 16.2986C9.2947 16.4276 9.11984 16.5 8.9375 16.5ZM13.0625 16.5C12.8802 16.5 12.7053 16.4276 12.5764 16.2986C12.4474 16.1697 12.375 15.9948 12.375 15.8125V8.9375C12.375 8.75517 12.4474 8.5803 12.5764 8.45137C12.7053 8.32243 12.8802 8.25 13.0625 8.25C13.2448 8.25 13.4197 8.32243 13.5486 8.45137C13.6776 8.5803 13.75 8.75517 13.75 8.9375V15.8125C13.75 15.9948 13.6776 16.1697 13.5486 16.2986C13.4197 16.4276 13.2448 16.5 13.0625 16.5Z"/>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div class="adminorders__block block-adminorder">
                                <div class="block-adminorder__row">
                                    <div class="block-adminorder__column">
                                        <div class="block-adminorder__add">
                                            <button class="block-adminorder__button">
                                                <svg width="16" height="16" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8.5 1L8.5 16" stroke="white" stroke-width="2" stroke-linecap="round"/>
                                                    <path d="M1 8.5L16 8.5" stroke="white" stroke-width="2" stroke-linecap="round"/>
                                                </svg>
                                            </button>
                                            <input class="input-admin" placeholder="Наименование"/>
                                        </div>
                                        <div class="block-adminorder__items">
                                            <div class="block-adminorder__item">
                                                <p>Сумма заказа</p>
                                                <p>1025 ₽</p>
                                            </div>
                                            <div class="block-adminorder__item">
                                                <p>Доставка</p>
                                                <p>0 ₽</p>
                                            </div>
                                            <div class="block-adminorder__item">
                                                <p>Способ оплаты</p>
                                                <div class="pay-way__items">
                                                    <div class="pay-way__radio" action="">
                                                        <input type="radio" id="1" name="radio" class="pay-way__radio-input"/>
                                                        <label for="1"  class="pay-way__radio-label">наличными</label> 
                                                    </div>
                                                    <div class="pay-way__radio" action="">
                                                        <input type="radio" checked id="2" name="radio" class="pay-way__radio-input"/>
                                                        <label for="2" class="pay-way__radio-label">картой курьеру</label> 
                                                    </div>
                                                    <div class="pay-way__radio" action="">
                                                        <input type="radio" id="3" name="radio" class="pay-way__radio-input"/>
                                                        <label for="3" class="pay-way__radio-label">онлайн</label> 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="block-adminorder__column ">
                                        <div class="block-adminorder__items items-adminorder">
                                            <div class="items-adminorder__row">
                                                <div class="items-adminorder__column">Наименование</div>
                                                <div class="items-adminorder__column">Цена</div>
                                                <div class="items-adminorder__column">Кол-во</div>
                                                <div class="items-adminorder__column">Действия</div>
                                            </div>
                                            <AdminOrderItemsEdit/>
                                            <AdminOrderItemsEdit/>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="adminorders__button">
                                <button class="button">сохранить изменения</button>
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
import AdminOrderItemsEdit from "./AdminOrderItemsEdit.vue";
export default {
name:"AdminOrderEdit",
components: {
    AdminMenu,
    AdminOrderItemsEdit,
  },
}
</script>

<style>

</style>