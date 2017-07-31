<template>
  <div class="greentea">
    <ul>
    	<li v-for="item in items">
    		<router-link v-bind:to=item.id>
    			<img v-bind:src=item.src />
    			<p>{{item.name}}</p>
    			<p>￥{{item.price}}</p>
    		</router-link>
    	</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'greentea',
  data () {
    return {
      items:[]
    }
  },
  created(){
  	var that=this;
  	axios.get("static/json/greenTea.json").then(function(res){
		that.items=res.data;
  	})
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
.greentea ul{
	width: 100%;
	display: flex;
	flex-wrap: wrap;
}
.greentea li{
	width: 45%;
	background: white;
	border-radius: 5px;
	margin-top: 10px;
	margin-right: 10px;
	margin-left: 1%;
}
.greentea li img{
	width: 100%;
	border-radius: 5px;
}
.greentea li p{
	margin: 0 5px;
}
.greentea li p:nth-child(2){
	padding-bottom: 10px;
	border-bottom: 1px solid #eeeeee;
}
.greentea li p:nth-child(3){
	padding: 5px 0;
	color: #db4453;
	font-weight: bold;
}
</style>
