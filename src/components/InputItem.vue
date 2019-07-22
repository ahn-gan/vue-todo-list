<template>
  <el-row>
    <el-col :span="5">&nbsp;</el-col>
    <el-col :span="14" class="top-margin">
      <el-input placeholder="请输入内容" v-model="todoItem" @change="addItem"></el-input>
    </el-col>
    <el-col :span="1">&nbsp;</el-col>
    <el-col :span="2" class="top-margin">
      <el-button type="danger" plain @click="addItem">Add</el-button>
    </el-col>
  </el-row>
</template>

<script>
    import {CHANGE_ALL_ITEMS} from "../store";

    export default {
      data() {
        return {
          todoItem: ''
        }
      },
      methods: {
        addItem() {
          if (this.todoItem !== '') {
            let itemObj = {
              checked: false,
              value: this.todoItem,
              editable: false,
              className: ''
            };
            this.$store.commit(CHANGE_ALL_ITEMS, itemObj)
          }
          this.todoItem = '';
        }
      }
    }
</script>

<style scoped>
  .top-margin {
    margin-top: 3%;
  }
</style>
