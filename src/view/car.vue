<template>
  <div>
    <navs></navs>
    <div class="fengexian"></div>
    <div class="contain">
      <div class="title">我的购物车</div>
      <div class="thead">
        <div style="width:500px">商品</div>
        <div style="width:160px">规格</div>
        <div style="width:90px">单价</div>
        <div style="width:245px">数量</div>
        <div style="width:150px">小计</div>
        <div style="width:90px">操作</div>
      </div>
      <div class="tbody" v-for="(item,index) in cars" :key="index">
        <div style="width:500px">{{item.name}}</div>
        <div style="width:160px">{{item.guige}}</div>
        <div style="width:90px">￥{{(item.price)*(item.guige)}}</div>
        <div style="width:245px" class="tonum">
          <div class="jian">
            <img src="../assets/img/cuts.png" alt @click="jian(index)" />
          </div>
          <div class="allnum">{{item.num}}</div>
          <div class="add">
            <img src="../assets/img/add.png" alt @click="add(index)" />
          </div>
        </div>
        <div style="width:150px">￥{{(item.price)*(item.num)*(item.guige)}}</div>
        <div style="width:90px" class="delete">
          <img src="../assets/img/dele_ico.png" alt @click="deletes(index)" />
        </div>
      </div>
      <div class="tfoot"></div>

      <!-- 总计 -->
      <div class="zongji">
        <div>共{{allnum}}件商品丨合计：{{allprice}}元</div>
      </div>

      <!-- <button> -->

      <div class="t_btn">
        <button @click="jixugouwu()">继续购物</button>
        <button @click="jiesuan()">下单结算</button>
      </div>
    </div>
    <foot></foot>
  </div>
</template>
<script>
import { mapState } from "vuex";
import foot from "../components/footer";
import navs from "../components/nav";
export default {
  data() {
    return {};
  },
  computed: {
    // ...mapState({
    //   cars: state => state.cararr
    // }),
    cars() {
      return this.$store.state.cararr;
    },
    // 算商品总数
    allnum() {
      return this.$store.getters.allnum;
    },
    // 算总价
    allprice() {
      return this.$store.getters.allprice;
    }
  },
  components: {
    foot,
    navs
  },
  methods: {
    jiesuan(){
      this.$router.push({name:'jiesuan'})
    },
    jixugouwu() {
      this.$router.push({ name: "minglu" });
    },
    jian(index) {
      this.$store.commit("jian", index);
    },
    add(index) {
      this.$store.commit("add", index);
    },
    // 删除商品
    deletes(index) {
      this.$store.commit("deletes", index);
    }
  }
};
</script>
<style scoped>
.t_btn button:nth-child(2) {
  border: none;
  color: #fff;
  background-color: #561801;
}
.t_btn button:nth-child(1) {
  border: 1px solid rgb(212, 212, 212);
  color: #561801;
}
.t_btn > button {
  outline: none;
}
.t_btn > button {
  cursor: pointer;
  font-size: 16px;
  width: 160px;
  height: 50px;
  font-weight: bold;
}
.t_btn {
  text-align: right;
}
.zongji div {
  line-height: 50px;
  color: #561801;
  font-size: 14px;
  font-weight: bold;
}
.zongji {
  display: flex;
  width: 100%;
  justify-content: flex-end;
}
.delete img {
  widows: 100%;
  height: 100%;
}
.delete {
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
}
.allnum {
  border: 1px solid rgb(212, 212, 212);
  width: 60px;
  height: 25px;
  line-height: 25px;
  margin: 0 5px;
}
.jian img,
.add img {
  width: 100%;
  height: 100%;
}
.jian,
.add {
  width: 25px;
  height: 25px;
  line-height: 30px;
  cursor: pointer;
}
.tonum {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 95px;
}
.tbody > div:last-of-type {
  border: none;
  cursor: pointer;
}
.tbody > div {
  text-align: center;
  border-right: 1px solid rgb(212, 212, 212);
  line-height: 95px;
}
.tbody {
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid rgb(212, 212, 212);
  height: 95px;
}
.thead > div:last-of-type {
  border: none;
}
.thead > div {
  text-align: center;
  border-right: 1px solid rgb(212, 212, 212);
  line-height: 40px;
}
.thead {
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  background-color: rgb(246, 250, 255);
  border-top: 1px solid rgb(212, 212, 212);
  height: 40px;
}
.tfoot {
  border-bottom: 1px solid rgb(212, 212, 212);
}
.title {
  color: #561801;
  font-size: 16px;
  font-weight: bold;
  padding: 30px 0 10px 10px;
}
.contain {
  width: 1300px;
  margin: 0 auto;
}
.fengexian {
  height: 1px;
  width: 100%;
  background-color: rgb(230, 230, 230);
}
</style>