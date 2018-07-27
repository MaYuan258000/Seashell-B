<template>
  <section class="hello">
         <section class="homeCss">
             <Head/>
          </section>
          <section class="flex1 flex-box mm">
               <!-- <div class="infometa">
                 <ul class="ul">
                   <li v-for="(item,index) in arr" :key="index">
                     {{item}}
                   </li>
                 </ul>
               </div> -->
      <el-col :span="3">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
        <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>账户管理</span>
        </template>
        <el-submenu index="1-4">
          <template slot="title">账户余额</template>
          <el-menu-item index="1-4-1">交易记录</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
        <i class="el-icon-setting"></i>
        <span slot="title">员工管理</span>
        </template>
        <el-submenu index="1-1">
          <template slot="title">导入须知</template>
           <el-menu-item index="1-1-1">导入失败</el-menu-item>
        </el-submenu>
        <el-submenu index="1-2">
          <template slot="title">员工信息</template>
           <el-menu-item index="1-1-2">编辑页面</el-menu-item>
        </el-submenu>
      </el-submenu>

       <el-submenu index="4">
        <template slot="title">
        <i class="el-icon-setting"></i>
        <span slot="title">工资管理</span>
        </template>
       <el-menu-item index="5">
        <span slot="title">发放须知</span>
      </el-menu-item>
      <el-menu-item index="6">
        <span slot="title">工资详情</span>
      </el-menu-item>
        <el-submenu index="2-1">
          <template slot="title">工资审核</template>
           <el-menu-item index="2-1-1">审核页面</el-menu-item>
           <el-menu-item index="2-1-1">审核进度</el-menu-item>
        </el-submenu>
      <el-menu-item index="6">
        <span slot="title">工资记录</span>
      </el-menu-item>
      </el-submenu>
    </el-menu>
  </el-col>
    </el-row>
          </section>
  </section>
</template>

<script>
import axios from 'axios'
import Head from '@/components/Header/Header'
export default {
  name: 'HelloWorld',
  data () {
    return {
        arr:['账号管理','员工管理','工资管理']
    }
  },
  created(){
   
  },
  mounted(){
    
  },
  methods:{
       handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
  },
  components:{
    Head
  }
   
}
</script>

<style lang="less" scoped>
.el-submenu .el-menu-item{
  min-width: 0px;
}
 
  .hello{
    width: 100%;
    height: 100%;
    .infometa{
      width: 83px;
      min-width: 83px;
      height: 100%;
      min-height: 600px;
      background: #39434e;
      .ul{
        line-height: 80px;
        text-align: center;
        color: white;
      }
    }
  }
 .homeCss{
    .header_top{
      width: 100%;
      height: 50px;
      background: #39434e;
    }
 }
   .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
