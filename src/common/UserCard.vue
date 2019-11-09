<template>
  <div class="user_card">
      <img src="../assets/img/固定图2.jpg" alt="">
      <p>这里是用户名</p>
  </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.user_card {
    display: inline-block;
    position: relative;
    width: 120px;
    height: 120px;
    background-color: #fff;
    text-align: center;
    img {
        
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    p {
        font-size: 13px;
        color: #666;
        font-family: 'Microsoft YaHei', '\5FAE\8F6F\96C5\9ED1', Arial;
        
    }
    img:hover {
        cursor: pointer;
    }
    p:hover {
        color: #409EFF;
        cursor: pointer;
    }
}
</style>