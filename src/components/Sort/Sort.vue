<template>
  <div class="sort">
        <Header></Header>
        <div class="center">
            <div class="top">
                <ul>
                    <li>风景(1233434)</li>
                    <li>自然(999)</li>
                    <li>建筑(3412)</li>
                    <li>夜景(3412)</li>
                    <li>旅行(3412)</li>
                    <li>人物(3412)</li>
                    <li>写真(3412)</li>
                    <li>美女(3412)</li>
                    <li>时尚(3412)</li>
                    <li>婚纱(3412)</li>
                    <li>城市(3412)</li>
                    <li>花朵(3412)</li>
                    <li>宠物(3412)</li>
                    <li>静景(3412)</li>
                    <li>特写(3412)</li>
                    <li>壁纸(3412)</li>
                    <li>动物(3412)</li>
                    <li>黑白(3412)</li>
                    <li>体育(3412)</li>
                    <li>汽车(3412)</li>
                </ul>
            </div>
        </div>
  </div>
</template>

<script>
import Header from '@/common/Header'
export default {
    components: {
        Header,
    }
}
</script>

<style lang="scss">
.sort {
    .center {
        width: 1200px;
        height: 500px;
        margin: 0 auto;
        margin-top: 40px;
        background-color: pink;
        .top {
            width: 600px;
            height: 300px;
            background-color: #fff;

            ul li {
                float: left;
                list-style: none;
                margin-right: 25px;
                margin-bottom: 10px;
                color: #555;
                font-size: 12px;
                width: 100px;
                height: 30px;
                overflow: hidden;
            }
            ul li:nth-child(5n) {
                margin-right: 0;
            }
            ul li:nth-child(5n+1) {
                font-size: 14px;
                color: #333;
                font-family: 'Microsoft YaHei';
                font-weight: bold;
            }
            ul li:hover {
                cursor: pointer;
                color: #ff4b4b;
            }
        }
    }
}
</style>