<template>
  <el-row>
    <el-col :span="8">&nbsp;</el-col>
    <el-col :span="8" class="content top-margin padding-margin">
      <el-row>
        <h2>Vue Todo List</h2>
      </el-row>
      <el-row>
        <em>Simple Todo List with adding and filter by diff status.</em>
      </el-row>
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
      <el-row class="top-margin list-item">
        <el-col :span="5">&nbsp;</el-col>
        <el-col :span="14">
          <li v-for="(item, index) in displayItems" :key="index">
            <span>{{index + 1}}.&nbsp;</span><el-checkbox @change="changeSelect(item)" :value="item.checked"><span @dblclick="edit" :index="index" style="cursor:pointer;" ref="element">{{item.value}}</span></el-checkbox>
          </li>
        </el-col>
        <el-col :span="3">&nbsp;</el-col>
      </el-row>
      <el-row>
        <ul id="filters" ref="buttonUl">
          <li>
            <a href="#" @click="attrButtonClass" data-filter="all">ALL</a>
          </li>
          <li>
            <a href="#" @click="attrButtonClass" data-filter="active">Active</a>
          </li>
          <li>
            <a href="#" @click="attrButtonClass" data-filter="complete">Complete</a>
          </li>
        </ul>
      </el-row>
    </el-col>
    <el-col :span="8">&nbsp;</el-col>
  </el-row>
</template>

<script>
  export default {
    data() {
      return {
        todoItem: '',
        displayItems: [],
        allItems: [],
        activeItems: [],
        completedItems: [],
        activeButtonFlag: ''
      }
    },
    methods: {
      addItem() {
        if (this.todoItem !== '') {
          let itemObj = {
            checked: false,
            value: this.todoItem
          };
          this.activeItems.push(itemObj);
          this.allItems.push(itemObj);
        }
        this.todoItem = '';
      }
    },
    mounted() {
      this.displayItems = this.allItems;
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

  .list-item {
    text-align: left;
  }

  .checked {
    color: #999;
    text-decoration: line-through;
  }

  >>> .el-checkbox {
    /*display: block;*/
    margin-top: 8px;
  }

  >>> .el-checkbox__input.is-checked + .el-checkbox__label {
    color: #999;
    text-decoration: line-through;
  }

  li {
    list-style-type: none;
  }

  #filters {
    text-align: center;
    margin-bottom: -10px;
    margin-top: 40px;

  }

  #filters li a {
    color: #fc999b;
    margin: 3px;
    padding: 3px 7px;
    text-decoration: none;
    border: 1px solid transparent;
    border-radius: 3px;
  }

  #filters li a.selected {
    border-color: rgba(175, 47, 47, 0.2);
  }

  #filters li a.selected, #filters li a:hover {
    border-color: rgba(175, 47, 47, 0.1);
  }

  #filters li {
    display: inline;
    margin: 0 0 5px 0;
    padding: 8px;
    list-style: none;
    outline: none;
  }
</style>
