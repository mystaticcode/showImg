<template>
	<div class="spike">
		<!-- 顶部区域 -->
		<header class="spike-top">
			<!-- 左边 -->
			<div class="top-left">
				<!-- 镂空的区域 -->
				<div class="top-left-swiper swiper">
					<ol class="swiper-wrapper">
						<li class="swiper-slide" v-for="item in spikeList" :key="item.id">
							<nav class="title-time">
								<strong>限时特惠</strong>
								<label v-html="fiterTimes(item.times)"></label>
									
							</nav>
							<div class="contain">
								<article>
									<h4>仅限{{item.num}}个</h4>
									<img :src="item.imgURL">
									<p>{{item.city}}</p>
								</article>
								<aside>
									<h3>{{item.title}}}</h3>
									<p>￥<strong>{{item.price}}</strong>起<em>{{item.oldprice}}</em></p>
								</aside>
							</div>
						</li>
					</ol>
				</div>
			</div>
			<!-- 右边 -->
				<div class="top-right">
					<article>
						<h3>
							新品推荐
							<i class="iconfont">&#xe658;</i>
						</h3>
						<aside>
							<h4>{{newsList.title}}</h4>
							<p>
								￥<strong>{{newsList.price}}</strong>
							</p>
						</aside>
					</article>
					<article>
						<h3>
							爆款线路
							<i class="iconfont">&#xe658;</i>
						</h3>
						<aside>
							<h4>{{hotList.title}}</h4>
							<p>
								￥<strong>{{hotList.price}}</strong>
							</p>
						</aside>
					</article>
				</div>
		</header>
		<!-- 底部区域 -->
		<ul class="spike-bottom">
			<li>
				<router-link to="/">
					<h3>宝藏小城</h3>
					<p>挖掘小城魅力</p>
				</router-link>
			</li>
			<li>
				<router-link to="/">
					<h3>秋色播报</h3>
					<p>赏秋好去处</p>
				</router-link>
			</li>
			<li>
				<router-link to="/">
					<h3>侠魅榜</h3>
					<p>每月最佳游记</p>
				</router-link>
			</li>
		</ul>
		
	</div>
</template>

<script>

	
	//引入Swiper的动态组件
	import Swiper , {
		Autoplay,
		EffectCoverflow,
		EffectCube,
		Pagination,
	}from 'swiper';
	
	//3.swiper组件应用配置
	Swiper.use([Autoplay,EffectCoverflow,EffectCube,Pagination]);
	export default{
		name:'Spike',
		props:{
			propspike:{
				type:Object,
				default:function(){
				return{}
				
				}
			}
		},
		data(){
			return{
				ites : new Date(),
				spikeList : [],
				newsList : {},
				hotList : {}
	
			}
		},
		
		watch:{
			propspike(){
				this.hotList = this.propspike.spike_hotList;
				this.newsList = this.propspike.spike_newsList;
				this.spikeList = this.propspike.spike_List;
			}
		},
		
		computed:{
			fiterTimes(){
				return(x)=>{
					let now = this.ites.getTime();
					let setupTime = x - now;
					let dnum = Math.floor(setupTime / (24*60*60*1000));
					let hnum = Math.floor(setupTime / (60*60*1000)%24);
					let mnum = Math.floor(setupTime / (60*1000)%60);
					let snum = Math.floor(setupTime / 1000%60);
					
					if(hnum <=9){
						hnum = '0'+hnum;
					}
					if(mnum <=9){
						mnum = '0'+mnum;
					}
					if(snum <=9){
						snum = '0'+snum;
					}
					
					return `${0}天<i>${0}</i>:<i>${0}</i>:<i>${0}</i>`;
				}
			}
		},

		

		
		updated(){
			new Swiper( '.top-left-swiper' , {
				//循环播放
				loop : true,
				//修改swiper自己或者子元素时自动初始化swiper
				observer : true,
				//修改swiper容器，自动初始化swiper
				observeParents : true,
				
				
			})
		}
	}
</script>

<style>
	
a{
	text-decoration: none;
	color: black;
}
/* 最外层 */
.spike{
	width: 95%;
	margin: 0.5rem auto;
	height: 7.6rem;
	position: relative;
	top: -1.8rem;
}
/* 顶部样式 */
.spike-top{
	height: 65%;
	width: 100%;
	display: flex;
}

/* 顶部的左边 */
.spike-top .top-left{
	width: 50%;
	height: 100%;
	background-image: url(../../../assets/bgimg/bg1.png);
	background-repeat: no-repeat;
	/* 背景图片尺寸 */
	background-size: 100% 100%;
}

/* 滑动区域的样式 */
.top-left .top-left-swiper{
	width: 95%;
	height: 100%;
	margin: 0 auto;
}

.top-left .top-left-swiper ol{
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	
}
.top-left .top-left-swiper ol li{
	height: 100%;
	width: 100%;
}

.top-left .top-left-swiper ol .title-time{
	line-height: 0.8rem;
	color: white;
	font-size: 0.4rem;
	display: flex;
}

.top-left-swiper .title-time strong{
	font-weight: bold;
	width: 40%;
}

.top-left-swiper .title-time label{
	font-size: 0.25rem;
	flex: 1;
	text-align: right;
}

.top-left-swiper .title-time label i{
	color: #ff5353;
	display: inline-block;
	width: 0.4rem;
	border-radius: 0.2rem;
	background-color: white;
	text-align: center;
	line-height: 0.4rem;
	margin: 0 0.07rem 0.08rem;
	
}

/* 顶部的右边 */
.spike-top .top-right{
	width: 50%;
	height: 100%;
	background-image: url(../../../assets/bgimg/bg2.png);
	background-repeat: no-repeat;
	/* 背景图片尺寸 */
	background-size: 100% 100%;
}


/* 图片区域 */
.top-left-swiper .contain{
	height: 3.9rem;
	width: 100%;
	border-radius: 0.2rem;
}

.top-left-swiper .contain article{
	position: relative;
	height: 60%;
	background-color: #FF5353;
	
}

.top-left-swiper .contain article img{
	width: 100%;
	height: 100%;
	border-radius:  0.2rem 0 0.2rem 0;
}
.top-left-swiper .contain article h4{
	position: absolute;
	left: 0;
	top: 0;
	background-image: linear-gradient(#ffe414 , #e6c81a);
	padding: 0.08rem 0.15rem;
	border-radius:  0.2rem 0 0.2rem 0;
}

.top-left-swiper .contain aside h3{
	font-size: 0.35rem;
	font-weight: bold;
	line-height: 0.5rem;
	height: 0.9rem;
	overflow: hidden;
	/* 一行文字做省略号:省略号——溢出隐藏+禁止换行[超出宽度溢出隐藏且同省略号代替]
	多行文字做省略号:最后一行文字超过宽度,溢出隐藏且用省略号代替 */
	display: -webkit-box;
	-webkit-line-clamp: 2; /* 与高度相关 */
	-webkit-box-orient: vertical; /* 超出盒子外的文本用省略号代替 */
	background-color: white;
}

.top-left-swiper .contain aside p{
	font-size: 0.3rem;
	line-height: 0.70rem;
	color: #ff9847;
	font-weight: bold;
	background-color: white;
}

.top-left-swiper .contain aside p em{
	color: lightslategray;
	font-size: 0.2rem;
	text-decoration: line-through;
	padding-left: 0.2rem;
}


.top-left-swiper .contain aside{
	height: 40%;
	background-color: orange;
	border-radius: 0 0 0.2rem 0.2rem;
	padding: 0.1rem;
}

.top-left-swiper .contain article p{
	position: absolute;
	left: 0;
	top: 70%;
	background-color: rgba(0,0,0,0.6);
	color: white;
	padding: 0.1rem 0.25rem;
	border-radius: 0,0.2rem 0.2rem 0;
	
}

.top-right article{
	width: 90%;
	height: 49%;
	margin: 0 auto;
	
}

.top-right article:first-child{
	border-bottom: 0.03rem solid white;
}

.top-right article h3{
	
	color: white;
	line-height: 0.8rem;
	font-size: 0.4rem;
	font-weight: bold;
	
}

.top-right article aside{
	width: 100%;
	background-color: white;
	border-radius: 0.2rem;
	text-indent: 1em;
}

.top-right article aside h4{
	font-size: 0.4rem;
	font-weight: bold;
	line-height: 0.8rem;
}

.top-right article aside p{
	line-height: 0.4rem;
	color: #ffa77e;
	font-size: 0.3rem;
}
.top-right article aside p strong{
	font-size: 0.3rem;
	font-weight: blod;
}
/* 底部样式 */
.spike-bottom{
	height: 30%;
	width: 100%;
	margin-top: 0.3rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.spike-bottom li{
	width: 32%;
	height: 100%;
	overflow: hidden;
	background-size: 100% 100%;
}

.spike-bottom li h3{
	line-height: 0.8rem;
	font-size: 0.35rem;
	font-weight: bold;
	text-indent: 1.4em;
}

.spike-bottom li p{
	font-size: 0.25rem;
	text-indent: 0.3rem;
	color: gray;
	
}

.spike-bottom li:first-child{
	background-image: url(../../../assets/simg/01.png);
	border-radius: 0.3rem 0rem 0rem 0.3rem;
}

.spike-bottom li:nth-child(2){
	
	background-image: url(../../../assets/simg/02.jpg);
}

.spike-bottom li:last-child{
	background-image: url(../../../assets/simg/03.png);
	border-radius: 0 0.3rem 0.3rem 0;
	
}

</style>
