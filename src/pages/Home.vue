<template>
  <el-container>
    <el-header>
      <el-col :span="4" class="left-align">
        <el-button class="el-icon-back" round @click="handleRoute"></el-button>
      </el-col>
      <el-col :span="16">&nbsp;</el-col>
      <el-col :span="4">{{userName}}</el-col>
    </el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        userName: ''
      }
    },
    methods: {
      handleRoute() {
        this.$confirm('确定返回上一页吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$router.push('/main');
        }).catch(() => {
          console.log('cancel');
        });
      }
    },
    mounted() {
      this.userName = this.$route.params.name;
    }
  }
</script>

<style scoped>
  .el-header {
    /*background-color: #B3C0D1;*/
    color: #333;
    text-align: center;
    line-height: 60px;
    /*width: 100%;*/
    height: 150px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
    height: 800px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .left-align {
    margin-left: -100px;
  }

  /*.el-container:nth-child(5) .el-aside,*/
  /*.el-container:nth-child(6) .el-aside {*/
  /*  line-height: 260px;*/
  /*}*/

  /*.el-container:nth-child(7) .el-aside {*/
  /*  line-height: 320px;*/
  /*}*/
</style>
