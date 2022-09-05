import { createStore } from "vuex";
import { auth } from "./auth.module";
import { products } from "./products.module"
import { category } from "./category.module"
import { subCategory } from "./subCategory.module"
import { cart } from "./cart.module"

const store = createStore({
  modules: {
    auth,
    products,
    category,
    subCategory,
    cart
  },
});

export default store;
