<template>
  <div class="common">
    <div class="ipt">
		<p>用户名：</p>
		<input type="text" name="" id="newacount" placeholder="请输入6-20个字符" />
	</div>
	<div class="ipt">
		<p>设置密码：</p>
		<input type="password" name="" id="pass" placeholder="请输入6-20位密码" />
	</div>
	<div class="ipt">
		<p>确认密码：</p>
		<input type="password" name="" id="confirm" placeholder="请再次输入密码" />
	</div>
	<div class="ipt">
		<p>邮箱：</p>
		<input type="text" name="" id="email" placeholder="请输入常用邮箱地址" />
	</div>
  </div>
</template>

<script>
export default {
  name: 'common',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
</style>
