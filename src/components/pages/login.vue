<template>
  <div class="login">
    <div class="loginbox">
      <el-form :model="loginForm" status-icon :rules="loginRules" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
        <el-form-item label="账号" prop="account">
          <el-input type="account" v-model="loginForm.account" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="loginForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
          <el-button @click="resetForm('ruleForm2')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      loginForm: {
        account: '', // 用户账号
        pass: '' // 用户密码
      },
      loginRules: {
        account: [
          {require: true, message: '用户名不能为空', trigger: blur}
        ],
        pass: [
          {require: true, messgae: '输入密码不能为空', trigger: blur}
        ]
      }
    }
  }
}
</script>
<style lang="less" scoped>
.login{
  width:100%;
  height:100vh;
  text-align:center;
  background-color:pink;
  position: relative;
  .loginbox{
    width: 400px;
    height: 200px;
    background-color:plum;
    margin:0 auto;
    text-align:center;
    position: absolute;
    top:300px;
    left:0;
    right:0;
    padding:30px;
  }
}
</style>
