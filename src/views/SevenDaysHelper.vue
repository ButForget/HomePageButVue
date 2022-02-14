<template>
<AppBar :backBtn="true" title="七天网络助手"></AppBar>
</template>

<script>
import AppBar from "../components/AppBar.vue"
export default {
  name: "SevenDaysHelper",
  components:{
      AppBar
  },
  methods:{
      
  },
  mounted() {
      if (localStorage.getItem("")) {
          console.log("");
      }
  }
};
</script>

<style></style>
