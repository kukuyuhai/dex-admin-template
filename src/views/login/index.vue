<template>
  <div class="form">
    <el-form style="width: 400px; margin: 0px auto; color: #fff; text-align: center">
      <el-form-item prop="usename" label="用户名">
        <el-input v-model="formData.usename" type="text" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item prop="password" label="密码">
        <el-input
          v-model="formData.password"
          type="password"
          name="password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit" @click="onSubmit">USER LOGIN</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import { defineComponent } from "vue"

  export default defineComponent({
    name: "Login",
    setup() {},
    data() {
      return {
        formData: {
          usename: "",
          password: ""
        }
      }
    },
    methods: {
      onSubmit() {
        console.log("submit!!!")
      }
    }
  })
</script>

<style lang="css" scoped>
  .form {
    background: cadetblue;
    height: 100vh;
    box-sizing: border-box;
    padding-top: 10%;
  }
</style>
