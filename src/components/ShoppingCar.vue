<template>
  <div class="shoppingCar">
    <div class="cartop">
    	<p @click="back"><b><</b></p>
    	<p>购物车</p>
    	<ul @click="cli">
    		<li></li>
    		<li></li>
    		<li></li>
    	</ul>
    </div>
    <div class="carmain">
    	<littlemenu v-show="isshow"></littlemenu>
    	<div class="car"><img src="static/img/cart_w.png"/></div>
    	<p>您的购物车还是空的</p>
    	<p>去挑一些中意的商品吧</p>
    	<button @click="go">随便逛逛</button>
    </div>
  </div>
</template>

<script>
import Littlemenu from "@/components/Littlemenu"
export default {
	components:{
		Littlemenu
	},
  name: 'shoppingCar',
  data () {
    return {
      isshow:false
    }
  },
  methods:{
  	cli(){
  		this.isshow=!this.isshow;
  	},
  	back(){
  		this.$router.go(-1);
  	},
  	go(){
  		this.$router.push("home");
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
.carmain{
	width: 100%;
	height: 470px;
	background: #f5f5f5;
	position: relative;
	text-align: center;
	padding-top: 155px;
}
.car{
	width: 62px;
	height: 62px;
	border-radius: 50%;
	background: #dddddd;
	margin: auto;
}
.car img{
	width: 65%;
	margin-top: 12px;
	margin-left: -4px;
}
.carmain p:nth-child(3){
	color: black;
	margin-top: 18px;
}
.carmain p:nth-child(4){
	color: #999999;
	font-size: 12px;
	line-height: 40px;
}
.carmain button{
	background: white;
	border: 1px solid #cccccc;
	border-radius: 3px;
	padding: 3px 5px;
}
</style>
