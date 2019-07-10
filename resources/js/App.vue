<template>
    <div class="el-container">
        <!-- <h1>Hello, {{ msg }}!</h1> -->
        <!-- <el-row>
            <el-col :span="24"><div class="grid-content bg-purple-dark">Workflow</div></el-col>
        </el-row> -->
        <router-view></router-view> <!--路由引入的组件将在这里被渲染-->
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: 'Vue'
        }
    }
}
</script>

<style>
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
</style>