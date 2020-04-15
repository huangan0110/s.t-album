<template>
    <div class="edit-friend">
        <div class="header-card">
            好友管理
        </div>
        <div class="center-card">
            <div class="center-top">
                <i class="el-icon-umbrella"></i> 我的好友 &nbsp;&nbsp;<span>1000个</span>
            </div>
            <div class="center-center clearfix">
                <ul>
                    <li><FriendCard></FriendCard></li>
                    <li><FriendCard></FriendCard></li>
                    <li><FriendCard></FriendCard></li>
                    <li><FriendCard></FriendCard></li>
                    <li><FriendCard></FriendCard></li>
                    <li><FriendCard></FriendCard></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import FriendCard from './FriendCard'
export default {
    components: {
        FriendCard
    }
}
</script>

<style lang="scss">
.edit-friend {
    position: relative;
    .header-card {
        box-shadow:3px 3px 10px #ddd;
        height: 40px;
        background-color: #fff;
        line-height: 40px;
        padding-left: 20px;
        border-left: 5px solid #67C23A;
        border-radius: 3px;
    }
    .center-card {
            box-shadow:3px 3px 10px #ddd;
            margin-top: 10px;
            padding: 25px;
            background-color: #fff;
            border-radius: 3px;
        .center-top {
            height: 40px;
            line-height: 25px;
            border-bottom: 1px solid #ddd;
            i {
                font-size: 19px;
                color: #409EFF;
            }
            span {
                color: #999;
            }
        }
        .center-center {
            margin-top: 20px;
            ul {
                list-style: none;
                li {
                    margin-bottom: 10px;
                }
            }
        }
    }
}
.clearfix:before, .clearfix:after {
    content: "";
    /* 触发BFC, 防止外边距合并 */
    display: table;  
} 
.clearfix:after {
    clear: both;
}
.clearfix {
    /* *代表    ie 6 7 能识别的符号  带*的属性，只有IE67执行   zoom代表ie67清除浮动的方法 */
    *zoom: 1;
}
</style>