(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"013f":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-page",{staticClass:"flex flex-center bg-primary"},[r("q-card",{staticClass:"my-card q-pa-sm q-ma-sm"},[r("q-card-section",[r("div",{staticClass:"text-h5 text-weight-bold"},[e._v("SIGN IN TO YOUR ACCOUNT")])]),e.error?r("q-card-section",[r("div",{staticClass:"text-body text-red text-center"},[e._v(e._s(e.message))])]):e._e(),r("q-card-section",[r("form",{on:{submit:function(t){return t.preventDefault(),e.login.apply(null,arguments)}}},[r("q-input",{attrs:{filled:"",label:"Email",error:e.$v.form.email.$error,"error-message":"Need a valid email"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),r("q-input",{attrs:{filled:"",type:e.isPwd?"password":"text",label:"Password",error:e.$v.form.password.$error,"error-message":"Password is required"},scopedSlots:e._u([{key:"append",fn:function(){return[r("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.isPwd?"visibility_off":"visibility"},on:{click:function(t){e.isPwd=!e.isPwd}}})]},proxy:!0}]),model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),r("q-btn",{staticClass:"q-mt-md q-mb-lg",attrs:{color:"primary",type:"submit",label:"Sign In"}})],1)]),r("q-card-section",[r("div",{staticClass:"text-body text-center"},[e._v("\n        Don't own account yet ?\n        "),r("q-btn",{attrs:{flat:"",label:"Register Here",padding:"0"},on:{click:e.gotoRegister}})],1)])],1)],1)},a=[],i=r("3395"),o=r("b5ae"),n={name:"PageIndex",data(){return{form:{email:"",password:""},isPwd:!0,error:!1,message:""}},validations:{form:{email:{required:o["required"],email:o["email"]},password:{required:o["required"],minLength:Object(o["minLength"])(4)}}},methods:{login(){this.$v.form.$touch(),this.$v.form.$invalid||this.$repository.user.login({email:this.form.email,password:this.form.password}).then((e=>{e.data&&(Object(i["c"])("ifca_authentication",!0),this.$router.push({path:"/"}))})).catch((e=>{console.log(e.response.data),this.error=!0,this.message=e.response.data.msg}))},gotoRegister(){console.log("click"),this.$router.push({path:"/auth/register"})}}},l=n,c=r("2877"),d=r("9989"),m=r("f09f"),p=r("a370"),u=r("27f9"),f=r("0016"),g=r("9c40"),h=r("eebe"),b=r.n(h),w=Object(c["a"])(l,s,a,!1,null,null,null);t["default"]=w.exports;b()(w,"components",{QPage:d["a"],QCard:m["a"],QCardSection:p["a"],QInput:u["a"],QIcon:f["a"],QBtn:g["a"]})}}]);