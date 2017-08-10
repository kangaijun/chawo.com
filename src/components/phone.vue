<template>
  <div class="phone">
    <div class="ipt">
			<p>手机号：</p>
			<input type="tel" name="" id="pass" placeholder="请输入手机号" v-model="username" />
		</div>
		<div class="ipt">
			<p>验证码：</p>
			<input type="text" name="" id="pass" placeholder="请输入4位验证码" v-model="yan" />
			<p @click="test" id="yan" v-model="str">{{str}}</p>
		</div>
		<p id="agree"><checkbox></checkbox>同意 <a href="">用户注册协议</a></p>
  	<input type="submit" id="sub" value="下一步" @click="get" />
  	<p>绑定手机不收任何费用，一个手机只能绑定一个账号，若需修改或解除已绑定的手机，请登录商城PC端进行操作。</p>
		<div class="marsk" v-show="confirm">
    	<div class="que">
    		<p v-model="tishi">{{tishi}}</p>
    		<button style="margin-right: 5px;" @click="conf">确定</button>
    	</div>
	   </div>
  </div>
</template>

<script>
import Checkbox from '@/components/Checkbox'
import {setCookie,getCookie} from '../assets/cookie.js'

export default {
	components:{
		Checkbox
	},
  name: 'phone',
  data () {
    return {
      username:"",
      yan:"",
      str:"",
      tishi:'',
      confirm:false
    }
  },
  created(){
  	this.test();
  },
  methods:{
  	//四位随机验证码
  	test(){
      var codeStr ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      var that=this;
      function getRandom(n, m) {
        n = Number(n);       //转换n,m，结果不是数字就是NaN
        m = Number(m);
        if (isNaN(n) || isNaN(m)) {     //判断n,m,是不是有效数字，如果n或m其中一个传入的不是数字
          return Math.random();      //返回 【0-1）之间的随机小数
      }
	    if (n > m) {             //如果n大于m，则交换位置
	      var temp = n;
	      n = m;
	      m = temp;
	    }
      return Math.round(Math.random() * (m - n) + n);          //返回，取m,n之间的随机整数。
    }
	  function getCode() {     
	    that.str = "";　　　　　　　　//定义一个空字符串备用
	    for (var i = 0; i < 4; i++) {    //遍历4个索引
	      var ran = getRandom(0, 61);      //调用getRandom方法，随机获取一个索引0-61里的随机索引
	     	that.str +=codeStr.charAt(ran);      //把codeStr字符串里，我们指定获取ran（这个4个索引）；
	    }
    }
    getCode();
    },
  	get(){
  		//正则验证
  		var telReg=/^1[3,4,5,7,8]\d{9}$/
  		if (this.username=="") {
  			this.tishi="请输入手机号码";
  			this.confirm=true;
  		}else if (this.yan!=this.str) {
  			this.tishi="验证码不正确";
  			this.confirm=true;
  		}else if(!telReg.test(this.username)){
  			this.tishi="手机号码格式有误";
  			this.confirm=true;
  		}else{
  			$("#sub").css("background","#ed5564").css("color","white")
  			this.$router.push("/telload");
				setCookie("tel",this.username)
  		}
  	},
  	conf(){
  		this.confirm=false;
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
.ipt{
	width: 89%;
	height: 40px;
	background: white;
	padding-left: 35px;
	border-bottom: 1px solid #eeeeee;
}
.ipt p{
	font-size: 12px;
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
#agree a{
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
#sub+p{
	color: #999999;
	font-size: 12px;
	width: 252px;
	text-align: center;
	margin-left: 10%;
	margin-top: 20px;
}
.marsk{
	width: 100%;
	height: 100%;
	background: rgba(0,0,0,0.6);
	position: fixed;
	left: 0;
	top: 0;
	z-index: 10;
}
.que{
	width: 65%;
	height: 65px;
	color: deepskyblue;
	background: #f5f5f5;
	text-align: center;
	margin: 255px auto;
	border-radius: 5px;
}
.que p{
	line-height: 30px;
}
.que button{
	padding: 4px;
	background: none;
	border: none;
	border-radius: 5px;
}
</style>
