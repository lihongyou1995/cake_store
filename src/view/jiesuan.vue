<template>
  <div>
    <navs></navs>
    <div class="jiesuan" v-if="success">
      <div class="txinfo">请填写您的地址信息</div>
      <div>
        <div class="txnumber" id="addr">
          <label for="address">地址：</label>
          <input type="text" id="address" v-model="address" />
          <div style="color:red;font-size:14px;" v-if="snaddress">请输入地址！</div>
        </div>
        <div class="txnumber" id="numb">
          <label for="number">电话：</label>
          <input type="text" id="number" v-model="number" />
        </div>
        <div style="color:red;font-size:14px;" v-if="snumber">请输入联系电话！</div>
      </div>
      <div v-if="kkk">
        <div class="txinfo">请再次确认地址和电话</div>
        <div class="queren">
          地址：
          <span>{{address}}</span>
        </div>
        <div class="queren">
          联系电话：
          <span>{{number}}</span>
        </div>
      </div>
      <div class="submit">
        <button @click="submit">确认并提交</button>
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
      address: JSON.parse(localStorage.getItem("address")) || "",
      number: JSON.parse(localStorage.getItem("number")) || "",
      success: true
    };
  },
  computed: {
    snaddress() {
      if (this.address == "") {
        return true;
      } else {
        localStorage.setItem("address", JSON.stringify(this.address));
        return false;
      }
    },
    snumber() {
      if (this.number == "") {
        return true;
      } else {
        localStorage.setItem("number", JSON.stringify(this.number));
        return false;
      }
    },
    kkk() {
      if (this.address !== "" && this.number !== "") {
        return true;
      } else {
        return false;
      }
    }
  },
  watch: {},
  components: {
    foot,
    navs
  },
  methods: {
    submit() {
      if (this.address !== "" && this.number !== "") {
        let datas = {
          address: this.address,
          number: this.number,
          arr: this.$store.state.cararr
        };
        this.success = !this.success;
        alert("订单已提交");
        localStorage.clear();
        this.$router.push({ name: "index" });
        console.log(datas);
      } else {
        alert("请输入地址或者联系电话");
      }
    }
  }
};
</script>
<style scoped>
.submit {
  text-align: center;
}
.submit button {
  width: 170px;
  height: 40px;
  border: none;
  border-radius: 5px;
  background-color: #561801;
  color: #fff;
  cursor: pointer;
  outline: none;
}
.queren span {
  width: 300px;
  color: #000;
  font-weight: normal;
}
.queren {
  font-size: 16px;
  margin: 10px 0;
  color: #561801;
  font-weight: bold;
  line-height: 30px;
}
.txnumber label {
  color: #561801;
  font-weight: bold;
}
.txnumber input {
  width: 300px;
  height: 40px;
  outline: none;
  border-radius: 3px;
  border: 1px solid rgb(212, 212, 212);
  font-size: 16px;
}
.txnumber {
  font-size: 16px;
  margin: 10px 0;
}
.txinfo {
  color: #561801;
  font-size: 16px;
  font-weight: bold;
  line-height: 30px;
  margin: 5px 0;
}
.jiesuan {
  /* border: 1px solid red; */
  width: 400px;
  margin: 0 auto;
}
</style>