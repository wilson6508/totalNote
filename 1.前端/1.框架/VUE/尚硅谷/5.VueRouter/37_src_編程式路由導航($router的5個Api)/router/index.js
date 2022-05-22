// 該文件用於創建整個應用的路由器
import VueRouter from 'vue-router'
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

// 創建並暴露一個路由器
export default new VueRouter({
    routes: [{
            name: "guanyu",
            path: "/about",
            component: About,
        },
        {
            path: "/home",
            component: Home,
            children: [{
                    path: "news", // 不用加斜槓
                    component: News,
                },
                {
                    path: "message",
                    component: Message,
                    children: [{
                        name: "xiaoxi",
                        // path: "detail/:id/:title", // 第2種
                        path: "detail", // 第3種
                        component: Detail,
                        // 第1種 : 以props形式, 傳(寫死的)對象給Detail組件
                        // props: {
                        //     a: 1,
                        //     b: 'hello'
                        // }
                        // 第2種 : 為真, 以props形式, 傳params參數給Detail組件
                        // props: true
                        // 第3種 : 回調函數(程序員寫的函數, 沒親自調用, vue幫忙調的)
                        props($route) {
                            return {
                                id: $route.query.id,
                                title: $route.query.title,
                            }
                        }
                        // 解構賦值第1層 props({query}) { return { ...query } }
                        // 解構賦值第2層 props({query: {id, title}}) { return { id, title } }
                    }, ],
                }
            ],
        }
    ]
})