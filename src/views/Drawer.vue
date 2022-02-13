<template>
  <v-container>
    <AppBar :backBtn="true" title="抽签系统"></AppBar>
    <!-- <NameDrawer></NameDrawer> -->
  </v-container>
</template>

<script>
import AppBar from "../components/AppBar.vue";
// import NameDrawer from "../components/NameDrawer.vue";
export default {
  name: "Drawer",
  components: {
    AppBar,
    // NameDrawer,
  },
};
</script>
