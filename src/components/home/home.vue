<template>
  <section class="hello">
         <section class="homeCss">
             <Head/>
          </section>
          <section class="flex1 flex-box">
               <div class="infometa">
                 <ul class="ul">
                   <li v-for="(item,index) in arr" :key="index">
                     {{item}}
                   </li>
                 </ul>
               </div>

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
</style>
