<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" class="login-form" autocomplete="on" label-position="left">

      <div class="title-container">
        <h3 class="title">登录</h3>
      </div>

      <el-form-item prop="username">
        <span class="svg-container">
          <p class="el-icon-user"></p>
        </span>
        <el-input v-model.trim="loginForm.userName" name="userName" placeholder="用户名"/>
      </el-form-item>

      <el-tooltip content="Caps lock is On" placement="right" manual>
        <el-form-item prop="password">
          <span class="svg-container">
            <p class="el-icon-lock"></p>
          </span>
          <el-input 
              v-model="loginForm.password"
              :type="passwordType" 
              name="password" 
              placeholder="密码"
          />
          <span class="show-pwd" @click="showPwd">
            <p class="el-icon-view" ></p>
          </span>
        </el-form-item>
      </el-tooltip>

      <el-button type="primary" style="width:100%;margin-bottom:30px;" >登录</el-button>

      <div style="position:relative">
        <!-- <div class="tips">
          <span>Username : admin</span>
          <span>Password : any</span>
        </div>
        <div class="tips">
          <span style="margin-right:18px;">Username : editor</span>
          <span>Password : any</span>
        </div> -->
        <div class="tips"></div>

        <!-- <el-button class="thirdparty-button" type="primary" >
          Or connect with
        </el-button> -->
      </div>
    </el-form>

    <el-dialog title="Or connect with" >
      Can not be simulated on local, so please combine you own business simulation! ! !
      <br>
      <br>
      <br>
      <social-sign />
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
        loginForm:{
          userName: '',
          password: ''
        },
      passwordType: 'password',
    };
  },

  components: {},

  computed: {},

  mounted: function(){
    return '';
  },

  methods: {
    showPwd() {
      console.log(this.passwordType);
      if(this.passwordType === 'password'){
          this.passwordType = ''
      }else{
          this.passwordType = 'password'
      }
    }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */
$bg:#283443;
$light_gray:#fff;
$cursor: #fff;
@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}
/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;
      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
      
    }
    
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
    svg-icon {
      font-size: 200%;
      cursor:pointer;
    }
  }
}
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;
.login-container {
  height: 100%;
  width: 100%;  
  background-color: $bg;
  overflow: hidden;
  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }
  .title-container {
    position: relative;
    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
  .thirdparty-button {
    position: absolute;
    right: 0;
    margin-top: 10px;
    bottom: 6px;
  }
  @media only screen and (max-width: 470px) {
    .thirdparty-button {
      display: none;
    }
  }
}
</style>