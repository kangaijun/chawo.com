<template>
  <div class="hello">
  	<router-view></router-view>
    <ul id="tabbar">
    	<li><router-link to="home"><img src="static/img/f4.png" /><br /><span>首页</span></router-link></li>
    	<li><router-link to="/kind"><img src="static/img/f2.png" /><br /><span>分类</span></router-link></li>
    	<li><router-link to="server"><img src="static/img/f1.png" /><br /><span class="ke">客服</span></router-link></li>
    	<li><router-link to="shoppingCar"><img src="static/img/f5.png" /><br /><span class="gou">购物车</span></router-link></li>
    	<li><router-link to="load"><img src="static/img/f3.png" /><br /><span>我的</span></router-link></li>
    </ul>
  </div>
</template>

<script>
import {setCookie,getCookie} from '../assets/cookie.js'
export default {
  name: 'hello',
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
}
a {
  text-decoration: none;
  color: #444444;
  font-size: 12px;
}
#tabbar{
	width: 100%;
	height: 58px;
	display: flex;
	position: fixed;
	bottom: 0;
	border-top: 1px solid #cccccc;
	background: white;
}
#tabbar li{
	padding-top: 14px;
	flex: 1;
	text-align: center;
}
.ke{
	position: relative;
	top: -1px;
}
.gou{
	position: relative;
	top: 0px;
}
.router-link-active{
	color: red;
}
</style>
