export default {
    install(Vue, x, y, z) {
        console.log(x, y, z);

        Vue.prototype.hello = () => {
            alert('你好啊')
        }

        Vue.prototype.testProperty = 5566

        console.log(Vue.prototype);

        Vue.filter('mySlice', function (value) {
            return value.slice(0, 4);
        })

        Vue.mixin({
            data() {
                return {
                    x: 100,
                    y: 20
                }
            }
        })
    }
}