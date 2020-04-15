<template>
    <div class="attention-card">
        <div class="left">
            <img src="../../../assets/img/default-avatar.png" alt="">
        </div>
        <div class="right">
            <br>
            <span>用户昵称用户昵称</span><br><br>
            <span>关注 123</span><span> | </span><span>粉丝 123</span><span> | </span><span>投稿 123</span>
            <el-button type="warning" size="mini">取消关注</el-button> <el-button type="success" size="mini">申请好友</el-button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.attention-card {
    width: 380px;
    height: 140px;
    background-color: #fff;
    box-shadow:3px 3px 10px #ddd;
    border-radius: 5px;
    position: relative;
    .left {
        width: 120px;
        height: 140px;
        border-right: 1px solid #eee;
        img {
            width: 80px;
            height: 80px;
            border: 1px solid #ddd;
            border-radius: 50%;
            margin-top: 30px;
            margin-left: 20px;
        }
    }
    .right {
        width: 240px;
        height: 140px;
        // background-color: purple;
        position: absolute;
        right: 0;
        top: 0;
        text-align: left;
        span {
            color: #666;
            font-size: 14px;
        }
        span:nth-child(2) {
            color:#333;
            font-size: 16px;
            font-family: 'Microsoft Yahei';
            margin-left: 10px;
        }
        span:nth-child(5) {
            margin-left: 10px;
        }
        .el-button {
            margin-top: 10px;
            margin-left: 10px;
            span {
                color: #fff;
            }
        }
    }
}
</style>