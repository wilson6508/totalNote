export const hunhe = {
    methods: {
        showName() {
            alert(this.name);
        },
    },
    mounted() {
        console.log("你好啊");
    },
}

export const hunhe2 = {
    data() {
        return {
            x: 100,
            y: 20,
        }
    }
}

/*

把多個組件共用的配置 > 提取成一個混入對象

衝突的data, 以.vue為主.
衝突的生命週期, 都會觸發, mixin先觸發.

*/