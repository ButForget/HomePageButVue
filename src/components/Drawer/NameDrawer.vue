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
      style="white-space: pre-line"
    ></div>
  </div>
</template>

<script>
export default {
  name: "NameDrawer",
  data: () => ({
    amount: null,
    result: null,
    allNames: [],
    thirdNames: [
      "范文浩",
      "喻鸿杰",
      "杨政",
      "程欣佳",
      "张权",
      "余佳炜",
      "唐旅博",
      "胡今国",
      "金家锦",
      "罗亦安",
      "张念箴",
      "李星如",
      "黄思远",
      "熊宇宏",
      "胡珑",
      "简扬",
      "刘剑豪",
      "张振",
      "杜文强",
      "邓思艳",
      "邓必清",
      "涂承涛",
      "王羽辉",
      "罗棚棚",
      "余奎奎",
      "郭文灏",
      "胡昊然",
      "罗振文",
      "邹海鑫",
      "雷程宇",
      "程雨",
      "魏晶晶",
      "涂龙",
      "杨泽用",
      "肖汉",
      "张扬",
      "程舒",
      "陈枫",
      "艾御坤",
      "周世显",
      "黄涛",
      "王琦炜",
      "邓宇",
      "胡紫艳",
      "余彭鑫",
      "邹朝",
      "李语涵",
    ],
    daisyNames: [
      "危泓默",
      "魏元婷",
      "闵黄芳",
      "张琴",
      "谈月",
      "陈子杰",
      "熊可妮",
      "艾绍蓉",
      "陈好",
      "邓怡菲",
      "胡艺轩",
      "陶淑娟",
      "余永俊",
      "熊幼幼",
      "邹斯婷",
      "袁雨欣",
      "罗孟宁",
      "周莹",
      "邱淑茜",
      "曾妍",
      "余梦嘉",
      "裘诗楠",
      "程雨欣",
      "钟一凡",
      "邱茜丹",
      "徐佳心",
      "喻嘉慧",
      "蔡慧",
      "杨洋",
      "江紫佳",
      "陈世雨",
      "伍思颖",
      "程子恩",
      "万欣",
      "车可欣",
      "董津津",
      "谭佳",
      "熊志",
      "万俊",
      "魏思童",
      "潘振平",
      "宋亚琳",
      "熊梦霞",
    ],
    //Old
    //["顾大局","唐集政","熊涛","万芬","凌丹","熊英凡","周志豪","熊依诺","李婧妍","刘雪琦","陈仪","齐述俊","闵明哲","陈明慧","牟芳黎","牟洪毅","危佳熙","李权津","熊俊泽","邓春寅","张念箴","余俊晖","邹名源","邓佳鹏","朱丹榕","熊月慈","郭美成","刘嘉宸","张祖龙","丁晨悦","孙宗兴","张梦婕","张苏颜","熊芊妍","陶振扬","欧阳奕哲","夏天昊","徐凯","胡子颖","戴佳乐","汪瑞卿","喻鸿杰","周文涛","万泽宇","万礼庆","梁烨","聂义彪","李语涵","陈欣宇","丁敬谦"]
  }),
  props:["c"],
  methods: {
    go() {
      this.allNames = this.thirdNames;
      if (this.c == "Daisy") {
        this.allNames = this.daisyNames;
      } else {
        this.allNames = this.thirdNames;
      }

      this.allNames.sort(() => {
        return 0.5 - Math.random();
      });

      if (this.amount != null && this.amount <= this.allNames.length) {
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
