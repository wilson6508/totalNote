// 該文件用於創建整個應用的路由器
import VueRouter from 'vue-router'
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

// 創建並暴露一個路由器
const router = new VueRouter({
    routes: [{
            name: "guanyu",
            path: "/about",
            component: About,
            meta: {
                title: "關於"
            },
        },
        {
            name: "zhuye",
            path: "/home",
            component: Home,
            meta: {
                title: "主頁",
            },
            children: [{
                    name: "xinwen",
                    path: "news", // 不用加斜槓
                    component: News,
                    // meta為提供給程序員添加屬性的容器
                    meta: {
                        title: "新聞",
                        isAuth: true
                    },
                    // 獨享路由守衛
                    // 沒有afterEnter
                    // beforeEnter: (to, from, next) => {
                    //     if (localStorage.getItem("school") === "atguigu") {
                    //         next();
                    //     } else {
                    //         alert("無權限");
                    //     }
                    // }
                },
                {
                    name: "xiaoxi",
                    path: "message",
                    component: Message,
                    meta: {
                        title: "消息",
                        isAuth: true
                    },
                    children: [{
                        name: "xiangqing",
                        // path: "detail/:id/:title", // 第2種
                        path: "detail", // 第3種
                        component: Detail,
                        meta: {
                            title: "詳情",
                            isAuth: true
                        },
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
});

// // 全局前置路由守衛(初始化調用, 每次切換之前被調用)
// router.beforeEach((to, from, next) => {
//     // console.log(to, from);
//     // if (to.path === "/home/news" || to.path === "/home/message") {
//     // if (to.name === "xinwen" || to.name === "xiaoxi") {
//     if (to.meta.isAuth) {
//         if (localStorage.getItem("school") === "atguigu") {
//             next();
//         } else {
//             alert("無權限");
//         }
//     } else {
//         next();
//     }
// })

// 只有to from
// router.afterEach((to) => {
//     document.title = to.meta.title || "硅谷系統"; // index.html
// })

export default router;