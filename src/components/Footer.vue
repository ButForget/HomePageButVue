<!--
 * @Author: HakimYu yhjredin@gmail.com
 * @Date: 2022-02-12 19:05:27
 * @LastEditors: HakimYu yhjredin@gmail.com
 * @LastEditTime: 2022-05-10 14:11:20
 * @FilePath: \homepagebutvue\src\components\Footer.vue
 * @Description: shared footer component
 * 
 * Copyright (c) 2022 by HakimYu yhjredin@gmail.com, All Rights Reserved. 
-->
<template>
  <div style="height: 100px">
    <v-footer absolute>
      <v-card
        flat
        tile
        width="100%"
        class="grey lighten-4 grey--text text--darken-1 text-center"
      >
        <v-card-text class="grey--text text--darken-1">
          Copyright ©{{ new Date().getFullYear() }}
          <a
            class="grey--text text--darken-1"
            style="text-decoration: none"
            href="https://hakimyu.cn/"
            target="_blank"
            >HakimYu</a
          >
          All Rights Reserved<br />
          <a
            class="grey--text text--darken-1"
            style="text-decoration: none"
            href="https://beian.miit.gov.cn/"
            rel="noopener"
            target="_blank"
            >赣ICP备2022001931号</a
          ></v-card-text
        >
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({}),
};
</script>
