<template>
	<div class="filter">
		<div class="cartop">
	    	<p @click="back"><b><</b></p>
	    	<p>商品筛选</p>
	    	<p>重置</p>
	    </div>
	    <div class="main">
	    	<div class="one">
	    		<p>商品类型</p>
	    		<button>赠品</button>
	    		<button>限时折扣</button>
	    	</div>
	    	<div class="one">
	    		<button id="shai">筛选商品</button>
	    	</div>
	    </div>
	</div>
</template>
<script type="text/javascript">
	export default{
		name:"filter",
		data(){
			return {
				
			}
		},
		methods:{
		  	back(){
		  		this.$router.go(-1);
			}
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
.cartop p:nth-child(3){
	font-size: 14px;
	color: #ed5564;
}
.main{
	width: 100%;
	background: #f5f5f5;
	height: 529px;
}
.one{
	width: 100%;
	height: 75px;
	background: white;
	border-bottom: 1px solid #eeeeee;
	padding-left: 10px;
}
.one p{
	font-size: 12px;
	color: #878787;
	padding: 10px 0;
}
.one button{
	border: 1px solid #eeeeee;
	border-radius: 5px;
	background: none;
	padding: 5px 10px;
	color: #878787;
}
#shai{
	width: 288px;
	height: 36px;
	background: #ed5564;
	color: white;
	margin-top: 19px;
	border: none;
}
</style>