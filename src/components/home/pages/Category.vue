<template>
  <div class="category">
    <ul class="title-ul">
      <li
        v-for="item in tabs"
        :key="item.type"
        :class="{ default: iscur === item.type }"
        @click="iscur = item.type"
      >
        {{ item.typeName }}
        <span class="default-span"></span>
      </li>
    </ul>
    <CategoryTab1 v-if="iscur === 1"></CategoryTab1>
    <CategoryTab2 v-if="iscur === 2"></CategoryTab2>
  </div>
</template>

<script>
import CategoryTab1 from "./CategoryTab1.vue";
import CategoryTab2 from "./CategoryTab2.vue";
export default {
  name: "Category",
  components: {
    CategoryTab1,
    CategoryTab2,
  },
  data() {
    return {
      tabs: [],
      iscur: 1, //默认选中第一个标题以及第一个组件
      tabList_list: [],
      tablist_lists: [],
    };
  },

  created() {
    //备份
    let that = this;
    this.axios
      .get(`https://m.youxiake.com/api/m/index/part?uid=&sitecode=1&city_id=1&refreshCount=34`)
      .then((res) => {
        if (res.status === 200) {
          //类型
          that.tabs = res.data.data.aroundLump.tabList;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>

.category {
  width: 99%;
  position: relative;
  top: 0.3rem;
  height: 10rem;
}

.category .title-ul {
  height: 1.17rem;
  background-color: #eeeeee;
  width: 94%;
  margin: 0 3%;
  border-radius: 0.3rem;
  display: flex;
  align-items: center;
}

.category .title-ul li:first-child {
  width: 50%;
  text-align: center;
  line-height: 1.17rem;
  font-size: 0.35rem;
  font-weight: bold;
  border-radius: 0.3rem 0 0 0.3rem;
  position: relative;
}

.category .title-ul li:last-child {
  border-radius: 0 0.3rem 0.3rem 0;
  width: 50%;
  text-align: center;
  line-height: 1.17rem;
  font-size: 0.35rem;
  font-weight: bold;
  position: relative;
}
.category .title-ul .default {
  background-color: white;
}
.category .title-ul .default .default-span {
  display: block;
  background-color: gold;
  height: 0.1rem;
  width: 1rem;
  position: absolute;
  left: 39%;
  bottom: 18%;
}
</style>
