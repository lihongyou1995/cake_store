<template>
  <!-- 导航栏 -->
  <div class="daohang">
    <div class="logo_nav">
      <div class="logo">
        <img src="../assets/img/v1cake_logo.jpg" alt />
      </div>
      <div class="nav">
        <div v-on:click="shouye()">首页</div>
        <div>丨</div>
        <div v-on:click="minglu()">蛋糕名录</div>
        <div>丨</div>
        <div @click="tojptj()">精品推荐</div>
        <div>丨</div>
        <div @click="toxpss()">新品上市</div>
        <div>丨</div>
        <div @click="todgzn()">订购指南</div>
      </div>
    </div>
    <div class="gouwuche">
      <div @click="login()">登录</div>
      <div>丨</div>
      <div @click="register()">注册</div>
      <div>丨</div>
      <div class="gwc" @click="tocar()">
        <img src="../assets/img/trolley_ico.png" alt />
      </div>
      <div>{{nums}}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    nums() {
      return this.$store.getters.allnum;
    }
  },
  methods: {
    register(){
      this.$router.push({name:'register'})
    },
    login(){
      this.$router.push({name:'login'})
    },
    tocar() {
      this.$router.push({ name: "car" });
    },
    todgzn() {
      this.$router.push({ name: "dgzn" });
    },
    toxpss() {
      this.$router.push({ path: "/xpss" });
    },
    tojptj() {
      this.$router.push({ path: "/jptj" });
    },
    shouye() {
      this.$router.push({ path: "/index" });
    },
    minglu() {
      this.$router.push({ path: "/minglu" });
    }
  }
};
</script>
<style scoped>
.gwc {
  display: flex;
  justify-content: center;
  align-items: center;
}
.gouwuche div:nth-child(1):hover,
.gouwuche div:nth-child(3):hover {
  color: #000;
}
.gouwuche div {
  cursor: pointer;
}
.gouwuche {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding-bottom: 13px;
  font-size: 15px;
  color: #561801;
}
.nav div:nth-child(2n-1):hover {
  color: #000;
}
.nav div {
  margin: 0 5px;
  cursor: pointer;
  font-weight: bold;
}
.nav {
  display: flex;
  align-items: flex-end;
  font-size: 15px;
  color: #561801;
  padding-bottom: 13px;
  margin-left: 20px;
}
.logo_nav {
  display: flex;
  justify-content: flex-start;
  height: 80px;
}
.logo img {
  width: 160px;
  height: 80px;
  cursor: pointer;
}
.daohang {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 50px;
  margin: 0 auto;
  height: 80px;
}
</style>