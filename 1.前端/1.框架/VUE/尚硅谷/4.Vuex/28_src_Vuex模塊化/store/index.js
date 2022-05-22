import Vue from 'vue'
import Vuex from 'vuex'
import student from "./student"
Vue.use(Vuex)

const countOptions = {
    namespaced: true,
    actions: {
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
    },
    mutations: {
        JIA(state, value) {
            state.sum += value;
        },
        JIAN(state, value) {
            state.sum -= value;
        },
    },
    state: {
        sum: 0,
        school: "尚硅谷",
        subject: "前端",
    },
    getters: {
        bigSum(state) {
            return state.sum * 10;
        }
    },
}

const personOptions = {
    namespaced: true,
    actions: {
        addPersonWang(context, value) {
            if (value.name.indexOf("王") === 0) {
                context.commit("ADD_PERSON", value);
            } else {
                alert('不姓王')
            }
        },
        // demo() {
        //     this.$store.dispatch("personAbout/addPersonServer")
        // }
        // addPersonServer(context) {
        //     axios.get("http://...").then(
        //         response => {
        //             context.commit("ADD_PERSON", { id:nanoid(), name:response.data  });
        //         },
        //         error => {
        //             console.log(error.message);
        //         }
        //     )
        // },
    },
    mutations: {
        ADD_PERSON(state, value) {
            state.personList.unshift(value);
        },
    },
    state: {
        personList: [{
            id: "001",
            name: "張三"
        }, ],
    },
    getters: {
        firstPersonName(state) { // personOptions.state
            return state.personList[0].name;
        }
    },
}

const store = new Vuex.Store({
    modules: {
        countAbout: countOptions,
        personAbout: personOptions,
        student,
    }
})

export default store