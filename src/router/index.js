import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Header from '@/common/Header'
import User from '@/components/User/User'
import Album from '@/components/User/Album/Album'
import Friend from '@/components/User/Friend/Friend'
Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/header',
            name: 'Header',
            component: Header
        },
        {
            path: '/user/:id',
            name: 'User',
            component: User,
            children: [{
                    path: '/album',
                    name: 'Album',
                    component: Album
                },
                {
                    path: '/friend',
                    name: 'Friend',
                    component: Friend
                },
            ]
        }
    ]
})