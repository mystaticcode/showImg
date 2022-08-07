<template>
    	<div class="contents">
        
	<ul class="service">
        <h3>我的服务</h3>
		<router-link to="/order">
		<li v-for="item in this.services" :key="item.id">
				
				<img :src="item.imgs" >
				<p>{{item.txt}}</p>
				
		</li>
		</router-link>
	</ul>
	</div>
</template>

<script>
export default {
    name:'Serviece',
    data(){
		return{
			services:[
				{id:1,imgs:'https://codeslive.oss-cn-shenzhen.aliyuncs.com/img/202207100216450.png' , txt:'常用收货地址'},
				{id:2,imgs:'https://codeslive.oss-cn-shenzhen.aliyuncs.com/img/202207100216451.png' , txt:'常用出行人'},
				{id:3,imgs:'https://codeslive.oss-cn-shenzhen.aliyuncs.com/img/202207100216452.png' , txt:'修改密码'},
				{id:4,imgs:'https://codeslive.oss-cn-shenzhen.aliyuncs.com/img/202207100216453.png' , txt:'在线客服'},
                {id:4,imgs:'https://codeslive.oss-cn-shenzhen.aliyuncs.com/img/202207100216449.png' , txt:'游侠客APP'},
			]
				
			
		}
	}
}
</script>

<style scoped>

::-webkit-scrollbar {
  width: 0 !important;
}
::-webkit-scrollbar {
  width: 0 !important;
  height: 0;
}
    .service{
		width: 99%;
		overflow: hidden;
		padding: 0.8rem 0 0;
		background-color: white;
		height: 4.2rem;
	}
	.contents{
		height: 4.6rem;
        margin-top: -0.3rem;
		background-color: rgb(245, 245, 245);
	}
	
	a{
		text-decoration: none;
	}
	
	.service li{
		float: left;
		width: 25%;
        margin-top: 0.3rem;
		text-align: center;
	}
	.service li img{
		width: 0.6rem;
		height: 0.6rem;
	}
	
	.service li p{
		color: #000000;
		padding-top: 0.15rem;
		padding-bottom: 0.5rem;
	}

    .service h3{
        margin: 0;
        padding:0;
        font-size: 0.5rem;
        font-weight: bold;
        text-indent: 0.3rem;
        margin-top: -0.4rem;
        margin-bottom: 0.4rem;
    }
</style>