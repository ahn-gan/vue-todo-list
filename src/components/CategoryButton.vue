<template>
  <el-row>
    <ul id="filters" ref="buttonUl">
      <li>
        <a href="#" @click="attrButtonClass" data-filter="all">{{buttonAll}}</a>
      </li>
      <li>
        <a href="#" @click="attrButtonClass" data-filter="active">{{buttonActive}}</a>
      </li>
      <li>
        <a href="#" @click="attrButtonClass" data-filter="complete">{{buttonComplete}}</a>
      </li>
    </ul>
  </el-row>
</template>

<script>
  import {BUTTON_ACTIVE, BUTTON_ALL, BUTTON_COMPLETE, CHANGE_ACTIVE_BUTTON} from "../store";

    export default {
      data() {
        return {
          activeButtonFlag: '',
          buttonAll: BUTTON_ALL,
          buttonActive: BUTTON_ACTIVE,
          buttonComplete: BUTTON_COMPLETE
        }
      },
      methods: {
        attrButtonClass(element) {
          this.$refs.buttonUl.childNodes.forEach(item => {
            item.childNodes.forEach(child => {
              child.className = "";
            });
          });
          element.target.className = "selected";
          this.activeButtonFlag = element.target.innerHTML;
          this.$store.commit(CHANGE_ACTIVE_BUTTON, this.activeButtonFlag);
        },
      }
    }
</script>

<style scoped>
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
