<template>
  <div class="adminuser__row">
                    <div class="adminuser__column">
                        <div class="adminuser__items">
                            <p>Катя Кузнецова</p>
                        </div>
                    </div>
                    <div class="adminuser__column">
                        <div class="adminuser__items">
                            <p>г. Чебоксары, ул. Советская, д.34, кв.75</p>
                        </div>
                    </div>
                    <div class="adminuser__column">
                        <div class="adminuser__items">
                            <p>8 999 999 99 99</p>
                        </div>
                    </div>
                    <div class="adminuser__column">
                        <div class="adminuser__items">
                            <p>realme@kfs.fo</p>
                        </div>
                    </div>
                    <div class="adminuser__column">
                        <div class="adminuser__items">
                            <div class="checkbox">
                                <input type="checkbox" id="IdCtrl" class="checkbox-input"/>
                                <label for="IdCtrl" class="checkbox-label"></label> 
                            </div>
                        </div>
                    </div>
                    <div class="adminuser__column">
                        <div class="adminuser__items">
                            <button class="control-categoriesadmin__delete">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 9H10.5V18H9V9ZM13.5 9H15V18H13.5V9Z" />
                                    <path d="M3 4.5V6H4.5V21C4.5 21.3978 4.65804 21.7794 4.93934 22.0607C5.22064 22.342 5.60218 22.5 6 22.5H18C18.3978 22.5 18.7794 22.342 19.0607 22.0607C19.342 21.7794 19.5 21.3978 19.5 21V6H21V4.5H3ZM6 21V6H18V21H6ZM9 1.5H15V3H9V1.5Z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
</template>

<script>
export default {
name:'AdminUserRow'
}
</script>

<style>

</style>