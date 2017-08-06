<template>
  <div class="load">
    <div class="minetop">
    	<p><img src="static/img/home_b.png"  @click="mineToHome"/></p>
    	<p>登录</p>
    	<p @click="register">注册</p>
    </div>
    <div class="minemain">
    	<div class="ipt">
    		<p>账 &nbsp;户：</p>
    		<input type="text" name="username" id="acount" placeholder="请输入用户名/已验证手机" v-model="username" />
    	</div>
    	<div class="ipt">
    		<p>密 &nbsp;码：</p>
    		<input type="password" name="password" id="password" placeholder="请输入登录密码"  v-model="password" />
    	</div>
    	<div id="auto">
    		<checkbox></checkbox>七天自动登录
    		<span>忘记密码？</span>
    	</div>
    	<input type="submit" id="sub" value="登 录" @click="load" />
    	<div class="loser" v-show="showTishi">该用户未注册</div>
    	<div class="loser" v-show="show">登录成功</div>
    	<div class="foot">
    		<p>合作账号登录</p> 
    		<div>
    			<img src="static/img/qq.png"/>
    		</div>
    	</div>
    </div>
  </div>
</template>

<script>
import Checkbox from '@/components/Checkbox'
import axios from 'axios'
import {setCookie,getCookie} from '../assets/cookie.js'

export default {
	components:{
		Checkbox
	},
  name: 'load',
  data () {
    return {
      isshow:false,
      showTishi:false,
      show:false,
      username:"",
      password:""
    }
  },
  mounted(){
  /*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
    if(getCookie('username')){
        this.$router.push('/hello/loaded')
    }
    
  },
  methods:{
  	mineToHome(){
  		this.$router.push("/hello/home");
  	},
  	register(){
  		this.$router.push("/register");
  	},
  	load(){
  		var that=this;
			if(this.username == "" || this.password == ""){
            alert("请输入用户名或密码")
        }else{
        	$("#sub").css("background","#ed5564").css("color","white")
	        let data = {'username':this.username,'password':this.password}
	        /*接口请求*/
	        axios.post('http://localhost:6500/load/login',data,{
								headers:{'Content-Type':'application/json'}
	    		})
	        .then((res)=>{
	        			setCookie("uid",res.data.uid)
	        			this.show=true;
	              setCookie('username',this.username,1000*60);
	              setTimeout(function(){
	                  this.$router.push('/hello/loaded')
	              }.bind(this),1000)
	          }).catch(function(){
	          	that.username = '';
            	that.password = '';
	          	that.showTishi = true;
	          	window.onclick=function(){
	          		that.showTishi = false;
	          	}
	          })
      }
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
.minetop{
	width: 100%;
	height: 39px;
	background: #f7f7f7;
	border-bottom: 1px solid #eeeeee;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.minetop p{
	padding: 0 15px;
}
.minetop p img{
	width: 17px;
}
.minetop p:nth-child(3){
	font-size: 14px;
	color: #ed5564;
}
.minemain{
	width: 100%;
	height: 528px;
	background: #f5f5f5;
	position: relative;
}
.ipt{
	width: 89%;
	height: 40px;
	background: white;
	padding-left: 35px;
}
.ipt p{
	font-size: 12px;
	line-height: 40px;
	display: inline-block;
}
.ipt input{
	border: none;
}
.minemain div:nth-child(1){
	border-bottom: 1px solid #eeeeee;
}
#auto{
	font-size: 12px;
	padding: 25px 40px;
}
#auto span{
	float: right;
	color: #5d9cec;
}
#sub{
	width: 288px;
	height: 36px;
	border-radius: 5px;
	border: none;
	margin-left: 5%;
	font-size: 16px;
	color: #555555;
}
.foot{
	width: 100%;
	height: 106px;
	border-top: 1px solid #cccccc;
	margin-top: 165px;
	position: relative;
}
.foot p{
	width: 112px;
	position: absolute;
	top: -9px;
	left: 33%;
	text-align: center;
	font-size: 13px;
	background: #f5f5f5;
}
.foot div{
	width: 40px;
	height: 40px;
	border-radius: 50%;
	border: 1px solid #4fc0e8;
	margin: 20px 70px;
}
.foot div img{
	width: 80%;
	margin: 3px;
}
.loser{
	width: 160px;
	height: 52px;
	border: 1px solid #cccccc;
	border-radius: 5px;
	box-shadow: 0 0 15px darkgray;
	margin: 15px auto;
	text-align: center;
	line-height: 52px;
}
</style>
