<template>
  <div class="list">
  	<!--头部-->
  	<div class="cartop">
    	<p @click="back"><b><</b></p>
    	<p><input type="text" id="search" placeholder="大益" ref="val" /></p>
    	<p><img src="static/img/stiore_categroy_b.png" @click="style" /></p>
    	<ul @click="little">
			<li></li>
			<li></li>
			<li></li>
		</ul>
    </div>
    <!--主体-->
    <div class="listmain">
    	<littlemenu v-show="isshow" id="little"></littlemenu>
    	<!--筛选条件-->
    	<ul id="tiaojian">
    		<li @click="zong">综合排序</li>
    		<li @click="year">新上架</li>
    		<li @click="price">价格</li>
    		<li @click="shai">筛选▼</li>
    		<!--<p><img src="static/img/browse_list.png"/></p>-->
    	</ul>
    	<!--列表商品-->
    	<ul id="pro">
    		<li v-for="item in filterBy( arr , sou)" v-show="is1">
    			<dl>
    				<dt><img v-bind:src=item.src /></dt>
    				<dd>
    					<p>{{item.name}}</p>
    					<p>￥ {{item.price}}</p>
    					<p>销量：<span>{{item.sell}}</span></p>
    				</dd>
    			</dl>
    		</li>
    		<li v-for="item in orderBy( arr, 'price')" v-show="is2">
    			<dl>
    				<dt><img v-bind:src=item.src /></dt>
    				<dd>
    					<p>{{item.name}}</p>
    					<p>￥ {{item.price}}</p>
    					<p>销量：<span>{{item.sell}}</span></p>
    				</dd>
    			</dl>
    		</li>
    		<li v-for="item in orderBy( arr, 'year',-1)" v-show="is3">
    			<dl>
    				<dt><img v-bind:src=item.src /></dt>
    				<dd>
    					<p>{{item.name}}</p>
    					<p>￥ {{item.price}}</p>
    					<p>销量：<span>{{item.sell}}</span></p>
    				</dd>
    			</dl>
    		</li>
    	</ul>
    </div>
  </div>
</template>

<script>
import Littlemenu from "@/components/Littlemenu"
import axios from 'axios'

export default {
	components:{
		Littlemenu
	},
  	name: 'list',
  	data () {
   		return {
    		isshow:false,
    		is:false,
    		arr:[],
    		sou:"",
    		ipt:'',
    		is1:true,
    		is2:false,
    		is3:false,
    		historys:[]
   		}
   },
    created(){
    	var that=this;
    	//获取列表商品数据
    	axios.get("static/json/tea.json").then(function(res){
    		that.arr=res.data;
    	});
    },
    mounted(){
    	var lis=document.querySelectorAll("#tiaojian li");
	  		lis[0].style.color="#ed5564";
	  		//搜索值传递
    	if (this.$router.history.current.query.name==undefined) {
				this.sou=this.$refs.val.value=this.$router.history.current.query.strings;
    		this.historys=JSON.parse(localStorage.getItem("history"))
    		this.historys.push(this.sou)
				localStorage.setItem("history",JSON.stringify(this.historys))
    	}else{
				this.sou=this.$refs.val.value=this.$router.history.current.query.name;
    		this.historys=JSON.parse(localStorage.getItem("history"))
    		this.historys.push(this.sou)
				localStorage.setItem("history",JSON.stringify(this.historys))
    	}
    },
    methods:{
  		back(){
  			this.$router.go(-1)    //回退
  		},
	  	little(){
	  		this.isshow=!this.isshow;    //小菜单
	  	},
	  	style(){
	  		this.$router.push("/kind/br")   //分类
	  	},
	  	shai(){
	  		this.$router.push("/filter")   //筛选
	  	},
	  	//排序
	  	zong(){
	  		var lis=document.querySelectorAll("#tiaojian li");
	  		lis[0].style.color="#ed5564";
	  		lis[1].style.color="#444444"
	  		lis[2].style.color="#444444"
	  		this.is1=true,
    		this.is2=false,
    		this.is3=false
	  	},
	  	year(){
	  		var lis=document.querySelectorAll("#tiaojian li");
	  		lis[1].style.color="#ed5564"
	  		lis[0].style.color="#444444"
	  		lis[2].style.color="#444444"
	  		this.is1=false,
    		this.is2=false,
    		this.is3=true
	  	},
	  	price(){
	  		var lis=document.querySelectorAll("#tiaojian li");
	  		lis[2].style.color="#ed5564"
	  		lis[1].style.color="#444444"
	  		lis[0].style.color="#444444"
	  		this.is1=false,
    		this.is2=true,
    		this.is3=false
	  	}
  	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
	margin: 0;padding: 0;
	list-style-type: none;
	box-sizing: border-box;
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
	align-items: center;
}
.cartop p{
	font-size: 12px;
}
.cartop p:nth-child(1){
	padding: 0 12px;
}
.cartop p:nth-child(2){
	width: 80%;
}
.cartop p:nth-child(3){
	width: 10%;
	margin: 0 5px;
}
.cartop p:nth-child(3) img{
	width: 100%;
	position: relative;
	top: 3px;
}
.cartop ul{
	width: 10%;
	height: 20px;
}
.cartop li{
	width: 4px;
	height: 4px;
	border-radius: 50%;
	background: #585858;
	display: inline-block;
}
#search{
	width: 100%;
	height: 30px;
	border: none;
	border-radius: 2px;
	text-indent: 27px;
	background: white url(../../static/img/search_ico.png) no-repeat 7px 6px;
	background-size: 15px;
	border: 1px solid #dedede;
	border-radius: 5px;
}
#little{
	top: 40px;
}
#tiaojian{
	width: 100%;
	height: 40px;
	border-bottom: 1px solid #eeeeee;
	display: flex;
	justify-content: space-around;
	align-items: center;
	font-size: 14px;
	color: #888888;
}
#tiaojian p{
	padding-left: 12px ;
	padding-top: 7px;
	padding-bottom: 7px;
	border-left: 1px solid #eeeeee;
}
#tiaojian p img{
	width: 20px;
	opacity: 0.7;
}
#pro li dl{
	width: 100%;
	height: 106px;
	display: flex;
	padding-left: 8px;
	padding-top: 8px;
	padding-right: 8px;
}
#pro dt{
	width: 40%;
}
#pro dd{
	width: 67%;
}
#pro dt img{
	width: 100px;
}
#pro dd p{
	font-size: 13px;
}
#pro dd p:nth-child(1){
	color: black;
}
#pro dd p:nth-child(2){
	color: #ec5464;
	font-size: 14px;
	font-weight: bold;
	line-height: 35px;
}
#pro dd p:nth-child(3){
	color: #999999;
}
#pro dd p:nth-child(3) span{
	color: #474747;
	font-weight: bold;
	font-size: 10px;
}
</style>
