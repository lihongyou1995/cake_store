<template>
  <div>
    <navs></navs>
    <div class="minlu">
      <div class="minlu_contain">
        <div class="title">首页 > 新品上市</div>
        <div class="minglu_nav">
          <div @click="cur=0" :class="{active:cur==0}">全部蛋糕</div>
          <div @click="cur=1" :class="{active:cur==1}">乳脂奶油</div>
          <div @click="cur=2" :class="{active:cur==2}">双拼蛋糕</div>
          <div @click="cur=3" :class="{active:cur==3}">儿童蛋糕</div>
          <div @click="cur=4" :class="{active:cur==4}">千层蛋糕</div>
          <div @click="cur=5" :class="{active:cur==5}">慕斯蛋糕</div>
          <div @click="cur=6" :class="{active:cur==6}">巧克力类</div>
          <div @click="cur=7" :class="{active:cur==7}">芝士蛋糕</div>
          <div @click="cur=8" :class="{active:cur==8}">拼配伴手礼</div>
          <div @click="cur=9" :class="{active:cur==9}">芒果蛋糕</div>
          <div @click="cur=10" :class="{active:cur==10}">两人份甜蜜</div>
        </div>
        <div>
          <div class="dangao_item">
            <div class="dangao_item_img">
              <img src="../assets/img/q1.jpg" alt />
            </div>
            <div class="dangao_item_jieshao">
              <div>草莓童话</div>
              <div>口味：草莓开心果</div>
              <div>圣诞节遇上草莓季，雪白的 cream cheese 包裹粉色的草莓奶油，坚果香浓郁的开心果酱与新鲜的红颜草莓果肉，完美的诠释了圣诞的色彩，美味交叠在口中绽放。圣诞童话，你の圣诞礼物，请查收！</div>
            </div>
            <div class="dangao_item_price">￥2627</div>
            <div class="dangao_item_button">
              <div>查看详情</div>
              <div>加入购物车</div>
            </div>
          </div>
          <div class="dangao_item">
            <div class="dangao_item_img">
              <img src="../assets/img/q1.jpg" alt />
            </div>
            <div class="dangao_item_jieshao">
              <div>草莓童话</div>
              <div>口味：草莓开心果</div>
              <div>圣诞节遇上草莓季，雪白的 cream cheese 包裹粉色的草莓奶油，坚果香浓郁的开心果酱与新鲜的红颜草莓果肉，完美的诠释了圣诞的色彩，美味交叠在口中绽放。圣诞童话，你の圣诞礼物，请查收！</div>
            </div>
            <div class="dangao_item_price">￥2627</div>
            <div class="dangao_item_button">
              <div>查看详情</div>
              <div>加入购物车</div>
            </div>
          </div>
          <div class="dangao_item">
            <div class="dangao_item_img">
              <img src="../assets/img/q1.jpg" alt />
            </div>
            <div class="dangao_item_jieshao">
              <div>草莓童话</div>
              <div>口味：草莓开心果</div>
              <div>圣诞节遇上草莓季，雪白的 cream cheese 包裹粉色的草莓奶油，坚果香浓郁的开心果酱与新鲜的红颜草莓果肉，完美的诠释了圣诞的色彩，美味交叠在口中绽放。圣诞童话，你の圣诞礼物，请查收！</div>
            </div>
            <div class="dangao_item_price">￥2627</div>
            <div class="dangao_item_button">
              <div>查看详情</div>
              <div>加入购物车</div>
            </div>
          </div>
          <div class="dangao_item">
            <div class="dangao_item_img">
              <img src="../assets/img/q1.jpg" alt />
            </div>
            <div class="dangao_item_jieshao">
              <div>草莓童话</div>
              <div>口味：草莓开心果</div>
              <div>圣诞节遇上草莓季，雪白的 cream cheese 包裹粉色的草莓奶油，坚果香浓郁的开心果酱与新鲜的红颜草莓果肉，完美的诠释了圣诞的色彩，美味交叠在口中绽放。圣诞童话，你の圣诞礼物，请查收！</div>
            </div>
            <div class="dangao_item_price">￥2627</div>
            <div class="dangao_item_button">
              <div>查看详情</div>
              <div @click="addcar()">加入购物车</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <foot></foot>
    <asides ref="add_car" ></asides>
  </div>
</template>
<script>
import foot from "../components/footer";
import navs from "../components/nav";
import asides from "../components/aside";
export default {
  data() {
    return {
      cur: 0
    };
  },
  components: {
    foot,
    navs,
    asides
  },
  methods: {
    addcar() {
      var data = {
        name: "草莓童话"
      };
      this.$refs.add_car.ss( data);
    }
  }
};
</script>
<style scoped>
.dangao_item_button div:nth-child(2):hover {
  background-color: #000;
  cursor: pointer;
}
.dangao_item_button div:nth-child(1):hover {
  background-color: rgba(0, 0, 0, 0.1);
  cursor: pointer;
}
.dangao_item_button div:nth-child(1) {
  color: #000;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 4px 8px;
  border-radius: 7px;
}
.dangao_item_button div:nth-child(2) {
  color: #fff;
  background-color: #561801;
  padding: 4px 8px;
  border-radius: 7px;
  margin-left: 10px;
}
.dangao_item_button {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  font-size: 14px;
}
.dangao_item_price {
  width: 310px;
  color: #561801;
  font-size: 16px;
  line-height: 130px;
  text-align: center;
}
.dangao_item_jieshao div:nth-child(1) {
  color: #561801;
  font-size: 16px;
}
.dangao_item_jieshao div {
  line-height: 24px;
}
.dangao_item_jieshao {
  margin-left: 30px;
  color: #999;
  font-size: 14px;
  width: 510px;
  text-align: left;
}
.dangao_item_img img {
  width: 100%;
  height: 100%;
}
.dangao_item_img {
  width: 160px;
  height: 130px;
}
.dangao_item {
  display: flex;
  justify-content: flex-start;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 15px 25px;
  height: 160px;
}
.active {
  background-color: #561801;
  color: #fff;
}
.minglu_nav div {
  margin: 10px 10px;
  padding: 0 5px;
}
.minglu_nav {
  display: flex;
  color: #561801;
  font-size: 14px;
  cursor: pointer;
  margin-left: 50px;
}
.title {
  color: #561801;
  font-size: 14px;
  line-height: 36px;
  margin: 20px 20px;
}
.minlu_contain {
  width: 1300px;
  margin: 0 auto;
}
.minlu {
  border-top: 1px solid rgba(0, 0, 0, 0.3);
}
</style>