// import Vue from 'vue'
// import { AclInstaller, AclCreate, AclRule } from 'vue-acl'
// import router from '@/router'

// Vue.use(AclInstaller)

// let initialRole = 'admin'
// if(localStorage.getItem('userRole')) initialRole = localStorage.getItem('userRole')

// export default new AclCreate({
//   initial: initialRole,
//   notfound: '/pages/not-authorized',
//   router,
//   acceptLocalRules: true,
//   globalRules: {
//     admin: new AclRule('admin').generate(),
//     editor: new AclRule('editor').or('admin').generate(),
//     // public: new AclRule('public').or('admin').or('editor').generate(),
//   }
// })


import Vue from 'vue'
import { AclInstaller, AclCreate, AclRule } from 'vue-acl'
import router from '@/router'
import service from '@/service/service'

Vue.use(AclInstaller)

let token = service.getUser()
let initialRole = 'public'
if(token.role_id != undefined){
  if(token.role_id == "1"){
    initialRole = "admin"
  }else if(token.role_id == "2"|| token.role_id =="3"){
    initialRole = "editor"
  }else{
    initialRole = "public"
  }
}else{
  initialRole = "public"
}
// alert(initialRole);

// let initiหalRole = 'admin'
// if(localStorage.getItem('userRole')) initialRole = localStorage.getItem('userRole')

export default new AclCreate({
  initial: initialRole,
  notfound: '/pages/not-authorized',
  router,
  acceptLocalRules: true,
  globalRules: {
    admin: new AclRule('admin').generate(),
    editor: new AclRule('editor').or('admin').generate(),
    public: new AclRule('public').or('admin').or('editor').generate(),
  }
})
