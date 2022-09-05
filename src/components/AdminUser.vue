<template>
  <div class="wrapper">
    <div class="control">
      <div class="control__container container">
        <div class="control__row">
          <div class="control__column">
            <AdminMenu />
          </div>
          <div class="control__block">
             <div class="adminuser__input">
                 <input type="text" class="input-admin" placeholder="Поиск пользователя">
             </div> 
            <div class="adminuser">
                <div class="adminuser__row">
                    <div class="adminuser__column">
                        <div class="adminuser__title">Имя Фамилия</div>
                    </div>
                    <div class="adminuser__column">
                        <div class="adminuser__title">Адрес</div>
                    </div>
                    <div class="adminuser__column">
                        <div class="adminuser__title">Номер телефона</div>
                    </div>
                    <div class="adminuser__column">
                        <div class="adminuser__title">Почта</div>
                    </div>
                    <div class="adminuser__column">
                        <div class="adminuser__title">Заблокировать</div>
                    </div>
                    <div class="adminuser__column">
                        <div class="adminuser__title">Дейсвтия</div>
                    </div>
                </div>
                <AdminUserRow/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdminMenu from "./AdminMenu.vue";
import AdminUserRow from "./AdminUserRow.vue";
export default {
name:'AdminUser',
components: {
    AdminMenu,
    AdminUserRow,
  },
}
</script>

<style>

</style>