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
      edit(element) {
        let itemIndex = parseInt(element.target.attributes.index.value);
        // 获取要编辑的文本内容
        let oldValue = element.target.innerText;
        // 创建一个新的 input 输入框
        let newInput = document.createElement("input");
        // 为新的 input添加属性
        newInput.type = "text";
        newInput.value = oldValue;
        // 清空当前元素的文本内容
        element.target.innerText = "";
        // 把新的 input 框 追加到当前元素节点中
        element.target.appendChild(newInput);
        // 设置选择文本的内容或设置光标位置（两个参数：start,end；start为开始位置，end为结束位置；如果开始位置和结束位置相同则就是光标位置）
        newInput.setSelectionRange(0, oldValue.length);
        // 为新 input 框获取焦点
        newInput.focus();
        // 为新的 input 添加失去焦点事件
        newInput.onblur = function () {
          // 判断失去焦点时，input 框的值是否与原值相同，相同则表示没有修改，返回原值；不同则表示有改动，返回新值
          element.target.innerText = oldValue;
        }
        newInput.onkeypress = function (event) {
          let keycode = (event.keyCode ? event.keyCode : event.which);
          if (keycode === 13) {
            newInput.onblur = function () {
              // 判断失去焦点时，input 框的值是否与原值相同，相同则表示没有修改，返回原值；不同则表示有改动，返回新值
              element.target.innerText = this.value;
            }
            event.target.blur();
            this.displayItems[itemIndex]= this.value;
          }
        }
      },
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
      },
      changeSelect(item) {
        item.checked = !item.checked;
        this.activeItems = this.allItems.filter(val => val.checked === false);
        this.completedItems = this.allItems.filter(val => val.checked === true);
        // refresh the displayItems
        this.refreshDisplayList(this.activeButtonFlag);
      },
      attrButtonClass(element) {
        this.$refs.buttonUl.childNodes.forEach(item => {
          item.childNodes.forEach(child => {
            child.className = "";
          });
        });
        element.target.className = "selected";
        this.activeButtonFlag = element.target.innerHTML;
      },
      refreshDisplayList (activeFlag) {
        this.displayItems = [];
        if (activeFlag === 'ALL') {
          this.displayItems = this.allItems;
        } else if (activeFlag === 'Active') {
          this.displayItems = this.activeItems;
        } else {
          this.displayItems = this.completedItems;
        }
      }
    },
    mounted() {
      this.displayItems = this.allItems;
      this.activeButtonFlag = 'ALL';
    },
    watch: {
      activeButtonFlag: function (newVal) {
        this.refreshDisplayList(newVal);
      }
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
