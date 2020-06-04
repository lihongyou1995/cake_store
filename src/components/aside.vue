<template>
  <div class="cebian">
    <div class="car_img">
      <img src="../assets/img/car.png" alt />
    </div>
    <div class="title" @click="tocar()">
      <div>购</div>
      <div>物</div>
      <div>车</div>
    </div>
    <div class="all">{{nums}}</div>
    <transition name="addsuccess">
      <div class="addsuccess" v-if="gg" ref="add">已成功加入购物车</div>
    </transition>
  </div>
</template>
<script>
export default {
  // props: ["selectname"],
  data() {
    return {
      gg: false,
      xx: ""
    };
  },
  computed:{
    nums(){
      return this.$store.getters.allnum
    }
  },
  methods: {
    ss() {
      this.gg = !this.gg;
      setTimeout(() => {
        this.gg = !this.gg;
      }, 1000);
    },
    tocar(){
      this.$router.push({name:'car'})
    }
  },
  watch: {}
};
</script>
<style  scoped>
.addsuccess-leave-active {
  opacity: 0;
}
.addsuccess-enter {
  opacity: 0;
}
.addsuccess-enter-active,
.addsuccess-leave-active {
  transition: all 1s;
}
.addsuccess {
  position: absolute;
  left: -200px;
  color: #fff;
  background-color: green;
  top: 30vh;
  width: 200px;
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  text-align: center;
  transition: opacity 1s;
}
.all {
  text-align: center;
}
.car_img img {
  width: 35px;
  height: 35px;
}
.title {
  text-align: center;
  cursor: pointer;
}
.cebian {
  width: 35px;
  height: 100vh;
  color: #fff;
  font-size: 13px;
  position: fixed;
  right: 0;
  top: 0;
  background-color: rgb(158, 158, 158);
  padding-top: 30vh
}
</style>