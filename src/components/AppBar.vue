<!--
 * @Author: HakimYu yhjredin@gmail.com
 * @Date: 2022-02-11 20:10:54
 * @LastEditors: HakimYu yhjredin@gmail.com
 * @LastEditTime: 2022-05-10 14:10:26
 * @FilePath: \homepagebutvue\src\components\AppBar.vue
 * @Description: shared appbar component
 * 
 * Copyright (c) 2022 by HakimYu yhjredin@gmail.com, All Rights Reserved. 
-->
<template>
  <v-app-bar app color="primary" dark hide-on-scroll>
    <v-app-bar-nav-icon v-if="backBtn" @click="$router.push({ name: 'Home' })">
      <v-icon>mdi-arrow-left</v-icon>
    </v-app-bar-nav-icon>
    <div class="d-flex align-center">
      <v-app-bar-title>{{ title }}</v-app-bar-title>
    </div>
    <v-spacer></v-spacer>
    <!-- unused icon --->
    <!-- <v-btn text icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn> -->
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar",
  data: () => ({}),
  props: ["title", "backBtn"],
};
</script>
