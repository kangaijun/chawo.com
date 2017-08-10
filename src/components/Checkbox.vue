<!--自定义样式复选框组件-->
<template>
  <div class="checkbox">
		<input type="checkbox" id="check" checked="checked" />
		<label for="check"></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	</div>
</template>

<script>
export default {
  name: 'kind',
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
.checkbox{
	display: inline-block;
	position: relative;
}
input[type=checkbox]{
	display: none;
}
.checkbox label{
	cursor: pointer;
	width: 13px;
	height: 13px;
	border-radius: 50%;
	background: #f5f5f5;
	border: 1px solid gray;
	position: absolute;
	left: 0;
	top: 0;
}
.checkbox label:after{
	opacity: 0;
	content: '';
	position: absolute;
	width: 7px;
	height: 4px;
	background: transparent;
	top: 2px;
	left: 2px;
	border: 2px solid white;
	border-top: none;
	border-right: none;
	transform: rotate(-45deg);
}
input[type=checkbox]:checked+label{
	background: #48cfae;
	border: none;
}
input[type=checkbox]:checked+label:after{
	opacity: 1;
}
</style>
