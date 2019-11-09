<template>
  <div class="album_card">
    <div class="pic">
      <div class="operate">
       <el-dropdown @command="handleCommand">
        <!-- <span class="el-dropdown-link "> -->
          <i class="el-icon-arrow-down el-icon--right test el-dropdown-link"></i>
        <!-- </span> -->
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a">编辑</el-dropdown-item>
          <el-dropdown-item command="b">删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      </div>
      <img src="../assets/img/竖屏图.png" alt="">
    </div>
    
    <el-dialog
      title="编辑相册"
      :lock-scroll = "false"
      :visible.sync="edit"
      width="500px"
      :before-close="handleClose" class="test1">
      <div class="edit">
        <div id="name">
          <span>相册名称:</span>
            <el-input
              wid
              type="text"
              placeholder="请输入内容"
              v-model="albumName"
              maxlength="10"
              show-word-limit
            ></el-input>
           
        </div>
        <div style="margin-top:20px">
          <span>访问权限:</span>
          <el-radio-group v-model="radio">
            <el-radio :label="3">备选项</el-radio>
            <el-radio :label="6">备选项</el-radio>
            <el-radio :label="9">备选项</el-radio>
          </el-radio-group>
        </div>
         
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="edit = false">取 消</el-button>
        <el-button type="primary" @click="edit = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      edit:false,
      radio: 3,
      albumName:'默认相册'
    }
  },
  methods: {
    handleCommand(command) {
      if(command == 'a') {
        this.edit = true;
      }
      if(command == 'b') {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          lockScroll:false
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      }
    },
    handleClose(done) {
      this.edit = false;
    }
  }
}
</script>

<style lang="scss">
.album_card {
    position: relative;
    width: 180px;
    height: 180px;
    background-color: #fff;
    overflow: hidden;
    
    .pic {
      width: 180px;
      height: 180px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        // width: auto;  
        // height: auto;  
        // max-width: 100%;  
        // max-height: 100%; 
      }
      .operate {
        position: absolute;
        // width: 29px;
        // height: 29px;
        top: 5px;
        right: 5px;
        .test {
          font-size: 16px;
          padding: 3px;
          background-color: rgba(0, 0, 0, 0.2);
        }  
      }
      
    }
    
    span {
      color: #333;
      padding-left: 10px;
      font-size: 13px;
      font-weight: 400;
      font-family: 'Microsoft YaHei', '\5FAE\8F6F\96C5\9ED1', Arial;
    }

  .el-dialog__header {
    border-bottom: 1px solid #ddd;
  } 
  .el-dialog__body {
    .el-input {
      width: 60%;
    }
  }

}
</style>