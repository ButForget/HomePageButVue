<template>
  <v-item-group multiple>
    <v-container>
      <v-row class="mt-1">
        <v-col
          v-for="card in bjbItems"
          :key="card.id"
          class="d-flex justify-center"
        >
          <v-item v-slot="{ active, toggle }">
            <v-card
              elevation="2"
              @click="toggle"
              :color="active ? '#CCFF90' : ''"
              class="rounded-lg"
              ripple
              style="width: 1000px"
            >
              <v-card-title primary-title>
                {{ card.title }}
              </v-card-title>
              <v-card-text>
                <div style="white-space: pre-line">{{ card.content }}</div>
              </v-card-text>
            </v-card>
          </v-item> </v-col
        ><v-col
          v-for="card in xcxItems"
          :key="card.id"
          class="d-flex justify-center"
        >
          <v-item v-slot="{ active, toggle }">
            <v-card
              elevation="2"
              class="rounded-lg"
              @click="toggle"
              :color="active ? '#CCFF90' : ''"
              ripple
              style="width: 1000px"
            >
              <v-card-title primary-title>
                {{ card.title }}
              </v-card-title>
              <v-card-text>
                <div style="white-space: pre-line">{{ card.content }}</div>
              </v-card-text>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>

<script>
import axios from "axios";
export default {
  name: "HomeworkCards",
  data: () => ({
    homeworkText: "",
    bjbItems: [],
    xcxItems: [],
  }),
  methods: {
    getHomeworks() {
      axios
        .get("/homework.txt")
        .then((response) => {
          let bjbItems = response.data.bjb.item.items;
          this.bjbItems = bjbItems;
          console.log("bjbItems: ", bjbItems);
          let xcxItems = response.data.xcx.data.details[0].home_work_list;
          this.xcxItems = xcxItems;
          console.log("xcxItems: ", xcxItems);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getHomeworks();
  },
};
</script>
