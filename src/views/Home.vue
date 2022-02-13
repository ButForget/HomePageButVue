<template>
  <v-container>
    <AppBar title="首页"></AppBar>
    <HomeCards></HomeCards>
    <Footer></Footer>
  </v-container>
</template>

<script>
import HomeCards from "../components/HomeCards.vue";
import AppBar from "../components/AppBar.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "Home",
  components: {
    AppBar,
    HomeCards,
    Footer,
  },
  methods: {},
  data: () => ({}),
};
</script>
