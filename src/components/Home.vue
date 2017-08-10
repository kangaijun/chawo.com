<template>
  <div class="home">
  	<!--头部-->
    <top></top>
    <!--轮播-->
    <carousel></carousel>
    <!--导航-->
    <homenav></homenav>
    <div class="show">
    	<img src="static/img/show.jpg"/>
    </div>
    <!--商品展示-->
    <!--javascript:void(0):取消a标签的默认链接-->
    <a   href="javascript:void(0)"  v-show="scroll" @click="tiao()">
      <img src="static/img/gotop_b.png" alt="" class="gotop">
    </a>
    <div class="main">
    	<div class="divide">普洱生茶</div>
    	<div class="puersheng">
		    <ul>
		    	<li v-for="item in items">
		    		<router-link :to=item.path>
		    			<img v-bind:src=item.src />
		    			<p>{{item.name}}</p>
		    			<p>￥{{item.price}}</p>
		    		</router-link>
		    	</li>
		    </ul>
		  </div>
    	<div class="divide">普洱熟茶</div>
    	<div class="puersheng">
		    <ul>
		    	<li v-for="item in items1">
		    		<router-link :to=item.path>
		    			<img v-bind:src=item.src />
		    			<p>{{item.name}}</p>
		    			<p>￥{{item.price}}</p>
		    		</router-link>
		    	</li>
		    </ul>
		  </div>
    	<div class="divide">红茶</div>
    	<div class="puersheng">
		    <ul>
		    	<li v-for="item in items2">
		    		<router-link :to=item.path>
		    			<img v-bind:src=item.src />
		    			<p>{{item.name}}</p>
		    			<p>￥{{item.price}}</p>
		    		</router-link>
		    	</li>
		    </ul>
		  </div>
    	<div class="divide">花草茶</div>
    	<div class="puersheng">
		    <ul>
		    	<li v-for="item in items3">
		    		<router-link :to=item.path>
		    			<img v-bind:src=item.src />
		    			<p>{{item.name}}</p>
		    			<p>￥{{item.price}}</p>
		    		</router-link>
		    	</li>
		    </ul>
		  </div>
    	<div class="divide">绿茶</div>
    	<div class="puersheng">
		    <ul>
		    	<li v-for="item in items4">
		    		<router-link :to=item.path>
		    			<img v-bind:src=item.src />
		    			<p>{{item.name}}</p>
		    			<p>￥{{item.price}}</p>
		    		</router-link>
		    	</li>
		    </ul>
		  </div>
    	<div class="divide">茶具</div>
    	<div class="puersheng">
		    <ul>
		    	<li v-for="item in items5">
		    		<router-link :to=item.path>
		    			<img v-bind:src=item.src />
		    			<p>{{item.name}}</p>
		    			<p>￥{{item.price}}</p>
		    		</router-link>
		    	</li>
		    </ul>
		  </div>
    </div>
    <div class="bottomNav">
    	<ul>
    		<li><router-link to="/load">登录</router-link></li><span>|</span>
    		<li><router-link to="/register">注册</router-link></li><span>|</span>
    		<li><router-link to="/load">反馈</router-link></li><span>|</span>
    		<li @click="tiao()"><router-link to="home">返回顶部</router-link></li>
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
</template>

<script>
import Top from '@/components/Top'
import Carousel from '@/components/Carousel'
import Homenav from '@/components/Homenav'
import Detail from '@/components/Detail'
import axios from 'axios'

export default {
	components:{
		Top,
		Carousel,
		Homenav,
		Detail
	},
  name: 'home',
  data () {
    return {
    	items:[],
    	items1:[],
    	items2:[],
    	items3:[],
    	items4:[],
    	items5:[],
    	scroll:false
    }
  },
  created(){
  	//数据调取
  	var that=this;
  	axios.get("static/json/puersheng.json").then(function(res){
			that.items=res.data;
  	});
  	axios.get("static/json/puersu.json").then(function(res){
			that.items1=res.data;
  	});
  	axios.get("static/json/black.json").then(function(res){
			that.items2=res.data;
  	});
  	axios.get("static/json/flowers.json").then(function(res){
			that.items3=res.data;
  	});
  	axios.get("static/json/green.json").then(function(res){
			that.items4=res.data;
  	});
  	axios.get("static/json/set.json").then(function(res){
			that.items5=res.data;
  	})
  },
  mounted(){
    // 1 先绑定 scroll 事件
    var map = {};
    window.onhashchange = function() {
        document.body.scrollTop = 0;
    }
    /*  2 再屏蔽掉浏览器自动恢复滚动位置行为带来的影响
    a 在 hashchange 时强制 document.body.scrollTop = 0
    b 在 scroll 事件里面, 当 document.body.scrollTop = 0 的时候不做 存操作.*/
    window.onscroll = function() {
      if (document.body.scrollTop) {
         // 存
          map[location.hash] = document.body.scrollTop;
      } else {
        var timer = null;
        //3 在读操作里面, 设置一个定时任务, 去判断 document.body.scrollTop 的值和你保存的位置是不是相同的
        timer = setInterval(function(){
        		if (document.body.scrollTop == map[location.hash]) {
                clearInterval(timer);
            } else {
                document.body.scrollTop = map[location.hash];
            }
        }, 20);
      }
    };
     window.addEventListener('scroll', this.handleScroll);
  },
  methods:{
  	tiao(){
  		$("html,body").animate({
            scrollTop:0
          },"slow")
  	},
  	handleScroll(){
      this.scroll=document.body.scrollTop>500;
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
.show{
	width: 100%;
}
.show img{
	width: 100%;
}
.main{
	width: 100%;
	background: #f5f5f5;
	padding: 5px 7px;
}
.divide{
	height: 16px;
	border-left: 3px solid #ed5564;
	font-size: 12px;
	text-indent: 6px;
	margin-top: 10px;
}
.puersheng ul{
	width: 100%;
	display: flex;
	flex-wrap: wrap;
}
.puersheng li{
	width: 45%;
	background: white;
	border-radius: 5px;
	margin-top: 10px;
	margin-right: 10px;
	margin-left: 1%;
}
.puersheng li img{
	width: 100%;
	border-radius: 5px;
}
.puersheng li p{
	margin: 0 5px;
	font-size: 12px;
}
.puersheng li p:nth-child(2){
	padding-bottom: 10px;
	border-bottom: 1px solid #eeeeee;
}
.puersheng li p:nth-child(3){
	padding: 5px 0;
	color: #db4453;
	font-weight: bold;
}
.bottomNav{
	width: 100%;
	height: 37px;
	background: white;
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
.gotop{
	width: 30px;
	position: fixed;
	right: 12px;
	bottom: 100px;
	opacity: 0.8;
}
</style>
