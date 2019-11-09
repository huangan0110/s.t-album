<template>
  <div class="home">
        <!-- <Header></Header> -->
        <div class="center">
            <div class="lbt">
                <el-carousel :interval="4000" type="card" height="320px">
                    <el-carousel-item v-for="item in lbtList" :key="item.index">
                    <img :src="item.url" alt="">
                    </el-carousel-item>
                </el-carousel> 
            </div>
            <div class="recom_hd clearfix"  >
                <ul>
                    <li v-for="item in lbtList" :key="item.index"><img :src="item.url" alt=""></li>
                    
                </ul>
            </div>
            
            <!-- <div class="footer">123</div> -->
        </div>
        <div class="content">
            <div class="center">
                <div class="recom_title">
                    <h3>
                        <span class="line">line</span>
                        <b>热门推荐</b>
                    </h3>
                </div>
                <div class="recom_bd clearfix" > 
                    <ul> 
                        <li><PopularCard ></PopularCard></li>
                        <li><PopularCard ></PopularCard></li>
                        <li><PopularCard ></PopularCard></li>
                        <li><PopularCard ></PopularCard></li>
                        <li><PopularCard ></PopularCard></li>
                        <li><PopularCard ></PopularCard></li>
                        <li><PopularCard ></PopularCard></li>
                        <li><PopularCard ></PopularCard></li>
                        <li><PopularCard ></PopularCard></li>
                        <li><PopularCard ></PopularCard></li>
                        <li><PopularCard ></PopularCard></li>
                        <li><PopularCard ></PopularCard></li>
                        <li><PopularCard ></PopularCard></li>
                        <li><PopularCard ></PopularCard></li>
                        <li><PopularCard ></PopularCard></li>
                    </ul>
                </div>
                <div class="recom_bottom">
                    <span>~~~~~~~~~~ 我 是 有 底 线 的 哦 є(･◇･｡)э ~~~~~~~~~~~</span>
                </div>
                <div class="active_user">
                    <div class="active_title">
                        <h3>
                            <span class="line">line</span>
                            <b>本周活跃用户</b>
                        </h3>
                    </div>
                    <div class="user">
                        <UserCard v-for="item in 10" :key="item"></UserCard>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <img src="../../assets/img/logo.png" alt="">
            <span>本样板的所有内容，包括文字、图片,均为原创。对未经许可擅自使用者，本公司保留追究其法律责任的权利。</span><br>
            <span>copyright by s.t Album</span>
        </div>
    </div>
</template>

<script>
import Header from '@/common/Header'
import PopularCard from '@/common/PopularCard'
import UserCard from '@/common/UserCard'
export default {
    components: {
        Header,
        PopularCard,
        UserCard
    },
    data() {
        return {
            lbtList:[
                {
                    index:1,
                    url:require('../../assets/img/固定图1.jpg')
                },
                {
                    index:2,
                    url:require('../../assets/img/固定图2.jpg')
                },
                {
                    index:3,
                    url:require('../../assets/img/固定图4.jpg')
                },
                {
                    index:4,
                    url:require('../../assets/img/固定图5.jpg')
                },
                {
                    index:5,
                    url:require('../../assets/img/轮播图2.jpg')
                },
            ],
            searchData:'',   
        }
    },
    methods: {
        LoginRegister(){
            this.dialogVisible = true;
        },
    }
}
</script>
<style lang="scss">
.home {
    position: relative;
    .center {
        width: 1200px;

        // background-color: purple;
        margin: 0 auto;
        margin-top: 60px;
       .lbt {
           img {
               border-radius: 5px;
               width: 600px;
               height: 300px;
               object-fit: cover;
           }
           .el-carousel__indicators--outside {
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
           }
           .el-carousel__indicator--horizontal {
               padding: 5px 5px;
           }
           .el-carousel__indicator {
               background-color: rgba(0,0,0,0.1);
           }
       }
       .recom_hd ul li{
            margin-bottom: 20px;
            width: 228px;
            height: 130px;
            background-color: #fff;
            border-radius: 4px;
            overflow: hidden;
            box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
            float: left;
            margin-right: 15px;
            margin-top: 15px;
            transition: all linear 0.2s;
            img {
                width: 228x;
                height: 160px;
                object-fit: cover;
            }
        }
        .recom_hd ul li:hover {
            margin-top: 10px;
        }
        .recom_hd ul li:nth-child(5n) {
            margin-right: 0;
        }
        
    }
    .content {
        width: 100%;
        background-color: #f5f5f5;
        .center {
            margin: 0 auto;
            width: 1200px;
            padding-bottom: 30px;
            .recom_title,
            .active_title {
                h3 {
                    width: 100%;
                    height: 80px;
                    position: relative;
                    text-align: center;
                }
                .line {
                    width: 200px;
                    height: 1px;
                    background: #849ca7;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    margin: 0 0 0 -100px;
                    font-size: 0;
                    line-height: 200%;
                    overflow: hidden;
                }
                b {
                    font-size: 24px;
                    color: #849ca7;
                    line-height: 80px;
                    display: inline-block;
                    position: relative;
                    padding: 0 13px;
                }
            }
            .recom_title b {
                    background-color: #f5f5f5;
                }
            .active_title b {
                background-color: #fff;
            }
            .recom_bd {
                position: relative;
                ul li {
                    width: 228px;
                    height: 280px;
                    margin-right: 15px;
                    margin-bottom: 20px;
                    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2); 
                    float: left;
                    overflow: hidden;
                    
                }
                ul li:nth-child(5n){
                    margin-right: 0;
                }
             
            }
            .recom_bottom {
                margin-top: 10px;
                width: 100%;
                line-height: 20px;
                font-size: 14px;
                color: #777;
                font-weight: 400;
                font-family: 'Microsoft YaHei', '\5FAE\8F6F\96C5\9ED1', Arial;
                text-align: center;
                margin-bottom: 20px;
            }
            .active_user {
                width: 100%;
                height: 200px;
                background-color: #fff;
            }
        }
    }
    .footer {
        width: 100%;
        height: 100px;
        background-color: #282c31;
        position: relative;
        img {
            position: absolute;
            left: 40px;
            top:20px;
            height: 40px;
            vertical-align: middle;
        }
        span {
            font-weight: 300;
            font-size: 14px;
            width: 800px;
            position: absolute;
            top: 25px;
            left: 150px;
            color: #fff;
        }
        span:last-child {
            position: absolute;
            top: 60px;
            left: 150px;
            color: #fff;
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