<template>
  <div class="wrapper">
    <Header />
    <div class="content">
      <div class="signin">
        <div class="signin__container container">
          <div class="signin__block">
            <div class="signin__title title">Вход</div>
            <Form
              @submit="handleLogin"
              :validation-schema="schema"
              class="signin__form"
            >
              <Field
                name="email"
                type="email"
                class="signin__items input"
                placeholder="E-mail"
              />
              <Field
                name="password"
                type="password"
                class="signin__items input"
                placeholder="Пароль"
              />
              <ErrorMessage name="password" class="error-feedback" />
              <button class="signin__in button">
                Войти
              </button>
              <router-link to="/signup" class="signin__link"
                ><span>Нет аккаунта?</span>
                Создать аккаунт</router-link
              >
              <div v-if="message">
                {{ message }}
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "./Header.vue";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import Footer from './Footer.vue';
export default {
  name: "Signin",
  components: {
    Header,
    Form,
    Field,
    ErrorMessage,
    Footer,
  },
  data() {
    const schema = yup.object().shape({
      email: yup.string().required("Необходимо заполнить поле Email!"),
      password: yup.string().required("Необходимо заполнить поле Пароль!"),
    });

    return {
      message: "",
      schema,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
  methods: {
    handleLogin(user) {
      this.$store.dispatch("auth/login", user).then(
        () => {
          this.$router.push("/profile");
        },
        (error) => {
          this.loading = false;
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    },
  },
};
</script>

<style></style>
