<template>
  <div>
    <v-row class="d-flex justify-center">
      <v-col sm="5">
        <v-text-field
          v-model.number="amount"
          color="secondary"
          type="number"
          label="抽取个数"
        ></v-text-field>
      </v-col>
    </v-row>
    <div class="d-flex justify-center">
      <v-btn align-center color="white" @click="go()" elevation="2">抽取</v-btn>
    </div>

    <div
      v-html="result"
      class="mb-3 mx-2 display-2 text-center"
      style="white-space: pre-line;"
    ></div>
  </div>
</template>

<script>
export default {
  name: "NameDrawer",
  data: () => ({
    amount: null,
    result: null,
    allNames: [
      "顾大局",
      "唐集政",
      "熊涛",
      "万芬",
      "凌丹",
      "熊英凡",
      "周志豪",
      "熊依诺",
      "李婧妍",
      "刘雪琦",
      "陈仪",
      "齐述俊",
      "闵明哲",
      "陈明慧",
      "牟芳黎",
      "牟洪毅",
      "危佳熙",
      "李权津",
      "熊俊泽",
      "邓春寅",
      "张念箴",
      "余俊晖",
      "邹名源",
      "邓佳鹏",
      "朱丹榕",
      "熊月慈",
      "郭美成",
      "刘嘉宸",
      "张祖龙",
      "丁晨悦",
      "孙宗兴",
      "张梦婕",
      "张苏颜",
      "熊芊妍",
      "陶振扬",
      "欧阳奕哲",
      "夏天昊",
      "徐凯",
      "胡子颖",
      "戴佳乐",
      "汪瑞卿",
      "喻鸿杰",
      "周文涛",
      "万泽宇",
      "万礼庆",
      "梁烨",
      "聂义彪",
      "李语涵",
      "陈欣宇",
      "丁敬谦",
    ],
  }),
  methods: {
    go() {
      this.allNames.sort(() => {
        return 0.5 - Math.random();
      });

      if (this.amount != null && this.amount <= 50) {
        this.result = "";
        for (let i = 0; i < this.amount; i++) {
          this.result += "\n" + this.allNames[i];
        }
      }
    },
  },
};
</script>

<style></style>
