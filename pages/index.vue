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
          <li class="img1" @mouseover="show = true" @mouseleave="show = false">
            <p>多链架构</p>
            <div class="model">
              <el-collapse-transition>
                <div v-show="show">
                  <div class="transition-box">
                    基于SWAN技术的网络自适应动态组网技术，能够在互联网成千上万的节点之间，
                    组建起双层高速互联网络，能够成功突破网络围墙，大幅减少跨境网络访问延迟。
                    未来还能接入SpaceX的StarLink星链网络，
                    组成空地一体化互联网络。
                  </div>
                </div>
              </el-collapse-transition>
            </div>
          </li>
          <li class="img2" @mouseover="show1 = true" @mouseleave="show1 = false">
            <p>预言机</p>
            <div class="model">
              <el-collapse-transition>
                <div v-show="show1">
                  <div class="transition-box">
                    基于SWAN技术的网络自适应动态组网技术，能够在互联网成千上万的节点之间，
                    组建起双层高速互联网络，能够成功突破网络围墙，大幅减少跨境网络访问延迟。
                    未来还能接入SpaceX的StarLink星链网络，
                    组成空地一体化互联网络。
                  </div>
                </div>
              </el-collapse-transition>
            </div>
          </li>
          <li class="img3"  @mouseover="show3 = true" @mouseleave="show3 = false">
            <p>身份认证</p>
            <div class="model">
              <el-collapse-transition>
                <div v-show="show3">
                  <div class="transition-box">
                    基于SWAN技术的网络自适应动态组网技术，能够在互联网成千上万的节点之间，
                    组建起双层高速互联网络，能够成功突破网络围墙，大幅减少跨境网络访问延迟。
                    未来还能接入SpaceX的StarLink星链网络，
                    组成空地一体化互联网络。
                  </div>
                </div>
              </el-collapse-transition>
            </div>
          </li>
          <li class="img4"  @mouseover="show4 = true" @mouseleave="show4 = false">
            <p>可信任的DeFi系统</p>
            <div class="model">
              <el-collapse-transition>
                <div v-show="show4">
                  <div class="transition-box">
                    基于SWAN技术的网络自适应动态组网技术，能够在互联网成千上万的节点之间，
                    组建起双层高速互联网络，能够成功突破网络围墙，大幅减少跨境网络访问延迟。
                    未来还能接入SpaceX的StarLink星链网络，
                    组成空地一体化互联网络。
                  </div>
                </div>
              </el-collapse-transition>
            </div>
          </li>
          <li class="img5" @mouseover="show5 = true" @mouseleave="show5 = false">
            <p>边缘计算</p>
            <div class="model">
              <el-collapse-transition>
                <div v-show="show5">
                  <div class="transition-box">
                    基于SWAN技术的网络自适应动态组网技术，能够在互联网成千上万的节点之间，
                    组建起双层高速互联网络，能够成功突破网络围墙，大幅减少跨境网络访问延迟。
                    未来还能接入SpaceX的StarLink星链网络，
                    组成空地一体化互联网络。
                  </div>
                </div>
              </el-collapse-transition>
            </div>
          </li>
          <li class="img6" @mouseover="show6 = true" @mouseleave="show6 = false">
            <p>云路由器</p>
            <div class="model">
              <el-collapse-transition>
                <div v-show="show6">
                  <div class="transition-box">
                    基于SWAN技术的网络自适应动态组网技术，能够在互联网成千上万的节点之间，
                    组建起双层高速互联网络，能够成功突破网络围墙，大幅减少跨境网络访问延迟。
                    未来还能接入SpaceX的StarLink星链网络，
                    组成空地一体化互联网络。
                  </div>
                </div>
              </el-collapse-transition>
            </div>
          </li>
          <li class="img7" @mouseover="show7 = true" @mouseleave="show7 = false">
            <p>IPv8</p>
            <div class="model">
              <el-collapse-transition>
                <div v-show="show7">
                  <div class="transition-box">
                    基于SWAN技术的网络自适应动态组网技术，能够在互联网成千上万的节点之间，
                    组建起双层高速互联网络，能够成功突破网络围墙，大幅减少跨境网络访问延迟。
                    未来还能接入SpaceX的StarLink星链网络，
                    组成空地一体化互联网络。
                  </div>
                </div>
              </el-collapse-transition>
            </div>
          </li>
          <li class="img8"  @mouseover="show8 = true" @mouseleave="show8= false">
            <p>抗量子计算加密算法</p>
            <div class="model">
              <el-collapse-transition>
                <div v-show="show8">
                  <div class="transition-box">
                    基于SWAN技术的网络自适应动态组网技术，能够在互联网成千上万的节点之间，
                    组建起双层高速互联网络，能够成功突破网络围墙，大幅减少跨境网络访问延迟。
                    未来还能接入SpaceX的StarLink星链网络，
                    组成空地一体化互联网络。
                  </div>
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
        <el-steps align-center>
          <el-step description="BitDNS域名系统 中域名注册交易 网站上线"></el-step>
          <el-step description="BitDNS域名系统完成 BitMail邮箱系统 核心模块上线"></el-step>
          <el-step description="BitUID系统用户名注册 /交易网站上线"></el-step>
          <el-step description="BitMail邮箱系统完成 BitDNS钱包v1.0版上线"></el-step>
          <el-step description="BitUID系统完成"></el-step>
          <el-step description="BitDNS钱包v5.0版上线， 系统完成"></el-step>
        </el-steps>
        <div class="timg">
          <img src="/imges/index/arrow_right备份@2x.png" alt />
          <img src="/imges/index/arrow_right@2x.png" alt />
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
            <div class="day1"> <h3 style="padding-top:15px">14</h3><p>NOV</p>   </div>
          <p style="margin-top:270px">BitDNS链接信息互联网与价值区块链的超级枢纽</p>
          <p style="float:right;margin-right:45px;color: #BEBEBE;font-size: 16px;">2019/10/14</p>
        </div>
        
        <div class="news_right">

          <div>

   <el-collapse accordion v-model="activeName">
            <el-collapse-item  name="1"> 
              <template slot="title">
              <div class="day"> <h3>14</h3><p>NOV</p>   </div>
               <span style="display:inline-block;margin-left:30px"> BitDNS链接信息互联网与价值区块链的</span>
                </template>
                <p class="content">
                   好滴USA高富帅巴基耶夫个iu师傅看过的死u回复i哦舒服还不是对话费贵手给丢防护服红  豆似乎否定和苦瓜和地方iu宝贵的繁华iu 规划iu的回复的回归和读后感iu会丢韩国肯定会 给iu会丢和iu
                  <a :href="newLinkList[0]" target="_blank">
                        <img src="/imges/index/index-circle.png" alt="">
                  </a>
                  
                 
                  
                </p>
            </el-collapse-item>

             <el-collapse-item style="margin:20px 0">
              <template slot="title">
              <div class="day"> <h3>14</h3><p>NOV</p>   </div>
               <span style="display:inline-block;margin-left:30px"> BitDNS链接信息互联网与价值区块链的</span>
                </template>
                <p class="content">
                   好滴USA高富帅巴基耶夫个iu师傅看过的死u回复i哦舒服还不是对话费贵手给丢防护服红  豆似乎否定和苦瓜和地方iu宝贵的繁华iu 规划iu的回复的回归和读后感iu会丢韩国肯定会  给iu会丢和iu
                 <a :href="newLinkList[0]" target="_blank">
                  <img src="/imges/index/index-circle.png" alt="">
                  </a>
                </p>
            </el-collapse-item>

              <el-collapse-item>
              <template slot="title">
              <div class="day"> <h3>14</h3><p>NOV</p>   </div>
               <span style="display:inline-block;margin-left:30px"> BitDNS链接信息互联网与价值区块链的</span>
                </template>
                <p class="content">
                   好滴USA高富帅巴基耶夫个iu师傅看过的死u回复i哦舒服还不是对话费贵手给丢防护服红  豆似乎否定和苦瓜和地方iu宝贵的繁华iu 规划iu的回复的回归和读后感iu会丢韩国肯定会 给iu会丢和iu
                 <a :href="newLinkList[0]" target="_blank">
                    <img src="/imges/index/index-circle.png" alt="">
                  </a>
                </p>
            </el-collapse-item>
            
              <el-collapse-item style="margin:20px 0 0">
              <template slot="title">
              <div class="day"> <h3>14</h3><p>NOV</p>   </div>
               <span style="display:inline-block;margin-left:30px"> BitDNS链接信息互联网与价值区块链的</span>
                </template>
                <p class="content">
                   好滴USA高富帅巴基耶夫个iu师傅看过的死u回复i哦舒服还不是对话费贵手给丢防护服红  豆似乎否定和苦瓜和地方iu宝贵的繁华iu 规划iu的回复的回归和读后感iu会丢韩国肯定会 给iu会丢和iu
                 <a :href="newLinkList[0]" target="_blank">
                    <img src="/imges/index/index-circle.png" alt="">
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

import {swiperList,newLink} from "../locales/globalData.json";

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
      swiperList2:swiperList,
      newLinkList:newLink,
      activeName:"1",
       swiperOptions: {
          loop:true,
           slidesPerView: 3,
          spaceBetween:75,
          pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true
          },
         navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

       }
    };
    
  },

  created(){
function isIE() { //ie?
 if (!!window.ActiveXObject || "ActiveXObject" in window)
  console.log("是")
  else
   console.log("不是")
 }
 console.log(swiperList)
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
      justify-content: space-between;

      li {
        width: 237px;
        height: 258px;
        background: url("/imges/index/index_box.png") no-repeat;
        background-position: center;
        background-size: 100% 100%;
        text-align: center;
        line-height: 35px;
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
    padding-top: 170px;
    background: url("/imges/index/index_ditu.png") no-repeat;
    background-position: center;
    background-size: 100% 100%;
    box-sizing: border-box;
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
  .el-step__icon.is-text {
    border-radius: 0;
    background: black;
    border: 0;
    width: 15px;
    height: 15px;
  }
  .el-step__icon-inner {
    display: none;
  }
  .el-step::before {
    content: "2021.1.31";
    width: 100px;
    height: 50px;

    font-size: 12px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #888888;
    line-height: 17px;
  }
  .el-step__line {
    background: #669aee;
  }
  .el-step.is-horizontal {
    text-align: center;
  }
  .el-step__description.is-wait {
    font-size: 12px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #333333;
    line-height: 17px;
  }
  .el-step.is-horizontal .el-step__line {
    top: 9px;
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
  text-align: center;
      height: 83px;
background: #F5F5F5;
font-size: 20px;
font-family: PingFangSC-Medium, PingFang SC;
font-weight: 500;
color: #333333;

}
.el-collapse-item__content{
  padding: 0;
}
.el-collapse-item__header{
  border: 0;
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
    background: url("/imges/banna/banna2x.png");
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
    height: 84px;
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
