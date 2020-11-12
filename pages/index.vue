<template>
  <div class="container">
    <Banner 
      :bgText="$t('home.bannerText')"
      indexBanner/>
    <div style="background: rgb(242,245,245);width:100%">
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
          <p>
           {{$t('home.bitDns')}}
          </p>
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
            <p>{{item.content}}</p>
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

    <BlockTit text="BitDNS 技术优势" />
    <div class="jishu">
      <div class="list common_container">
        <div class="swiperList h5">
          <el-carousel
            type="card"
            :loop="true"
            indicator-position="none"
            arrow="never"
            :autoplay="false"
          >
            <el-carousel-item
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
    <BlockTit text="BitDNS 核心功能" />
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
    <BlockTit text="BitDNS 路线图" />
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

    <BlockTit text="新闻资讯" />
    <div class="news common_container">
      <div class="newsContent">
        <div class="news_left">
          <div class="day1">
            <h3 style="padding-top:15px">{{this.newsDay}}</h3>
            <p>{{this.newsMonth}}</p>
          </div>
          <div class="news_left_botText">
            <p>{{this.newsTit}}</p>
            <p style="color: #BEBEBE;font-size: 16px;">{{this.newsDate}}</p>
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
  home_technologyAdvantage,
  home_technologyAdvantage2
} from "@/locales/globalData.json";

export default {
  data() {
    return {
      //  screenWidth: false,     // 轮播
      //  screenWidth2: true,     // 列表
      ok:true,
      show: false,
      show1: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      show7: false,
      show8: false,
      locale: this.$store.state.locale,
      technologyAdvantageList: home_technologyAdvantage,
      // technologyAdvantageList2:,
      swiperList2: swiperList,
      newLinkList: newLink,
      activeName: "1",
      newsTit: "Corn.BitDNS以价值锚定收益 创新经济模型打开DeFi新格局",
      newsDate: "2020/10/31",
      newsMonth: "Oct",
      newsDay: "31",

      swiperOptions: {
        loop: true,
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
      // 时间线
      timeLineList: [
        {
          timestamp: "2020.10.31",
          color: "#333333",
          fontsize: 12,
          size: "15",
          bgcolor: "#373737",
          icon: "el-iconprev",
          info: "BitDNS域名系统中域名注册交易网站上线"
        },
        {
          timestamp: "2021.1.31",
          color: "#333333",
          fontsize: 12,
          size: "15",
          bgcolor: "#373737",
          info: "BitDNS域名系统完成BitMail邮箱系统核心模块上线"
        },
        {
          timestamp: "2021.3.31",
          color: "#333333",
          fontsize: 12,
          size: "15",
          bgcolor: "#373737",
          info: "BitUID系统用户名注册/交易网站上线"
        },
        {
          timestamp: "2021.4.31",
          color: "#333333",
          fontsize: 12,
          size: "15",
          bgcolor: "#373737",
          info: "BitMail邮箱系统完成BitDNS钱包v1.0版上线"
        },
        {
          timestamp: "2021.5.30",
          color: "#333333",
          fontsize: 12,
          size: "15",
          bgcolor: "#373737",
          info: "BitUID系统完成"
        },
        {
          timestamp: "2021.6.30",
          color: "#333333",
          fontsize: 12,
          size: "15",
          bgcolor: "#373737",
          info: "BitDNS钱包v5.0版上线，系统完成"
        }
      ],
      windowWidth: 0 //实时屏幕宽度
    };
  },



  watch: {
      locallang(val,oldval){
        console.log(val)
        if(val=="en-US"){
          this.technologyAdvantageList=home_technologyAdvantage2
          this.swiperList2=swiperList3
          }else{
 this.technologyAdvantageList=home_technologyAdvantage
          this.swiperList2=swiperList

            }
      },deep:true,

    windowWidth(val) {
      let that = this;
      val > 980
        ? (that.swiperOptions.slidesPerView = 3)
        : (that.swiperOptions.slidesPerView = 1);
      that.swiper.destroy(true, false);
      that.$refs.mySwiper.initSwiper();
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
    locallang(){
      return this.$store.state.locale
    }
  },
  mounted() {
    console.log(this.locale)
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
created(){
  let that =this
  setTimeout(function(){
    that.ok=true
  },500)

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
      this.windowWidth > 980 ? moveNum = -175 : moveNum = -275
      if (marginLeft <= 10 && marginLeft >= moveNum) {
        this.$refs.mytimeline.style.marginLeft = marginLeft - 185 + "px";
      }
    },
    moveRight() {
      let marginLeft = parseInt(this.$refs.mytimeline.style.marginLeft);
      if (marginLeft < -175) {
        this.$refs.mytimeline.style.marginLeft = marginLeft + 185 + "px";
      }
    },
    changeNewsLeftContent(tit, date, month, day) {
      this.newsTit = tit;
      this.newsDate = date;
      this.newsMonth = month;
      this.newsDay = day;
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
          width: 31px;
          height: 33px;
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
    // background: url("/imges/index/index_bit.png") no-repeat;
   
background: #F3F8FF;
    
    .centens {
      border: 1px solid rgba(255, 255, 255, 0.1);
      p {
        // width: 867px;
        margin: 0 auto;
        text-align: center;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
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
      .swiper-button-prev:after, .swiper-button-next:after{
        color: white;
      }

      h5 {
        margin: 16px 0;
        font-size: 14px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #383838;
        line-height: 20px;
      }
      h4 {
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #333333;
        min-height: 34px;
      }
      p {
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #999999;
        line-height: 23px;
      }
    }
    .swiper-container {
      padding: 30px 60px;
    }
    .swiper-slide {
      width: 250px;
      height: 247px;
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

    .swiper-button-prev:after, .swiper-button-next:after{
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
          font-family: PingFangSC-Regular, PingFang SC;
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
      img {
        width: 36px;
        height: 36px;
      }
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
    .newsContent{
      display:flex;
      width: 100%;
      margin:0 auto;
      justify-content: space-between; 
      flex-wrap: wrap;
    }

    @media screen and (max-width: 750px) {
      .news_left {
        width: 650px !important;
        margin: 0 auto;
        margin-bottom: 50px;
      }
    }
    .news_left {
      width: 519px;
      height: 445px;
      background: url("/imges/index/news1.png");
      background-size: cover;
      background-position: center;
      text-align: center;
      font-size: 20px;
      font-family: PingFangSC-Medium, PingFang SC;
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
          font-size: 21px;
          color: #ffffff;
          letter-spacing: 1px;
          padding: 0 26px;
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
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #ffffff;
        }
        p {
          font-size: 21px;
          font-family: PingFangSC-Regular, PingFang SC;
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
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #666666;
        padding: 26px 18px;
        border: 3px solid #f5f5f5;
      }
      a{
        width: 18px;
        height: 18px;
        position: absolute;
        right: 18px;
        bottom: 26px;
      }
      img {
        width: 100%;
        height: 100%;
      }

      .newsText{
        margin-left:30px
      }
    }
    .day {
      height: 84px;
      width: 84px;
      background: #669aee;
      color: white;
      // padding: 0 20px;
      h3 {
        font-size: 53px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #ffffff;
      }
      p {
        font-size: 21px;
        font-family: PingFangSC-Regular, PingFang SC;
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
      .commonTit{
        padding: 40px 0 30px;
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
    .news{
      .newsContent{
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
        p{
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
      .commonTit{
        padding: 32px 0 18px;
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
    .route{
      .chart{
        padding-top: 116px;
        .timeLine .my_timeline_item_line{
          width: 130px;
        }
      }
      .chartMediaWidth{
        width: 903px;
        height: 355px;
      }
    }

    .news {
      .newsContent{
        display:flex;
        width: 908px;
        margin:0 auto;
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
            font-size: 15px;
            line-height: normal;
            padding: 0 26px;
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
        max-width: 63px;
        max-height: 63px;
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
      .newsContent{
        width: 100%;
        justify-content: center;
      }
      .news_left{
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
        justify-content: center;
        li {
          min-width: 167px;
          height: 183px;
          background: url("/imges/h5_index/index_box.png") no-repeat;
          background-position: center;
          background-size: 100% 100%;
          text-align: center;
          line-height: normal;
          margin: 0 10px;
          padding: 0 10px;
          box-sizing: border-box;
          img {
            width: 40px;
            height: 40px;
            margin-top: 27px;
          }
          p {
            font-size: 20px;
            margin-top: 16px;
            font-weight: 400;
            color: #656565;
            line-height: 28px;
          }
        }
      }
    }

    .bitDns {
      width: 100%;
      height: 512px;
     
background: #F3F8FF;
      padding: 11px 57px 0;
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
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #999999;
          line-height: 40px;
        }
      }

      .swiper-container {
        width: 50% !important;
      }

      .swiper-slide {
        height: 430px;
      }
      .content .spimg {
        width: 113px;
        height: 114px;
        margin-top: -70px;
      }

      .swiper-container {
        padding: 80px 0;
      }
.swiper-button-prev, .swiper-container-rtl .swiper-button-next{
    left: 90px;
}
      .swiper-button-next, .swiper-container-rtl .swiper-button-prev{
        right: 90px;
      }

      .swiper-button-prev:after, .swiper-button-next:after {
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
        margin: 0 auto;
      }
      p {
        margin-top: 214px;
        font-size: 26px;
        
        font-weight: 600;
        color: #ffffff;
        line-height: 37px;
        text-align: center;
      }
      .model {
        width: 285px;
        // height: 200px;
        position: absolute;
        top: 0px;
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
        height: 300px;
        width: 690px;
        padding-top: 110px;
        background: url("/imges/h5_index/index_ditu.png") no-repeat;
        background-position: center;
        background-size: cover;
        box-sizing: border-box;
        overflow: hidden;
      }
      .timg {
        position: absolute;
        top: 250px;
        right: 34px;
        img {
          width: 41px;
          height: 41px;
        }
      }
      // 时间线
      .timeLine {
        width: 10000px;
        .ul_box {
          width: 100%;
          height: 260px;
          display: inline-block;
          // float: left;
          margin-top: -100px;
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
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #333333;
          line-height: 30px;
        }
        .my_timeline_itemTop {
          padding-top: 0;
          font-size: 12px;
          color: #888888;
        }
      }
    }

    .news{
      .newsContent{
        width: 100%;
      }
      .news_left{
        margin: 0 auto;
        margin-bottom: 50px;
      }
      .news_right{
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
