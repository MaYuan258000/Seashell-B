<template>
    <section class="header_top">
         <div class="main">
             <div class="main_left">人力资源管理系统</div>
             <div class="main_right">
                 <ul>
                     <li>当前公司：</li>
                     <li>北京海贝科技有限公司</li>
                     <li>王金发</li>
                     <li>2018-5-26</li>
                     <li>退出</li>
                 </ul>
             </div>
           
 </div>
    </section>
</template>

<script>
export default {
  data(){
      return{

      }
  }
}
</script>

<style lang="less" scoped>

    .header_top{
        width: 100%;
        background: gainsboro;
        height: 40px;
     .main{
        display: flex;
        justify-content: space-between;
        padding-top: 5px;
        color:white;
     }
    }
    .main_left{
        width: 60%;
        height: 40px;
        margin-left: 10px;
        line-height: 40px;
    }
    .main_right{
        width: 40%;
        height: 40px;
        line-height: 40px;
    }
    .main_right ul{
        display: flex;
        justify-content: space-around;
    }

</style>
