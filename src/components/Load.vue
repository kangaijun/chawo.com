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
    		<input type="text" name="" id="acount" placeholder="请输入用户名/已验证手机" />
    	</div>
    	<div class="ipt">
    		<p>密 &nbsp;码：</p>
    		<input type="password" name="" id="password" placeholder="请输入登录密码" />
    	</div>
    	<div id="auto">
    		<checkbox></checkbox>
    		<span>忘记密码？</span>
    	</div>
    	<input type="submit" id="sub" value="登 录" />
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
export default {
	components:{
		Checkbox
	},
  name: 'load',
  data () {
    return {
      isshow:false
    }
  },
  methods:{
  	mineToHome(){
  		this.$router.push("/hello/home");
  	},
  	register(){
  		this.$router.push("/register");
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
	width: 100%;
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
	margin-top: 235px;
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
</style>
