<template>
  <div>
    <navs></navs>
    <!-- 首页 -->
    <div>
      <div class="lunbo_containt">
        <el-carousel class="lunbo" height="400px">
          <el-carousel-item>
            <img src="../assets/img/1.jpg" alt />
          </el-carousel-item>
          <el-carousel-item>
            <img src="../assets/img/2.jpg" alt />
          </el-carousel-item>
          <el-carousel-item>
            <img src="../assets/img/3.jpg" alt />
          </el-carousel-item>
        </el-carousel>
      </div>

      <div class="main">
        <div class="list" v-for="(item,index) in arrs" :key="index" @click="todetail(item)">
          <div class="list_img">
            <img :src="item.img_src" alt />
          </div>
          <div class="jiage">
            <div>{{item.name}}</div>
            <div>￥{{item.price}}/1.0磅</div>
          </div>
        </div>
      </div>

      <div class="chengnuo">
        <div class="chengnuo_list">
          <div class="chengnuo_title">
            <div class="l1"></div>
            <div>当天制作新鲜直达</div>
          </div>
          <div class="chengnuo_main">选用新鲜材料当天制作，让您当日就能体验新鲜食材，最快速的让您感受健康品质享受。</div>
        </div>
        <div class="chengnuo_list">
          <div class="chengnuo_title">
            <div class="l2"></div>
            <div>精选世界好原料</div>
          </div>
          <div class="chengnuo_main">全部使用来自世界各国优等原料，严格遵守经典蛋糕制作工艺，为您提供最纯正的味道。</div>
        </div>
        <div class="chengnuo_list">
          <div class="chengnuo_title">
            <div class="l3"></div>
            <div>100%无添加</div>
          </div>
          <div class="chengnuo_main">百分百纯天然食材，不含人工香料，不含色素，不添加防腐剂。只为让您品尝到最健康的美味。</div>
        </div>
        <div class="chengnuo_list">
          <div class="chengnuo_title">
            <div class="l4"></div>
            <div>无缝冷链生产与配送</div>
          </div>
          <div class="chengnuo_main">全面净化的无菌生产环境，无缝对接的冷链过程，确保您的健康与安全。</div>
        </div>
      </div>
    </div>
    <foot></foot>
  </div>
</template>
<script>
import foot from "../components/footer";
import navs from "../components/nav";
export default {
  data() {
    return {
      arrs: [
        {
          img_src: require("../assets/img/q1.jpg"),
          name: "草莓童话",
          kouwei: "草莓开心果",
          jieshao:
            "圣诞节遇上草莓季，雪白的 cream cheese 包裹粉色的草莓奶油，坚果香浓郁的开心果酱与新鲜的红颜草莓果肉，完美的诠释了圣诞的色彩，美味交叠在口中绽放。圣诞童话，你の圣诞礼物，请查收！",
          price: 198,
          guige: 1,
          num: 1
        },
        {
          img_src: require("../assets/img/520.jpg"),
          name: "520数字蛋糕",
          kouwei: "草莓开心果",
          jieshao: "让数字告白蛋糕替你说 “ 我爱你！”",
          price: 298,
          guige: 1,
          num: 1
        },
        {
          img_src: require("../assets/img/100.jpg"),
          name: "100数字蛋糕",
          kouwei: "草莓开心果",
          jieshao: "宝宝百天蛋糕 | 满分蛋糕",
          price: 235,
          guige: 1,
          num: 1
        },
        {
          img_src: require("../assets/img/tongxin.jpg"),
          name: "童心未泯",
          kouwei: "草莓开心果",
          jieshao:
            "岁月永远年轻，我们慢慢老去，你会发现，童心未泯是一件值得骄傲的事情。琐碎的生活总会带来很多糟心的事情，但是只要我们保持一颗童心，不忘初心，就能看到生活的美好。",
          price: 356,
          guige: 1,
          num: 1
        },
        {
          img_src: require("../assets/img/fen.jpg"),
          name: "pink粉·童心未泯",
          kouwei: "草莓开心果",
          jieshao:
            "岁月永远年轻，我们慢慢老去，你会发现，童心未泯是一件值得骄傲的事情。琐碎的生活总会带来很多糟心的事情，但是只要我们保持一颗童心，不忘初心，就能看到生活的美好。",
          price: 298,
          guige: 1,
          num: 1
        },
        {
          img_src: require("../assets/img/meishaonv.jpg"),
          name: "美少女 | 香蕉巧克力慕斯",
          kouwei: "草莓开心果",
          jieshao:
            "法国香蕉果茸马与法芙娜牛奶巧克力完美配比， 俏皮的玩偶点缀可爱的马卡龙配色， 入口的那一秒变身美少女。",
          price: 298,
          guige: 1,
          num: 1
        },
        {
          img_src: require("../assets/img/mangguo.jpg"),
          name: "芒果淡奶",
          kouwei: "草莓开心果",
          jieshao:
            "明黄色是春夏开启的甜蜜信号 热情馥郁の芒果肉透亮而香甜 与特调乳脂淡奶油极致融合后 淡甜细腻在明媚季节温暖上市",
          price: 268,
          guige: 1,
          num: 1
        },
        {
          img_src: require("../assets/img/caomei.jpg"),
          name: "草莓淡奶",
          kouwei: "草莓开心果",
          jieshao:
            "最适合做蛋糕的新鲜红颜草莓， 选用最细腻奶油调配极致柔和， 蛋糕美味哲学草莓的完美演绎。",
          price: 268,
          guige: 1,
          num: 1
        }
      ]
    };
  },
  components: {
    foot,
    navs
  },
  methods: {
    todetail(item){
      this.$router.push({name:'detail',params:{
        item
      }})
    }
  }
};
</script>
<style scoped>
.l4 {
  background: url("../assets/img/footer_icon.jpg") no-repeat;
  background-position-x: -195px;
}
.l3 {
  background: url("../assets/img/footer_icon.jpg") no-repeat;
  background-position-x: -130px;
}
.l2 {
  background: url("../assets/img/footer_icon.jpg") no-repeat;
  background-position-x: -65px;
}
.l1 {
  background: url("../assets/img/footer_icon.jpg") no-repeat;
  background-position-x: 0px;
}
.chengnuo {
  display: flex;
  margin: 0 auto;
  width: 1000px;
  justify-content: space-between;
}
.chengnuo_main {
  font-size: 12px;
  line-height: 24px;
}
.chengnuo_list:nth-child(4) {
  border: none;
}
.chengnuo_list {
  width: 250px;
  color: #999;
  padding: 10px 20px;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}
.chengnuo_title div:nth-child(1) {
  width: 65px;
  height: 65px;
}
.chengnuo_title {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 16px;
}
.jiage {
  position: absolute;
  bottom: -50px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  text-align: center;
  color: #fff;
}
.list:hover .jiage {
  bottom: 0;
  transition: bottom 0.5s;
}
.main {
  width: 1000px;
  margin: 25px auto;
  display: flex;
  flex-wrap: wrap;
}
.list {
  margin: 25px 25px 0 25px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}
.list .list_img img {
  width: 200px;
  height: 180px;
}
.list {
  width: 200px;
  height: 180px;
}
.lunbo img {
  cursor: pointer;
}
.lunbo_containt {
  width: 100%;
}
.lunbo {
  height: 400px;
  width: 990px;
  margin: 0 auto;
}
</style>