<template>
  <v-app-bar app color="primary" dark hide-on-scroll>
    <div class="d-flex align-center">
      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </div>
    <v-spacer></v-spacer>
    <v-btn href="" target="_blank" text icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar",
  data: () => ({}),
  props: ["title"],
};
</script>
