<template>
  <div class="wrapper center flex-col-box login-background">
    <div style="color: red">

    </div>
    <div class="login-title">
        <h1>海贝云创人力资源管理系统</h1>
        </div>

    <div class="login-box flex-col-box center">
      <el-form :model="formData" ref="myForm" :rules="rules" label-position="left" label-width="80px" class="from_from" >

        <el-form-item label="手机号" prop="phone">
          <el-input v-model="formData.phone" placeholder="请输入手机号"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input v-model="formData.password" placeholder="请输入密码"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button class="login-btn" type="primary" @click="submitForm('myForm')">登录</el-button>
        </el-form-item>
      </el-form>
      <div class="go-register">
        <!-- <router-link style="float: right" to="/register">忘记密码</router-link> -->
        <el-button type="text" style="float: right" @click="dialogVisible = true">忘记密码</el-button>
        <el-dialog
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose">

            <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
      dialogVisible: false,
        formData: {
          phone: '',
          password: ''
          
        },
        rules: {
          phone: [
            { required: true, message: '手机号码不能为空', trigger: 'blur' },
            { min: 11, max: 11, message: '手机输入有误', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '密码不能为空', trigger: 'blur'},
            { min: 6, max: 10 ,message: '长度在 6 到 10 个字符', trigger: 'blur'}
          ]
        },
      }
    },
    computed: {

    },
    methods: {
      handleChange(val) {
        console.log(val);
      },
     handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      setUserInfo(obj){
        window.localStorage.setItem('userInfo',obj);
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var obj = JSON.stringify(this.formData)
            this.setUserInfo(obj);
            this.$message({
              message: '登录成功',
              type: 'success'
            });
            this.$router.replace('/home')
          } else {
            alert('登录失败');
            return false;
          }
        });
      },
      resetForm(formName){
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style  scoped>
  .login-box{
    width: 350px;
    height: 300px;
    padding-right: 20px;
    border: 1px solid #cccccc;
    background: #ffffff;
    border-radius: 15px;
  }
  .login-background{
    background: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532521858417&di=6e2bce5f68d226d1400a423eb0ae302c&imgtype=0&src=http%3A%2F%2Fwww.jididongjie.com%2Fupload%2Fuppic%2F2018%2F02%2F2018022222125297996.jpg) no-repeat;
    background-size: 100%;
  }
  .from_from{
    margin-top: 40px;
  }
  .login-title{
    width: 100%;
    height: 100px;
    line-height: 100px;
    font-size: 30px;
    color: #ffffff;
    text-align: center;
    letter-spacing: 1px;
    /* text-shadow: 2px 2px #cccccc; */
  }
  .login-title h1{
      font-size: 36px;
  }
  .go-register{
    width: 250px;
  }
  .login-btn{
    width: 100%;
  }
 .login-title h1{
            display: block;
         
            /*渐变背景*/
            background-image: -webkit-linear-gradient(left, #3498db, #f47920 10%, #d71345 20%, #f7acbc 30%,
            #ffd400 40%, #3498db 50%, #f47920 60%, #d71345 70%, #f7acbc 80%, #ffd400 90%, #3498db);
            color: transparent; /*文字填充色为透明*/
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;          /*背景剪裁为文字，只将文字显示为背景*/
            background-size: 200% 100%;            /*背景图片向水平方向扩大一倍，这样background-position才有移动与变化的空间*/
            /* 动画 */
            animation: masked-animation 4s infinite linear;
        }
        @keyframes masked-animation {
            0% {
                background-position: 0 0;   /*background-position 属性设置背景图像的起始位置。*/
            }
            100% {
                background-position: -100% 0;
            }
        }

</style>
