<template>
  <v-container>
    <div class="d-flex justify-center display-1">英语学习是你自己的事</div>
    <div>
      <div v-if="!checked" @load="checkPassword" class="d-flex justify-center display-1">
        小加了一个密码
      </div>
      <v-row class="d-flex justify-center">
        <v-col sm="5">
          <v-text-field
            v-if="!checked"
            @input="checkPassword"
            color="secondary"
            min-width="50%"
            v-model="password"
            label="密码"
          ></v-text-field> </v-col
      ></v-row>
    </div>
    <v-row v-if="checked" class="mt-1">
      <v-col v-for="part in q" :key="part.id" class="d-flex justify-center">
        <v-card elevation="2" class="rounded-lg" ripple style="width: 1000px">
          <v-card-title primary-title>
            {{ getQuestionText(part) }}
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
import md5 from "blueimp-md5";
export default {
  name: "TXNet",
  data: () => ({
    page: [],
    q: [],
    password: "",
    passwordMD5: "",
    checked: false,
  }),
  methods: {
    checkPassword() {
      if (md5(this.password) == this.passwordMD5) {
        this.checked = true;
      }
    },
    getPassword() {
      axios
        .get("/password")
        .then((response) => {
          this.passwordMD5 = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    get() {
      axios
        .get("/page1")
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
    getQuestionText(part) {
      if (part.question_text.indexOf("<br") != -1) {
        return part.question_text.substring(0, part.question_text.length - 7);
      } else {
        return part.question_text;
      }
    },
  },
  mounted() {
    this.getPassword();
    this.password = this.$route.params.password;
    this.get();
    this.checkPassword();
  },
};
</script>
