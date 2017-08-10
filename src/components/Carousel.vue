<template>
  <div class="carousel">
    <swiper :options="swiperOption"  ref="mySwiper">  
	    <!-- 这部分放你要渲染的那些内容 -->  
	    <swiper-slide><img src="static/img/lun-1.jpg"/></swiper-slide> 
	    <swiper-slide><img src="static/img/lun-2.jpg"/></swiper-slide>
	    <swiper-slide><img src="static/img/lun-3.jpg"/></swiper-slide>
	    <!-- 这是轮播的小圆点 -->  
      <!--<div class="swiper-pagination" slot="pagination"></div>-->
	</swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper' 

export default {
  name: 'home',
  components: {  
	  swiper,  
	  swiperSlide  
	},
  data () {
    return {
      swiperOption: {  
        //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
				autoplay:3000,  //自动轮播
        notNextTick: true,  
        pagination: '.swiper-pagination',  
        slidesPerView: 'auto',  
        centeredSlides: true,  
        paginationClickable: true,  
        spaceBetween: 0,  
        onSlideChangeEnd: swiper => {  
            //这个位置放swiper的回调方法  
            this.page = swiper.realIndex+1;  
            this.index = swiper.realIndex;  
        }  
      }  
    }
  },
  //定义这个sweiper对象  
  computed: {  
    swiper() {  
      return this.$refs.mySwiper.swiper;  
    }  
  },  
  mounted () {  
    //这边就可以使用swiper这个对象去使用swiper官网中的那些方法  
//  this.swiper.slideTo(0, 0, false);  
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
.carousel{
	width: 100%;
}
.carousel img{
	width: 100%;
}
</style>
