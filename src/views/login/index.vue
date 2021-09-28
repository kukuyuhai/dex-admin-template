<template>
  <div class="form">
    <el-form
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      style="width: 400px; margin: 0px auto; color: #fff; text-align: center"
    >
      <el-form-item prop="usename" label="用户名">
        <el-input v-model="ruleForm.usename" type="text" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item prop="password" label="密码">
        <el-input
          v-model="ruleForm.password"
          type="password"
          name="password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">登 录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import { login } from "@/api/user"
  export default {
    name: "Login",
    setup() {},
    data() {
      return {
        ruleForm: {
          usename: "",
          password: ""
        },
        rules: {
          usename: [
            {
              required: true,
              message: "Please input Activity name",
              trigger: "blur"
            }
          ],
          password: [
            {
              required: true,
              trigger: "blur",
              message: "密码不能为空"
            }
          ]
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert("submit!")
            login(this.ruleForm)
              .then((result) => {
                console.log(result)
              })
              .catch((err) => {
                console.log(err)
              })
          } else {
            console.log("error submit!!")
            return false
          }
        })
      }
    }
  }
</script>

<style lang="css" scoped>
  .form {
    background: cadetblue;
    height: 100vh;
    box-sizing: border-box;
    padding-top: 10%;
  }
</style>
