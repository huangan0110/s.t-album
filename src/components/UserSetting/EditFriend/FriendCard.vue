<template>
    <div class="friend-card">
        <div class="left">
            <img src="../../../assets/img/default-avatar.png" alt="">
        </div>
        <div class="right">
            <ul>
                <li>用户昵称用户昵称</li>
                <li>关注 <span> 10000 </span> | 粉丝 <span> 10000 </span>  | 投稿 <span> 1213 </span></li>
                <li>备注 <span>二狗子</span></li>
            </ul>
        </div>
        <div class="button">
            <el-button type="danger" size="medium">删除好友</el-button>
            <el-button type="warning" size="medium">修改备注</el-button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.friend-card {
    height: 140px;
    box-shadow:3px 3px 10px #ddd;
    border-radius: 5px;
    position: relative;
    .left {
        width: 120px;
        height: 140px;
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
        height: 140px;
        // background-color: purple;
        position: absolute;
        left: 120px;
        top: 0;
        text-align: left;
        ul {
            margin-top: 30px;
        }
        ul li {
            list-style: none;
            margin-bottom: 10px;
            font-size: 14px;
            color: #666;
        }
        ul li:nth-child(1) {
            color: #333;
            font-size: 16px;
            // font-family: ''
            font-weight: bold;
        }
        span {
            color: #ff4b4b;
            font-size: 14px;
        }
    }
    .button {
        position: absolute;
        right: 20px;
        top: 50px;
    }
}
</style>