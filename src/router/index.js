import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Submission from '@/components/Submission/Submission'
import User from '@/components/User/User'
import Setting from '@/components/UserSetting/Setting'
import EditInfo from '@/components/UserSetting/EditInfo/EditInfo'
import EditFriend from '@/components/UserSetting/EditFriend/EditFriend'
import EditAttention from '@/components/UserSetting/EditAttention/EditAttention'
import VipRecharge from '@/components/UserSetting/VipRecharge/VipRecharge'
import Album from '@/components/User/Album/Album'
import Friend from '@/components/User/Friend/Friend'
import Sort from '@/components/Sort/Sort'
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
            path: '/submission',
            name: 'Submission',
            component: Submission
        },
        {
            path: '/sort',
            name: 'Sort',
            component: Sort
        },
        {
            path: '/setting',
            name: 'Setting',
            component: Setting,
            children:[{
                    path:'/edit_info',
                    name:'EditInfo',
                    component:EditInfo
                },
                {
                    path:'/edit_friend',
                    name:'EditFriend',
                    component:EditFriend
                },
                {
                    path:'/edit_attention',
                    name:'EditAttention',
                    component:EditAttention
                },
                {
                    path:'/vip_recharge',
                    name:'VipRecharge',
                    component:VipRecharge
                },
            ]
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