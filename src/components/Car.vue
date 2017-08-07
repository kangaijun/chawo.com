<template>
  <div class="car">
  	<!--头部-->
    <div class="cartop">
    	<p @click="back"><b> < </b></p>
    	<p>购物车</p>
    	<ul @click="cli">
    		<li></li>
    		<li></li>
    		<li></li>
    	</ul>
    </div>
    <div class="carmain">
    	<!--小菜单-->
    	<littlemenu v-show="isshow" style="z-index: 20;"></littlemenu>
    	<div class="web">
    		<input type="checkbox" name="" class="ch" value="" checked="checked" style="margin-right: 10px;" />
    		<img src="static/img/store_b.png"/>
    		<span>茶窝网</span>
    	</div>
    	<div class="mian">
    		<p>免运费</p>
    		<p>满99免运费</p>
    	</div>
    	<!--商品信息-->
    	<div class="prod">
    		<ul id="products">
	    		<li v-for="(item,index) in items">
	    			<div class="buy">
			    		<img src="static/img/del_b.png" id="close" @click="del(index)" />
			    		<input type="checkbox" name="" class="ch" value="" checked="checked" />
			    		<dl>
			    			<dt><img v-bind:src=item.img /></dt>
			    			<dd>
			    				<p>{{item.name}}</p>
			    				<p>￥{{item.price}} <p id="num"><button @click="jian(index)">-</button><span>{{item.num}}</span><button @click="jia(index)">+</button></p></p>
			    			</dd>
			    		</dl>
			    	</div>
	    		</li>
	    	</ul>
    	</div>
    	<!--未登录时提示-->
    	<div class="tishi" v-show="is">
    		<p>结算购物车中的商品，需先登录商城</p>
    		<button style="margin-right: 6px;" @click="load">登录</button @click="re"><button @click="regis">注册</button>
    	</div>
    	<!--计算总金额-->
    	<div class="sum" v-show="no">
    		<input type="checkbox" name="" id="check" value="" checked="checked" @click="all" />
    		<p>合计总金额：<span v-model="zong">￥{{zong}}</span></p>
    		<button id="con">确认信息</button>
    	</div>
    </div>
  </div>
</template>

<script>
import Littlemenu from "@/components/Littlemenu"
import {setCookie,getCookie} from '../assets/cookie.js'
import axios from 'axios'

export default {
	components:{
		Littlemenu
	},
  name: 'car',
  data () {
    return {
      isshow:false,
      is:true,
      no:false,
      items:[],
      zong:0,
      uid:"",
      gaiItems:[]
    }
  },
  created(){
  	var that=this;
  	//获取用户ID
  	this.uid=getCookie("uid");
  	//调取该条数据
  	axios.get("http://localhost:6500/load/"+this.uid).then(function(res){
  		//放入数组渲染页面
  			this.items=JSON.parse(res.data.product);
  			this.add()
	}.bind(this))
	.catch(function(err){
		console.log(err)
	})
  },
  mounted(){
  /*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
    if(getCookie('username')){
	    this.is=false
	  	this.no=true;
    }else{
    	this.is=true,
      this.no=false
    }
  },
  methods:{
  	cli(){
  		this.isshow=!this.isshow;
  	},
  	back(){
  		this.$router.go(-1);
  	},
  	load(){
  		this.$router.push("/load")
  	},
  	regis(){
  		this.$router.push("/register")
  	},
  	re(){
  		this.$router.push("/register")
  	},
  	jian(index){
  		this.items[index].num--;
  		if (this.items[index].num<1) {
  			this.items[index].num=1
  		}
			this.xiu(this.items);
			this.add()
  	},
  	jia(index){
  		this.items[index].num++;
  			this.xiu(this.items);
  			this.add()
  	},
  	del(index){
  			delete this.items["id"+this.items[index].id];
  			//传入修改后的数组
  			this.xiu(this.items);
  			//重新计算价格
  			this.add()
  	},
  	//定义计算价格的函数
  	add(){
  		var sum=0;//价格总数
  		for (var k in this.items) {
  			sum+=this.items[k].num * this.items[k].price;
  		}
  		this.zong=sum;
  		this.xiu(this.items)
  	},
  	//数据改变执行
  	xiu(arr){
  		this.gaiItems=JSON.stringify(arr); //传入修改后的数组
  		//传入
  		axios.put("http://localhost:6500/load/"+this.uid,{
  			product:this.gaiItems
  		}).then(function(res){
  			this.get();
  		}.bind(this))
  		.catch(function(err){
  			console.log(err)
  		})
  	},
  	//获取数据
  	get(){
  		axios.get("http://localhost:6500/load/" + this.uid).then((res) => {
	      //从json对象中解析出json字符串
	      this.items = JSON.parse(res.data.product);
	    })
  	},
  	all(){
  		$(".ch").prop("checked",$("#check").prop("checked"));
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
	box-sizing: border-box;
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
.carmain{
	width: 100%;
	height: 528px;
	background: #f5f5f5;
	position: relative;
}
.web{
	background: white;
	height: 38px;
	padding: 10px;
	border-bottom: 1px solid #eeeeee;
}
.web img{
	width: 5%;
	position: relative;
	left: -7px;
	top: 1px;
}
.web span{
	font-size: 14px;
	position: relative;
	left: -5px;
	top: -2px;
}
.mian{
	background: white;
	height: 28px;
	border-bottom: 1px solid #eeeeee;
	display: flex;
	padding-left: 10px;
	align-items: center;
}
.mian p{
	font-size: 12px;
	color: #555555;
}
.mian p:nth-child(1){
	width: 45px;
	height: 17px;
	background: #ed5564;
	text-align: center;
	color: white;
	margin-right: 5px;
}
.sum{
	width: 100%;
	height: 42px;
	background: white;
	position: fixed;
	bottom: 0;
	display: flex;
	align-items: center;
	padding-left: 12px;
}
.sum p{
	font-size: 14px;
	padding: 0 12%;
}
.sum p span{
	font-size: 16px;
	font-weight: bold;
	color: #ed5564;
}
.sum button{
	width: 80px;
	height: 100%;
	border: none;
	background: #ed5564;
	color: white;
}
#products{
	width: 100%;
	background: white;
}
.buy{
	width: 100%;
	height: 100%;
	position: relative;	
	padding-left: 10px;
	display: flex;
	align-items: center;
}
.buy dl{
	width: 100%;
	height: 95px;
	display: flex;
	background: white;
}
.buy dl dt{
	width:28%;
}
.buy dl dt img{
	width: 100%;
}
.buy dl dd{
	width: 70%;
	font-size: 12px;
}
.buy dl dd p{
	padding-top: 20px;
}
.buy dl dd p:nth-child(1){
	width: 85%;
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
	width: 13px;
	position: absolute;
	right: 20px;
	top: 21px;
}
#num{
	position: absolute;
	right: 20px;
	top: 32px;
}
#num span{
	display: inline-block;
	width: 20px;
	height: 21px;
	text-align: center;
	border: 1px solid #cccccc;
	padding-top: 3px;
}
#num button{
	padding: 2px 6px;
	background: #fafafa;
	border: 1px solid #cccccc;
}
.tishi{
	width: 100%;
	height: 100px;
	background: white;
	text-align: center;
	position: fixed;
	bottom: 0;
}
.tishi p{
	font-size: 14px;
	color: #ed5564;
	line-height: 50px;
}
.tishi button{
	border: 1px solid #cccccc;
	background: no-repeat;
	border-radius: 3px;
	padding: 8px 16px;
}
</style>
