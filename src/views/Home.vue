<template>
  <v-container>
    <AppBar title="首页"></AppBar>
    <HomeCards></HomeCards>
  </v-container>
</template>

<script>
import HomeCards from "../components/HomeCards.vue";
import AppBar from "../components/AppBar.vue";
export default {
  name: "Home",
  components: {
    AppBar,
    HomeCards,
  },
  data: () => ({}),
};
</script>
