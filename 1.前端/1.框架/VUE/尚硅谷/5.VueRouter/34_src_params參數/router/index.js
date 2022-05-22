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
                        path: "detail/:id/:title", // 用佔位符聲明
                        component: Detail,
                    }, ],
                }
            ],
        }
    ]
})