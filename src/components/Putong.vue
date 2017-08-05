<template>
  <div class="putong">
    <div class="ipt">
		<p>用&nbsp; 户&nbsp; 名：</p>
		<input type="text" name="username" id="newacount" placeholder="请输入6-20个字符" v-model="username" />
	</div>
	<div class="ipt">
		<p>设置密码：</p>
		<input type="password" name="password" id="pass" placeholder="请输入6-20位密码" v-model="password" />
	</div>
	<div class="ipt">
		<p>确认密码：</p>
		<input type="password" name="" id="confirm" placeholder="请再次输入密码" v-model="confirm" />
	</div>
	<div class="ipt">
		<p>邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  箱：</p>
			<input type="email" name="email" id="email" placeholder="请输入常用邮箱地址" v-model="email" />
		</div>
		<p id="agree"><checkbox></checkbox>同意 <a href="">用户注册协议</a></p>
		<input type="submit" id="sub" value="注 册" @click="register" />
		<div class="loser" v-show="isshow">注册成功</div>
		<div class="tishi" v-show="isTishi">
			<p v-model="tishi">{{tishi}}</p>
			<button @click="hide">确定</button>
		</div>
  </div>
</template>

<script>
import Checkbox from '@/components/Checkbox'
import {setCookie,getCookie} from '../assets/cookie.js'
import axios from 'axios'

export default {
	components:{
		Checkbox
	},
  name: 'putong',
  data () {
    return {
      username:"",
      password:"",
      confirm:"",
      email:"",
      isshow:false,
      tishi:'',
      isTishi:false
    }
  },
  methods:{
  	hide(){
  		this.isTishi=false;
  	},
  	register(){
  		var nReg=/^\w{6,20}$/g;
  		var mReg=/^\w{6,20}$/g;
  		var eReg=/^\w+@[a-z|0-9]{2,4}\.[a-z]{2,4}$/g;
  		if(this.username == ""){
  			this.tishi="请输入用户名";
  			this.isTishi=true;
  		}else if(this.password == ""){
  			this.tishi="请输入密码";
  			this.isTishi=true;
  		}else if( this.confirm!=this.password){
  			this.tishi="您两次输入的密码不一致";
  			this.isTishi=true;
  		}else if(this.email==""){
        this.tishi="请输入邮箱";
  			this.isTishi=true;
    	}else  if(!nReg.test(this.username)){
        this.tishi="用户名格式错误"
        this.isTishi = true
      }else  if(!mReg.test(this.password)){
        this.tishi="密码格式错误"
        this.isTishi = true
      }else  if(!eReg.test(this.email)){
        this.tishi="邮箱格式错误"
        this.isTishi = true
      }else{
    		$("#sub").css("background","#ed5564").css("color","white")
        let data = {'username':this.username,'password':this.password,'email':this.email}
        axios.post('http://localhost:6500/load',data,{
        	headers:{'Content-Type':'application/json'}
        }).then((res)=>{
        		console.log(res)
            this.username = '';
            this.password = '';
            this.show=true;
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
.putong{
	margin-top: 12px;
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
.loser{
	width: 160px;
	height: 52px;
	border: 1px solid #cccccc;
	border-radius: 5px;
	box-shadow: 0 0 15px darkgray;
	margin: 15px auto;
	text-align: center;
	line-height: 52px;
	position: absolute;
	left: 25%;
	top: 125px;
	background: #eeeeee;
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
