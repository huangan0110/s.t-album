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
            <b>登 录</b>
        </div>
        <div class="register_content">
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" >
            <el-form-item prop="email">
                <el-input v-model.number="ruleForm.email" placeholder="邮箱" size="medium"><i slot="prefix" class="el-input__icon el-icon-search"></i></el-input>
            </el-form-item>
            <el-form-item prop="pass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="密码" size="medium"><i slot="prefix" class="el-input__icon el-icon-search"></i></el-input>
            </el-form-item>
            <div class="remember">
                <el-checkbox v-model="rememberMe">记住我</el-checkbox>
                <div class="forget"><span @click="findPassword">忘记密码？</span></div>
            </div>
               
            
            <el-form-item>
                <button class="submit_btn" type="button" @click="submitForm('ruleForm')">登 录</button>
            </el-form-item>
            </el-form>    
        </div>
        </el-dialog>
    </div>
</template>

<script>
import {login} from '../utils/api'
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
        return {
            rememberMe:false,
            btnDisabled:false,
            shwoRegister:false,
            ruleForm: {
                pass: '123456',
                email: '1686313466@qq.com',
            },
            rules: {
            pass: [
                { validator: validatePass, trigger: 'blur' }
            ],
            email: [
                { validator: checkemail, trigger: 'blur' }
            ]
            }
        }
    },
    methods: {
        handleClose(){
            this.shwoRegister = false;
             this.$refs['ruleForm'].resetFields();
        },
        open(){
            this.shwoRegister = true;
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
            if (valid) {
                login(this.ruleForm.email, this.ruleForm.pass).then(res => {
                    if(res){
                       this.$message({ message: '登录成功', type: 'success' });
                    //    this.$router.push({path:'/user',params: {id:'1'}}) 
                        let routeUrl = this.$router.resolve({
                            path: "/user/777"
                        });
                        window.open(routeUrl.href,'_blank');
                    }
                })
            }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        findPassword(){
            alert("1111");
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
    .remember {
        position: relative;

        .forget {
            color: #999;
            position: absolute;
            right: 0;
            top: 0; 
        }
        .forget:hover {
            cursor: pointer;
            color: #333;
        }

        .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner {
            background-color: #ff4b4b;
            border-color: #ff4b4b; 
        }
        .el-checkbox__input.is-checked+.el-checkbox__label {
            color: #ff4b4b;
        }
        .el-checkbox__input.is-focus .el-checkbox__inner {
            border-color: #ff4b4b;
        }
        .el-checkbox__inner:hover {
            border-color: #ff4b4b; 
        }
    }
    .el-input__inner {
        border-radius: 0px;
    } 
    .el-input__inner:focus {
        border: 1px solid #ff4b4b;
    }
    .submit_btn {
        margin-top: 30px;
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