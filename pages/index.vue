<template>
  <div class="container">
    <Banner 
      bgUrl="/imges/banna/banna_index.png"
      insideBgUrl="/imges/banna/big_box.png"
    />
    <div class="block">
      <ul>
        <li>
          <img src="/imges/index/index_chart.png" alt />
          <p>用户数据绝对自主</p>
        </li>
        <li>
          <img src="/imges/index/index_earth.png" alt />
          <p>上层完全去中心化</p>
        </li>
        <li>
          <img src="/imges/index/index_tracking.png" alt />
          <p>集合多种技术工程经验</p>
        </li>
        <li>
          <img src="/imges/index/index_tools.png" alt />
          <p>跨链互操作性</p>
        </li>
      </ul>
    </div>

    <div class="bitDns">
      <div class="centens">
        <div class="tit">
          <i></i>
          <span style="margin:0 10px">BitDNS</span>
          <i></i>
        </div>
        <p>
          BitDNS是分布式互联网的核心基础设施，就如同IPFS解决的是下一代互联网的储存问题，BitDNS解决的则是下一代互联网的域名解析问题。在BitDNS的网络中，用户拥有绝对的自主权，域名完全去中心化，BitDNS通过BitUID、钱包、路由器等基础设施来构建分布式域名，
          <br />除此之外BitDNS的愿景是通过连接多数主流公链、主流工程技术（如：IPFS技术、Etherum、EOS、Fabric、R3、IPv8技术），
          <br />共同构成下一代分布式互联网的超级枢纽——dWeb4.0。
        </p>
      </div>
    </div>
    <div class="swipe">

      <div class="content">
        <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide v-for=" (item,index) in swiperList2" :key="index">
      <div class="spimg"><img :src="item.img" alt=""></div>
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

    <div class="BITDNS">
      <div class="tit">
        <i></i>
        <span style="margin:0 10px">BITDNS Tech Tree</span>
        <i></i>
      </div>
      <img src="/imges/index/index_tree.png" alt />
    </div>

    <div class="jishu">
      <div class="tit">
        <i></i>
        <span style="margin:0 10px">BITDNS 技术优势</span>
        <i></i>
      </div>
      <div class="list">
        <ul>
          <li v-for="(item,index) in technologyAdvantageList" :key="index" @mouseover="show = index+1" @mouseleave="()=>{show = 0}" :class="`img${index+1}`">
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
    <div class="gn">
      <div class="tit">
        <i></i>
        <span style="margin:0 10px">BITDNS 核心功能</span>
        <i></i>
      </div>

      <div>
        <div class="con">
          <div style="width:401px">
            <h3>BitUID</h3>
            <p>支持网站注册/登录、会员服务收费、网站授权管理、传统密码管理、网站收藏管理、个人云盘系统</p>
          </div>
          <div>
            <img src="/imges/index/index_2.png" alt />
          </div>
        </div>
      </div>

      <div style="background:#F3F8FF;">
        <div class="con">
          <div>
            <img src="/imges/index/index_1.png" alt />
          </div>
          <div style="width:401px">
            <h3>离线钱包</h3>
            <p>支持主流区块链钱包；作为域名系统、BitUID系统、dWeb4.0应用市场的载体；支持PC/手机/路由器多端多设备。</p>
          </div>
        </div>
      </div>

      <div>
        <div class="con">
          <div style="width:401px">
            <h3>域名系统</h3>
            <p>支持域名解析服务、注册买卖域名、域名解析设置、传统域名映射、域名专属昵称、域名动态解析。</p>
          </div>
          <div>
            <img src="/imges/index/index_3.png" alt />
          </div>
        </div>
      </div>

      <div style="background:#F3F8FF;">
        <div class="con">
          <div>
            <img src="/imges/index/index_4.png" alt />
          </div>
          <div style="width:401px">
            <h3>应用市场</h3>
            <p>dMail加密邮箱、dWeb分布式网站、dSNS社交网络、dChat分布式聊天、dVideo短视频、dGame游戏/VR。</p>
          </div>
        </div>
      </div>
    </div>
    <!-- BitDNS路线图 -->

    <div class="route">
      <div class="tit">
        <i></i>
        <span style="margin:0 10px">BitDNS路线图</span>
        <i></i>
      </div>
      <div class="chart">
        <!--时间线-->
        <div class="timeLine">
            <div class="ul_box">
                <ul class="my_timeline" ref="mytimeline" style="margin-left: 0px;">
                    <li class="my_timeline_item" v-for="(item,index) in timeLineList" :key="index">
                      <div class="my_timeline_itemTop">
                        {{item.timestamp}}
                      </div>
                      <div class="my_timeline_itemMiddle">
                        <!--线-->
                        <div class="my_timeline_item_line"></div>
                        <!--圈圈节点-->
                        <div class="my_timeline_node" :style = " {backgroundColor: item.bgcolor, width: item.size + 'px', height: item.size + 'px'}"></div>
                      </div>
                        
                        <!--标注-->
                        <div class="my_timeline_item_content" :style="{color: item.color, fontSize: item.fontsize + 'px'}">
                            {{item.info}}
                        </div>
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

    <div class="news">
      <div class="tit">
        <i></i>
        <span style="margin:0 10px">新闻资讯</span>
        <i></i>
      </div>
    
      <div style="display:flex;width:1200px;margin:0 auto;justify-content: space-between;" >
        <div class="news_left">
          <div class="day1" style="height: 84px;"> <h3 style="padding-top:15px">14</h3><p>NOV</p>   </div>
          <p style="margin-top:270px">BitDNS链接信息互联网与价值区块链的超级枢纽</p>
          <p style="float:right;margin-right:45px;color: #BEBEBE;font-size: 16px;">2019/10/14</p>
        </div>
        
        <div class="news_right">
          <div>
            <el-collapse accordion v-model="activeName" style="border: none">
              <el-collapse-item v-for=" (item,index) in newLinkList" :key="index" :name="index" style="margin-bottom: 27px"> 
                <template slot="title">
                  <div class="day" style="text-align: center"> <h3>{{item.day}}</h3><p>{{item.month}}</p></div>
                  <span style="display:inline-block;margin-left:30px"> {{item.title}}</span>
                </template>
                <p class="content">
                  {{item.des}}
                  <a :href="item.linkUrl" target="_blank"><img src="/imges/index/index-circle.png" alt=""></a>
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

import {swiperList, newLink, home_technologyAdvantage} from "@/locales/globalData.json";

export default {
  data() {
    return {
      show: false,
      show1: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      show7: false,
      show8: false,
      technologyAdvantageList: home_technologyAdvantage,
      swiperList2:swiperList,
      newLinkList: newLink,
      activeName:"1",
    
      swiperOptions: {
        loop:true,
          slidesPerView: 3,
        spaceBetween:75,
          observer:true,//修改swiper自己或子元素时，自动初始化swiper
observeParents:true,//修改swiper的父元素时，自动初始化swiper
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        

      },
      // 时间线
      timeLineList: [{
        timestamp: '2020.10.31',
        color: '#333333',
        fontsize: 12,
        size: '15',
        bgcolor: '#373737',
        icon: 'el-iconprev',
        info: 'BitDNS域名系统中域名注册交易网站上线'
      }, {
        timestamp: '2021.1.31',
        color: '#333333',
        fontsize: 12,
        size: '15',
        bgcolor: '#373737',
        info: 'BitDNS域名系统完成BitMail邮箱系统核心模块上线'
      }, {
        timestamp: '2021.3.31',
        color: '#333333',
        fontsize: 12,
        size: '15',
        bgcolor: '#373737',
        info: 'BitUID系统用户名注册/交易网站上线'
      }, {
        timestamp: '2021.4.31',
        color: '#333333',
        fontsize: 12,
        size: '15',
        bgcolor: '#373737',
        info: 'BitMail邮箱系统完成BitDNS钱包v1.0版上线'
      }, {
        timestamp: '2021.5.30',
        color: '#333333',
        fontsize: 12,
        size: '15',
        bgcolor: '#373737',
        info: 'BitUID系统完成'
      }, {
        timestamp: '2021.6.30',
        color: '#333333',
        fontsize: 12,
        size: '15',
        bgcolor: '#373737',
        info: 'BitDNS钱包v5.0版上线，系统完成'
      }]
    };
    
  },

  created(){
function isIE() { //ie?
 if (!!window.ActiveXObject || "ActiveXObject" in window)
  console.log("是")
  else
   console.log("不是")
 }
//  console.log(swiperList)
  },
  computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
   mounted() {
      this.swiper.slideTo(3, 1000, true)
    },
    methods: {
      prev() {
        this.$refs.mySwiper.$swiper.slidePrev();
      },
      next() {
        this.$refs.mySwiper.$swiper.slideNext();
      },
      moveLeft()  {
        let marginLeft = parseInt(this.$refs.mytimeline.style.marginLeft);
        let listNum = 0;
        if(marginLeft <= 10 && (marginLeft >= -175)){
            this.$refs.mytimeline.style.marginLeft = marginLeft - 185 + 'px';
        }
      },
      moveRight() {
        let marginLeft = parseInt(this.$refs.mytimeline.style.marginLeft);
        if(marginLeft < (-175)){
            this.$refs.mytimeline.style.marginLeft = marginLeft + 185 + 'px';
        }
      }
	}

};
</script>

<style lang='less'>
.container {
  .block {
    width: 1200px;
    margin: 0 auto;
    padding: 96px 0 86px;
    ul {
      display: flex;
      justify-content: center;

      li {
        width: 237px;
        height: 258px;
        background: url("/imges/index/index_box.png") no-repeat;
        background-position: center;
        background-size: 100% 100%;
        text-align: center;
        line-height: 35px;
        margin: 0 10px;
        img {
          width: 31px;
          height: 33px;
          margin-top: 78px;
        }
        p {
          font-size: 14px;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          color: #656565;
          line-height: 78px;
        }
      }
    }
  }

  .bitDns {
    width: 100%;
    height: 305px;
    background: url("/imges/index/index_bit.png") no-repeat;
    background-position: center;
    background-size: 100% 100%;
    .tit {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 30px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #3c3c3c;
      margin: 43px 0 24px;
    }
    .centens {
      margin: 0 auto;
      width: 1200px;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    p {
      width: 867px;
      margin: 0 auto;
      text-align: center;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #3c3c3c;
      line-height: 35px;
    }
    i {
      display: inline-block;
      width: 30px;
      height: 3px;
      background: #2365ff;
    }
  }
  .swipe {
    width: 100%;
    height: 417px;
    background: url("/imges/index/index_lunbo.png") no-repeat;
    background-position: center;
    background-size: 100% 100%;
    .content {
      // border: 1px solid red;
      width: 900px;
      margin: 0 auto;
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      text-align: center;
      .spimg{
        width: 48px;
        height: 48px;
        margin: 0 auto;
        border-radius:50% ;
        margin-top: -47px;
      }
      h5{
        margin: 16px 0;
        font-size: 14px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #383838;
        line-height: 20px;
      }
      h4{
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #333333;
      }
      p{
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #999999;
        line-height: 23px;
      }
    }
    .swiper-container{
      padding: 30px 0;
    }
    .swiper-slide{
      width: 250px !important;
      height: 247px;
      background: white;
      padding: 23px;
      box-sizing: border-box;
    }
    .swiper-button-prev, .swiper-container-rtl .swiper-button-next{
      left: -50px;
      color: white;
    }
    .swiper-button-next, .swiper-container-rtl .swiper-button-prev{
       right: -50px;
       color: white;
    }

    .swiper-button-prev:after, .swiper-button-next:after{
      font-size: 12px;
    }
  }
}
.BITDNS {
  text-align: center;

  img {
    width: 1200px;
    height: 443px;
    margin: 0 auto;
  }
}

.jishu {
  .list {
    width: 1200px;
    // border: 1px solid red;
    margin: 0 auto;

    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      li {
        position: relative;
        width: 285px;
        height: 365px;
        margin-top: 38px;
        text-align: center;
        p {
          margin-top: 214px;
          font-size: 24px;
          font-family: PingFangSC-Semibold, PingFang SC;
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
          width: 285px;
          height: 339px;
          border-radius: 4px;
          background-color: #2365ff;
          text-align: center;
          color: #fff;
          padding: 125px 20px 0;
          box-sizing: border-box;

          font-size: 12px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #ffffff;
          line-height: 23px;
        }
      }
      .img1 {
        width: 285px;
        background: url("/imges/index/index_67.png") no-repeat;
        background-size: 100% 100%;
        background-position: center;
      }
      .img2 {
        background: url("/imges/index/index_54.png") no-repeat;
        background-size: 100% 100%;
        background-position: center;
      }
      .img3 {
        background: url("/imges/index/index_56.png") no-repeat;
        background-size: 100% 100%;
        background-position: center;
      }
      .img4 {
        background: url("/imges/index/index_58.png") no-repeat;
        background-size: 100% 100%;
        background-position: center;
      }
      .img5 {
        background: url("/imges/index/index_50.png") no-repeat;
        background-size: 100% 100%;
        background-position: center;
      }
      .img6 {
        background: url("/imges/index/index_62.png") no-repeat;
        background-size: 100% 100%;
        background-position: center;
      }
      .img7 {
        background: url("/imges/index/index_64.png") no-repeat;
        background-size: 100% 100%;
        background-position: center;
      }
      .img8 {
        background: url("/imges/index/index_66.png") no-repeat;
        background-size: 100% 100%;
        background-position: center;
      }
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
    width: 1200px;
    margin: 0 auto;
    padding: 83px 0;
  }
  h3 {
    font-size: 38px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #333333;
    line-height: 53px;
  }
  p {
    margin-top: 22px;
    font-size: 24px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #888888;
    line-height: 33px;
  }
}
.route {
  .chart {
    position: relative;
    width: 1200px;
    height: 473px;
    margin: 0 auto;
    padding-top: 155px;
    background: url("/imges/index/index_ditu.png") no-repeat;
    background-position: center;
    background-size: 100% 100%;
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
  .timeLine{
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

        .my_timeline_itemMiddle{
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
        border-top: 2px solid #669AEE;
    }
    .my_timeline_item_content, .my_timeline_itemTop {
        display: flex;
        justify-content: center;
        margin-right: -50px;
        width: 120px;
        height: 100%;
        padding: 20px 0;
        text-align: center;
    }

    .my_timeline_itemTop{
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
.el-collapse-item__header{
  line-height: 1;
  text-align: left;
  height: 84px;
  background: #F5F5F5;
  font-size: 20px;
  font-weight: 500;
  color: #333333;
  border: 0;

}
.el-collapse-item__content{
  padding: 0;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-carousel__item--card {
  width: 250px;
}
i {
  display: inline-block;
  width: 30px;
  height: 3px;
  background: #2365ff;
}
.tit {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #3c3c3c;
  margin: 43px 0 24px;
}

.news {
  padding-bottom: 70px;
  .news_left {
    width: 519px;
    height: 445px;
    background: url("/imges/index/news1.png");
    background-size: 100% 100%;
    background-position: center;
    text-align: center;
    font-size: 20px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 28px;
    .day1{
      width: 84px;
      height: 100%;
      background: #669AEE;
      color: white;
      text-align: center;
      h3{
        font-size: 40px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #FFFFFF;
      }
      p{
        font-size: 21px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #FFFFFF;
        letter-spacing: 1px;
      }
    }
  }
   .news_right::-webkit-scrollbar{
        display:none;
}
  .news_right{
      height: 445px;
    width: 652px;
    overflow: auto;
    overflow-y:none;
    .content{
       position: relative;
font-size: 16px;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #666666;
padding: 26px 18px;
border: 3px solid #F5F5F5;
}
img{
  width: 18px;
  height: 18px;
  position: absolute;
  right: 20px;
  top: 100px;
}
  }
  .day{
    width: 84px;
    height: 84px;
background: #669AEE;
color: white;

h3{
font-size: 53px;
font-family: PingFangSC-Medium, PingFang SC;
font-weight: 500;
color: #FFFFFF;
}
p{
font-size: 21px;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #FFFFFF;
letter-spacing: 1px;
}
  }
 
}
</style>
