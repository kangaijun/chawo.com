<template>
  <div class="homenav">
    <ul>
    	<li v-for="item in items">
    		<img v-bind:src="item.img" />
    		<p>{{item.title}}</p>
    	</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'homenav',
  data () {
    return {
      items:[
      	{img:"static/img/nav-1.png",title:"产品分类"},
      	{img:"static/img/nav-2.png",title:"近期新品"},
      	{img:"static/img/nav-3.png",title:"限时折扣"},
      	{img:"static/img/nav-4.png",title:"值得买"},
      	{img:"static/img/nav-5.png",title:"尾货清仓"},
      	{img:"static/img/nav-6.png",title:"品牌直选"},
      	{img:"static/img/nav-7.png",title:"精选"},
      	{img:"static/img/nav-8.png",title:"买就送"},
      	{img:"static/img/nav-9.png",title:"每日签到"},
      	{img:"static/img/nav-10.png",title:"个人中心"}
      ]
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
.homenav{
	width: 100%;
	height: 165px;
	border-bottom: 1px solid #eeeeee;
}
.homenav ul{
	width: 100%;
	display: flex;
	flex-wrap: wrap;
}
.homenav li{
	font-size: 12px;
	text-align: center;
	width: 20%;
	padding: 12px 0;
}
</style>
