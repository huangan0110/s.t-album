<template>
  <div class="album clearfix">
    <div class="album-top">
      <el-button type="success">上传照片</el-button>
      <el-button type="success">创建相册</el-button>
      <el-button type="success">展示设置</el-button>
    </div>
    <div class="content clearfix">
      <ul>
        <li>
          <AlbumCard></AlbumCard>
        </li>
        <li>
          <AlbumCard></AlbumCard>
        </li>
        <li>
          <AlbumCard></AlbumCard>
        </li>
        <li>
          <AlbumCard></AlbumCard>
        </li>
        <li>
          <AlbumCard></AlbumCard>
        </li>
        <li>
          <AlbumCard></AlbumCard>
        </li>
        <li>
          <AlbumCard></AlbumCard>
        </li>
        <li>
          <AlbumCard></AlbumCard>
        </li>
        <li>
          <AlbumCard></AlbumCard>
        </li>
        <li>
          <AlbumCard></AlbumCard>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import AlbumCard from "../../../common/AlbumCard";
export default {
  components: {
    AlbumCard
  }
};
</script>

<style scoped lang="scss">
.album {
  position: absolute;
  width: 1200px;
  left: 50%;
  transform: translateX(-50%);
  top: 240px;
  background-color: #e6e1d3;
  span {
    color: #666;
    font-size: 14px;
  }
  .content {
    width: 1100px;
    margin: 0 auto;
    margin-top: 20px;
    position: relative;
    ul li {
      background-color: #fff;
      width: 180px;
      height: 210px;
      padding: 5px;
      margin-right: 20px;
      margin-bottom: 20px;
      box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
      float: left;
      overflow: hidden;
    }
    ul li:nth-child(5n) {
      margin-right: 0;
    }
  }
}
.clearfix:before,
.clearfix:after {
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
