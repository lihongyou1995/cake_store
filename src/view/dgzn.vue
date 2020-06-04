<template>
  <div>
    <navs></navs>
    <div style="width:100%;height:1px;background-color:rgb(212,212,212)"></div>
    <div class="contain">
      <div class="title">首页 > 精品推荐</div>
      <div class="zhinan">
        <div class="left">
          <div class="list_title">订购指南</div>
          <div class="list">
            <ul>
              <li @click="cur=0" :class="{ul_li:cur==0}">订购说明</li>
              <li @click="cur=1" :class="{ul_li:cur==1}">积分说明</li>
              <li @click="cur=2" :class="{ul_li:cur==2}">如何收货</li>
              <li @click="cur=3" :class="{ul_li:cur==3}">付款方式</li>
              <li @click="cur=4" :class="{ul_li:cur==4}">配送范围</li>
              <li @click="cur=5" :class="{ul_li:cur==5}">声明</li>
            </ul>
          </div>
        </div>
        <div class="right">
          <!-- 订购说明 -->
          <div class="dgsm" v-if="cur==0">
            <span class="dgsm_1">订购说明</span>
            <p class="dgsm_2">
              您可以通过以下几种方式订购本店蛋糕：
              <br />1、网站下单 (网址：www.xxx.com)
              <br />2、微信下单 (关注微信公众号：v1cake唯一客)
              <br />3、电话下单 (4000-xxx-xxx 服务时间09:00-20:30)
              <br />
            </p>
            <p class="dgsm_3">
              提前五个小时订购。
              <br />如若需要修改蛋糕品类或送货时间，送货时间将根据修改内容延后五小时内完成。
              <br />如果您在22点---8点间下单，送货时间最早为14点。
              <br />注：所有促销活动不能同时享受
              <br />感谢您对v1cake的支持！
            </p>
          </div>
          <!-- 积分说明 -->
          <div class="dgsm" v-if="cur==1">
            <span class="dgsm_1">积分说明</span>
            <p class="dgsm_2">
              积累积分可以兑换唯一客全线产品
              <br />积分不可用来兑换现金、不找零
              <br />使用唯一客任何优惠活动所购买的蛋糕不予积分
              <br />积分兑换的蛋糕不再享受任何优惠活动
              <br />【积分使用说明】
              <br />10积分相当于1RMB唯一客产品
              <br />积分用于兑换唯一客全线产品，不补差价
              <br />mini切片蛋糕／布丁只限门店直接积分兑换不送货
              <br />积分兑换的大蛋糕
              <br />周五／六／日／节假日不予配送需门店自提
              <br />【积分查询与有效期】
              <br />唯一客积分以电子数据的形式保存于唯一客系统中，会员随时可以登陆
              <br />www.v1cake.com网站，在"用户中心"-"会员首页"查询帐户下的"积分"，并按相关规定使用。
              <br />会员不可将积分转让给他人
              <br />不同帐户下的积分不可以合并使用
              <br />原则上积分不予清零
              <br />如需系统升级例行推文通知
              <br />（系统升级不多于两年一次）
              <br />如有疑问请拨打客户服务热线：4000xxxxxx。
              <br />积分制度解释权归南昌爱客利食品有限公司所有
            </p>
          </div>
          <!-- 如何收货 -->
          <div class="dgsm" v-if="cur==2">
            <span class="dgsm_1">如何收货</span>
            <p class="dgsm_2">
              唯一客现支持南昌市内免费送货上门服务。
              <br />送货范围：南昌市内免费送货，北至江纺，南至包家花园，西至沿江大道，东至京东大道
              <br />送货方式：唯一客配送服务人员送货上门
            </p>
            <p class="dgsm_3">
              你也可以选择到门店取货：
              <br />门店地址：南昌市西湖区广场南路恒茂商业街A-193室
              <br />门店电话：0791-xxxxxx
            </p>
          </div>
          <!-- 付款方式 -->
          <div class="dgsm" v-if="cur==3">
            <span class="dgsm_1">付款方式</span>
            <p class="dgsm_2">
              目前我们提供以下支付方式，完成此操作后，您的订单将不能再进行修改。
              <br />货到付款：如您的地址属可送货上门区域，我们推荐您选择此方式，您的货款将在订单送到后由送货员直接收取，请您务必确认签字。
            </p>
            <p class="dgsm_3">支付宝付款：支付宝账号：1568082xxxx</p>
          </div>
          <!-- 配送范围 -->
          <div class="dgsm" v-if="cur==4">
            <span class="dgsm_1">配送范围</span>
            <p class="dgsm_2">南昌市内免费送货，北至江纺，南至包家花园，西至沿江大道，东至京东大道</p>
            <p class="dgsm_3"></p>
          </div>
          <!-- 声明 -->
          <div class="dgsm" v-if="cur==5">
            <span class="dgsm_1">声明</span>
            <p class="dgsm_2"></p>
            <p class="dgsm_3"></p>
          </div>
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
      cur: 0
    };
  },
  components: {
    foot,
    navs
  },
  methods: {
    addcar() {
      var data = {
        name: "草莓童话"
      };
      this.$refs.add_car.ss(data);
    }
  }
};
</script>
<style scoped>
.dgsm_2,
.dgsm_3 {
  margin-top: 30px;
  color: #561801;
  font-size: 14px;
  line-height: 25px;
}
.dgsm_1 {
  color: #561801;
  font-size: 16px;
  line-height: 30px;
}

.right {
  overflow-wrap: break-word;
  margin-left: 30px;
}
.ul_li {
  font-weight: bold;
}
.list ul li {
  list-style: none;
  color: #561801;
  font-size: 12px;
  cursor: pointer;
  margin-top: 10px;
}
.list {
  padding: 0 30px;
}
.zhinan {
  width: 1300px;
  margin: 0 auto;
  display: flex;
}
.list_title {
  color: #561801;
  font-size: 14px;
}
.left {
  border-right: 1px solid rgb(212, 212, 212);
  height: 600px;
  width: 200px;
  padding: 0 30px;
}
.contain {
  width: 1300px;
  margin: 0 auto;
}
.title {
  color: #561801;
  font-size: 14px;
  line-height: 36px;
  margin: 20px 20px;
}
</style>