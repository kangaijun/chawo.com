<template>
  <div class="detail">
    {{$route.params.id}}
    
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'detail',
  data () {
    return {
		
    }
  },
  created () {
//  	console.log(this.$route.params.id)
			var id=this.$route.params.id;
			if (id.indexOf("p")>=0) {
				console.log(1)
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
</style>
