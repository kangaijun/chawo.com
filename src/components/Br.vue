<!--商家模板-->
<template>
  <div class="br">
    <ul>
    	<li v-for="brand in brandArr">
    		<img v-bind:src="brand.img"/>
    		<p>{{brand.title}}</p>
    	</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'br',
  data(){
  	return{
  		brandArr:[]
  	}
  },
  created(){
  	var that=this;
  	axios.get("static/json/brand.json").then(function(res){
		that.brandArr=res.data;
  	})
  }
}
</script>
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
.br{
	background: #fcfcfc;
}
.br ul{
	width: 100%;
	display: flex;
	flex-wrap: wrap;
}
.br li{
	width: 30%;
	background: white;
	height: 75px;
	text-align: center;
	font-size: 12px;
	margin-top: 6px;
	margin-left: 2%;
	padding-top: 15px;
}
.br img{
	width: 100%;
	margin-bottom: 5px;
}
</style>