<template>
  <div class="puer">
    <ul>
    	<li v-for="item in arr">
    		<dl>
    			<dt><img v-bind:src=item.img /></dt>
    			<dd>
    				<p>{{item.name}}</p>
    				<p>{{item.price}}</p>
    				<p>销量：{{item.sell}}</p>
    			</dd>
    		</dl>
    	</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'puer',
  data(){
  	return{
  		arr:[]
  	}
  },
  created(){
  	var that=this;
  	axios.get("static/json/white.json").then(function(res){
  		that.arr=res.data;
  	})
  }
}
</script>
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
.puer ul{
	display: flex;
	flex-wrap: wrap;
}
.puer li{
	flex: 50%;
	text-align: center;
}
.puer li dt img{
	width: 115px;
}
.puer li dd p{
	font-size: 12px;
}
.puer li dd p:nth-child(2){
	font-size: 14px;
	color: #ed5564;
	font-weight: bold;
}
.puer li dd p:nth-child(3){
	color: black;
	font-size: 10px;
	font-weight: bold;
}
</style>