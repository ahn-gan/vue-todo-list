<template>
  <el-row>
    <el-col :span="8">&nbsp;</el-col>
    <el-col :span="8" class="content top-margin padding-margin">
      <Header></Header>
      <InputItem></InputItem>
      <TodoItems></TodoItems>
      <CategoryButton></CategoryButton>
    </el-col>
    <el-col :span="8">&nbsp;</el-col>
  </el-row>
</template>

<script>
  import Header from './Header'
  import InputItem from './InputItem'
  import TodoItems from './TodoItems'
  import CategoryButton from './CategoryButton'
  export default {
    components: {
      Header, InputItem, TodoItems, CategoryButton
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .top-margin {
    margin-top: 3%;
  }

  .padding-margin {
    padding-bottom: 40px;
  }

  .content {
    border-radius: 6px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  }
</style>
