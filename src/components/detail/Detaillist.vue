<template>
    <div class="details">
        <div class="search">
            <p>
				<i class="iconfont">&#xe687;</i>
                <input type="text" placeholder="圣诞">
            </p>
			<em @click="goHome()">取消</em>
        </div>


        <!-- 轮播区域 -->
        <div class="banners swiper">
			<p>搜索推荐</p>
            <div class="swiper-wrapper">
                <aside v-for="item in list_banners" :key="item.id" class=" swiper-slide">
                    <img :src="item.img" alt="">
                    <h3>{{item.title}}</h3>
                    <h4>{{item.msg}}</h4>
                </aside>
            </div>
           
        </div>

        <!-- 搜索排行 -->
        
        <div class="range">
            <p>搜索排行</p>
            <h4 v-for="item in range" :key="item.id">
                <em>{{item.id}}</em>&nbsp;{{item.msg}}
            </h4>            
        </div>

        <!-- 目的地 -->
        
        <div class="aim">
            <aside>
                <p>没有你想要的</p>
                <h4>目的地大全</h4>
            </aside>
        </div>


        <!-- 新品推荐 -->
         <div class="res">
      <ul>
        <li v-for="item in newList" :key="item.pid">
          <h3>{{ item.productType}} | {{item.place_label}}</h3>
          <img :src="getContent(item.img)" />
          <aside>
            <label>{{ item.name }}</label>
            <h5>
              ￥{{ item.price }}起<em>{{ item.days }}</em>
            </h5>
          </aside>
        </li>
      </ul>
    </div>

    </div>
</template>

<script>

import { onMounted } from 'vue';
	
	//引入Swiper的动态组件
	import Swiper , {
		Autoplay,
		EffectCoverflow,
		EffectCube,
		Pagination,
	}from 'swiper';

    	// //3.swiper组件应用配置
	Swiper.use([Autoplay,EffectCoverflow,EffectCube,Pagination]);
export default {
    name : 'Detaillist',
    data(){
        return{
            list_banners : [],

            range : [
                {id:1 , msg : '云南'},
                {id:2 , msg : '牛背山'},
                {id:3 , msg : '跨年'},
                {id:4 , msg : '滑雪'},
				{id:5 , msg : '九寨沟'},
				{id:6 , msg : '武功山'},
				{id:7 , msg : '温泉'},
				{id:8 , msg : '登高'},
            ],
            newList : [],
            addres : 1


        }
        

    },
    mounted(){
				new Swiper( '.banners' , {
					slidesPerView : 3,
				})
                window.addEventListener('scroll', this.getHeight)//监听
			},

       methods:{
		   //返回首页
		   goHome(){
			 this.$router.push('/');  
		   },
		   
		   //拼接之后返回新地址
           getContent(images){
				//返回拼接后的图片路径
				if(images){
					let url = `https://images.weserv.nl?url=${images}`
					return url;
				}
			},

			//懒加载
            getHeight(){
                let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
				let clientHeight = document.documentElement.clientHeight;
				let scrollHeight = document.documentElement.scrollHeight;
                if((scrollTop + clientHeight) >= scrollHeight){
                    let page = this.addres++;
                    let address = `https://m.youxiake.com/api/m/search/hot?page=${page}`;
            
                    this.axios.get(address).then((res)=>{
                        if(res.status === 200){
                            
                             for(let i in res.data.data.productNewRecommends){
								
                                this.newList.push(res.data.data.productNewRecommends[i])
							}

                        }
                    })
                }

            }
       },
       
       //异步请求数据
       created(){
		  
			//轮播图
			this.axios.get('/api/dataHome.json').then((res)=>{
			     if(res.status === 200){
					 let data = res.data.Homemsg[0];
					 this.list_banners = data.list_banners;
				 }
			});
			
			 //新品推荐
			this.axios.get('https://m.youxiake.com/api/m/search/hot?page=1').then((res)=>{
			     if(res.status === 200){
					 this.newList = res.data.data.productNewRecommends;
				 }
			});
			
		},
}
</script>

<style scoped>
    .search{
        width: 100%;
        display: flex;
        height: 0.8rem;
        line-height: 0.8rem;
        justify-content: center;
		background-color: rgb(244, 244, 244);
    }
    .search p{
        width: 80%;
		height: 0.7rem;
		border: 1px solid gainsboro;
		border-radius: 0.3rem;
         background-color: white;
        text-align: center;
        /* border-radius: 0.3rem; */
    }

    .search p input{
        width: 70%;
		border: none;
		outline: none;
        height: 0.6rem;
        border-radius: 0.2rem;
       

    }

    .search em{
        float: right;
		margin-left: 0.2rem;
    }
	
	.banners{
		margin-top: 0.2rem;
	}
	
	.banners p{
		font-size: 0.4rem;
		color: rgb(153, 153, 178);
		text-indent: 0.5rem;
		margin-bottom: 0.2rem;
	}
	
    .banners img{
        width: 4rem;
        height: 2rem;
    }
	
	
	.banners h3{
		font-size: 0.4rem;
		font-weight: bold;
	}
	
	.banners h4{
		font-size: 0.38rem;
		color:  rgb(153, 153, 178);
		margin-bottom: 0.3rem;
	}

    .range p:first-child{
        color: rgb(153, 153, 178);
        font-size: 0.4rem;
    }
     .range h4{
         width: 50%;
         float: left;
          margin: 0.2rem 0;
		  text-indent: 0.2rem;
     }
	 
	 .range h4 em{
		 background: url(https://codeslive.oss-cn-shenzhen.aliyuncs.com/img/202207100505160.png);
		 background-size: 100% 100%;
	 }

     .range h5{
         width: 50%;
         float: left;
         margin: 0.2rem 0;
		 background-color: #E6C81A;
     }
	 
	 .aim aside{
		margin-top: 0.3rem;
	 }

     .aim p{
         width: 30%;
         float: left;
		 color: rgb(153, 153, 178);
     }

     .aim h4{
         width: 50%;
     }


     /* 新品推荐 */
     .reco {
  width: 100%;
  margin-top: 0.5rem;
  height: 58rem;
  background-color: rgb(245, 245, 245);
}

* {
  margin: 0;
  padding: 0;
}

.reco p {
  height: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(245, 245, 245);
}

.reco p span {
  font-size: 0.5rem;
  font-weight: bold;
}

.res ul li {
  width: 50%;
  display: inline-block;
}
.res {
  display: flex;
}

.res ul li img {
  width: 90%;
  margin-left: 0.2rem;
  display: inline-block;
  border-radius: 0.2rem;
}

.res ul li h3 {
  width: 73%;
  height: 0.45rem;
  line-height: 0.45rem;
  position: relative;
  top: 0.63rem;
  color: white;
  margin-left: 0.20rem;
  text-indent: 0.3rem;
  border-radius: 0 0.3rem 0.3rem 0;
  background-color: rgba(0, 0, 0, 0.45);
}

.res ul li aside {
  margin-bottom: 0.3rem;
}

.res ul li aside label {
  width: 4rem;
  font-size: 0.35rem;
  margin-left: 0.1rem;
  display: block;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.res ul li aside h5 {
  margin-top: 0.3rem;
  font-size: 0.35rem;
  font-weight: bold;
  color: rgb(255, 113, 0);
  width: 100%;
}

.res ul li aside h5 em {
  width: 1.6rem;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  float: right;
  color: gray;
  font-weight: initial;
  margin-right: 0.3rem;
  background-color: gainsboro;
}
		
	
</style>