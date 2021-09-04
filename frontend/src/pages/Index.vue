<template>
  <q-page class="flex flex-center bg-primary">
    <q-card class="q-pa-lg q-ma-sm text-center">
      <q-card-section>
        <div class="text-h5">Login Successfully</div>
      </q-card-section>
      <q-card-section>
        <q-btn color="primary" label="sign out" @click="signOut" />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { removeStatus } from "../datasources/localstorage";

export default {
  name: "PageIndex",
  methods: {
    signOut() {
      removeStatus("ifca_authentication");
      this.$router.push({ path: "/auth" });
    }
  }
};
</script>
