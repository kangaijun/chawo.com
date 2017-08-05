<template>
  <div class="kind">
    <div class="cartop">
    	<p @click="back"><b><</b></p>
    	<p><input type="text" id="search" placeholder="大益" @click="search" /></p>
    	<ul @click="cli">
    		<li></li>
    		<li></li>
    		<li></li>
    	</ul>
    </div>
    <div class="kindmain">
    	<littlemenu v-show="isshow" id="show"></littlemenu>
    	<ul>
    		<li v-for="kind in arr">
    			<router-link v-bind:to="kind.path" active-class="ac">
    				<img v-bind:src="kind.img"/>
    				<p>{{kind.title}}</p>
    			</router-link>
    		</li>
    	</ul>
    	<router-view id="view"></router-view>
    </div>
  </div>
</template>

<script>
import Littlemenu from "@/components/Littlemenu"
export default {
	components:{
		Littlemenu
	},
  name: 'kind',
  data () {
    return {
      isshow:false,
      arr:[
      	{path:"/kind/br",img:"static/img/degault.png",title:"品牌推荐"},
      	{path:"/kind/puer",img:"static/img/05513613025301197.png",title:"普洱茶"},
      	{path:"/kind/hong",img:"static/img/05513612843900504.png",title:"红茶"},
      	{path:"/kind/flo",img:"static/img/05513613208319384.png",title:"花草茶"},
      	{path:"/kind/gao",img:"static/img/05513619073646092.png",title:"茶膏"},
      	{path:"/kind/book",img:"static/img/05513617106092665.png",title:"茶书"},
      	{path:"/kind/set",img:"static/img/05513613622793340.png",title:"茶具"},
      	{path:"/kind/white",img:"static/img/05513613534863625.png",title:"白茶"},
      	{path:"/kind/wulong",img:"static/img/05513613392095893.png",title:"乌龙茶"},
      	{path:"/kind/lv",img:"static/img/05513613314903487.png",title:"绿茶"}
      ]
    }
  },
  methods:{
  	cli(){
  		this.isshow=!this.isshow;
  	},
  	back(){
  		this.$router.go(-1);
  	},
  	search(){
  		this.$router.push("/search")
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
	box-sizing: border-box;
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
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10;
}
.cartop p{
	padding: 0 15px;
}
.cartop ul{
	padding: 0 15px;
	height: 20px;
}
.cartop li{
	width: 4px;
	height: 4px;
	border-radius: 50%;
	background: #5b5b5b;
	display: inline-block;
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
.kindmain{
	width: 100%;
	position: relative;
	display: flex;
}
.kindmain ul{
	position: absolute;
	margin-top: 39px;
	width: 25%;
	background: #f5f5f5;
}
.kindmain li{
	margin-left: 12%;
	text-align: center;
	width: 80%;
	height: 65px;
	border-bottom: 1px solid #eeeeee;
	padding: 5px 0;
}
.kindmain li a{
	display: inline-block;
	width: 80%;
	padding-bottom: 16px;
}
.kindmain li img{
	width: 45%;
}
#view{
	width:75%;
	margin-left: 25%;
	margin-top: 39px;
}
#show{
	top: 42px;
	z-index: 11;
	
}
.ac{
	color: #ed5564;
	border-bottom: 2px solid #ed5564;
}
</style>
