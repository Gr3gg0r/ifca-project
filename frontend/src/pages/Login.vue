<template>
  <q-page class="flex flex-center bg-primary">
    <q-card class="my-card q-pa-sm q-ma-sm">
      <q-card-section>
        <div class="text-h5 text-weight-bold">SIGN IN TO YOUR ACCOUNT</div>
      </q-card-section>
      <q-card-section v-if="error">
        <div class="text-body text-red text-center">{{ message }}</div>
      </q-card-section>
      <q-card-section>
        <form @submit.prevent="login">
          <q-input
            filled
            v-model="form.email"
            label="Email"
            :error="$v.form.email.$error"
            error-message="Need a valid email"
          />
          <q-input
            filled
            v-model="form.password"
            :type="isPwd ? 'password' : 'text'"
            label="Password"
            :error="$v.form.password.$error"
            error-message="Password is required"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
          <q-btn
            class="q-mt-md q-mb-lg"
            color="primary"
            type="submit"
            label="Sign In"
          />
        </form>
      </q-card-section>
      <q-card-section>
        <div class="text-body text-center">
          Don't own account yet ?
          <q-btn flat @click="gotoRegister" label="Register Here" padding="0" />
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { setStatus } from "../datasources/localstorage";
import { minLength, required, email } from "vuelidate/lib/validators";

export default {
  name: "PageIndex",
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      isPwd: true,
      error: false,
      message: ""
    };
  },
  validations: {
    form: {
      email: { required, email },
      password: { required, minLength: minLength(4) }
    }
  },
  methods: {
    login() {
      this.$v.form.$touch();

      if (this.$v.form.$invalid) return;

      this.$repository.user
        .login({
          email: this.form.email,
          password: this.form.password
        })
        .then(res => {
          if (res) {
            setStatus("ifca_authentication", true);
            this.$router.push({ path: "/" });
          }
        })
        .catch(error => {
          this.error = true;
          if(error.response.data.msg)
          this.message = error.response.data.msg;
        });
    },
    gotoRegister() {
      this.$router.push({ path: "/auth/register" });
    }
  }
};
</script>
