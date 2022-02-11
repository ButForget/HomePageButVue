<template>
  <v-app>
    <AppBar title="主页"></AppBar>
    <HomeCards></HomeCards>
  </v-app>
</template>

<script>
import HomeCards from "../components/HomeCards";
import AppBar from "../components/AppBar";
export default {
  name: "Home",
  components: {
    AppBar,
    HomeCards,
  },
  data: () => ({

  }),
};
</script>
