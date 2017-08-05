<template>
  <div class="setting">
  	<div class="cartop">
    	<p @click="back"><b><</b></p>
    	<p>设置</p>
    	<ul @click="cli">
    		<li></li>
    		<li></li>
    		<li></li>
    	</ul>
    </div>
    <div class="setmain">
    	<littlemenu v-show="isshow" style="top: 40px;"></littlemenu>
    	<div class="chose">
    		<p>登录密码<span>></span></p>
    		<p>建议您定期更改密码以保护账户安全</p>
    	</div>
    	<div class="chose">
    		<p>手机验证<span>{{name}} ></span></p>
    		<p>若您的手机已丢失或停用，请立即修改更换</p>
    	</div>
    	<div class="chose">
    		<p>支付密码<span>未设置 ></span></p>
    		<p>建议您设置复杂的支付密码保护账户金额安全</p>
    	</div>
    	<div class="chose" style="margin-top: 12px;">
    		<p>用户反馈<span> ></span></p>
    		<p>您在使用中遇到的问题与建议可向我们反馈</p>
    	</div>
    	<p id="out" @click="signout">安全退出</p>
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
import {setCookie,getCookie,delCookie} from '../assets/cookie.js'

export default {
	components:{
		Littlemenu
	},
  	name: 'setting',
  	data () {
    	return {
    		isshow:false,
    		name:""
    	}
 	},
 	methods:{
	  	cli(){
	  		this.isshow=!this.isshow;
	  	},
	  	back(){
	  		this.$router.go(-1);
	  	},
	  	signout(){
	  		/*删除cookie*/
            delCookie('username');
            this.$router.push('/hello/home')
	  	}
	},
	mounted(){
        /*页面挂载获取保存的cookie值，渲染到页面上*/
        let uname = getCookie('username')
        this.name = uname
        /*如果cookie不存在，则跳转到登录页*/
        if(uname == ""){
            this.$router.push('/hello/home')
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
.setmain{
	width: 100%;
	background: #f5f5f5;
	position: relative;
}
.chose{
	width: 100%;
	height: 62px;
	border-bottom: 1px solid #eeeeee;
	background: white;
	padding: 10px 9px;
}
.chose p:nth-child(1){
	font-size: 14px;
}
.chose p:nth-child(1) span{
	float: right;
	margin-right: 5px;
	color: #888888;
	position: relative;
	top: 12px;
}
.chose p:nth-child(2){
	font-size: 12px;
	margin-top: 3px;
	color: #888888;
}
#out{
	width: 100%;
	line-height: 40px;
	text-indent: 9px;
	font-size: 14px;
	margin-top: 12px;
	background: white;
}
.bottomNav{
	width: 100%;
	height: 37px;
	background: white;
	margin-top: 12px;
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
