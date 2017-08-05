<template>
  <div class="top">
    <input type="text" id="search" placeholder="大益" @click="search" />
		<ul @click="deng">
			<li></li>
			<li></li>
			<li></li>
		</ul>
  </div>
</template>

<script>
export default {
  name: 'top',
  data(){
  	return{
  		
  	}
  },
  methods:{
  	search(){
  		this.$router.push("/search")
  	},
  	deng(){
  		this.$router.push("/load")
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
.top{
	width: 100%;
	height: 36px;
	background: rgba(0,0,0,0);
	display: flex;
	align-items: center;
	position: absolute;
	z-index: 10;
}
#search{
	margin: 0 12px;
	width: 82%;
	height: 26px;
	border: none;
	border-radius: 2px;
	text-indent: 27px;
	background: white url(../../static/img/search_ico.png) no-repeat 7px 6px;
	background-size: 15px;
	opacity: 0.8;
}
.top li{
	width: 5px;
	height: 5px;
	border-radius: 50%;
	background: white;
	display: inline-block;
}
</style>
