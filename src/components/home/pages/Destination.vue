<template>
  <div class="destination">
    <div class="entry"></div>
    <div class="content">
      <div class="title">
        <label>{{ title }}</label>
        <span
          ><i>{{ subTitle }}</i></span
        >
        <em>更多</em>
      </div>

      <div class="tab">
        <span
          v-for="(tab, index) in tabName"
          :key="index"
          @click="getTab(index)"
          :class="{ default: tabid == index }"
          >{{ tab }}</span
        >
      </div>

      <div class="deshow">
        <div class="card">
          <div class="card_content" v-for="(val, idx) in showtab" :key="idx">
            <div class="image">
              <img :src="getContent(val.image)" />
            </div>
            <h3>{{ val.title }}</h3>
            <h4>{{ val.subTitle }}</h4>
          </div>
        </div>

        <div class="lablecard">
          <div class="labaltxt" v-for="(lab, index) in labletab" :key="index">
            <p v-if="lab.subTitle != ''">{{ lab.subTitle }}</p>
            <p v-if="lab.subTitle == ''" class="entryshow"></p>
            <p>{{ lab.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Destination",
  data() {
    return {
      subTitle: "",
      title: "",
      tabList: [],
      alllist: [],
      tabName: [],
      showtab: [],
      labletab: [],
      tabid: 0,
    };
  },
  methods: {
    getTab(index) {
      this.showtab = [];
      this.labletab = [];
      this.tabid = index;
      this.tabList = this.alllist[this.tabid].data;
      this.tabList.forEach((val, idx) => {
        if (idx <= 2) {
          this.showtab.push(val);
        } else {
          this.labletab.push(val);
        }
      });
    },

    //获取图片路径(解决图片请求403)
    getContent(images) {
      //返回拼接后的图片路径
      if (images) {
        let url = `https://images.weserv.nl?url=${images}`;
        return url;
      }
    },
  },
  mounted() {},
  created() {
    this.axios
      .get(`https://m.youxiake.com/api/m/index/part?uid=&sitecode=1&city_id=1&refreshCount=34`)
      .then((res) => {
        if (res.status === 200) {
          this.title = res.data.data.destination.title;
          this.subTitle = res.data.data.destination.subTitle;
          this.alllist = res.data.data.destination.tabList;
          this.tabList = res.data.data.destination.tabList[this.tabid].data;

          this.alllist.forEach((item) => {
            this.tabName.push(item.tabName);
          });

          this.tabList.forEach((val, idx) => {
            if (idx <= 2) {
              this.showtab.push(val);
            } else {
              this.labletab.push(val);
            }
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
/* 全局样式 */
* {
  margin: 0;
  padding: 0;
  list-style: none;
}

.default {
  font-weight: bold;
  color: gold !important;
}

.destination {
  padding-bottom: 1rem;
  width: 96%;
  margin: 0 2%;
}

.entry {
  height: 3.6rem;
}

.content {
  width: 100%;
}

.content .title {
  width: 100%;
  height: 1.2rem;
  line-height: 1.2rem;
  display: flex;
  justify-content: space-around;
}

.content .title label {
  display: inline-block;
  font-weight: bold;
  font-size: 0.45rem;
}

.content .title span i {
  background-color: #fff3ea;
  padding: 0.1rem 0.15rem;
  border-radius: 0.15rem;
  color: #ffa86c;
}

.content .title em {
  font-size: 0.4rem;
}

.tab {
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
}

.tab span {
  display: inline-block;
  width: 2.6rem;
  height: 0.8rem;
  color: gray;
  font-size: 0.4rem;
  background-color: white;
  text-align: center;
  border-radius: 0.4rem;
  margin: 0 0.2rem;
  border: 1px solid ghostwhite;
}

.card {
  width: 100%;
  height: 3rem;
  margin-top: 0.3rem;
  display: flex;
  justify-content: space-around;
}

.card_content {
  width: 32.8%;
  height: 100%;
}

.card .card_content:first-child img {
  border-radius: 0.2rem 0 0 0.2rem;
}

.card .card_content:last-child img {
  border-radius: 0 0.2rem 0.2rem 0;
}

.card .card_content .image {
  width: 100%;
  height: 100%;
}

.card .card_content .image img {
  width: 100%;
  height: 100%;
}

.card .card_content h3 {
  font-weight: bold;
  font-size: 0.4rem;
  color: white;
  text-align: center;
  position: relative;
  top: -1.3rem;
}

.card .card_content h4 {
  color: white;
  text-align: center;
  position: relative;
  top: -1.15rem;
}

.lablecard {
  width: 100%;
  height: 2.8rem;
  margin-top: 0.2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.lablecard .labaltxt {
  width: 31%;
  height: 1.2rem;
  line-height: 0.4rem;
  border-radius: 0.1rem;
  font-weight: bold;
  text-align: center;
  border: 1px solid gainsboro;
}

.lablecard .labaltxt p:first-child {
  font-weight: normal;
  text-align: left;
  background-color: gold;
  width: 60%;
  height: 0.4rem;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 0.1rem 0 0.1rem 0;
  color: gray;
}

.entryshow{
  font-weight: normal;
  text-align: left;
  width: 60%;
  height: 0.4rem;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 0.1rem 0 0.1rem 0;
  background-color: white !important;
  color: gray !important;
}

.lablecard .labaltxt p:last-child {
  font-size: 0.4rem;
}
</style>
