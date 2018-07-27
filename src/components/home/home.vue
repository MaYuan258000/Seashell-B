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
              <div class="div1">1</div> 
              <div class="div2">2</div> 
              <div class="div3">3</div> 
              <div class="div4">4</div> 
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

  },
  components:{
    Head
  }
   
}
</script>

<style lang="less" scoped>
@media screen and(max-width: 1024px){
      .div1{
     width: 20rem;
     height: 20rem;
     background: red;
   }
      .div2{
     width: 20rem;
     height: 20rem;
     background: blue;
   }
      .div3{
     width: 20rem;
     height: 20rem;
     background: yellow;
   }
      .div4{
     width: 20rem;
     height: 20rem;
     background: navy;
   }
}
@media screen  and(max-width: 764px){
    .div1{
     width: 20rem;
     height: 20rem;
     background: red;
   }
      .div2{
     width: 20rem;
     height: 20rem;
     background: blue;
   }
      .div3{
     width: 20rem;
     height: 20rem;
     background: yellow;
   }
      .div4{
     width: 20rem;
     height: 20rem;
     background: navy;
   }
}
 .mm{
   display: flex;
   justify-content: space-between;
   .div1{
     width: 20rem;
     height: 20rem;
     background: red;
   }
      .div2{
     width: 20rem;
     height: 20rem;
     background: blue;
   }
      .div3{
     width: 20rem;
     height: 20rem;
     background: yellow;
   }
      .div4{
     width: 20rem;
     height: 20rem;
     background: navy;
   }

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
