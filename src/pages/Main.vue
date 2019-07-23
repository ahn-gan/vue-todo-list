<template>
  <el-row>
    <el-row class="top-margin">
      <el-col :span="8">&nbsp;</el-col>
      <el-col :span="8">
        <el-input autofocus placeholder="请输入姓名" v-model="name" @keypress.enter.native="enterHome"></el-input>
      </el-col>
      <el-col :span="8">&nbsp;</el-col>
    </el-row>
    <el-row class="top-margin">
      <el-col>
        <el-button type="primary" @click="enterHome">开始使用</el-button>
      </el-col>
    </el-row>
  </el-row>
</template>

<script>
  export default {
    name: "Main",
    data() {
      return {
        name: ''
      }
    },
    methods: {
      enterHome() {
        if (this.name.length > 0)
          this.$router.push({name: 'Home', params: {name: this.name}});
        else
          this.$message.error('Please enter your name and retry again...');
      }
    }
  }
</script>

<style scoped>
  .top-margin {
    margin-top: 3%;
  }
</style>
