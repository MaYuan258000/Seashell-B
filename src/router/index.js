import Vue from 'vue'
import Router from 'vue-router'
// 首页面
import Home from '@/components/home/home'
// 登录页面
import Login from '@/view/login/loginPage'

// 配置管理 -- 子页面
// import accountBalance from '@/components/home/accountManagement/accountBalance/accountBalance'
// import transactionRecord from '@/components/home/accountManagement/transactionRecord/transactionRecord'
// import editPage from '@/components/home/employeeManagement/employeeInformation/editPage'
// import employeeInformationn from '@/components/home/employeeManagement/employeeInformation'
// import guideTo from '@/components/home/employeeManagement/guideToImport/guideToImport'
// import importFailure from '@/components/home/employeeManagement/guideToImport/importFailure'
// import detailsOfWages from '@/components/home/wageManagement/detailsOfWages'
// import noticeOfIssuance from '@/components/home/wageManagement/noticeOfIssuance'
// import wageProgress from '@/components/home/wageManagement/wageProgress'
// import auditPage from '@/components/home/wageManagement/salaryReview/auditPage'
// import reviwProgress from '@/components/home/wageManagement/salaryReview/reviwProgress'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path:'/home',
      component:Home,
      // children:[
      //   {
      //     path:'/accountBalance',
      //     component:accountBalance
      //   },
      //   {
      //     path:'/transactionRecord',
      //     component:transactionRecord
      //   },
      //   {
      //     path:"/editPage",
      //     component:editPage
      //   },
      //   {
      //     path:"/employeeInformationn",
      //     component:employeeInformationn
      //   },
      //   {
      //     path:"/detailsOfWages"
      //   }
      // ]
    }
  ]
})
