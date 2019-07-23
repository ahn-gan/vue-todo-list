<template>
  <el-row class="top-margin list-item">
    <el-col :span="5">&nbsp;</el-col>
    <el-col :span="14">
      <li v-for="(item, index) in displayItems" :key="index">
        <span>{{index + 1}}.&nbsp;&nbsp;</span>
        <el-checkbox @change="changeSelect(item)" :value="item.checked"></el-checkbox>
        <span v-if="!item.editable" @dblclick="edit(item)" style="cursor:pointer;" :class="item.className">{{item.value}}</span>
        <input autofocus v-else v-model="item.value" @keypress.enter="updateItem(item)" @blur="updateItem(item)"></input>
        <i class="el-icon-delete delete-icon" @click="deleteItem(item)"></i>
      </li>
    </el-col>
    <el-col :span="3">&nbsp;</el-col>
  </el-row>
</template>
<script>
  import {BUTTON_ACTIVE, BUTTON_ALL, DELETE_ITEM, UPDATE_ITEM} from "../util/constant";

  export default {
    data() {
      return {
        completedItems: [],
        displayItems: [],
        allItems: [],
        itemList: []
      }
    },
    methods: {
      changeSelect(item) {
        item.checked = !item.checked;
        item.className = item.className === '' ? 'selected-item' : '';
        this.$store.dispatch(UPDATE_ITEM, item);
        this.refreshDisplayList(this.activeButtonFlag);
      },
      refreshDisplayList(activeFlag) {
        this.displayItems = [];
        if (activeFlag === BUTTON_ALL) {
          this.displayItems = this.$store.state.allItems;
        } else if (activeFlag === BUTTON_ACTIVE) {
          this.displayItems = this.$store.getters.activeItems;
        } else {
          this.displayItems = this.$store.getters.completeItems;
        }
      },
      edit(item) {
        item.editable = true;
      },
      updateItem(item) {
        item.editable = false;
        this.$store.dispatch(UPDATE_ITEM, item);
      },
      deleteItem(item) {
        this.$store.dispatch(DELETE_ITEM, item);
        this.refreshDisplayList(this.activeButtonFlag);
      }
    },
    mounted() {
      this.refreshDisplayList(this.activeButtonFlag);
    },
    watch: {
      activeButtonFlag: function (newVal) {
        this.refreshDisplayList(newVal);
      }
    },
    computed: {
      activeButtonFlag() {
        this.displayItems = this.$store.state.allItems;
        return this.$store.state.activeButton
      }
    }
  }
</script>


<style scoped>
  .top-margin {
    margin-top: 3%;
  }

  li {
    list-style-type: none;
    margin-top: 8px;
  }

  .list-item {
    text-align: left;
  }

  .selected-item {
    color: #999;
    text-decoration: line-through;
  }

  .delete-icon {
    display: none;
    cursor: pointer;
  }

  li:hover .delete-icon {
    display: inline;
    cursor: pointer;
  }
</style>
