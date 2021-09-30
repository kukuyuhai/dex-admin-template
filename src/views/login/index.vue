<template>
  <div class="form">
    <el-form
      ref="ruleForm"
      :model="modelForm"
      :rules="rules"
      style="width: 400px; margin: 0px auto; color: #fff; text-align: center"
    >
      <el-form-item prop="username" label="用户名">
        <el-input v-model="modelForm.username" type="text" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item prop="password" label="密码">
        <el-input
          v-model="modelForm.password"
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
  import { defineComponent, getCurrentInstance, reactive, ref, toRefs, watch } from "vue"
  import { useUserStore } from "@/stores"
  import { useRoute, useRouter } from "vue-router"
  export default defineComponent({
    name: "Login",
    setup() {
      const { ctx } = getCurrentInstance()
      const userStore = useUserStore()
      const router = useRouter()
      const $route = useRoute()
      const redirect = ref("")
      const otherQuery = ref({})

      watch(
        $route,
        (route) => {
          const query = route.query
          if (query) {
            redirect.value = query.redirect
            otherQuery.value = getOtherQuery()
          }
        },
        {
          immediate: true
        }
      )

      function getOtherQuery(query) {
        return query
      }

      const state = reactive({
        modelForm: {
          username: "admin",
          password: "123456"
        },
        rules: {
          username: [
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
      })

      const funcList = {
        submitForm(formName) {
          ctx.$refs[formName].validate((valid) => {
            if (valid) {
              userStore
                .login(state.modelForm)
                .then((result) => {
                  console.log(result)
                  // this.redirect || "/home", query: this.otherQuery
                  router.push({ path: redirect.value || "/" })
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

      return {
        ...toRefs(state),
        ...funcList
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
