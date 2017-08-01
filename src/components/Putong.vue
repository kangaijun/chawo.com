<template>
  <div class="common">
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
		<input type="password" name="" id="confirm" placeholder="请再次输入密码" />
	</div>
	<div class="ipt">
		<p>邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  箱：</p>
		<input type="text" name="email" id="email" placeholder="请输入常用邮箱地址" v-mode="email" />
	</div>
	<p id="agree"><checkbox></checkbox>同意 <a href="">用户注册协议</a></p>
	<input type="submit" id="sub" value="注 册" />
  </div>
</template>

<script>
import Checkbox from '@/components/Checkbox'
export default {
	components:{
		Checkbox
	},
  name: 'common',
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
.common{
	margin-top: 12px;
}
.ipt{
	width: 100%;
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
</style>
