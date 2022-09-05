<template>
  <div class="wrapper">
    <Header />
    <div class="content">
      <div class="signup">
        <div class="signup__container container">
          <div v-if="successful" class="signup__block">
            <router-link to="/signin" class="signup__link"><span>Вы успешно зарегистрировались!</span>Авторизоваться</router-link>
          </div>
          <div v-if="!successful" class="signup__block">
            <div class="signup__title title">Регистрация</div>
            <Form
              @submit="handleRegister"
              class="signup__form"
              :validation-schema="schema"
            >
              <ErrorMessage name="name" class="error-feedback" />
              <Field
                class="signup__items input"
                type="text"
                name="name"
                placeholder="Имя"
              />
              <ErrorMessage name="secondname" class="error-feedback" />
              <Field
                class="signup__items input"
                type="text"
                name="secondname"
                placeholder="Фамилия"
              />
              <ErrorMessage name="phone" class="error-feedback" />
              <Field
                v-model="phone"
                class="signup__items input"
                type="text"
                name="phone"
                placeholder="Телефон"
                @input="acceptNumber"
              />
              <ErrorMessage name="email" class="error-feedback" />
              <Field
                class="signup__items input"
                type="email"
                name="email"
                placeholder="E-mail"
              />
              <ErrorMessage name="password" class="error-feedback" />
              <Field
                class="signup__items input"
                type="password"
                name="password"
                placeholder="Придумайте пароль"
              />
              <ErrorMessage name="confirmPassword" class="error-feedback" />
              <Field
                class="signup__items input"
                type="password"
                name="confirmPassword"
                placeholder="Повторите пароль"
              />
              <button class="signup__in button">Создать аккаунт</button>
            </Form>
            <div v-if="message">
            {{ message }}
          </div>
                <router-link to="/signin" class="signup__link"><span>Уже есть аккаунт?</span> Войти</router-link>
          </div>
          
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";

import * as yup from "yup";
import Header from "./Header.vue";
import Footer from './Footer.vue';
export default {
  name: "Signup",
  components: {
    Header,
    Form,
    Field,
    ErrorMessage,
    Footer,

  },
  data() {
    const schema = yup.object().shape({
      name: yup
        .string()
        .required("Необходимо заполнить поле Имя!")
        .min(2, "Должно быть как минимум 2 символа!")
        .max(20, "Нельзя добавить больше 20 символов!"),
      secondname: yup
        .string()
        .required("Необходимо заполнить поле Фамилия!")
        .min(3, "Должно быть как минимум 3 символа!")
        .max(20, "Нельзя добавить больше 20 символов!"),
      phone: yup.string().required("Необходимо заполнить поле Телефон!"),
      email: yup
        .string()
        .required("Необходимо заполнить поле Email!")
        .email("Неправильно указана почта")
        .max(50, "Нельзя добавить больше 50 символов!"),
      password: yup
        .string()
        .required("Необходимо заполнить поле Пароль!")
        .min(6, "Должно быть как минимум 6 символов!!")
        .max(40, "Нельзя добавить больше 40 символов!"),
      confirmPassword: yup
        .string()
        .required("Необходимо заполнить поле")
        .oneOf([yup.ref("password"), null], "Пароль не совпадает"),
    });
    return {
      email: "",
      password: "",
      message: "",
      phone:"",
      schema,
    };
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  methods: {
    acceptNumber() {
      var x = this.phone.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,4})/);
      let num = '+'+x[1]+' '+(!x[3] ? x[2] : '(' + x[2] + ') ' )+ x[3] + (x[4] ? '-' + x[4] : '');
      this.phone = num
    },
    handleRegister(user) {
      this.message = "";
      this.successful = false;
      this.loading = true;

      this.$store.dispatch("auth/register", user).then(
        (data) => {
          this.message = data.message;
          this.successful = true;
          this.loading = false;
        },
        (error) => {
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          this.successful = false;
          this.loading = false;
        }
      );
    },
  },
};
</script>
