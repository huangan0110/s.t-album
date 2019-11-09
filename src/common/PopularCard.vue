<template>
  <div class="card">
    <img src="../assets/img/固定图2.jpg" alt="">
    <span>假装在东京假装在东京</span>
    <div class="like_look">
      <div class="like">
        <i class="el-icon-view"></i>
        <span>123.4k</span>
      </div>
      <div class="look">
        <i class="el-icon-star-off"></i> 
        <span>123K</span>
      </div>
      <div class="comment">
        <i class="el-icon-chat-dot-square"></i> 
        <span>123k</span>
      </div>
    </div>
    <div class="person">
      <img src="../assets/img/固定图2.jpg" alt="">
      <span>这是用户的昵称</span>
      <span>2个月前</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.card {
    position: relative;
    width: 228px;
    height: 280px;
    background-color: #fff;
    border-radius: 5px;
    overflow: hidden;
    
    img {
      width: 228x;
      height: 160px;
      object-fit: cover;
    }
    span {
      color: #333;
      padding-left: 10px;
      font-size: 13px;
      font-weight: 400;
      font-family: 'Microsoft YaHei', '\5FAE\8F6F\96C5\9ED1', Arial;
    }
    
    .like_look {
      position: relative;
      line-height: 20px;
      margin-top: 10px;
      padding-bottom: 35px;
      border-bottom: 1px solid #e9e9e9;
      .like {
        position: absolute;
        left: 0;
      }
      .look {
        position: absolute;
        left: 80px;
        display: inline-block;
      }
      .comment {
        position: absolute;
        left: 150px;
      }
      span{
        font-size: 12px;
        padding-left: 2px;
        color: #999;
        font-family: 'Microsoft YaHei', '\5FAE\8F6F\96C5\9ED1', Arial;
      }
      i {
        padding-left: 10px;
        color: #999;
      }
     
    }
    .person {
      margin-top: 10px;
      padding-left: 5px;
      img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        vertical-align: middle;
      }
      img:hover {
        cursor: pointer;
      }
      span {
        font-size: 12px;
        padding-left: 2px;
        color: #999;
        font-family: 'Microsoft YaHei', '\5FAE\8F6F\96C5\9ED1', Arial;
      }
      span:hover {
        cursor: pointer;
        color: #409EFF
      }
      span:last-child {
        float: right;
        margin: 6px;
        margin-right: 5px;
      }
      span:last-child:hover {
        cursor: pointer;
        color: #999;
      }
    }
}
</style>