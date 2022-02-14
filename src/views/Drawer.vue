<template>
  <v-container>
    <AppBar :backBtn="true" title="抽签系统"></AppBar>
    <router-view></router-view>
  </v-container>
</template>

<script>
import AppBar from "../components/AppBar.vue";
export default {
  name: "Drawer",
  components: {
    AppBar,
    // NameDrawer,
  },
};
</script>
