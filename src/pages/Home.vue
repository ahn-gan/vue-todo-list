<template>
  <el-container>
    <el-header>
      <el-col :span="4" class="left-align">
        <el-button class="el-icon-back" type="primary" plain round @click="handleRoute"></el-button>
      </el-col>
      <el-col :span="16">&nbsp;</el-col>
      <el-col :span="4">{{userName}}</el-col>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="vertical" background-color="#545c64"
                 text-color="#fff" active-text-color="#ffd04b" :router="true">
          <el-menu-item index="my-profile">我的数据</el-menu-item>
          <el-menu-item index="todo-list">Todo List</el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        userName: '',
        activeIndex: ''
      }
    },
    methods: {
      handleRoute() {
        this.$confirm('确定返回上一页吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$router.push('/');
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
    background-color: #545c64;
    color: #ffffff;
    text-align: center;
    line-height: 60px;
    height: 150px;
  }

  .el-aside {
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    color: #333;
    text-align: center;

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
