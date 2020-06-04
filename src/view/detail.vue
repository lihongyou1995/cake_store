<template>
  <div>
    <navs></navs>
    <div class="minlu">
      <div class="minlu_contain">
        <div class="title">首页 > 蛋糕名录</div>
        <div class="detail_contain">
          <div class="left">
            <div class="left_top">
              <img :src="datu" alt />
            </div>
            <div class="left_bottom">
              <div class="left_bottom_img">
                <img :src="spxx.img_src" alt @mouseover="datu=spxx.img_src" />
              </div>
              <div class="left_bottom_img" v-for="(item,index) in imgs" :key="index">
                <img :src="item.img_src" alt @mouseover="qiehuan(item)" />
              </div>
            </div>
          </div>
          <div class="right">
            <div class="right_title">{{spxx.name}}</div>
            <div class="right_detail">{{spxx.jieshao}}</div>
            <div class="right_price">价格：￥{{spxx.price}}</div>
            <div class="checkgg">
              <div
                v-for="(item,index) in arr_guige"
                :key="index"
                :class="{biankuang:indexitem==index}"
                data-index="index"
                @click="getindex(index)"
              >{{item}}磅</div>
            </div>

            <div class="add_cuts">
              <img src="../assets/img/cuts.png" alt @click="jianshao()" />
              <div>{{spxx.num}}</div>
              <img src="../assets/img/add.png" alt @click="zengjia()" />
            </div>
            <div class="button">
              <button>立即购买</button>
              <button @click="addcar()">加入购物车</button>
            </div>
          </div>
        </div>

        <div class="xiangqing">
          <div class="xiangqing_title">商品详情</div>
          <div class="xiangqing_list">
            <div>品牌： V1Cake</div>
            <div>所属分类：乳酪蛋糕</div>
            <div>口味：牛奶巧克力慕斯或牛奶草莓慕斯</div>
            <div>保鲜条件：0－4℃保藏24小时，5℃最佳食用</div>
            <div>节日：</div>
            <div>原材料：</div>
          </div>
        </div>

        <div class="dgshuomming">
          <div class="dgshuomming_title">订购说明</div>
          <div class="dgshuomming_detail">
            <span style="color:red">预定5磅蛋糕需先付款。</span>
            <br />蛋糕规格及免费配送餐具 ：
            <br />1.0磅：约13×13(cm) 适合3-4人食用 免费配送5套餐具
            <br />2.0磅：约17×17(cm) 适合7-8人食用 免费配送10套餐具
            <br />3.0磅：约22×22(cm) 适合11-12人食用 免费配送15套餐具
            <br />5.0磅：约28×28(cm) 适合15-20人食用 免费配送25套餐具
            <br />6寸：适合3-4人食用 免费配送5套餐具
            <br />提前五个小时订购（提前一天订购享受九五折优惠），慕斯系列须提前24小时订购。
            <br />如若需要修改蛋糕品类或送货时间，送货时间将根据修改内容延后五小时内完成。
            <br />如果您在22点---8点间下单，送货时间最早为14点。 注：所有促销活动不能同时享受 感谢您对v1cake的支持！
            <br />
          </div>
        </div>
      </div>
    </div>
    <foot></foot>
    <asides ref="add_car"></asides>
  </div>
</template>
<script>
import foot from "../components/footer";
import navs from "../components/nav";
import asides from "../components/aside";
export default {
  data() {
    return {
      cur: 0,
      datu: "",
      imgs: [
        {
          img_src: require("../assets/img/30.jpg")
        },
        {
          img_src: require("../assets/img/40.jpg")
        },
        {
          img_src: require("../assets/img/30.jpg")
        },
        {
          img_src: require("../assets/img/40.jpg")
        }
      ],
      arr_guige: ["1", "2", "3", "5"],
      indexitem: 0,
      checkcontain: "",
      spxx: {
        name: "",
        kouwei: "",
        jieshao: "",
        price: "",
        guige: "",
        num: "",
        img_src: ""
      }
    };
  },
  created() {
    let item;
    if (!this.$route.params.item) {
      item = JSON.parse(localStorage.getItem("spxx"));
    } else {
      item = this.$route.params.item;
    }

    this.spxx.img_src = item.img_src;
    this.datu=item.img_src;
    this.spxx.name = item.name;
    this.spxx.kouwei = item.kouwei;
    this.spxx.jieshao = item.jieshao;
    this.spxx.price = item.price;
    this.spxx.guige = item.guige;
    this.spxx.num = item.num;
    localStorage.setItem("spxx", JSON.stringify(this.spxx));
    // console.log(JSON.parse(localStorage.getItem("spxx")));
    console.log(this.spxx.img_src);
    console.log(item.img_src);
  },
  mounted() {},
  components: {
    foot,
    navs,
    asides
  },
  methods: {
    qiehuan(item) {
      this.datu = item.img_src;
    },
    addcar() {
      console.log(this.spxx);
      this.$store.commit("addcar", this.spxx);
      this.$refs.add_car.ss();
    },
    getindex(e) {
      this.indexitem = e;
      this.spxx.guige = this.arr_guige[e];
      console.log(this.spxx.guige);
    },
    zengjia() {
      this.spxx.num++;
    },
    jianshao() {
      if (this.spxx.num > 1) {
        this.spxx.num--;
      }
    }
  }
};
</script>
<style scoped>
.biankuang {
  border-color: #561801 !important;
  background: url("../assets/img/select_on.png") no-repeat;
  background-position: right bottom;
  background-size: 16px;
}
.checkgg > div {
  width: 170px;
  height: 40px;
  line-height: 40px;
  border: 1px solid rgb(212, 212, 212);
  margin: 5px;
}
.checkgg {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 360px;
  text-align: center;
  font-size: 12px;
  color: #561801;
  cursor: pointer;
}
.dgshuomming {
  padding: 20px;
}
.dgshuomming_detail {
  color: #999;
  line-height: 30px;
  font-size: 14px;
}
.dgshuomming_title {
  border-left: 7px solid #561801;
  color: #561801;
  padding-left: 5px;
  font-size: 14px;
}
.xiangqing_list > div {
  width: 420px;
  line-height: 30px;
}
.xiangqing_list {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  color: #999;
  font-size: 14px;
}
.xiangqing_title {
  color: #000;
  font-size: 14px;
  border-left: 7px solid #561801;
  padding-left: 5px;
  line-height: 20px;
}
.xiangqing {
  width: 1300px;
  padding: 20px 20px;
}
.right_price {
  color: #561801;
  font-size: 14px;
  margin-top: 20px;
}
.right_detail {
  color: #999;
  font-size: 14px;
  line-height: 30px;
  margin-top: 20px;
  border-bottom: 1px solid rgb(212, 212, 212, 0.2);
}
.right_title {
  font-size: 16px;
  color: #561801;
  font-weight: bold;
}
.button {
  margin-top: 20px;
  /* display: flex;
    justify-content: center; */
  font-size: 16px;
}
.button > button {
  width: 170px;
  height: 50px;
  background-color: #561801;
  color: #fff;
  text-align: center;
  line-height: 50px;
  font-size: bold;
  border: none;
  outline: none;
  cursor: pointer;
  /* margin: 0 5px */
}
.right {
  width: 400px;
  margin-right: 50px;
}
.add_cuts img {
  width: 25px;
  height: 25px;
  cursor: pointer;
}
.add_cuts div {
  max-width: auto;
  padding: 0 3px;
  min-width: 30px;
  height: 25px;
  border: 1px solid rgb(212, 212, 212);
  line-height: 25px;
  text-align: center;
  margin: 0 10px;
}
.add_cuts {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
}
.left_bottom_img:hover {
  border: 1px solid rgb(105, 105, 105);
}
.left_bottom_img {
  border: 1px solid rgba(212, 212, 212);
  margin: 10px;
}
.left_bottom_img img {
  width: 77px;
  height: 65px;
  margin: 12px;
}
.left_bottom {
  display: flex;
  align-items: center;
  justify-content: center;
}
.left_top {
  text-align: center;
}
.left_top img {
  width: 500px;
  height: 500px;
}
.left {
  width: 630px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.detail_contain {
  display: flex;
  justify-content: space-between;
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