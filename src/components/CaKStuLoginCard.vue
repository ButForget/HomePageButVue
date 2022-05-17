<template>
  <v-card
    width="375px"
    height="475px"
  >
    <v-row class="d-flex justify-center">
      <v-img src="../img/CaKEntity.jpg" style="margin: 50px auto auto auto;" max-width="75px" max-heigeht="75px"></v-img>
    </v-row>
    <v-row class="d-flex justify-center" >
      登录
    </v-row>
    <v-row class="d-flex justify-center">
      <v-text-field
        v-model="_userCode"
        label="手机号"
        style="margin: 50px 75px 10px 50px;"
        prepend-icon="mdi-phone"
        >
      </v-text-field>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-text-field
        v-model="_password"
        label="密码"    
        style="margin: 0 75px 0 50px;"
        prepend-icon="mdi-lock"
      >
      </v-text-field>
    </v-row>
    <v-row>
      <v-btn 
        style="margin: 25px 0 0 300px"
        color="indigo"
        outlined icon
        @click="this.getUserInfo"
      >
        <v-icon dark>
            mdi-keyboard-return
        </v-icon>
      </v-btn>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "CaKStuLoginCard",
  data: () => ({
    _userCode: "",
    _password: "",
  }),
  methods: {
    getUserInfo(){
      let userInfo = {
        userCode: this._userCode,
        password: this._password,
      };
      
      this.$emit("login-ok", userInfo);
    }
  }
};
</script>