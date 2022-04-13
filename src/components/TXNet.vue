<template>
  <v-container>
    <div class="d-flex justify-center display-1">英语学习是你自己的事</div>
    <v-row class="mt-1">
      <v-col v-for="part in q" :key="part.id" class="d-flex justify-center">
        <v-card elevation="2" class="rounded-lg" ripple style="width: 1000px">
          <v-card-title primary-title>
            {{ part.question_text.substring(0, part.question_text.length - 7) }}
          </v-card-title>
          <v-card-title>
            答案：
            <div style="white-space: pre-line">
              {{ getAnswerText(part).content }}
            </div>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "TXNet",
  data: () => ({
    page: [],
    q: [],
  }),
  methods: {
    get() {
      axios
        .get("/page1.txt")
        .then((response) => {
          this.page = response.data;
          this.q = this.page.slides[1].questionList;
          for (let i = 0; i < 3; i++) {
            this.page.slides.splice(0, 1);
          }
          for (let ql of this.page.slides) {
            this.q = this.q.concat(ql.questionList[0].questions_list);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getAnswerText(part) {
      switch (part.answer_text) {
        case "A":
          return part.options[0];
        case "B":
          return part.options[1];
        case "C":
          return part.options[2];
      }
    },
  },
  mounted() {
    this.get();
  },
};
</script>
