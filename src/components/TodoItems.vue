<template>
  <el-row class="top-margin list-item">
    <el-col :span="5">&nbsp;</el-col>
    <el-col :span="14">
      <li v-for="(item, index) in displayItems" :key="index">
        <span>{{index + 1}}.&nbsp;&nbsp;</span>
        <el-checkbox @change="changeSelect(item)" :value="item.checked"></el-checkbox>
        <span v-if="!item.editable" @dblclick="edit(item)" style="cursor:pointer;" :class="item.className">{{item.value}}</span>
        <input autofocus v-else v-model="item.value" @keypress.enter="updateItem(item)" @blur="updateItem(item)"></input>
      </li>
    </el-col>
    <el-col :span="3">&nbsp;</el-col>
  </el-row>
</template>
<script>
  import {BUTTON_ACTIVE, BUTTON_ALL} from "../store";

  export default {
    data() {
      return {
        completedItems: [],
        displayItems: [],
        allItems: []
      }
    },
    methods: {
      changeSelect(item) {
        item.checked = !item.checked;
        item.className = item.className === '' ? 'selected-item' : '';
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
      }
    },
    mounted() {
      this.displayItems = this.$store.state.allItems;
    },
    watch: {
      activeButtonFlag: function (newVal) {
        this.refreshDisplayList(newVal);
      }
    },
    computed: {
      activeButtonFlag() {
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
</style>
