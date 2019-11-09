<template>
  <div class="register_dialog">
        <el-dialog
        :modal-append-to-body='false'
        :lock-scroll="false"
        title="时光相册"
        :visible.sync="shwoRegister"
        width="400px"
        :before-close="handleClose"
        center>
        <div class="titleBox">
            <hr>
            <b>快速注册</b>
        </div>
        <div class="register_content">
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm"  class="demo-ruleForm">
            <el-form-item prop="email">
                <el-input v-model.number="ruleForm.email" placeholder="邮箱" size="medium"><i slot="prefix" class="el-input__icon el-icon-search"></i></el-input>
            </el-form-item>
            <el-form-item prop="pass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="密码" size="medium"><i slot="prefix" class="el-input__icon el-icon-search"></i></el-input>
            </el-form-item>
            <el-form-item prop="checkPass">
                <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" placeholder="重复密码" size="medium"><i slot="prefix" class="el-input__icon el-icon-search"></i></el-input>
            </el-form-item>
            <el-form-item prop="vcode">
                 <div class="vcode">
                    <el-input placeholder="验证码" v-model="ruleForm.vcode"  size="medium">
                        <i slot="prefix" class="el-input__icon el-icon-search"></i>
                    </el-input>
                    <button class="button" type="button" :class="{disabled: !this.canClick}" @click="countDown" :disabled="btnDisabled">
                    {{content}}
                    </button>
                </div>
            </el-form-item>
            <el-form-item>
                <button class="submit_btn" @click="submitForm('ruleForm')">注 册</button>
            </el-form-item>
            </el-form>    
        </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data() {
        var checkemail = (rule, value, callback) => {
            if (value === '') {
            callback(new Error('邮箱不能为空'));
            } else {
            if (value !== '') { 
                var reg=/^[A-Za-z0-9\u4e00-\u9fa5]+[a-zA-Z0-9_-]+[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
                if(!reg.test(value)){
                callback(new Error('请输入有效的邮箱'));
                }
            }
            callback();
            }
        };
        var validatePass = (rule, value, callback) => {
            if (value === '') {
            callback(new Error('请输入密码'));
            } else {
                if(value.length<6||value.length>16){
                    callback(new Error('请输入6-16位字符密码'));
                }else{
                    if (this.ruleForm.checkPass !== '') {
                        this.$refs.ruleForm.validateField('checkPass');
                    }   
                } 
            callback();
            }
        };
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
            callback(new Error('请再次输入密码'));
            } else if (value !== this.ruleForm.pass) {
            callback(new Error('两次输入密码不一致!'));
            } else if(value.length<6||value.length>16){
                callback(new Error('请输入6-16位字符密码'));
            }else{
                callback();
            }
        };
        var checkVcode = (rule, value, callback) => {
            if (!value) {
            return callback(new Error('验证码不能为空'));
            }else {
                callback();
            }
        };
        return {
            btnDisabled:false,
            shwoRegister:false,
            email:'',
            password:'',
            spassword:'',
            content: '发送验证码',  // 按钮里显示的内容
            totalTime: 10,    //记录具体倒计时时间
            canClick: true, //添加canClick
            ruleForm: {
            pass: '',
            checkPass: '',
            email: '',
            vcode:'',
            },
            rules: {
            pass: [
                { validator: validatePass, trigger: 'blur' }
            ],
            checkPass: [
                { validator: validatePass2, trigger: 'blur' }
            ],
            email: [
                { validator: checkemail, trigger: 'blur' }
            ],
            vcode: [
                { validator: checkVcode, trigger: 'blur' }
            ]
            }
        }
    },
    methods: {
        handleClose(){
            this.shwoRegister = false;
             this.$refs['ruleForm'].resetFields();
        },
        countDown () {
            if(this.canClick = true){
                console.log("111111");
            }
            if (!this.canClick) return  //改动的是这两行代码
            this.canClick = false
            this.btnDisabled = true
            this.content = this.totalTime + 's后重新发送'
            let clock = window.setInterval(() => {
            this.totalTime--
            this.content = this.totalTime + 's后重新发送'
            if (this.totalTime < 0) {
            window.clearInterval(clock)
            this.content = '重新发送验证码'
            this.totalTime = 10
            this.canClick = true  //这里重新开启
            this.btnDisabled = false
            }
            },1000)
        },
        open(){
            this.shwoRegister = true;
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
            if (valid) {
                alert('submit!');
            } else {
                console.log('error submit!!');
                
            }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
}
</script>

<style lang="scss">
.register_dialog{
    .el-dialog {
        border-radius: 8px;
    }
    .el-dialog__header{
        background-color: #fff8f7;
        border-radius: 8px 8px 0 0;
    }
    .el-dialog__headerbtn .el-dialog__close {
        border-radius: 50%;
        background-color: pink;
        color: #ff4b4b;
        padding: 2px;
    }
    .el-dialog__title {
        color: #ff4b4b;
    }
    .el-dialog__body {
        background-color: #fff;
        padding: none;
        margin: 0 30px;
    }
    .titleBox {
        text-align: center;
        position: relative;
        hr {
            width: 100%;
            height: 1px;
            border: none;
            background: #e3e3e3;
            position: absolute;
            top: 8px;
            left: 0; 
        }
        b {
            display: inline-block;
            background-color: #fff;
            position: relative;
            padding: 0 17px;
        }
    }
}
.register_content {
    position: relative;
    margin-top: 20px;
    .el-form-item {
        margin-top: 0;
    }
    .el-input {
        margin-top: 0px;   
    }
    .el-input__inner {
        border-radius: 0px;
    } 
    .el-input__inner:focus {
        border: 1px solid #ff4b4b;
    }
    .vcode {
        position: relative;
        margin-top: 0px;
        // margin-bottom: 10px;
        .disabled{
            outline: none;
            border: none;
            cursor: not-allowed; // 鼠标变化
            background-color: #ff6565;
        }
        .el-input {
            width: 150px;
            margin-top: 0;
        }
        .el-input__inner {
            outline: none;
        }
        
        .button {
            height: 36px;
            width: 120px;
            float: right;
            background-color: #ff4b4b;
            border: none;
            color: #fff;
            outline: none;
            margin-top: 2px;
        }
        .button:hover {
            background-color: #ff6565;
        }
    }
    .submit_btn {
        margin-top: 10px;
        background-color: #ff4b4b;
        outline: none;
        border: none;
        height: 36px;
        color: #fff;
        font-size: 16px;
        width: 100%;
    }
    .submit_btn:hover {
        background: #ff6565;
    }
}
</style>