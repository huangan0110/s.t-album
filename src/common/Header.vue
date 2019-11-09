<template>
  <div class="header clearfix">
        <div class="left">
            <img src="../assets/img/logo.png" alt="">
            <div class="link">
                <a href="http://www.baidu.com">风景</a>
                <a href="http://www.baidu.com">人物</a>
                <a href="http://www.baidu.com">城市</a>
                <a href="http://www.baidu.com">壁纸</a>
                <a href="http://www.baidu.com">更多</a>
            </div>
        </div>
       <div class="right">
           <i class="el-input__icon el-icon-search icon" ></i>
            <div class="search">
                <el-input
                    placeholder="请输入搜索内容"
                    v-model="searchData"
                    size="mini"
                    > 
                </el-input>
            </div>
            <div class="unlogin" v-if="false" >
                <span @click="login">登 录</span><span> | </span><span @click="register">注 册</span>
            </div>
            <div class="login" v-if="true">
                    <img src="../assets/img/固定图1.jpg" alt="">
                    <el-dropdown @command="handleCommand">
                    <span class="el-dropdown-link">
                        会员昵称的昵称<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown" >
                        <el-dropdown-item command="/user/777">个人中心</el-dropdown-item>
                        <el-dropdown-item>我的好友</el-dropdown-item>
                        <el-dropdown-item>我的关注</el-dropdown-item>
                        <el-dropdown-item>粉丝管理</el-dropdown-item>
                        <el-dropdown-item>会员充值</el-dropdown-item>
                        <el-dropdown-item divided>退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                    </el-dropdown>
            </div>
       </div>
       <Register ref="register"></Register>
       <Login ref="login"></Login>
    </div>
</template>

<script>
import Register from './Register'
import Login from './Login'
export default {
    components: {
        Register,
        Login
    },
    data() {
        return {
            searchData:'',
        }
    },
    methods: {
        register(){
            this.$refs.register.open();
        },
        login(){
            this.$refs.login.open();
        },
        handleCommand(url){
            let routeUrl = this.$router.resolve({
                path: url
            });
            window.open(routeUrl.href,'_blank');
        }
    }
}
</script>

<style lang="scss"> 

.header {
    position: fixed !important;
    z-index: 1200;
    min-width: 960px;
    height: 40px;
    width: 100%;
    background-color: #333;
    top:0;
   
    .left {
        display: inline;
        float: left;
        height: 40px;
        margin-left: 50px;
        img {
        width: 60px;
        height: 30px;
        margin-top:5px;
        }
        .link {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            margin-left: 100px;
            a{
                font-size: 16px;
                font-weight: 300;
                font-family:Arial, Helvetica, sans-serif;
                color: #fff;
                padding: 12px 15px 9px 15px;
                text-decoration: none;
                transition: all linear 0.3s;
            }
            a:hover {
                color: #ffd04b;
                background-color: rgba(0, 0, 0, 0.4);
            }
        }
    }
    
  
    .right {
        display: inline;
        position: relative;
        float: right;
        width: 420px;
        height: 40px;
        margin-right: 50px;
        .icon {
            font-size: 20px;
            position: absolute;
            color:#fff;
        }
        .search {
            position: absolute;
            left: 30px;
            top: 50%;
            transform: translateY(-50%);
            .el-input__inner{
                border: 1px solid #333;
                outline: none;
                letter-spacing:1px;
            }
            
        }
        .login {
            
            cursor: pointer;
            color: #fff;
            font-size: 13px;
            position: absolute;
            padding: 5px 10px;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            transition: all linear 0.3s;
            .el-dropdown {
                color: #fff;
            }
            img {
                border-radius: 50%;
                width: 30px;
                height: 30px;
                vertical-align: middle;
            }
        }
        .unlogin{
            cursor: pointer;
            color: #fff;
            position: absolute;
            font-size: 13px;
            top: 50%;
            transform: translateY(-50%);  
            right: 0;
            padding: 10px 5px;
            span:first-child:hover {
                color: #ffd04b;
            }
            span:last-child:hover {
                color: #ffd04b;
            }
        }
        .login:hover {
            background-color: rgba(0, 0, 0, 0.4);
        }
    }
}
</style>