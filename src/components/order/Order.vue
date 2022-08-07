<template>
  <div class="order">
    <div class="top">
      <div class="img">
        <img src="https://codeslive.oss-cn-shenzhen.aliyuncs.com/img/202207100213760.png" alt="" />
      </div>
    </div>

    <div class="title">手机号注册/登录</div>

    <div class="inputs">
      <input type="phone" placeholder="请输入手机号" v-model.trim="phone" />
      <input type="phone" placeholder="请输入验证码" v-model.trim="pwd" />
    </div>
    <p class="code" @click="codes()">获取验证码</p>

    <div class="btn">
      <button v-show="!show_btn">一键注册/登录</button>
      <button class="login" v-show="show_btn" @click="userPhone()">一键注册/登录</button>
      <div class="phone">
        <span>非大陆手机号登录</span>
        <span>账号密码登录</span>
      </div>
    </div>

    <div class="icon">
      <div class="wx">
        <img src="https://codeslive.oss-cn-shenzhen.aliyuncs.com/img/202207100213750.png" />
      </div>
      <div class="qq">
        <img src="https://codeslive.oss-cn-shenzhen.aliyuncs.com/img/202207100213749.png" />
      </div>
    </div>
  </div>
</template>

<script>
import Cookies from "js-cookie";
export default {
  name: "Order",
  data() {
    return {
      show: false,
      iconshow: true,
      phone: "",
      pwd: "",
      show_btn: false,
      code: "",
      titles: "手机号注册/登录",
      display_show: "",
    };
  },

  watch: {
    phone() {
      if (this.phone != "") {
        this.show_btn = true;
      } else {
        this.show_btn = false;
      }
    },
  },
  methods: {
    shows(val) {
      val == 1 ? (this.show = !false) : (this.show = !true);
    },
    iconshows(val) {
      val == 1 ? (this.iconshow = false) : (this.iconshow = true);
    },
    userPhone() {
      let reg = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;
      if (this.phone != "") {
        if (reg.test(this.phone) && this.pwd == this.code) {
          Cookies.set("phone", this.phone, { expires: 7 });
          Cookies.set("show", this.show_hb, { expires: 7 });
		  Cookies.set("showid", true, { expires: 7 });
          this.$router.push("/orderPage");
          return true;
        } else {
          return false;
        }
      } else {
        alert("手机号不为空");
      }
    },

    codes() {
      for (let i = 0; i < 6; i++) {
        this.code = Math.floor(Math.random() * 999999);
      }
      alert("验证码：" + this.code);
    },
  },

  created() {
    this.display_show = Cookies.get("showid");
    if (this.display_show) {
      this.$router.push("/orderPage");
    }
  },
};
</script>

<style scoped>
.order {
  height: 100vh;
}

.order .top {
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
}

.order .top .img img {
  width: 2rem;
  height: 2rem;
}

.order .top {
  width: 100%;
}

.title {
  text-align: center;
  font-weight: bold;
  font-size: 0.4rem;
  margin-top: 0.1rem;
}

.inputs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 3vh;
}

.inputs input {
  width: 80%;
  outline: none;
  height: 1rem;
  text-indent: 0.5rem;
  margin: 0.1rem 0;
  border: none;
  border-radius: 0.2rem;
  background-color: rgb(251, 251, 251);
}

.code {
  text-align: right;
  position: relative;
  top: -0.8rem;
  color: gold;
  width: 20%;
  left: 6.6rem;
}

.btn {
  width: 100%;
}

.btn button,
.btn .login {
  width: 80%;
  height: 1rem;
  margin: 0.2rem 10%;
  border: none;
  background-color: rgb(255, 246, 204);
  border-radius: 0.1rem;
  color: gray;
}

.btn .login {
  background-color: gold;
}

.btn .phone {
  width: 80%;
  display: flex;
  margin: 0.1rem 10%;
  color: gray;
  justify-content: space-between;
}

.icon {
  display: flex;
  justify-content: space-around;
  width: 80%;
  margin: 0 10%;
  margin-top: 25vh;
}

.icon img {
  width: 1rem;
  height: 1rem;
}

.icon .wx , .qq{
	width: 1.5rem;
	height: 1.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: white;
	border-radius: 100%;
	border: 1px solid ghostwhite;
}
</style>>




