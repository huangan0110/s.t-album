<template>
    <div class="footer">
        <div class="footer-content">
            <img src="../assets/img/logo.png" alt />
            <span>本样板的所有内容，包括文字、图片,均为原创。对未经许可擅自使用者，本公司保留追究其法律责任的权利。</span>
            <br />
            <span>copyright by s.t Album</span>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
    width: 100%;
    height: 100px;
    background-color: #282c31;
    position: relative;
    .footer-content {
        position: absolute;
        width: 800px;
        height: 100px;
        left: 50%;
        transform: translateX(-50%);

        img {
            height: 40px;
            position: absolute;
            top: 20px;
        }

        span {
            position: absolute;
            color: #fff;
            font-size: 14px;
            top: 20px;
            left: 120px;
        }
        span:last-child {
            top: 60px;
        }
    }
    // img {
    //     position: absolute;
    //     left: 40px;
    //     top: 20px;
    //     height: 40px;
    //     vertical-align: middle;
    // }
    // span {
    //     font-weight: 300;
    //     font-size: 14px;
    //     width: 800px;
    //     position: absolute;
    //     top: 25px;
    //     left: 150px;
    //     color: #fff;
    // }
    // span:last-child {
    //     position: absolute;
    //     top: 60px;
    //     left: 150px;
    //     color: #fff;
    // }
}
</style>