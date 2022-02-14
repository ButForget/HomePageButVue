<template>
  <v-dialog fullscreen v-model="needLogin" width="500">
    <v-card class="d-flex justify-center">
       <div class="hidden-md-and-up mx-5 mt-13">
        <v-card-title
          class="d-flex justify-center text-h5"
          primary-title
        >
          登录
        </v-card-title>
        <v-card-actions>
          <v-row class="d-flex justify-center no-gutters">
            <v-col cols="12" sm="12">
              <v-text-field
                label="手机号码"
                color="#1a73e8"
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="12">
              <v-text-field
                label="密码"
                color="#1a73e8"
                :append-icon="pwdEye"
                :type="isPwd ? 'password' : 'text'"
                @click:append="pwdEye == 'mdi-eye-off' ? pwdEye = 'mdi-eye' : pwdEye = 'mdi-eye-off';isPwd = !isPwd"
                outlined
              ></v-text-field>
            </v-col>
            <v-col class="mt-10" sm="10">
              <v-btn
                class="float-right"
                color="#1a73e8"
                dark
                elevation="0"
                @click="$emit('close')"
                >登录</v-btn
              >
            </v-col>
          </v-row>
        </v-card-actions>
      </div>
      <v-card
        class="hidden-sm-and-down"
        elevation="0"
        width="448px"
        height="500px"
        rounded="lg"
        outlined
      >
        <v-card-title
          class="d-flex justify-center text-h5"
          style="margin-top: 60px"
          primary-title
        >
          登录
        </v-card-title>
        <v-card-actions>
          <v-row class="d-flex justify-center no-gutters">
            <v-col sm="10">
              <v-text-field
                width="366px"
                label="手机号码"
                color="#1a73e8"
                outlined
              ></v-text-field>
            </v-col>
            <v-col sm="10">
              <v-text-field
                width="366px"
                label="密码"
                color="#1a73e8"
                :append-icon="pwdEye"
                :type="isPwd ? 'password' : 'text'"
                @click:append="pwdEye == 'mdi-eye-off' ? pwdEye = 'mdi-eye' : pwdEye = 'mdi-eye-off';isPwd = !isPwd"
                outlined
              ></v-text-field>
            </v-col>
            <v-col sm="10">
              <v-btn
                class="float-right"
                color="#1a73e8"
                dark
                elevation="0"
                @click="$emit('close')"
                >登录</v-btn
              >
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "LoginDialog",
  props: ["needLogin"],
  data: () => ({
    pwdEye: 'mdi-eye-off',
    isPwd: true
  }),
};
</script>

<style></style>
