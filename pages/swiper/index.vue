<template>
    <div>
    <div class="out-box">
	<!-- //过度动画 -->
         <transition name="fade" mode="out-in" v-for="(i,f) in picture" :key="f">
        <img  :src="i" v-show="f==showNumber" >
        </transition>
    </div>
    </div>
 
</template>
<script>
// author:陈志航
export default {
  data () {
    return {
    timer:"",
    showNumber:0,
	//表示引入的文件  是一个数组
    picture:["/imges/index/swiper1.png","/imges/index/swiper2.png","/imges/index/swiper3.png","/imges/index/swiper4.png","/imges/index/swiper5.png"]
    }
  },
  mounted() {
       this.times()
        
  },
  methods:{
      times(){
        //   this.timer = setInterval(this.changeImg,5000)
      },
      changeImg(){
            this.showNumber=this.showNumber+1
            if(this.showNumber==5){
              
                    this.showNumber=3
            }
      },
      btnIcon(i){
          clearTimeout(this.timer)
          this.showNumber = i-1
          this.times()
      },
      mouseOver(i){
          clearTimeout(this.timer)
          this.showNumber = i-1
          this.times()
      }

  }
}
</script>
<style scoped>
    .out-box{
        padding:20px 20px;
        box-sizing:border-box;
        width:1129px;
        height:400px;
        position:relative;
    }
    .out-box img {
        border-radius:5px;
        width:1100px;
        height:400px;
        position:absolute;
    }
.fade-enter-active,.fade-leave-active{
    transition: all 3.5s;
  }
  .fade-enter,.fade-leave-to{
    opacity: 0;
  }
  .icon{
      
      border-radius:50%;
      width:20px;
      background-color:#fff;
      cursor:pointer;
  }
  .out-icon{
      width:150px;
      height:20px;
      display:flex;
      justify-content: space-around;
      position:absolute;
      bottom:0;
      left:500px;
  }
  .active{
      background-color:#3064bb;
  }