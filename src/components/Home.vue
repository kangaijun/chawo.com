<template>
  <div class="home">
    <top></top>
    <carousel></carousel>
    <homenav></homenav>
    <div class="show">
    	<img src="static/img/show.jpg"/>
    </div>
    <div class="main">
    	<div class="divide">普洱生茶</div>
    	<puersheng></puersheng>
    	<div class="divide">普洱熟茶</div>
    	<puershu></puershu>
    	<div class="divide">红茶</div>
    	<blacktea></blacktea>
    	<div class="divide">花草茶</div>
    	<flower></flower>
    	<div class="divide">绿茶</div>
    	<greentea></greentea>
    	<div class="divide">茶具</div>
    	<teaset></teaset>
    </div>
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
</template>

<script>
import Top from '@/components/Top'
import Carousel from '@/components/Carousel'
import Homenav from '@/components/Homenav'
import Puersheng from '@/components/Puersheng'
import Puershu from '@/components/Puershu'
import Blacktea from '@/components/Blacktea'
import Flower from '@/components/Flower'
import Greentea from '@/components/Greentea'
import Teaset from '@/components/Teaset'

export default {
	components:{
		Top,
		Carousel,
		Homenav,
		Puersheng,
		Puershu,
		Blacktea,
		Flower,
		Greentea,
		Teaset
	},
  name: 'home',
  data () {
    return {
    	
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
</style>
