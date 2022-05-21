// 該文件用於創建Vuex中 核心的store
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// actions響應組件中的動作
const actions = {
    // jia(context, value) {
    //     context.commit("JIA", value);
    // },
    // jian(context, value) {
    //     context.commit("JIAN", value);
    // },
    jiaOdd(context, value) {
        if (context.state.sum % 2) {
            context.commit("JIA", value);
            // context.dispatch("demo", value)
        }
    },
    jiaWait(context, value) {
        setTimeout(() => {
            context.commit("JIA", value);
        }, 500)
    },
}

// mutations操作數據(state)
const mutations = {
    JIA(state, value) {
        state.sum += value;
    },
    JIAN(state, value) {
        state.sum -= value;
    }
}

// state存儲數據
const state = {
    sum: 0,
    school: "尚硅谷",
    subject: "前端",
}

// 將state中的數據進行加工
const getters = {
    bigSum(state) {
        return state.sum * 10;
    }
}

// 創建store
const store = new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})

// 導出store
export default store