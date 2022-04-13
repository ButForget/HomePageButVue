<template>
  <v-container>
    <AppBar :backBtn="true" title="作业汇总"></AppBar>
    <HomeworkCards></HomeworkCards>
    <router-view></router-view>
  </v-container>
</template>

<script>
import AppBar from "../components/AppBar.vue";
export default {
  name: "Homework",
  components: {
    AppBar,
    HomeworkCards,
  },
};
</script>
