<template>
  <div class="littermenu">
  	<img src="static/img/little.png" id="jiao"/>
    <ul>
    	<li><router-link to="/hello/home"><img src="static/img/home_w.png"/> 首页</router-link></li>
    	<li><router-link to="/search"><img src="static/img/search_w.png"/> 搜索</router-link></li>
    	<li><router-link to="/hello/shoppingCar"><img src="static/img/cart_w.png"/> 购物车</router-link></li>
    	<li><router-link to="/load"><img src="static/img/member_w.png"/> 我的商城</router-link></li>
    	<li><router-link to="/load"><img src="static/img/message_w.png"/> 消息</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'littermenu',
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
.littermenu{
	position: absolute;
	right: 5px;
	top: 5px;
	width: 100px;
	height: 194px;
	background: rgba(93,93,93,1);
	border-radius: 5px;
	text-align: left;
}
#jiao{
	position: absolute;
	right: 8px;
	top: -9px;
	width: 19px;
}
.littermenu ul img{
	width: 20px;
	position: relative;
	top: 5px;
}
.littermenu li{
	border-bottom: 1px solid #cccccc;
	padding-left: 13px;
	line-height: 38px;
}
.littermenu li a{
	color: #dad9d9;
}
.littermenu li:last-child{
	border-bottom: none;
}
</style>
