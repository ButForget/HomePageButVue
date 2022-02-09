<template>
  <v-container>
    <v-row class="text-center">
      <div v-for="card in cards" :key="card.id">
        <v-col>
          <v-card elevation="2">
            <v-card-title primary-title>
              {{ card.title }}
            </v-card-title>
          </v-card>
        </v-col>
      </div>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    cards: [
      {
        title: "BPM测试",
        subTitle: "Beats Per Minute Test",
        url: "BPM",
      },
      {
        title: "座位自动安排系统",
        subTitle: "Seats Arrange System",
        url: "SeatsArranger",
      },
      {
        title: "抽签系统",
        subTitle: "Drawing System",
        url: "Drawer",
      },
    ],
  }),
};
</script>
