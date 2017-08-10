<template>
  <div class="register">
    <div class="retop">
    	<p><img src="static/img/home_b.png"  @click="reToHome"/></p>
    	<p>会员注册</p>
    	<p @click="load">登录</p>
    </div>
    <div class="remain">
    	<ul id="renav">
    		<li v-for="(item,index) in arr" @click="toggle(index)">
    			<router-link :to=item.path>
    				<img :src="imgUrl[active==index?index:index+2]" /> {{item.title}}
    			</router-link>
    		</li>
    	</ul>
    	<router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
    	active:0,
    	arr:[
    		{
    			path:"/register/putong",
    			title:"普通注册"
    		},
    		{
    			path:"/register/phone",
    			title:"手机注册"
    		}
    	],
    	//图片地址数组
      imgUrl:["static/img/reg_r2.png","static/img/regm_r2.png",
      							"static/img/reg_r1.png","static/img/regm_r1.png"]
    }
  },
  methods:{
  	reToHome(){
  		this.$router.push("/hello/home");
  	},
  	load(){
  		this.$router.push("/hello/load");
  	},
  	toggle(index){
  		this.active=index;
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
.retop{
	width: 100%;
	height: 39px;
	background: #f7f7f7;
	border-bottom: 1px solid #eeeeee;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.retop p{
	padding: 0 15px;
}
.retop p img{
	width: 17px;
}
.retop p:nth-child(3){
	font-size: 14px;
	color: #ed5564;
}
.remain{
	width: 100%;
	height: 528px;
	background: #f5f5f5;
	position: relative;
}
#renav{
	width: 100%;
	height: 40px;
	background: white;
	border-bottom: 1px solid #eeeeee;
}
#renav li{
	display: inline-block;
	padding: 12px 0;
	margin: 0 45px;
	font-size: 12px;
}
#renav li img{
	width: 13px;
	position: relative;
	top: 2px;
}
.router-link-active{
	color: #ed5564;
	border-bottom: 2px solid #ed5564;
}
#renav li a{
	display: inline-block;
	padding-bottom: 10px;
}
</style>
