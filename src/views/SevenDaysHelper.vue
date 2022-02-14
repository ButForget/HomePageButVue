<template>
  <v-container>
    <AppBar :backBtn="true" title="七天网络助手"></AppBar>
    <LoginDialog :needLogin="needLogin" @close="needLogin = false"></LoginDialog>
  </v-container>
</template>

<script>
import AppBar from "../components/AppBar.vue";
import LoginDialog from "../components/SevenDaysHelper/LoginDialog.vue";
export default {
  name: "SevenDaysHelper",
  components: {
    AppBar,
    LoginDialog,
  },
  data: () => ({
      needLogin: true,
  }),
  methods: {},
  mounted() {
    if (localStorage.getItem("")) {
      console.log("");
    }
  },
};
</script>

<style></style>
