<template>
  <div class="user">
    <div class="back_pic">
      <img src="../../assets/img/user_bg3.jpg" alt="">
    </div>
    <div class="center">
      <div class="top clearfix">
        <div class="top_left">
          <img src="../../assets/img/固定图1.jpg" alt="">
        </div>
        <div class="top_center">
          <span>用户名用户昵称</span>
          <div class="progress">
            <span>Lv.9</span>&nbsp;&nbsp;
            <span>123</span>
            <div class="bar">
              <el-progress :percentage="50"></el-progress>
            </div>
          </div>
        </div>
        <div class="top_right">
          <span>关注 </span><span>123</span><span> | </span><span>粉丝 </span><span>123</span>
        </div>
        <div class="top_bottom">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="相册" name="/album"></el-tab-pane>
            <el-tab-pane label="投稿" name="/album1"></el-tab-pane>
            <el-tab-pane label="好友" name="/friend"></el-tab-pane>
            <el-tab-pane label="关注" name="/friend1"></el-tab-pane>
          </el-tabs>
        </div>
      </div>
      <!-- <div class="content"> -->
       
      <!-- </div> -->
    </div>
     <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
       activeName: '/album',
    }
  },
  created() {
    this.$router.push('/album')
  },
  methods: {
    format(percentage) {
      return percentage === 100 ? '满' : `${percentage}%`;
    },
    goPath(path) {
      this.$router.push(path)
    },
    handleClick(tab, event) {
      this.$router.push(tab.name);
      console.log(tab.name);
    }
  }
}
</script>

<style  lang="scss">
.user {
  margin-top: 40px;
  .back_pic {
    img {
      width: 100%;
      height: 700px;
    }
  }
  .center {
    position: absolute;
    width: 1200px;
    height: 1000px;
    top: 80px;
    left: 50%;
    transform: translateX(-50%);

    .top {
      .top_left {
        float: left;
        width: 130px;
        height: 130px;
        padding: 3px;
        background-color: #f6f6f6;
        border: 1px solid #eee;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .top_center {
        height: 100px;
        width: 370px;
        float: left;
        margin-left: 20px;
        padding: 10px;
        span {
          color: #8c8262;
          font-size: 18px;
          font-weight: 400;
          text-shadow: 1px 1px 1px rgba(0,0,0,.2);
        }
        .progress {
          height: 30px;
          margin-top: 15px;
          span:first-child {
            color: #ff4b4b;
            font-family:fantasy;
          }
          span:nth-child(2) {
            color: #606266;
            font-size: 14px;
            font-family: 'MicroSoft YaHei';
            text-shadow: none;
          }
          .bar {
            margin-top: 3px;
            float: right;
            width: 300px;
          }
        }
      }
      .top_right {
        color: #606266;
        font-size: 16px;
        width: 200px;
        height: 30px;
        float: right;
        margin-top: 50px;
      }
      .top_bottom {
        width: 500px;
        height: 50px;
        position: absolute;
        margin-top: 100px;
        left: 200px;

        .el-tabs__nav-wrap::after {
          height: 0;
        }
        .el-tabs__item.is-active {
          color: #ff4b4b;
          font-size: 18px;
          font-weight: bold;
        }
        .el-tabs__active-bar {
          background-color: #ff4b4b;
        }
        .el-tabs__item:hover {
          color: #ff4b4b;
        }
      }
    }

    // .content {
    //   margin-top: 10px;
    //   width: 1200px;
    //   background-color: #f8f6f2;
    // }
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