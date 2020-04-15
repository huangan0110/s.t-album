<template>
    <div class="edit-info">
        <div class="header-card">
            编辑资料
        </div>
        <div class="center-card">
            <div class="center-top">
                <i class="el-icon-postcard"></i> 基本信息
            </div>
            <div class="center-center">
                <div class="avatar">
                    <span>头像 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><img src="../../../assets/img/default-avatar.png" alt=""> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>修改</span>
                </div>
                <div class="info">
                    <ul>
                        <li>昵称</li>
                        <li>这里是昵称</li>
                        <li><span @click="openDialog1()">修改</span></li>
                    </ul>
                    <ul>
                        <li>手机号码</li>
                        <li>1235678465</li>
                        <li><span @click="openDialog2()">修改</span></li>
                    </ul>
                    <ul>
                        <li>密码</li>
                        <li>**********</li>
                        <li><span @click="openDialog3()">修改</span></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="bottom-card">
            <div class="bottom-top">
                <i class="el-icon-setting"></i> 权限管理
            </div>
        </div>
        <el-dialog
        :lock-scroll="false"
        title="修改昵称"
        :visible.sync="nickNameDialog"
        width="400px"
        :before-close="handleClose1">
        <span style="font-size:14px; color:#999">请输入新的昵称:</span><br>
        <el-input v-model="input" placeholder="请输入昵称" size="small"></el-input>
        <span slot="footer" class="dialog-footer">
            <el-button @click="nickNameDialog = false" size="mini">取 消</el-button>
            <el-button type="primary" @click="nickNameDialog = false" size="mini" id="sure">确 定</el-button>
        </span>
        </el-dialog>
        <el-dialog
        :lock-scroll="false"
        title="修改电话号码"
        :visible.sync="phoneDialog"
        width="400px"
        :before-close="handleClose2">
        <span style="font-size:14px; color:#999">请输入新的号码:</span><br>
        <el-input v-model="input" placeholder="请输入号码" size="small"></el-input>
        <span slot="footer" class="dialog-footer">
            <el-button @click="phoneDialog = false" size="mini">取 消</el-button>
            <el-button type="primary" @click="phoneDialog = false" size="mini" id="sure">确 定</el-button>
        </span>
        </el-dialog>
        <el-dialog
        :lock-scroll="false"
        title="修改密码"
        :visible.sync="passwordDialog"
        width="400px"
        :before-close="handleClose3">
        <span style="font-size:14px; color:#999">请输入新旧密码:</span><br>
        <el-input v-model="input" placeholder="请输入旧密码" size="small"></el-input>
        <el-input v-model="input" placeholder="请输入新密码" size="small"></el-input>
        <el-input v-model="input" placeholder="请输入再次输入新密码" size="small"></el-input>
        <span slot="footer" class="dialog-footer">
            <el-button @click="passwordDialog = false" size="mini">取 消</el-button>
            <el-button type="primary" @click="passwordDialog = false" size="mini" id="sure">确 定</el-button>
        </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nickNameDialog:false,
            phoneDialog:false,
            passwordDialog:false
        }
    },
    methods: {
        openDialog1() {
            this.nickNameDialog = true;
        },
        openDialog2() {
            this.phoneDialog = true;
        },
        openDialog3() {
            this.passwordDialog = true;
        },
        handleClose1(done) {
            this.nickNameDialog = false;
        },
        handleClose2(done) {
            this.phoneDialog = false;
        },
        handleClose3(done) {
            this.passwordDialog = false;
        }
    }
}
</script>

<style lang="scss">
    .edit-info {
        position: relative;

        .header-card {
            box-shadow:3px 3px 10px #ddd;
            height: 40px;
            background-color: #fff;
            line-height: 40px;
            padding-left: 20px;
            border-left: 5px solid #67C23A;
            border-radius: 3px;
        }
        .center-card {
            box-shadow:3px 3px 10px #ddd;
            margin-top: 10px;
            padding: 25px;
            background-color: #fff;
            border-radius: 3px;
            height: 290px;
            .center-top {
                height: 40px;
                line-height: 25px;
                border-bottom: 1px solid #ddd;
                i {
                    font-size: 19px;
                    color: #409EFF;
                }
            }
            .center-center {
                .avatar {
                    margin-top: 30px;
                    img {
                        width: 90px;
                        height: 90px;
                        border-radius: 50%;
                        border: 1px solid #ddd;
                        vertical-align: middle;
                    }
                    span {
                        font-size: 14px;
                        font-family: 'Microsoft Yahei';
                        color: #999;
                    }
                    span:nth-child(3) {
                        color: #ff4b4b;
                    }
                }
                .info {
                    margin-top: 20px;
                    background-color: pink;
                    width: 280px;
                    ul {
                        list-style: none;
                        color:#999;
                        font-size: 14px;
                        font-family: 'Microsoft Yahei';
                        
                        li:nth-child(1){
                            width: 70px;
                            float: left;
                            margin-bottom: 20px;
                        }
                        li:nth-child(2){
                            width: 140px;
                            float: left;
                            overflow: hidden;
                            margin-bottom: 20px;
                            color: #333;
                        }
                        li:nth-child(3){
                            width: 70px;
                            float: left;
                            margin-bottom: 20px;
                            
                            span {
                                color: #ff4b4b
                            }
                        }
                        li:nth-child(3) span:hover {
                            cursor: pointer;
                            border-bottom: 1px solid #ff4b4b;
                        }
                    }
                }
            }
        }
        .bottom-card {
            box-shadow:3px 3px 10px #ddd;
            background-color: #fff;
            border-radius: 3px;
            margin-top: 10px;
            height: 200px;
            padding: 25px;
            margin-bottom: 10px;
            .bottom-top {
                height: 40px;
                line-height: 25px;
                border-bottom: 1px solid #ddd;
                i {
                    font-size: 19px;
                    color: #E6A23C;
                }
            }
        }
        .el-dialog__header {
            border-bottom: 1px solid #ddd;
        }
        .el-dialog__body {
            padding: 15px 100px 15px 20px;
            .el-input {
                margin-top: 10px;
            }
            span {
                color: #fff;
            }
        }
    }
</style>