<template>
  <div class="server">
    <h2>联系客服</h2>
    <p>电话: <span>0871-6666 6655</span></p>
    <p>客服微信: 476261</p>
    <p>客服QQ: 4001564001</p>
    <img src="static/img/chawo-weixin.jpg"/>
  </div>
</template>

<script>
export default {
  name: 'server',
  data () {
    return {
      
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
.server{
	padding: 0 20px;
}
h2{
	font-weight: normal;
	border-bottom: 1px solid #444444;
	padding-top: 20px;
	padding-bottom: 12px;
}
.server p{
	font-size: 20px;
	color: #666666;
	padding-top: 25px;
}
.server img{
	margin-top: 25px;
}
.server p span{
	color: #0000ee;
}
</style>
