<template>
	<div class="order">
		<div class="content">
			<aside>
				<p><img src="orderimg/5.png" alt=""></p>
				<h3>{{titles}}</h3>
				
				<p><input type="phone" placeholder="请输入手机号" v-model.number="obj.phone"  maxlength="11"></p>
				<em @click="codes()">点击获取验证码</em>
				<p><input type="password" placeholder="请输入验证码" maxlength="6" v-model.trim="obj.pwd"></p>
				
				<p><button :class="{'sty' : obj.show_btn}" @click="userPhone()">一键注册/登录</button></p>
				<p>
					<span>手机号登录</span>
					<span>账号密码登录</span>
				</p>
				
				<h4>
					<p><img src="orderimg/6.png" alt=""></p>
					<p><img src="orderimg/7.png" alt=""></p>
				</h4>

				<h5>
					<i class="iconfont" v-show="iconshow" @click="iconshows(1)">&#xe605;</i>
					<i class="iconfont ico_sty" v-show="!iconshow" @click="iconshows(2)">&#xe601;</i>
					<span>未注册游侠客账号的手机，登录时将同时注册，登录代表您已同意<em>《服务协议</em>和<em>《隐私政策》</em></span>
				</h5>

			</aside>

			<div class="footer" @click="shows(1)">
				<h6>
					体验游侠客微信小程序
				</h6>
				<p>
					<img src="orderimg/2.png" alt="">
				</p>
			</div>
		</div>


		<div class="footer-content" v-show="show">
		
			<p><img src="orderimg/3.png" alt="" @click="shows(2)"></p>
			<aside>长按识别小程序码</aside>
			<aside>体验游侠客微信小程序</aside>
			<h4><img src="orderimg/4.png" alt=""></h4>
			<h6>——————  <em>or</em>  —————— </h6>
			<h5><button>复制小程序名字</button></h5>
			<aside>在微信搜索框中搜索“游侠客”</aside>


		</div>	
	</div>
</template>

<script>
	import Cookies from 'js-cookie'
	export default{
		name:'Order',
		data(){
			return{
				show:false,
				iconshow: true,
				obj:{
					phone : '',
					pwd: '',
					code: '',
					show_btn : false,
					show_hb : 1,
					
				},
				titles : '手机号注册/登录',
				display_show : '',
				

			}
		},
		methods:{
			shows(val){
				val==1? this.show=!false : this.show=!true;
			},
			iconshows(val){
				val == 1? this.iconshow =false : this.iconshow = true;
			},
			userPhone(){
				let reg = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;
				if(this.obj.phone != ''){
					
				if(reg.test( this.obj.phone) && this.obj.pwd==this.obj.code){
					Cookies.set('phone',this.obj.phone ,{expires : 7});
					Cookies.set('show',this.obj.show_hb ,{expires : 7});
					this.$router.push('/orderPage');
					return true;
					
				}else{
					return false;
				}
				
				}else{
					alert('手机号不为空')
				}
				
			},
			
			codes(){

				for(let i=0;i<6;i++){
					this.obj.code = Math.floor(Math.random()*999999);
				}
				alert('验证码：' +this.obj.code);
			}
		},
		
		
		created(){
			this.display_show = Cookies.get('show');
			if(this.display_show == 1){
				this.$router.push('/orderPage');
			}
		},
		
		updated(){
			this.obj.phone !='' ? this.obj.show_btn = true : this.obj.show_btn = false;
		}
		
		

		

	}
</script>

<style scoped>
	
	.sty{
		background-color: rgb(255, 231, 75) !important;
	}
	
	.content aside p,h3{
		text-align: center;
		width: 100%;
		margin-bottom: 0.6rem;
	}
	.content aside p img{
		width: 2.5rem;
		height: 2.5rem;
		padding-top: 0.7rem;		
	}

	.content aside h3{
		font-size: 0.55rem;
		font-weight: bold;
		margin-top: -0.6rem;
	}

	.content aside p input{
		width: 85%;
		height: 1.2rem;
		outline: none;
		border: 1px solid rgb(251, 251, 251);
		text-indent: 0.5rem;
		border-radius: 0.15rem;
		background-color: rgb(251, 251, 251);
	}
	
	.content aside em{
		color: #E6C81A;
		position: relative;
		left: 6.6rem;
		top: 0.8rem;
	}

	::-webkit-input-placeholder{
		font-size: 0.4rem;
		color: rgb(197, 188, 188);
	}

	.content aside p button{
		width: 85%;
		height: 1.3rem;
		border: none;
		font-size: 0.4rem;
		font-weight: bold;
		border-radius: 0.15rem;
		color: #5f5f5f;
		background-color: rgb(255, 246, 204);
	}

	.content aside p span{
		width: 50%;
		margin:0.9rem;
		font-size: 0.4rem;
		margin-top: 0.2rem;
		color: rgb(194, 194, 194);
	}

	.content aside h4{
		margin-top: 2rem;
	}

	.content aside h4 p{
		width: 1.4rem;
		height: 1.4rem;
		float: left;
		background-color: rgb(251, 251, 251);
		border-radius: 50%;
		margin: 0 1rem;
		position: relative;
		left: 15%;
		top: 50%;
		
	}

	.content aside h4 p img{
		height: 0.7rem;
		width: 0.7rem;
		padding-top: 0.35rem;
	}

	.content aside h5{
		width:90%;
		float: right;
		text-indent: -0.2rem;
		margin-top: 1.7rem;
	}

	.content aside h5 span{
		color: rgb(176, 176, 175);
	}
	.content aside h5 span em{
		color: black;
		font-weight: 500;
	}

	.footer{
		width: 100%;
		height: 1.15rem;
		line-height: 1.1rem;
		z-index: 200;
		position: relative;
		bottom: 0.01rem;
		border-left: 0px;
		border-right: 0px;
		background-color: white;
		border: 1px solid gainsboro;
		display: flex;
		justify-content: center;
	}

	.footer h6{
		width: 65%;
		float: left;
		font-size: 0.35rem;
		font-weight: 500;
		text-align: right;
		color: rgb(236, 201, 41);
		
	}
	.footer p{
		width: 35%;
	}

	.footer p img{
		width: 0.6rem;
		height: 0.6rem;
		padding-top: 0.3rem;
		padding-left: 0.1rem;
	}

	.footer-content{
		position: absolute;
		z-index: 300;
		height: 10rem;
		width: 100%;
		bottom: -0.1rem;
		background-color: white;
	}

	.footer-content p{
		text-align: right;
		padding-bottom: 0.5rem;
	}

	.footer-content p img{
		width: 0.4rem;
		height: 0.4rem;
		margin-right: 0.2rem;
		margin-top: 0.8rem;

	}

	.footer-content aside{
		font-size: 0.4rem;
		font-weight: 500;
		text-align: center;
		padding-top: 0.2rem;
		color: rgb(254, 179, 91);
	}

	.footer-content h4{
		text-align: center;
	}

	.footer-content h4 img{
		width: 3rem;
		height: 3rem;
	}

	.footer-content h6{
		text-align: center;
		color: gainsboro;
		font-weight: 500;
	}

	.footer-content h6 em{
		font-size: 0.4rem;
		color: rgb(187, 160, 129);
	}

	.footer-content h5{
		padding-top: 0.3rem;
		padding-bottom: 0.3rem;
		text-align: center;
	}

	.footer-content h5 button{
		width: 5.3rem;
		height: 1rem;
		border: none;
		font-size: 0.41rem;
		border-radius: 0.6rem;
		background-color: rgb(254, 209, 1);
	}

</style>>




