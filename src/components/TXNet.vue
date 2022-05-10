<!--
 * @Author: HakimYu yhjredin@gmail.com
 * @Date: 2022-04-12 19:37:37
 * @LastEditors: HakimYu yhjredin@gmail.com
 * @LastEditTime: 2022-05-10 10:27:12
 * @FilePath: \homepagebutvue\src\components\TXNet.vue
 * @Description: txnet component
 * 
 * Copyright (c) 2022 by HakimYu yhjredin@gmail.com, All Rights Reserved. 
-->
<template>
  <v-container>
    <div class="d-flex justify-center display-1">英语学习是你自己的事</div>
    <div>
      <div
        v-if="!checked"
        @load="checkPassword"
        class="d-flex justify-center display-1"
      >
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
      <v-col
        v-for="(part, id) in q"
        :key="part.id"
        class="d-flex justify-center"
      >
        <v-card elevation="2" class="rounded-lg" ripple style="width: 1000px">
          <v-card-title primary-title>
            {{ id + 1 + "." + getQuestionText(part) }}
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
import JSONPath from "jsonpath";
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
    /**
     * @description: post to the server to check the password
     * @param {*}
     * @return {*}
     */
    checkPassword() {
      axios
        .post(`https://tools.hakimyu.cn/api/auth?password=${this.password}`)
        .then((response) => {
          //get correct sign
          let sign = md5(
            response.data.status_code.toString() + response.data.t.toString()
          );

          //if status_code is OK and sign is correct
          if (response.data.status_code == 200 && response.data.sign == sign) {
            //set checked to true
            this.checked = true;
          } else if (response.data.sign != sign) {
            //if sign is not correct
            alert("别扒拉了草！");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    /**
     * @description: get the questions from the file: page1
     * @param {*}
     * @return {*}
     */
    get() {
      axios
        .get(`/page1?t=${Date.now()}`)
        .then((response) => {
          //first, get the question1(the first 5 questions)
          let q1 = JSONPath.query(response.data, "$..questionList.*");
          q1 = q1.slice(0, 5);
          //then, get the question2(the next 15 questions)
          let q2 = JSONPath.query(response.data, "$..questions_list.*");
          //add the two questions together
          this.q = q1.concat(q2);
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    /**
     * @description: get the answer text(through the answer_text)
     * @param {*} part
     * @return {*}
     */
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

    /**
     * @description: 
     * @param {*} part
     * @return {*}
     */
    getQuestionText(part) {
      if (part.question_text.indexOf("<br") != -1) {
        return part.question_text.substring(0, part.question_text.length - 7);
      } else {
        return part.question_text;
      }
    },
  },
  mounted() {
    this.password = this.$route.params.password;
    this.get();
    this.checkPassword();
  },
};
</script>
