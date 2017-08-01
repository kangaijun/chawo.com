<template>
  <div class="detail">
    <div class="cartop">
    	<p @click="back"><b><</b></p>
    	<p>商品详情</p>
    	<ul @click="cli">
    		<li></li>
    		<li></li>
    		<li></li>
    	</ul>
    </div>
    <div class="detailMain">
    	<littlemenu v-show="isshow" id="little"></littlemenu>
    	<img v-bind:src=content.src id="img" />
    	<div class="mession">
    		<p>{{content.name}}</p>
    		<p>￥{{content.price}} <span>销量：{{content.sell}} 库存：{{content.store}}</span></p>
    		<p>已选 <button>默认</button> <span>></span></p>
    	</div>
    	<ul id="coment">
    		<li><p>商品评价 &nbsp;<span id="good">好评率：{{content.good}}</span><span>（{{content.comment}}）</span></p></li>
    		<li>
    			<p><img src="static/img/star_r.png"/><img src="static/img/star_r.png"/><img src="static/img/star_r.png"/><img src="static/img/star_r.png"/><img src="static/img/star_r.png"/><span>fa*** 2017-06</span></p>
    			<p>不错哟</p>
    		</li>
    		<li>
    			<p><img src="static/img/star_r.png"/><img src="static/img/star_r.png"/><img src="static/img/star_r.png"/><img src="static/img/star_r.png"/><img src="static/img/star_r.png"/><span>零*** 2017-05</span></p>
    			<p>收藏</p>
    		</li>
    		<li>
    			<p><img src="static/img/star_r.png"/><img src="static/img/star_r.png"/><img src="static/img/star_r.png"/><img src="static/img/star_r.png"/><img src="static/img/star_r.png"/><span>jo*** 2017-05</span></p>
    			<p>没有喝，应该不错</p>
    		</li>
    	</ul>
    	<h4>产品信息</h4>
    	<h3>{{content.name}}</h3>
    	<table>
    		<tr>
    			<td>【品名】：</td>
    			<td>{{content.ming}}</td>
    		</tr>
    		<tr>
    			<td>【品牌】：</td>
    			<td>{{content.brand}}</td>
    		</tr>
    		<tr>
    			<td>【年份】：</td>
    			<td>{{content.year}}</td>
    		</tr>
    		<tr>
    			<td>【工艺】：</td>
    			<td>{{content.craft}}</td>
    		</tr>
    		<tr>
    			<td>【规格】：</td>
    			<td>{{content.rule}}</td>
    		</tr>
    		<tr>
    			<td>【储存】：</td>
    			<td>{{content.stock}}</td>
    		</tr>
    	</table>
    	<div class="buy" v-show="isbuy">
    		<img src="static/img/close_window.png" id="close" @click="close" />
    		<dl>
    			<dt><img v-bind:src=content.src /></dt>
    			<dd>
    				<p>{{content.name}}</p>
    				<p>￥{{content.price}} <span>库存：{{content.store}}</span></p>
    			</dd>
    		</dl>
    		<div class="num">
    			<p>购买数量</p>
    			<p><button>-</button><span>1</span><button>+</button></p>
    		</div>
    	</div>
    	<div class="foot">
    		<ul>
    			<li @click="gocar">
    				<img src="static/img/cart_b.png"/>
    				<p>购物车</p>
    			</li>
    			<li @click="buy">立即购买</li>
    			<li @click="buy">加入购物车</li>
    		</ul>
    	</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Littlemenu from "@/components/Littlemenu"

export default {
	components:{
		Littlemenu
	},
    name: 'detail',
    data () {
    	return {
    		isshow:false,
    		isbuy:false,
      		arr:[],
      		ids:[],
      		content:{}
    	}
  	},
  	methods:{
	  	cli(){
	  		this.isshow=!this.isshow;
	  	},
	  	back(){
	  		this.$router.go(-1);
	  	},
	  	gocar(){
	  		this.$router.push("/hello/shoppingCar")
	  	},
	  	buy(){
	  		this.isbuy=true;
	  	},
	  	close(){
	  		this.isbuy=false;
	  	}
  	},
  	created () {
		var id=this.$route.params.id;
		var that=this;
		if (id.indexOf("p")>=0) {
		  	axios.get("static/json/puersheng.json").then(function(res){
				that.arr=res.data;
				for (var i=0 ; i<that.arr.length; i++) {
					that.ids.push(that.arr[i].id);
				}
				var index=that.ids.indexOf(id);
				that.content=that.arr[index];
//				console.log(typeof that.content)
		  	})
		}else if (id.indexOf("s")>=0) {
			axios.get("static/json/puersu.json").then(function(res){
				that.arr=res.data;
				for (var i=0 ; i<that.arr.length; i++) {
					that.ids.push(that.arr[i].id);
				}
				var index=that.ids.indexOf(id);
				that.content=that.arr[index];
		  	})
		}else if (id.indexOf("h")>=0) {
			axios.get("static/json/black.json").then(function(res){
				that.arr=res.data;
				for (var i=0 ; i<that.arr.length; i++) {
					that.ids.push(that.arr[i].id);
				}
				var index=that.ids.indexOf(id);
				that.content=that.arr[index];
		  	})
		}else if (id.indexOf("a")>=0) {
			axios.get("static/json/flowers.json").then(function(res){
				that.arr=res.data;
				for (var i=0 ; i<that.arr.length; i++) {
					that.ids.push(that.arr[i].id);
				}
				var index=that.ids.indexOf(id);
				that.content=that.arr[index];
		  	})
		}else if (id.indexOf("v")>=0) {
			axios.get("static/json/green.json").then(function(res){
				that.arr=res.data;
				for (var i=0 ; i<that.arr.length; i++) {
					that.ids.push(that.arr[i].id);
				}
				var index=that.ids.indexOf(id);
				that.content=that.arr[index];
		  	})
		}else if (id.indexOf("t")>=0) {
			axios.get("static/json/set.json").then(function(res){
				that.arr=res.data;
				for (var i=0 ; i<that.arr.length; i++) {
					that.ids.push(that.arr[i].id);
				}
				var index=that.ids.indexOf(id);
				that.content=that.arr[index];
		  	})
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
	margin: 0;padding: 0;
	list-style-type: none;
	outline: none;
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
#little{
	top: 40px;
}
.detailMain{
	width: 100%;
	position: relative;
	background: #f5f5f5;
}
#img{
	width: 100%;
}
.mession{
	width: 100%;
	height: 95px;
	border-top: 1px solid #eeeeee;
	padding: 12px;
	background: white;
	margin-top: -4px;
}
.mession p:nth-child(1){
	font-size: 14px;
	font-weight: bold;
}
.mession p:nth-child(2){
	font-size: 18px;
	font-weight: bold;
	color: #df5a67;
	margin: 10px 0;
}
.mession p:nth-child(2) span{
	font-size: 12px;
	color: #555555;
	float: right;
	margin-top: 3px;
	margin-right: 25px;
}
.mession p:nth-child(3){
	font-size: 12px;
	color: #555555;
}
.mession p:nth-child(3) button{
	border: 1px solid #cccccc;
	padding: 0 6px;
	background: none;
	margin-left: 6px;
}
.mession p:nth-child(3) span{
	color: #cccccc;
	float: right;
	margin-right: 27px;
	margin-top: 5px;
}
#coment{
	background: white;
	margin-top: 12px;
	border-top: 1px solid #eeeeee;
}
#coment li{
	width: 95%;
	height: 40px;
	border-bottom: 1px solid #eeeeee;
	font-size: 12px;
	margin-left: 2%;
	padding-top: 5px;
}
#coment li:nth-child(1){
	line-height: 40px;
}
#coment li p img{
	width: 5%;
}
#coment li p span{
	float: right;
}
#good{
	color: #f17c88;
	font-weight: bold;
}
h3{
	color: #fb6e52;
	text-align: center;
}
table tr td:nth-child(1){
	width: 80px;
}
.buy{
	width: 100%;
	height: 100%;
	background: rgba(0,0,0,0.6);
	position: fixed;
	left: 0;
	top: 0;
	padding-top: 381px;
}
.buy dl{
	width: 100%;
	height: 95px;
	display: flex;
	background: white;
}
.buy dl dt{
	width:30%;
}
.buy dl dt img{
	width: 89%;
}
.buy dl dd{
	width: 70%;
	font-size: 12px;
}
.buy dl dd p{
	padding-top: 20px;
}
.buy dl dd p:nth-child(2){
	color: #df5a67;
	font-weight: bold;
}
.buy dl dd p:nth-child(2) span{
	color: #888888;
	float: right;
	margin-right: 25px;
}
#close{
	width: 17px;
	position: absolute;
	right: 2px;
	top: 384px;
}
.num{
	display: flex;
	justify-content: space-around;
	background: white;
	border-top: 1px solid #cccccc;
	padding: 15px 0;
}
.num span{
	display: inline-block;
	width: 20px;
	height: 19px;
	text-align: center;
	border: 1px solid #cccccc;
}
.num button{
	padding: 2px 6px;
	background: #fafafa;
	border: 1px solid #cccccc;
}
.foot{
	width: 100%;
	height: 40px;
	position: fixed;
	bottom: 0;
}
.foot ul{
	display: flex;
}
.foot li{
	flex: 1;
	text-align: center;
	font-size: 12px;
	height: 40px;
}

.foot li:nth-child(1){
	background: #f6f6f6;
	border-top: 1px solid #eeeeee;
	opacity: 0.9;
	padding-top: 3px;
}
.foot li:nth-child(1) img{
	width: 15%;
}
.foot li:nth-child(2){
	background: #ed5564;
	color: white;
	line-height: 40px;
}
.foot li:nth-child(3){
	background: #fb6e52;
	color: white;
	line-height: 40px;
}
</style>
