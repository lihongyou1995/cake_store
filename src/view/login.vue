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
        </div>
        <div class="go_">
            <div>立即注册</div>
            <div>忘记密码？</div>
        </div>
        <button class="zhuce">立即登录</button>
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
.go_>div:hover{
    color: #000
}
.go_{
    font-size: 13px;
    color: #561801;
    line-height: 30px;
    cursor: pointer;
    display: flex;
    justify-content: space-between
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