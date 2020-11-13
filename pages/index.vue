<template>
  <div class="container">
    <Banner :bgText="$t('home.bannerText')" indexBanner />
    <div style="background: #fff;width:100%">
      <div class="block common_container">
        <ul>
          <li>
            <img src="/imges/index/index_chart.png" class="web" alt />
            <img src="/imges/h5_index/index_chart.png" class="h5" alt />
            <p>{{$t('home.fourBlock1')}}</p>
          </li>
          <li>
            <img src="/imges/index/index_earth.png" class="web" alt />
            <img src="/imges/h5_index/index_earth.png" class="h5" alt />
            <p>{{$t('home.fourBlock2')}}</p>
          </li>
          <li>
            <img src="/imges/index/index_tracking.png" class="web" alt />
            <img src="/imges/h5_index/index_tracking.png" class="h5" alt />
            <p>{{$t('home.fourBlock3')}}</p>
          </li>
          <li>
            <img src="/imges/index/index_tools.png" class="web" alt />
            <img src="/imges/h5_index/index_tools.png" class="h5" alt />
            <p>{{$t('home.fourBlock4')}}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="bitDns">
      <BlockTit text="BitDNS" />
      <div class="centens common_container">
        <div class="centens_text">
          <p>{{$t('home.bitDns')}}</p>
        </div>
      </div>
    </div>
    <div class="swipe" v-show="ok">
      <div class="content swiperWidth">
        <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide v-for=" (item,index) in swiperList2" :key="index">
            <div class="spimg">
              <img :src="item.img" alt />
            </div>
            <h5>{{item.name}}</h5>
            <h4>{{item.title}}</h4>
            <p
              @mouseover="handleclass=index"
              @mouseleave="handleclass=100"
              :class="[handleclass === index ?'leave':'over']"
            >{{item.content}}</p>
          </swiper-slide>

          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <div class="swiper-button-prev" @click="prev"></div>
        <div class="swiper-button-next" @click="next"></div>
      </div>
    </div>

    <BlockTit text="BitDNS Tech Tree" />
    <div class="BITDNS common_container">
      <img class="Tree h5" src="/imges/index/index_tree.png" alt />
      <img class="Tree web" src="/imges/index/index_tree.png" alt />
    </div>

    <BlockTit :text="$t('home.jishu')" />
    <div class="jishu">
      <div class="list common_container">


        <div class="swiperList h5">
          <el-carousel
            type="card"
            :loop="true"
            indicator-position="none"
            arrow="never"
            ref="carousel"
            :autoplay="false"
            @change="()=>{show = 0}"
          >
            <el-carousel-item
          
              v-for="(item,index) in technologyAdvantageList"
              :key="index"
              :class="`img${index+1}`"
            >
              <p @click="show = index+1">{{item.name}}</p>
              <div class="model"  @click="()=>{show = 0}">
                <el-collapse-transition>
                  <div v-show="show == index+1">
                    <div class="transition-box">{{item.detail}}</div>
                  </div>
                </el-collapse-transition>
              </div>
            </el-carousel-item>
          </el-carousel>


        </div>



        <ul class="web">
          <li
            v-for="(item,index) in technologyAdvantageList"
            :key="index"
            @mouseover="show = index+1"
            @mouseleave="()=>{show = 0}"
            :class="`img${index+1}`"
          >
            <p>{{item.name}}</p>
            <div class="model">
              <el-collapse-transition>
                <div v-show="show == index+1">
                  <div class="transition-box">{{item.detail}}</div>
                </div>
              </el-collapse-transition>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- BITDNS 核心功能 -->
    <BlockTit :text="$t('home.gn')" />
    <div class="gn">
      <div>
        <div class="con common_container">
          <div class="con_content">
            <h3>{{$t("home.gn1tit")}}</h3>
            <p>{{$t("home.gn1")}}</p>
          </div>
          <div>
            <img src="/imges/index/index_2.png" class="web" alt />
            <img src="/imges/h5_index/index_2.png" class="h5" alt />
          </div>
        </div>
      </div>

      <div style="background:#F3F8FF;">
        <div class="con common_container">
          <div>
            <img src="/imges/index/index_1.png" class="web" alt />
            <img src="/imges/h5_index/index_1.png" class="h5" alt />
          </div>
          <div class="con_content">
            <h3>{{$t("home.gn2tit")}}</h3>
            <p>{{$t("home.gn2")}}</p>
          </div>
        </div>
      </div>

      <div>
        <div class="con common_container">
          <div class="con_content">
            <h3>{{$t("home.gn3tit")}}</h3>
            <p>{{$t("home.gn3")}}</p>
          </div>
          <div>
            <img src="/imges/index/index_3.png" class="web" alt />
            <img src="/imges/h5_index/index_3.png" class="h5" alt />
          </div>
        </div>
      </div>

      <div style="background:#F3F8FF;">
        <div class="con common_container">
          <div>
            <img src="/imges/index/index_4.png" class="web" alt />
            <img src="/imges/h5_index/index_4.png" class="h5" alt />
          </div>
          <div class="con_content">
            <h3>{{$t("home.gn4tit")}}</h3>
            <p>{{$t("home.gn4")}}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- BitDNS路线图 -->
    <BlockTit :text="$t('home.tree')" />
    <div class="route">
      <div class="chart common_container chartMediaWidth">
        <!--时间线-->
        <div class="timeLine">
          <div class="ul_box">
            <ul class="my_timeline" ref="mytimeline" style="margin-left: 0px;">
              <li class="my_timeline_item" v-for="(item,index) in timeLineList" :key="index">
                <div class="my_timeline_itemTop">{{item.timestamp}}</div>
                <div class="my_timeline_itemMiddle">
                  <!--线-->
                  <div class="my_timeline_item_line"></div>
                  <!--圈圈节点-->
                  <div
                    class="my_timeline_node"
                    :style=" {backgroundColor: item.bgcolor, width: item.size + 'px', height: item.size + 'px'}"
                  ></div>
                </div>

                <!--标注-->
                <div class="my_timeline_item_content">{{item.info}}</div>
              </li>
            </ul>
          </div>
        </div>

        <div class="timg">
          <img src="/imges/index/arrow_right备份@2x.png" @click="moveLeft" />
          <img src="/imges/index/arrow_right@2x.png" @click="moveRight" />
        </div>
      </div>
    </div>

    <BlockTit :text="$t('home.newstit')" />
    <div class="news common_container">
      <div class="newsContent">
        <div class="news_left">
          <div class="day1">
            <h3 style="padding-top:15px">{{this.newsDay}}</h3>
            <p>{{this.newsMonth}}</p>
          </div>
          <div  class="news_left_botText">
            <p class="news_top" >{{this.newsTit}}</p>
            <p style="color: #c0c0c0;">{{this.newsDate}}</p>
          </div>
        </div>

        <div class="news_right">
          <div>
            <el-collapse accordion v-model="activeName" style="border: none">
              <el-collapse-item
                v-for=" (item,index) in newLinkList"
                :key="index"
                :name="index"
                style="margin-bottom: 27px"
                @click.native="changeNewsLeftContent(item.title, item.date, item.month, item.day)"
              >
                <template slot="title">
                  <div class="day" style="text-align: center">
                    <h3>{{item.day}}</h3>
                    <p>{{item.month}}</p>
                  </div>
                  <span class="newsText" style="display:inline-block;">{{item.title}}</span>
                </template>
                <p class="content">
                  {{item.des}}
                  <a :href="item.linkurl" target="_blank">
                    <img src="/imges/index/index-circle.png" alt />
                  </a>
                </p>
              </el-collapse-item>
            </el-collapse>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  swiperList,
  swiperList3,
  newLink,
  newLinkEn,
  home_technologyAdvantage,
  home_technologyAdvantage2,
  timeLineList,
  timeLineList2
} from "@/locales/globalData.json";
export default {
  data() {
    return {
      //  screenWidth: false,     // 轮播
      //  screenWidth2: true,     // 列表
      handleclass: 100,
      ok: true,
      show: false,
      show1: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      show7: false,
      show8: false,
      locale: this.$store.state.locale,
      technologyAdvantageList:
        this.$store.state.locale == "en-US"
          ? home_technologyAdvantage2
          : home_technologyAdvantage,
      // technologyAdvantageList2:,
      swiperList2:
        this.$store.state.locale == "en-US" ? swiperList3 : swiperList,
      newLinkList: this.$store.state.locale == "en-US" ? newLinkEn : newLink,
      activeName: 0,
      newsTit:
        this.$store.state.locale == "en-US"
          ? newLinkEn[0].title
          : newLink[0].title,
      newsDate:
        this.$store.state.locale == "en-US"
          ? newLinkEn[0].date
          : newLink[0].date,
      newsMonth:
        this.$store.state.locale == "en-US"
          ? newLinkEn[0].month
          : newLink[0].month,
      newsDay:
        this.$store.state.locale == "en-US" ? newLinkEn[0].day : newLink[0].day,

      swiperOptions: {
        loop: false,
        slidesPerView: 1,
        spaceBetween: 75,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
       swiperOption2:{
      //可见图片张数
        slidesPerView: 3,
       // 默认选中中间一张
        centeredSlides: true,
        //无限循环
        loop: true,
        //小圆点（我此处没使用，列出供参考）
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        //自动轮播
        autoplay: {
          stopOnLastSlide: true
        },
        //上下按钮点击轮播效果
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      // 时间线
      timeLineList:
        this.$store.state.locale == "en-US" ? timeLineList2 : timeLineList,
      windowWidth: 0 //实时屏幕宽度
    };
  },

  watch: {
    locallang(val, oldval) {
      console.log(val);
      if (val == "en-US") {
        this.technologyAdvantageList = home_technologyAdvantage2;
        this.swiperList2 = swiperList3;
        this.timeLineList = timeLineList2;
        this.newLinkList = newLinkEn;
        this.newsTit = newLinkEn[0].title;
        this.newsDate = newLinkEn[0].date;
        this.newsMonth = newLinkEn[0].month;
        this.newsDay = newLinkEn[0].day;
      } else {
        this.technologyAdvantageList = home_technologyAdvantage;
        this.swiperList2 = swiperList;
        this.timeLineList = timeLineList;
        this.newLinkList = newLink;
        this.newsTit = newLink[0].title;
        this.newsDate = newLink[0].date;
        this.newsMonth = newLink[0].month;
        this.newsDay = newLink[0].day;
      }
    },
    deep: true,

    windowWidth(val) {
      let that = this;
      val > 980
        ? (that.swiperOptions.slidesPerView = 3)
        : (that.swiperOptions.slidesPerView = 1);
      // that.swiper.destroy(true, false);
      that.$refs.mySwiper.initSwiper();
    }
  },
  computed: {
    swiper() {
      // return this.$refs.mySwiper.$swiper;
    },
    locallang() {
      return this.$store.state.locale;
    }
  },
  mounted() {
    this.slideBanner();
    console.log(this.locale);
    var that = this;
    window.fullWidth = document.documentElement.clientWidth;
    that.windowWidth = window.fullWidth; // 宽
    //  window.fullWidth>980?that.swiperOptions.slidesPerView=3:that.swiperOptions.slidesPerView=1
    window.onresize = () => {
      return (() => {
        window.fullWidth = document.documentElement.clientWidth;
        that.windowWidth = window.fullWidth; // 宽
        window.fullWidth > 980
          ? (that.swiperOptions.slidesPerView = 3)
          : (that.swiperOptions.slidesPerView = 1);
      })();
    };
  },
  created() {
    // let that =this
    // setTimeout(function(){
    //   that.ok=true
    // },500)
  },
  methods: {
    prev() {
      this.$refs.mySwiper.$swiper.slidePrev();
    },
    next() {
      this.$refs.mySwiper.$swiper.slideNext();
    },
    moveLeft() {
      let marginLeft = parseInt(this.$refs.mytimeline.style.marginLeft);
      let moveNum = 0;
      this.windowWidth > 980 ? (moveNum = -175) : (moveNum = -275);
      if (marginLeft < 190 && marginLeft >= moveNum) {
        this.$refs.mytimeline.style.marginLeft = marginLeft - 185 + "px";
      }
    },
    moveRight() {
      let marginLeft = parseInt(this.$refs.mytimeline.style.marginLeft);
      if (marginLeft < 1) {
        this.$refs.mytimeline.style.marginLeft = marginLeft + 185 + "px";
      }
    },
    changeNewsLeftContent(tit, date, month, day) {
      this.newsTit = tit;
      this.newsDate = date;
      this.newsMonth = month;
      this.newsDay = day;
    },
    slideBanner:function(){
      var vm=this
			//选中item的盒子
			var box = document.querySelector('.el-carousel__container');
		    //手指起点X坐标
		    var startPoint = 0;
			//手指滑动重点X坐标
			var stopPoint = 0;
			
			//重置坐标
			var resetPoint =  function(){
				startPoint = 0;
				stopPoint = 0;
			}
		    
		    //手指按下
		    box.addEventListener("touchstart",function(e){
		    	//手指按下的时候停止自动轮播
		    	// vm.stopAuto();
		    	//手指点击位置的X坐标
		        startPoint = e.changedTouches[0].pageX;
		    });
		    //手指滑动
		    box.addEventListener("touchmove",function(e){
		    	//手指滑动后终点位置X的坐标
		        stopPoint = e.changedTouches[0].pageX;
		    });
		    //当手指抬起的时候，判断图片滚动离左右的距离
		   	box.addEventListener("touchend",function(e){
		   		// console.log("1："+startPoint);
		   		// console.log("2："+stopPoint);
				if(stopPoint == 0 || startPoint - stopPoint == 0){
					resetPoint();
		   			return;
		   		}
		   		if(startPoint - stopPoint > 0){
		   			resetPoint();
		   			vm.$refs.carousel.next();
		   			return;
		   		}
		   		if(startPoint - stopPoint < 0){
		   			resetPoint();
		   			vm.$refs.carousel.prev();
		   			return;
		   		}
		    });
    },
    test(index){
      console.log(index)
    }
  }
};
</script>

<style lang='less'>
.container {
  .block {
    padding: 96px 0;
    ul {
      display: flex;
      justify-content: center;
      li {
        width: 237px;
        height: 258px;
        background: url("/imges/index/index_box.png") no-repeat;
        background-position: center;
        background-size: cover;
        text-align: center;
        line-height: 35px;
        margin: 0 10px;
        padding: 0 17px;
        box-sizing: border-box;
        img {
          // width: 31px;
          // height: 33px;
          margin-top: 78px;
        }
        p {
          font-size: 14px;

          font-weight: 600;
          color: #656565;
          line-height: 35px;
        }
      }
    }
  }

  .bitDns {
    width: 100%;
    height: 305px;
    background: #f3f8ff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .centens {
      border: 1px solid rgba(255, 255, 255, 0.1);
      p {
        // width: 867px;
        margin: 0 auto;
        text-align: center;
        font-size: 14px;
        
        font-weight: 400;
        color: #3c3c3c;
        line-height: 35px;
      }
    }
  }

  .swipe {
    width: 100%;
    height: 417px;
    background: url("/imges/index/index_lunbo.png") no-repeat;
    background-position: center;
    background-size: cover;
    .content {
      width: 980px;
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      text-align: center;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .spimg {
        width: 48px;
        height: 48px;
        margin: 0 auto;
        border-radius: 50%;
        margin-top: -40px;
        img {
          height: 100%;
          width: 100%;
        }
      }
      .swiper-button-prev:after,
      .swiper-button-next:after {
        color: white;
      }

      h5 {
        margin: 16px 0;
        font-size: 14px;
        
        font-weight: 500;
        color: #383838;
        line-height: 20px;
      }
      h4 {
        font-size: 12px;
        
        font-weight: 400;
        color: #333333;
        min-height: 34px;
      }
      .over {
        font-size: 12px;
        // height: 100px;
        
        font-weight: 400;
        color: #999999;
        line-height: 23px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: box;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
      }
      .leave {
        font-size: 12px;
        height: 100px;
        
        font-weight: 400;
        color: #999999;
        line-height: 23px;
        // overflow: hidden;
        overflow: scroll;
      }
      .leave::-webkit-scrollbar {
        display: none;
      }
    }
    .swiper-container {
      padding: 30px 60px;
    }
    .swiper-slide {
      width: 250px;
      height:247px;
      background: white;
      padding: 15px;
      box-sizing: border-box;
    }
    // .swiper-button-prev, .swiper-container-rtl .swiper-button-next{
    //   left: -50px;
    //   color: white;
    // }
    // .swiper-button-next, .swiper-container-rtl .swiper-button-prev{
    //    right: -50px;
    //    color: white;
    // }

    .swiper-button-prev:after,
    .swiper-button-next:after {
      font-size: 12px;
    }
  }

  .BITDNS {
    display: flex;
    flex-direction: column;
    align-items: center;
    .Tree {
      height: 364px;
      width: 989px;
    }
    text-align: center;
    .img {
      width: 691px;
      height: 255px;
    }
  }

  .jishu {
    .list {
      ul {
        display: none;
      }
      .swiperList {
        display: block;
      }

      .el-carousel-item {
        position: relative;
        width: 285px;
        height: 365px;
        margin: 0 auto;
        margin-top: 38px;
        text-align: center;
      }
      ul {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        li {
          position: relative;
          width: 285px;
          height: 365px;
          margin: 0 auto;
          margin-bottom: 38px;
          text-align: center;
        }
        p {
          margin-top: 214px;
          font-size: 24px;

          font-weight: 600;
          color: #ffffff;
          line-height: 33px;
          text-align: center;
        }
        .model {
          width: 285px;
          // height: 200px;
          position: absolute;
          top: 0px;
        }
        .transition {
          width: 285px;
        }
        .transition-box {
          position: relative;
          // width: 318px;
          height: 339px;
          border-radius: 4px;
          background-color: #2365ff;
          text-align: center;
          color: #fff;
          // padding: 125px 20px 0;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 10px;
          box-sizing: border-box;
          font-size: 12px;
          
          font-weight: 400;
          color: #ffffff;
          line-height: 23px;
        }
      }

      .img1 {
        background: url("/imges/index/index_67.png") no-repeat;
        background-size: cover;
        background-position: center;
      }
      .img2 {
        background: url("/imges/index/index_54.png") no-repeat;
        background-size: cover;
        background-position: center;
      }
      .img3 {
        background: url("/imges/index/index_56.png") no-repeat;
        background-size: cover;
        background-position: center;
      }
      .img4 {
        background: url("/imges/index/index_58.png") no-repeat;
        background-size: cover;
        background-position: center;
      }
      .img5 {
        background: url("/imges/index/index_50.png") no-repeat;
        background-size: cover;
        background-position: center;
      }
      .img6 {
        background: url("/imges/index/index_62.png") no-repeat;
        background-size: cover;
        background-position: center;
      }
      .img7 {
        background: url("/imges/index/index_64.png") no-repeat;
        background-size: cover;
        background-position: center;
      }
      .img8 {
        background: url("/imges/index/index_66.png") no-repeat;
        background-size: cover;
        background-position: center;
      }
    }
  }
  .gn {
    img {
      // width: 391px;
      height: 310px;
    }
    .con {
      display: flex;
      justify-content: space-around;
      padding: 83px 0;

      .con_content {
        width: 401px;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
    h3 {
      font-size: 30px;

      font-weight: 600;
      color: #333333;
      line-height: 53px;
    }
    p {
      margin-top: 22px;
      font-size: 18px;

      font-weight: 600;
      color: #888888;
      line-height: 33px;
    }
  }
  .route {
    .chart {
      position: relative;
      height: 473px;
      padding-top: 155px;
      background: url("/imges/index/index_ditu.png") no-repeat;
      background-position: center;
      background-size: cover;
      box-sizing: border-box;
      overflow: hidden;
    }
    .timg {
      position: absolute;
      top: 319px;
      right: 34px;
      // img {
      //   width: 36px;
      //   height: 36px;
      // }
    }
    // 时间线
    .timeLine {
      width: 10000px;
      .ul_box {
        width: 100%;
        height: 180px;
        display: inline-block;
        // float: left;
        margin-top: 2px;
        overflow: hidden;
      }
      .my_timeline_item {
        display: inline-flex;
        flex-direction: column;
        align-items: flex-end;

        .my_timeline_itemMiddle {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-items: center;
        }
      }
      .my_timeline_node {
        box-sizing: border-box;
        cursor: pointer;
      }
      .my_timeline_item_line {
        width: 170px;
        border-top: 2px solid #669aee;
      }
      .my_timeline_item_content,
      .my_timeline_itemTop {
        display: flex;
        justify-content: center;
        margin-right: -50px;
        width: 120px;
        height: 100%;
        padding: 20px 0;
        text-align: center;
      }
      .my_timeline_item_content {
        width: 123px;
        height: 34px;
        font-size: 12px;

        font-weight: 600;
        color: #333333;
        line-height: 17px;
      }
      .my_timeline_itemTop {
        padding-top: 0;
        font-size: 12px;
        color: #888888;
      }
    }
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  .el-carousel__item {
    margin: 0 auto;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-collapse-item__arrow {
    display: none;
  }
  .el-collapse-item__header {
    line-height: 1;
    text-align: left;
    height: 84px;
    background: #f5f5f5;
    font-size: 20px;
    font-weight: 500;
    color: #333333;
    border: 0;
  }
  .el-collapse-item__content {
    padding: 0;
  }
  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
  .el-carousel__item--card {
    width: 250px;
  }

  .news {
    padding-bottom: 70px;
    .newsContent {
      display: flex;
      width: 100%;
      margin: 0 auto;
      justify-content: space-between;
      flex-wrap: wrap;
    }

    
    .news_left {
      width: 519px;
      height: 445px;
      background: url("/imges/index/news1.png");
      background-size: cover;
      background-position: center;
      text-align: center;
      font-size: 20px;
      
      font-weight: 500;
      color: #ffffff;
      line-height: 28px;
      position: relative;
      display: flex;
      justify-content: center;
      .news_left_botText {
        position: absolute;
        bottom: 28px;
        text-align: right;
        width: 100%;
        p {
          font-size: 16px;
          color: #BEBEBE;
          letter-spacing: 1px;
          padding: 0 26px;
        }
        .news_top{
             font-size: 30px;
             color: white;
             font-size: 22px !important;
          }
      }

      .day1 {
        width: 84px;
        height: 84px !important;
        height: 100%;
        background: #669aee;
        color: white;
        text-align: center;

        position: absolute;
        top: 0;
        left: 0;
        h3 {
          font-size: 40px;
          
          font-weight: 500;
          color: #ffffff;
        }
        p {
          font-size: 21px;
          
          font-weight: 400;
          color: #ffffff;
          letter-spacing: 1px;
        }
      }
    }
    .news_right::-webkit-scrollbar {
      display: none;
    }
    .news_right {
      margin: 0 auto;
      height: 445px;
      width: 652px;
      overflow: auto;
      overflow-y: none;
      .content {
        position: relative;
        font-size: 16px;
        
        font-weight: 400;
        color: #666666;
        padding: 26px 18px;
        border: 3px solid #f5f5f5;
      }
      a {
        width: 18px;
        height: 18px;
        position: absolute;
        right: 18px;
        bottom: 10px;
      }
      img {
        width: 100%;
        height: 100%;
      }

      .newsText {
        margin-left: 30px;
      }
    }
    .day {
      min-height: 84px;
      min-width: 84px;
      background: #669aee;
      color: white;
      // padding: 0 20px;
      h3 {
        font-size: 53px;
        
        font-weight: 500;
        color: #ffffff;
      }
      p {
        font-size: 21px;
        
        font-weight: 400;
        color: #ffffff;
        letter-spacing: 1px;
      }
    }
  }

  @media (min-width: 2880px) and (max-width: 3840px) {
    .centens {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .centens_text {
        height: 215px;
        width: 867px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .swipe {
      height: 626px;
    }
    .bitDns {
      height: 458px;
    }
  }

  @media (min-width: 1441px) and (max-width: 1680px) {
    .swipe {
      height: 365px;
    }
    .bitDns {
      height: 267px;
      .commonTit {
        padding: 0 0 30px;
      }
    }
    .BITDNS {
      .Tree {
        height: 319px;
        width: 865px;
      }
    }
    .jishu {
      .list {
        ul {
          width: 897px;
          margin: 0 auto;
          p {
            margin-top: 164px;
            font-size: 16px;
          }
          li,
          .transition-box {
            height: 273px;
            width: 213px;
          }
          .transition-box {
            height: 251px;
            padding: 0 10px;
            font-size: 12px;
            line-height: normal;
          }
        }
      }
    }

    .gn {
      img {
        height: 271px;
      }
      .con {
        width: 1054px !important;
        margin: 0 auto;
        padding: 55px 0;

        .con_content {
          width: 267px;
        }
      }
      h3 {
        font-size: 26px;
        line-height: normal;
      }
      p {
        margin-top: 19px;
        font-size: 16px;
        line-height: normal;
      }
    }
    .news {
      .newsContent {
        width: 100%;
      }
    }
  }

  @media (min-width: 980px) and (max-width: 1440px) {
    .centens {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .centens_text {
        width: 750px;
        p {
          line-height: 19px;
        }
      }
    }

    .block {
      padding: 72px 0;
      ul {
        li {
          width: 178px;
          height: 193px;
          line-height: normal;
          img {
            width: 26px;
            height: 26px;
            margin-top: 58px;
          }
          p {
            font-size: 12px;
            line-height: normal;
            margin-top: 26px;
          }
        }
      }
    }

    .swipe {
      height: 313px;
    }
    .bitDns {
      height: 229px;
      .commonTit {
        padding: 0 0 18px;
      }
    }
    .BITDNS {
      .Tree {
        height: 273px;
        width: 742px;
      }
    }
    .jishu {
      .list {
        ul {
          width: 770px;
          margin: 0 auto;
          p {
            margin-top: 140px;
            font-size: 14px;
          }
          li,
          .transition-box {
            height: 234px;
            width: 182px;
          }
          .transition-box {
            height: 212px;
            padding: 0 10px;
            font-size: 12px;
            line-height: normal;
          }
        }
      }
    }
    .gn {
      img {
        height: 233px;
      }
      .con {
        width: 903px !important;
        padding: 62px 0;

        .con_content {
          width: 300px;
        }
      }
      h3 {
        font-size: 23px;
        line-height: normal;
      }
      p {
        margin-top: 17px;
        font-size: 14px;
        line-height: normal;
      }
    }
    .route {
      .chart {
        padding-top: 116px;
        .timeLine .my_timeline_item_line {
          width: 130px;
        }
      }
      .chartMediaWidth {
        width: 903px;
        height: 355px;
      }
    }

    .news {
      .newsContent {
        display: flex;
        width: 908px;
        margin: 0 auto;
        justify-content: space-between;
        flex-wrap: wrap;
      }
      .el-carousel__item h3 {
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
      }

      .el-collapse-item__header {
        height: 63px;
        font-size: 15px;
      }
      .el-carousel__item--card {
        width: 250px;
      }

      .news_left {
        width: 390px;
        height: 334px;
        font-size: 15px;

        .news_left_botText {
          bottom: 21px;
         
          p {
            font-size: 16px;
            line-height: normal;
            padding: 0 26px;
            color: #C0C0C0;
          }
           .news_top{
             font-size: 20px;
             color: white;
          }
        }
      }

      .news_right {
        margin: 0 auto;
        height: 334px;
        width: 426px;
        .content {
          font-size: 15px;
          padding: 26px 18px;
          border: 2px solid #f5f5f5;
        }
      }
      .day {
        min-width: 63px;
        min-height: 63px;
        background: #669aee;
        color: white;

        h3 {
          font-size: 40px;
        }
        p {
          font-size: 16px;
        }
      }
    }
  }

  // @media (min-width: 2880px) and (max-width: 3840px) {
  //   .Tree{
  //     height: 243px;
  //     width: 243px;
  //   }
  // }

  @media (min-width: 980px) and (max-width: 1279px) {
    .BITDNS {
      .Tree {
        height: 243px;
        width: 659px;
      }
    }
    .block {
      padding: 72px 0;
      ul {
        flex-wrap: wrap;
        li {
          width: 178px;
          height: 193px;
          line-height: normal;
          img {
            width: 26px;
            height: 26px;
            margin-top: 58px;
          }
          p {
            font-size: 12px;
            line-height: normal;
            margin-top: 26px;
          }
        }
      }
    }
    .jishu {
      .list {
        ul {
          width: 682px;
          margin: 0 auto;
          p {
            margin-top: 124px;
            font-size: 12px;
          }
          li,
          .transition-box {
            height: 208px;
            width: 162px;
          }
          .transition-box {
            height: 190px;
            padding: 0 10px;
            font-size: 12px;
            line-height: normal;
          }
        }
      }
    }

    .gn {
      img {
        height: 207px;
      }
      .con {
        width: 803px !important;
        padding: 55px 0;

        .con_content {
          width: 267px;
        }
      }
      h3 {
        font-size: 20px;
        line-height: normal;
      }
      p {
        margin-top: 15px;
        font-size: 12px;
        line-height: normal;
      }
    }
    .news {
      .newsContent {
        width: 100%;
        justify-content: center;
      }
      .news_left {
        margin: 0 auto;
        margin-bottom: 50px;
      }
    }
  }

  @media (min-width: 980px) {
    .h5 {
      display: none !important;
    }
  }

  @media (max-width: 980px) {
    .web {
      display: none !important;
    }
    .block {
      padding: 69px 0;
      ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        li {
          width: 340px;
          height: 382px;
          background: url("/imges/h5_index/index_box.png") no-repeat;
          background-position: center;
          background-size: 100% 100%;
          text-align: center;
          line-height: normal;
          margin: 0 10px;
          padding: 0 10px;
          box-sizing: border-box;
          img {
            width: 70px;
            height: 70px;
            margin-top: 90px;
          }
          p {
            width: 217px;
            margin: 0 auto;
            font-size: 26px;
            
            font-weight: 600;
            margin-top: 30px;
            color: #656565;
            line-height: 37px;
          }
        }
      }
    }

    .bitDns {
      width: 100%;
      height: 100%;

      background: #f3f8ff;
      padding: 0 57px 70px;
      box-sizing: border-box;
      .centens {
        border: 1px solid rgba(255, 255, 255, 0.1);
      }
    }

    .swipe {
      height: 750px;
      .content {
        width: 100%;
        p {
          font-size: 22px;
          
          font-weight: 400;
          color: #999999;
          line-height: 40px;
        }

        .over {
          line-height: 30px;
          overflow: initial;
        }
      }

      .swiper-container {
        width: 60% !important;
      }

      .swiper-slide {
        width: 100% !important;
        height: 500px;
      }
      .content .spimg {
        width: 113px;
        height: 114px;
        margin-top: -70px;
      }

      .swiper-container {
        padding: 80px 0;
      }
      .swiper-button-prev,
      .swiper-container-rtl .swiper-button-next {
        left: 90px;
      }
      .swiper-button-next,
      .swiper-container-rtl .swiper-button-prev {
        right: 90px;
      }

      .swiper-button-prev:after,
      .swiper-button-next:after {
        color: white;
      }
    }

    .BITDNS {
      display: flex;
      flex-direction: column;
      align-items: center;
      .Tree {
        height: 364px;
        width: 100%;
        padding: 30px;
        box-sizing: border-box;
      }
      text-align: center;
      .img {
        width: 691px;
        height: 255px;
      }
    }

    .jishu {
      .el-carousel__container {
        width: 680px;
        overflow: hidden;
        margin: 67px 58px;
      }
      p {
       padding-top: 214px;
        font-size: 26px;

        font-weight: 600;
        color: #ffffff;
        line-height: 37px;
        text-align: center;
      }
      .model {
        width:90%;
      
        // height: 200px;
        position: absolute;
        top: 0px;
        background: blue;
        color: white;
        left: 5%;
        .transition-box{
           
          padding: 10px;
          box-sizing: border-box;
          height: 250px;
          text-align: center;
          overflow: hidden;
          text-overflow: ellipsis;
            display: box;
          display: -webkit-box;
          -webkit-line-clamp: 10;
        -webkit-box-orient: vertical;
        overflow: scroll;
        }
         .transition-box::-webkit-scrollbar {
        display: none;
    }
      }
    }

    .gn {
      img {
        width: 298px;
        height: 236px;
      }
      .con {
        display: flex;
        width: 100% !important;
        justify-content: space-around;
        padding: 83px 0;

        .con_content {
          width: 327px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      }
      h3 {
        font-size: 32px;

        font-weight: 600;
        color: #333333;
        line-height: 45px;
      }
      p {
        margin-top: 22px;
        font-size: 24px;

        font-weight: 600;
        color: #888888;
        line-height: 39px;
      }
    }

    .route {
      .chart {
        position: relative;
        height: 350px;
        width: 690px;
        padding-top: 0;
        background: url("/imges/h5_index/index_ditu.png") no-repeat;
        background-position: center;
        background-size: cover;
        box-sizing: border-box;
        overflow: hidden;
      }
      .timg {
        position: absolute;
        top: 280px;
        right: 34px;
        // img {
        //   // width: 41px;
        //   // height: 41px;
        // }
      }
      // 时间线
      .timeLine {
        width: 10000px;
          // border: 1px solid red;

        .ul_box {
          width: 100%;
          height: 320px;
          display: inline-block;
          overflow: hidden;
        }
        .my_timeline_item {
          display: inline-flex;
          flex-direction: column;
          align-items: flex-end;

          .my_timeline_itemMiddle {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-items: center;
          }
        }
        .my_timeline_node {
          box-sizing: border-box;
          cursor: pointer;
        }
        .my_timeline_item_line {
          width: 170px;
          border-top: 2px solid #669aee;
        }
        .my_timeline_item_content,
        .my_timeline_itemTop {
          display: flex;
          justify-content: center;
          margin-right: -50px;
          width: 120px;
          height: 100%;
          padding: 20px 0;
          text-align: center;
        }
        .my_timeline_item_content {
          width: 138px;
          height: 120px;
          font-size: 18px;
          
          font-weight: 400;
          color: #333333;
          line-height: 20px;
        }
        .my_timeline_itemTop {
          padding-top: 0;
          font-size: 12px;
          color: #888888;
          min-width: 60px;
          min-height: 42px;
        }
      }
    }

    .news {
      .newsContent {
        width: 100%;
      }

      .news_left {
        width: 650px !important;
        margin: 0 auto;
        margin-bottom: 50px;
        .news_left_botText{
          p {
            font-size: 26px;
            color: #BEBEBE;
            letter-spacing: 1px;
            padding: 0 26px;
          }
          .news_top{
             font-size: 30px;
             color: white;
             font-size: 30px !important;
          }
        }
        
      }
      .news_right {
        height: 500px;
      }

      .day {
        min-width: 84px;
        min-height: 84px;
      }
    }
  }
}
</style>
