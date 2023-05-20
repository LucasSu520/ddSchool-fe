<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像区域 -->
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="" />
      </div>
      <!-- 登录表单区域 -->
      <el-form label-width="0px" class="login_form">
        <!-- 用户名 -->
        <el-form-item>
          <el-input v-model="name" placeholder='请输入账号'></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item>
          <el-input v-model="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-row justify="end">
          <el-form-item class="login_btn">
            <el-button type="primary" @click="login()">登录</el-button>
            <el-button type="info" @click="clear()">重置</el-button>
          </el-form-item>
        </el-row>
      </el-form>
    </div>
  </div>
</template>
 
<script>
import axios from 'axios';
import { defineComponent, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
    setup(props) {
        const router = useRouter();
        const oldName = ref('')
        const oldPassword = ref('')
        const emitNewName = (value) => {
            props.$emit('name', value);
        }
        const emitNewPassword = (value) => {
            props.$emit('password', value);
        }

        const name = ref('');
        const password = ref('');
        onMounted(()=>{
            oldName.value = props.name;
            oldPassword.value = props.password;
        } )
    
        function login() {
            const data = {
            account : name.value,
            password : password.value
            }
            axios.post("/api/login",data).then(
                function(response){
                    console.log(response);
                    if (response.status !== 200 || response.data.code == "10001"){
                        window.alert("登陆失败")
                    } else{
                        console.log("进入了该方法")
                        console.log(router); 
                        router.push("/abc")
                    }
                    window.sessionStorage.setItem('token', response.token)
                },function(error) {
                    console.log(error);
                }
            )
        };
        function clear() {
            name.value = ''
            password.value=''
        }
        return {
            name,
            password,
            login,
            clear
        }
    },
    methods:{
        // 重制账号密码
        
    }
}
</script>
 
<style lang="less" scoped>
.login_container {
  background-color: #2b4b6b;
  height: 100vh;
}
.login_box {
  // 宽450像素
  width: 450px;
  // 高300像素
  height: 300px;
  // 背景颜色
  background-color: #fff;
  // 圆角边框3像素
  border-radius: 3px;
  // 绝对定位
  position: absolute;
  // 距离左则50%
  left: 50%;
  // 上面距离50%
  top: 50%;
  // 进行位移，并且在横轴上位移-50%，纵轴也位移-50%
  transform: translate(-50%, -50%);
  .avatar_box {
    // 盒子高度130像素
    height: 130px;
    // 宽度130像素
    width: 130px;
    // 边框线1像素 实线
    border: 1px solid #eee;
    // 圆角
    border-radius: 50%;
    // 内padding
    padding: 10px;
    // 添加阴影 向外扩散10像素 颜色ddd
    box-shadow: 0 0 10px #ddd;
    // 绝对定位
    position: absolute;
    // 距离左则
    left: 50%;
    // 位移
    transform: translate(-50%, -50%);
    // 背景
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}
.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
.login_btn {
  // 设置弹性布局
  display: flex;
  // 横轴上尾部对齐
  justify-content: flex-end;
}
</style>