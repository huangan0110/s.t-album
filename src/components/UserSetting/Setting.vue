<template>
    <div class="setting">
        <div class="setting-center">
            <div class="info-card">
                <div class="card-top">
                    <img src="../../assets/img/default-avatar.png" alt="">
                    <b>用户昵称用户昵称</b>
                    <span>Lv.9</span>
                </div>
                <div class="card-bottom">
                    <div class="left">
                        <br><span>粉丝</span><br>
                        <span>12</span>
                    </div>
                    <div class="right">
                        <br><span>粉丝</span><br>
                        <span>12</span>
                    </div>
                </div>
            </div>
            <div class="menu-card">
                <div @click="goPath('/edit_info')">编辑资料</div>
                <div @click="goPath('/edit_friend')">好友管理</div>
                <div @click="goPath('/edit_info')">粉丝管理</div>
                <div @click="goPath('/edit_attention')">关注管理</div>
                <div @click="goPath('/vip_recharge')">会员充值</div>
            </div>
            <div class="setting-right">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods:{
        goPath(path) {
            this.$router.push(path)
        }
    },
    created() {
        this.$router.push('/edit_info')
    }
}
</script>

<style lang="scss">
body {
    background-color: #f3f3f3;
}
.setting {
    background-color: #f3f3f3;
    // display: flex;
    height: calc(100% - 40px);
    // span {
    //     color: #333;
    // }
    .setting-center {
        width: 1200px;
        min-width: 1200px;
        margin: 0 auto;
        position: relative;
        margin-top: 40px;
        padding: 20px;
        .info-card {
            position: fixed;
            height: 270px;
            width: 260px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow:3px 3px 10px #ddd;
            .card-top {
                height: 189px;
                border-bottom: 1px solid #ddd;
                text-align: center;
                position: relative;
                img {
                    width: 90px;
                    height: 90px;
                    border-radius: 50%;
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    top: 30px;
                    border: 1px solid #ddd;
                }
                b,span{
                    position: absolute;
                    top: 130px;
                    left: 50%;
                    transform: translateX(-50%);
                    font-size: 14px;
                    font-family: 'Microspft Yahei';
                }
                span {
                    top: 150px;
                }
            }
            .card-bottom {
                position: relative;

                .left {
                    position: absolute;
                    width: 130px;
                    height: 80px;
                    // background-color: pink;
                    border-right: 1px solid #ddd;
                    text-align: center;
                    span:nth-child(2) {
                        color: #999;
                        font-size: 14px;
                        font-family: 'Microsoft YaHei'
                    }
                }
                .right {
                    position: absolute;
                    width: 130px;
                    height: 80px;
                    right: 0;
                    text-align: center;
                    span:nth-child(2) {
                        color: #999;
                        font-size: 14px;
                        font-family: 'Microsoft YaHei'
                    }
                }
            }
        }
        .menu-card {
            box-shadow:3px 3px 10px #ddd;
            width: 220px;
            border-radius: 10px;
            // height: 180px;
            background-color: #fff;
            margin-top: 20px;
            position: fixed;
            padding: 20px;
            text-align: left;
            top: 360px;

            div {
                width: 180px;
                height: 40px;
                line-height: 40px;   
                color: #333;
                font-family: 'Microsoft YaHei';
                font-size: 14px;
                padding-left: 20px;
                border-radius: 3px;
            }
            div:hover {
                background-color: #f8f8f8;
                color: #ff6862;
            }
        }
        .setting-right {
            width: 900px;
            position: absolute;
            top: 20px;
            right: 0;
            border-radius: 10px;
            // background-color: #fff;
        }
    }
}
</style>