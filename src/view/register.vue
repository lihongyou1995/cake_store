<template>
  <div>
    <navs></navs>
    <div style="width:100%;height:1px;background-color:rgb(212,212,212)"></div>
    <div class="_form">
        <div class="title">
            <img src="../assets/img/user_ico.png" alt="">
            <span>用户注册</span>
        </div>
        <div class="_form_">
            <input type="text" name="name" id="" placeholder="手机号" >
            <input type="password" name="password" id="" placeholder="密码">
            <input type="password" name="password" id="" placeholder="确认密码">
        </div>
        <div class="go_login">我有账号去登陆</div>
        <button class="zhuce">立即注册</button>
    </div>
    <foot></foot>
  </div>
</template>
<script>
import foot from "../components/footer";
import navs from "../components/nav";
export default {
  data() {
    return {};
  },
  components: {
    foot,
    navs
  }
};
</script>
<style scoped>
.zhuce{
    width: 100%;
    height: 50px;
    background-color: #561801;
    color: #fff;
    border: none;
    outline: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
}
.go_login:hover{
    color: #000
}
.go_login{
    text-align: right;
    font-size: 13px;
    color: #561801;
    line-height: 30px;
    cursor: pointer;
}
._form_>input::placeholder{
    font-size: 16px
}
._form_>input{
    display: block;
    width: 400px;
    height: 50px;
    margin-top: 20px;
    border-radius: 5px;
    border: 1px solid rgb(212, 212,212);
    outline: none;
    padding: 5px;
    font-size: 16px
}
._form{
    width: 400px;
    margin: 30px auto
    
}
.title{
    display: flex;
    justify-content: center;
    align-items: center;
    color: #561801;
    font-size: 16px;
    font-weight: bold
}
</style>