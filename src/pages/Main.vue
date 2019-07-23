<template>
  <el-row>
    <el-row class="top-margin">
      <el-col :span="8">
        <el-button type="primary" @click="enterHome">开始使用</el-button>
      </el-col>
    </el-row>
    <el-row class="top-margin">
      <el-col :span="8">
        <el-input placeholder="请输入姓名" v-model="name"></el-input>
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
        this.$router.push('/')
      }
    }
  }
</script>

<style scoped>
  .top-margin {
    margin-top: 3%;
  }
</style>
