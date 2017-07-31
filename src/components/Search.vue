<template>
  <div class="search">
    <div class="cartop">
    	<p @click="back"><b><</b></p>
    	<p><input type="text" id="search" placeholder="大益" /></p>
    	<p>搜索</p>
    </div>
    <div class="smain">
    	<p>热门搜索</p>
    	<ul id="hot">
    		<li v-for="str in arr">{{str}}</li>
    	</ul>
    	<p>历史记录</p>
    	<ul id="history">
    		<li>紫砂</li>
    		<li>普洱茶</li>
    	</ul>
    	<button>清空历史</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search',
  data(){
  	return{
  		arr:["中茶","大益","下关","七彩云南","中茶","八角亭","紫砂"]
  	}
  },
  methods:{
  	back(){
  		this.$router.go(-1);
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
.cartop{
	width: 100%;
	height: 39px;
	background: #f7f7f7;
	border-bottom: 1px solid #eeeeee;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.cartop p{
	padding: 0 15px;
	font-size: 12px;
}
#search{
	width: 115%;
	height: 30px;
	border: none;
	border-radius: 2px;
	text-indent: 27px;
	background: white url(../../static/img/search_ico.png) no-repeat 7px 6px;
	background-size: 15px;
	opacity: 0.8;
	border: 1px solid #dedede;
	border-radius: 5px;
}
.smain{
	width: 100%;
	height: 568px;
	background: #f5f5f5;
}
.smain p{
	padding-top: 25px;
	font-size: 12px;
	text-indent: 15px;
	color: #555555;
}
#hot{
	display: flex;
	flex-wrap: wrap;
}
#hot li{
	padding: 0 12px;
	background: white;
	margin-left: 12px;
	margin-top: 12px;
	text-align: center;
	font-size: 12px;
	line-height: 30px;
	border-radius: 18px;
	border: 1px solid #eeeeee;
	color: #555555;
}
#history{
	display: flex;
	flex-wrap: wrap;
}
#history li{
	padding: 0 12px;
	background: white;
	margin-left: 12px;
	margin-top: 12px;
	text-align: center;
	font-size: 12px;
	line-height: 30px;
	border: 1px solid #eeeeee;
	color: #555555;
}
.smain button{
	width: 70%;
	height: 40px;
	background: #eeeeee;
	border: none;
	border-radius: 8px;
	margin-top: 38px;
	color: #555555;
	margin-left: 16%;
}
</style>
