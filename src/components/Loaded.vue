<template>
  <div class="loaded">
  	<div class="cartop">
    	<p><img src="static/img/set_b.png"/></p>
    	<p>我的商城</p>
    	<ul @click="cli">
    		<li></li>
    		<li></li>
    		<li></li>
    	</ul>
    </div>
    <div class="loadmain">
    	<littlemenu v-show="isshow" style="z-index: 10;"></littlemenu>
    	<div class="bg">
    		<img src="static/img/default_user_portrait.gif" id="tu"/>
    		<p id="ming">mb2799</p>
    		<ul>
    			<li>
    				<p>0</p>
    				<p>商品收藏</p>
    			</li>
    			<li>
    				<p>0</p>
    				<p>店铺收藏</p>
    			</li>
    			<li>
    				<img src="static/img/goods-browse_w.png"/>
    				<p>我的足迹</p>
    			</li>
    		</ul>
    	</div>
    	<div class="nav">
    		<p class="p"><img src="static/img/mc_01.png"/> &nbsp;我的订单<span>查看全部订单 ></span></p>
    		<ul class="lie">
    			<li v-for="item in arr">
    				<p><img v-bind:src="item.img"/></p>
    				<p>{{item.title}}</p>
    			</li>
    		</ul>
    	</div>
    	<div class="nav">
    		<p class="p"><img src="static/img/mc_02.png"/> &nbsp;我的财产<span>查看全部财产 ></span></p>
    		<ul class="lie">
    			<li v-for="item in arr1">
    				<p><img v-bind:src="item.img"/></p>
    				<p>{{item.title}}</p>
    			</li>
    		</ul>
    	</div>
    	<p class="p b" style="margin-top: 10px;"><img src="static/img/mc_03.png"/> &nbsp;收货地址管理<span> ></span></p>
    	<p class="p b"><img src="static/img/mc_04.png"/> &nbsp;用户设置<span> ></span></p>
    	<div class="bottomNav">
	    	<ul>
	    		<li><router-link to="/load">登录</router-link></li><span>|</span>
	    		<li><router-link to="/register">注册</router-link></li><span>|</span>
	    		<li><router-link to="/load">反馈</router-link></li><span>|</span>
	    		<li><router-link to="home">返回顶部</router-link></li>
	    	</ul>
	    </div>
	    <div class="foot">
	    	<ul>
	    		<li>
	    			<p><img src="static/img/foot_touch.png"/></p>
	    			<p>触屏版</p>
	    		</li>
	    		<li>
	    			<p><img src="static/img/foot_pc.png"/></p>
	    			<p>电脑版</p>
	    		</li>
	    	</ul>
	    </div> 
    	<div class="black"></div>
    </div>
  </div>
</template>

<script>
import Littlemenu from "@/components/Littlemenu"
export default {
	components:{
		Littlemenu
	},
  name: 'loaded',
  data () {
    return {
    	isshow:false,
    	arr:[
    		{img:"static/img/mcc_01.png",title:"待付款"},
    		{img:"static/img/mcc_02.png",title:"待收货"},
    		{img:"static/img/mcc_03.png",title:"待自提"},
    		{img:"static/img/mcc_04.png",title:"待评价"},
    		{img:"static/img/mcc_05.png",title:"退款/退货"}
    	],
    	arr1:[
    		{img:"static/img/mcc_06_b.png",title:"预存款"},
    		{img:"static/img/mcc_07_b.png",title:"充值卡"},
    		{img:"static/img/mcc_08_b.png",title:"代金券"},
    		{img:"static/img/mcc_09_b.png",title:"红包"},
    		{img:"static/img/mcc_10_b.png",title:"积分"}
    	]
    }
  },
  methods:{
  	cli(){
  		this.isshow=!this.isshow;
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
	margin: 0;padding: 0;
	list-style-type: none;
}
a {
  text-decoration: none;
  color: #444444;
  font-size: 12px;
}
.cartop{
	width: 100%;
	height: 39px;
	background: #f7f7f7;
	border-bottom: 1px solid #eeeeee;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.cartop p{
	padding: 0 15px;
}
.cartop p img{
	width: 60%;
	position: relative;
	top: 4px;
	opacity: 0.8;
}
.cartop ul{
	padding: 0 15px;
	height: 20px;
}
.cartop li{
	width: 4px;
	height: 4px;
	border-radius: 50%;
	background: #5b5b5b;
	display: inline-block;
}
.loadmain{
	width: 100%;
	position: relative;
	background: #f5f5f5;
}
.bg{
	width: 100%;
	height: 220px;
	background: #5bc4ea url(../../static/img/member_top_bg.png);
	text-align: center;
	position: relative;
}
#tu{
	width: 70px;
	margin-top: 40px;
}
#ming{
	color: white;
	font-weight: bold;
}
.bg ul{
	display: flex;
	width: 100%;
	height: 60px;
	background: rgba(0,0,0,0.1);
	position: absolute;
	bottom: 0;
}
.bg li{
	flex: 1;
	font-size: 14px;
	color: white;
	font-weight: bold;
}
.bg li p:nth-child(1){
	padding-top: 12px;
}
.bg li img{
	width: 14%;
	margin-top: 10px;
}
.nav{
	width: 100%;
	height: 106px;
	margin-top: 10px;
	background: white;
}
.p{
	font-size: 14px;
	border-bottom: 1px solid #eeeeee;
	line-height: 40px;
	padding: 0 10px;
}
.p img{
	width: 14px;
	position: relative;
	top: 2px;
}
.nav p span{
	font-size: 12px;
	color: #999999;
	float: right;
	margin-right: 15px;
}
.lie{
	width: 100%;
	display: flex;
}
.lie li{
	font-size: 12px;
	text-align: center;
	color: #999999;
	flex: 1;
	padding-top: 10px;
}
.lie li img{
	width: 35%;
	opacity: 0.6;
}
.b{
	background: white;
}
.bottomNav{
	width: 100%;
	height: 37px;
	background: white;
	margin-top: 10px;
}
.bottomNav ul{
	display: flex;
}
.bottomNav li{
	flex: 1;
	text-align: center;
	margin-top: 9px;
}
.bottomNav span{
	font-size: 12px;
	color: #eeeeee;
	margin-top: 12px;
}
.foot{
	width: 100%;
	height: 64px;
	background: white;
	border-bottom: 1px solid #eeeeee;
	border-top: 1px solid #eeeeee;
}
.black{
	width: 100%;
	height: 93px;
	background: white;
}
.foot ul{
	width: 100%;
	text-align: center;
}
.foot li{
	display: inline-block;
	margin-top: 5px;
}
.foot li:nth-child(1){
	margin-right: 10%;
}
.foot li:nth-child(2){
	opacity: 0.7;
}
.foot li p:nth-child(1){
	width: 32px;
	height: 32px;
	border-radius: 50%;
	border: 1px solid;
}
.foot li p:nth-child(1) img{
	width: 70%;
	margin-top: 5px;
}
.foot li p:nth-child(2){
	font-size: 12px;
}
</style>
