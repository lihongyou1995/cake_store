import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

//创建一个store仓库
const store = new Vuex.Store({
  //state用来存放数据的对象
  state: {
    // 存储购物车商品
    cararr:JSON.parse(localStorage.getItem("cararr")) || []
  },
  mutations: {
    //   添加商品到购物车
    addcar(state, item) {
      // 商品名字和规格是否已存在
      let goods = state.cararr.find(
        v => v.name == item.name && v.guige == item.guige
      );
      if (goods) {
        goods.num += item.num;
      } else {
        state.cararr.push({
          name: item.name,
          kouwei: item.kouwei,
          jieshao: item.jieshao,
          price: item.price,
          guige: item.guige,
          num: item.num
        });
      }
      localStorage.setItem("cararr", JSON.stringify(state.cararr));
    },
    jian(state, index) {
      if (state.cararr[index].num > 1) {
        state.cararr[index].num--;
        localStorage.setItem("cararr", JSON.stringify(state.cararr));
      } else {
        state.cararr.splice(index, 1);
        localStorage.setItem("cararr", JSON.stringify(state.cararr));
      }
    },
    add(state, index) {
      state.cararr[index].num++;
      localStorage.setItem("cararr", JSON.stringify(state.cararr));
    },
    // 删除商品
    deletes(state, index) {
      state.cararr.splice(index, 1);
      localStorage.setItem("cararr", JSON.stringify(state.cararr));
    }
  },
  //定义取数据
  getters: {
    allnum(state) {
      let allnums = 0;
      for (let i = 0; i < state.cararr.length; i++) {
        allnums += state.cararr[i].num;
      }
      return allnums;
    },
    allprice(state) {
      let allprices = 0;
      for (let i = 0; i < state.cararr.length; i++) {
        allprices +=
          state.cararr[i].num * state.cararr[i].price * state.cararr[i].guige;
      }
      return allprices;
    }
  },
  actions: {}
});

export default store;
