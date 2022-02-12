<template>
  <v-app>
    <AppBar title="主页"></AppBar>
    <HomeCards></HomeCards>
    <Footer></Footer>
  </v-app>
</template>

<script>
import HomeCards from "../components/HomeCards";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer.vue";
export default {
  name: "Home",
  components: {
    AppBar,
    HomeCards,
    Footer,
  },
  methods: {
  
  },
  data: () => ({}),
};
</script>
