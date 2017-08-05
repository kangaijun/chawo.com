<template>
  <div class="tel">
    <div class="minetop">
    	<p @click="back"><</p>
    	<p>提交验证码</p>
    	<p @click="load">登录</p>
    </div>
    <div class="telmain">
    	<p id="set">请设置登录密码</p>
    	<div class="ipt">
			<p>密 码：</p>
			<input type="password" name="password" id="pass" placeholder="请输入6-20位密码" v-model="password" />
		</div>
		<p id="agree"><checkbox></checkbox>显示密码</p>
		<input type="submit" id="sub" value="完 成" @click="register" />
    	<div class="loser" v-show="isshow">注册成功</div>
			<div class="tishi" v-show="isTishi">
				<p v-model="tishi">{{tishi}}</p>
				<button @click="hide">确定</button>
			</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Checkbox from '@/components/Checkbox'
import {setCookie,getCookie} from '../assets/cookie.js'

export default {
	components:{
		Checkbox
	},
	name: 'tel',
	data () {
    	return {
    		isshow:false,
     		password:"",
     		username:"",
     		tishi:'',
      	isTishi:false
    	}
  },
  methods:{
  	back(){
  		this.$router.go(-1);
  	},
  	load(){
  		this.$router.push("/load")
  	},
  	hide(){
  		this.isTishi=false;
  	},
  	register(){
  		var mReg=/^\w{6,20}$/g;
			var str=getCookie("tel");
			var a=str.split("=");
			this.username=a[0];
			console.log(this.username)
			if(this.username == ""){
				this.tishi="请输入手机号码";
  			this.isTishi=true;
			}else if(this.password == ""){
        	this.tishi="请输入密码";
  				this.isTishi=true;
    	}else if(!mReg.test(this.password)){
    			this.tishi="密码格式不正确";
  				this.isTishi=true;
    	}else{
    			$("#sub").css("background","#ed5564").css("color","white")
	        let data = {'username':this.username,'password':this.password}
	        axios.post('http://localhost:6500/load',data,{
	        	headers:{'Content-Type':'application/json'}
	        }).then((res)=>{
	        		console.log(res)
	            this.username = '';
	            this.password = '';
	            this.isshow=true;
	             /*注册成功之后再跳回登录页*/
	            setTimeout(function(){
	                this.$router.push("/load");
	            }.bind(this),1000)
	        }).catch((err)=>{
	        	showTishi:true;
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
.telmain{
	width: 100%;
	height: 528px;
	background: #f5f5f5;
}
#set{
	font-size: 12px;
	color: #888888;
	line-height: 42px;
	text-indent: 35px;
}
.ipt{
	width: 89%;
	height: 40px;
	background: white;
	padding-left: 35px;
	border-bottom: 1px solid #eeeeee;
}
.ipt p{
	font-size: 14px;
	line-height: 40px;
	display: inline-block;
}
.ipt input{
	border: none;
}
#agree{
	font-size: 12px;
	padding: 20px 20%;
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
.tishi{
	width: 160px;
	height: 52px;
	border: 1px solid #cccccc;
	border-radius: 5px;
	box-shadow: 0 0 15px darkgray;
	margin: 15px auto;
	text-align: center;
	padding-top: 10px;
	position: absolute;
	left: 25%;
	top: 125px;
	background: #eeeeee;
	font-size: 12px;
}
.tishi button{
	padding: 5px;
	background: none;
	border: 1px solid #eeeeee;
}
</style>
