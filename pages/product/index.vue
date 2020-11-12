<template>
  <div class="domainService">
    <div class="web">
      <Banner 
        insideImgUrl="/imges/banna/domainService_BanImg.png"
        :bgText="$t('dnsService.bannerText')"
        specialImg
      />
    </div>
    <div class="h5">
      <Banner 
        insideImgUrl="/imges/h5_banner/domainService_h5BanImg.png"
        :bgText="$t('dnsService.bannerText')"
        specialImg
      />
    </div>
    <div class="common_container systemProblems">
      <BlockTit :text="$t('dnsService.systomProblemTit')"/>
      <div class="systemProblems_content">
        <p>{{$t('dnsService.systomProblemContent')}}</p>
      </div>
    </div>

    <div class="imgAndText_block">
      <div class="imgAndText_block_item bg">
        <div class="items_left">
          <img  src="/imges/product/domainService1.png" class="web Service1" alt="">
          <img src="/imges/h5_product/domainService2.png" class="h5 Service1" alt="">

        </div>

        <div class="items_right">
          <p class="items_rightText">
            <span>{{$t('dnsService.systomProblemContent1Date')}}</span>
            <span>{{$t('dnsService.systomProblemContent1')}}</span>
          </p>
        </div>
      </div>
      <div class="web">
        <div class="imgAndText_block_item" >
          <div class="items_left">
            <p class="items_rightText">
              <span>2014年9月，</span>
              <span>大约有500万谷歌的账户和密码的数据库被泄露给一家俄罗斯互联网网络安全论坛。这些用户大多使用了Gmail邮件服务和美国互联网巨头的其他产品。</span>
            </p>
          </div>

          <div class="items_right">
              <img src="/imges/product/domainService2.png" alt="" class="web Service2">
          </div>
        </div>
      </div>
      
      <div class="h5">
        <div class="imgAndText_block_item">
          <div class="items_right">
            <img src="/imges/h5_product/domainService1.png" class="Service2" alt="">
          </div>

          <div class="items_left">
            <p class="items_rightText">
              <span>2014年9月，</span>
              <span>大约有500万谷歌的账户和密码的数据库被泄露给一家俄罗斯互联网网络安全论坛。这些用户大多使用了Gmail邮件服务和美国互联网巨头的其他产品。</span>
            </p>
          </div>
        </div>
      </div>
      

      <div class="imgAndText_block_item bg">
        <div class="items_left">
         <img src="/imges/product/domainService3.png" class="web Service3"  alt="">
         <img src="/imges/h5_product/domainService3.png"  class="h5 Service3" alt="">
        </div>
        <div class="items_right">
          <p class="items_rightText">
            <span>2014年12月，</span>
            <span>索尼影业公司被黑客攻击。黑客对索尼影业公司发动的这次攻击影响令人感到震惊：摄制计划、明星隐私、未发表的剧本等敏感数据都被黑客窃取，并逐步公布在网络上，甚至包括到索尼影业员工的个人信息。</span>
          </p>
        </div>
      </div>
    </div>

    <div class="bitDNSVsTraditionalDNS">
        <BlockTit :text="$t('dnsService.bitDNSVsTraditionalDNS')"/>
        <img  class="web" src="/imges/product/bitDNSVsTraditionalDNS.png" alt="">
        <img  class="h5" src="/imges/h5_product/bitDNSVsTraditionalDNS.png" alt="">
    </div>

    <div class="bitDNSTeams">
      <div class="common_container bitDNSTeams_content">
        <div class="topText">
          <p class="teamsTit">{{$t('dnsService.domainUsedTit')}}</p>
          <p class="teamsDes">{{$t('dnsService.domainUsedContent')}}</p>
        </div>

        <div class="teamBlocks">
          <div class="teamBlocksItems">
            <div class="teamBlocksItem">
                <!-- <div class="teamImg1"> </div> -->

             
              <img src="/imges/h5_product/teams1.png" class="h5" alt="">
              <img src="/imges/product/teams1.png" class="web" alt="">

              <p>文件名</p>
            </div>

            <div class="teamBlocksItem">

              <img src="/imges/h5_product/teams2.png"  class="h5" alt="">
              <img src="/imges/product/teams2.png"  class="web" alt="">
              <p>简化哈希值</p>
            </div>

            <div class="teamBlocksItem">
              <img src="/imges/h5_product/teams3.png"  class="h5" alt="">
              <img src="/imges/product/teams3.png"  class="web" alt="">
              <p>邮件通信地址</p>
            </div>
          </div>

          <div class="teamBlocksItems">
            <div class="teamBlocksItem">
              <img src="/imges/h5_product/teams4.png"  class="h5" alt="">
              <img src="/imges/product/teams4.png"  class="web" alt="">
              <p>昵称转账</p>
            </div>

            <div class="teamBlocksItem">
              <img src="/imges/h5_product/teams5.png"  class="h5" alt="">
              <img src="/imges/product/teams5.png"  class="web" alt="">
              <p>公钥昵称</p>
            </div>

            <div class="teamBlocksItem">
              <img src="/imges/h5_product/teams6.png"  class="h5" alt="">
              <img src="/imges/product/teams6.png"  class="web" alt="">

              <p>子域名</p>
            </div>

            <div class="teamBlocksItem">
    <img src="/imges/product/teams7.png" class="web" alt="">
              <img src="/imges/h5_product/teams7.png"  class="h5" alt="">
              <p>特殊域名收藏级交易</p>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="serviceFeatures">
      <BlockTit text="BitDNS域名服务特点"/>

      <div class="h5 common_container">
        <el-carousel type="card" height="200px" :loop="true" indicator-position="none" arrow="never" :autoplay="false">
        <el-carousel-item>
          <div class="serviceFeaturesItem">
              
                <img src="/imges/h5_product/serviceFeatures1.png" class="h5" alt="">
              <p>去中心化</p>
              <p>BitDNS的管理和服务均通过智能合约完成，完全去中心化，安全性和可信度非常高。</p>
            </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="serviceFeaturesItem">
              
                <img src="/imges/h5_product/serviceFeatures2.png" class="h5" alt="">
              <p>跨链交互</p>
              <p>BitDNS能够服务已有的公链生态，如以太坊、IPFS等， 让文件访问、地址转账、智能合约调用更方便、更快捷。</p>
            </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="serviceFeaturesItem">
          
            <img src="/imges/h5_product/serviceFeatures3.png" class="h5"  alt="">
              <p>可循环的经济模型</p>
              <p>BitDNS系统的流通通证DNS内置了激励池，所有系统产出费用会进入激励池，并按比例分配给DNS的持有人。</p>
            </div>
        </el-carousel-item>
      </el-carousel>
      </div>

      <div class="web common_container">
        <div class="common_container serviceFeatures_content">
          <div class="serviceFeaturesItem">
            <img src="/imges/product/serviceFeatures1.png" class="web" alt="">
            <p>去中心化</p>
            <p>BitDNS的管理和服务均通过智能合约完成，完全去中心化，安全性和可信度非常高。</p>
          </div>

          <div class="serviceFeaturesItem">
            <img src="/imges/product/serviceFeatures2.png" class="web" alt="">
        
            <p>跨链交互</p>
            <p>BitDNS能够服务已有的公链生态，如以太坊、IPFS等， 让文件访问、地址转账、智能合约调用更方便、更快捷。</p>
          </div>

          <div class="serviceFeaturesItem">
            <img src="/imges/product/serviceFeatures3.png" class="web" alt="">
            <p>可循环的经济模型</p>
            <p>BitDNS系统的流通通证DNS内置了激励池，所有系统产出费用会进入激励池，并按比例分配给DNS的持有人。</p>
          </div>
        </div>
      </div>
    </div>

    <div class="tokenBonus">
      <div class="common_container tokenBonus_content">
        <div class="tokenBonus_topContent">
          <div class="tokenBonus_topContent_left">
            <p>Corn—域名系统分红Token</p>
            <p>Corn是BitDNS域名系统中首个抵押挖矿代币，也是BitDNS生态中的域名价值映射Token，更是BitDNS生态的重要组成部分。BitDNS将未来域名销售系统中的部分分红，添加在资金池，生成Corn，与其他DeFi项目不同，Corn是有价值支撑的，绝非是一个虚无的空气资产。Corn的发行总量为100,000，并且全部由流动性挖矿产出。持有Corn还将享受未来域名销售的手续费分红。</p>
          </div>

          <div class="tokenBonus_topContent_right">
            <div>域名销售分红</div>
            <div>手续费分红</div>
          </div>
        </div>

        <div class="tokenBonus_bottomButton">
          <a href="https://corn.bitdns.vip/" target="_blank">
              获取Corn
          </a>
        </div>
      </div>
    </div>
      <div style="background:#f0f2f5">
    <div class="common_container exchangeAndWallet">

      <div class="corn_exchangeAndWallet">
        <BlockTit text="CORN上线交易所及钱包"/>

        <div class="exchangeItems">
          <p>交易所</p>
          <div class="exchangeImgs">
            <img  class="web" src="/imges/product/cornExchange1.png" alt="">
            <img  class="h5" src="/imges/h5_product/cornExchange1.png" alt="">
          </div>
        </div>
        
        <div class="walletItems">
          <p>钱包</p>
          <div class="walletImgs">
            <div class="web">
              <img src="/imges/product/cornWallet1.png" alt="">
              <img src="/imges/product/cornWallet2.png" alt="">
              <img src="/imges/product/cornWallet3.png" alt="">
            </div>
            <div class="h5">
              <img src="/imges/h5_product/cornWallet1.png" alt="">
              <img src="/imges/h5_product/cornWallet2.png" alt="">
              <img src="/imges/h5_product/cornWallet3.png" alt="">
            </div>
          </div>
        </div>
  <BlockTit text="DNS上线交易所及钱包"/>
   <div class="exchangeItems">
          <p>交易所</p>
          <div class="exchangeImgs">
            <img  class="web" src="/imges/product/cornExchange1.png" alt="">
            <img  class="h5" src="/imges/h5_product/cornExchange1.png" alt="">
          </div>
        </div>
        
        <div class="walletItems">
          <p>钱包</p>
          <div class="walletImgs">
            <div class="web">
              <img src="/imges/product/cornWallet1.png" alt="">
              <img src="/imges/product/cornWallet2.png" alt="">
              <img src="/imges/product/cornWallet3.png" alt="">
            </div>
            <div class="h5">
              <img src="/imges/h5_product/cornWallet1.png" alt="">
              <img src="/imges/h5_product/cornWallet2.png" alt="">
              <img src="/imges/h5_product/cornWallet3.png" alt="">
            </div>
          </div>
        </div>

</div>
      </div>

     

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      locale: this.$store.state.locale,
    };
  },
  head: {
    title: '域名服务'
  }
}
</script>

<style lang="less">
.domainService{
  .systemProblems{
    height: 413px;
    background-color: #fff;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .systemProblems_content{
    display: flex;
    width: 867px;
    word-wrap: break-word;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #3C3C3C;
    font-size: 18px;
    line-height: 35px;
  }

  .imgAndText_block{
    margin: 0 auto;
    width: 100%;
    .bg{
      background: url("/imges/product/sercicebg.png") no-repeat;
      background-size: cover;
    }
    .imgAndText_block_item{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      background-color: #fff;
     .Service1{
         
         width: 534px;
         height: 247px;
        }
        .Service2{

        width: 374px;
         height: 344px;
        }
        .Service3{
           
              width: 451px;
         height: 301px;
        }
      .items_left, .items_right{
        height: 444px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex: 1;
        img{
          margin: 0 88px;
        }
      }
      
      .items_right{
        justify-content: flex-start;
      }

      .items_rightText, .items_leftText{
        width: 512px;
        color: #3C3C3C;
        font-size: 20px;
        line-height: 53px;
        margin: 0 88px;

        span:first-child{
          font-size: 30px;
        }
      }
    }
  }

  .bitDNSVsTraditionalDNS{
    height: 800px;
    background-color: #F0F2F5;
    text-align: center;

    img{
      height: 441px;
      width: 1192px;
    }
  }

  .bitDNSTeams{
    height:479px;
    background: #F3F8FF;
    .bitDNSTeams_content{
      // display: flex;
      .topText{
        .teamsTit{
          padding: 84px 0 32px;  
          font-size: 30px;
          font-weight: 600;
          color: black;
        }

        .teamsDes{
          width:507px;
          font-size: 18px;
          font-weight: 400;
           color: black;
          line-height: 37px;
        }
      }

      .teamBlocks{
        display: flex;
        flex-direction: column;
        margin-top: 80px;
        margin-left: 50px;
        .teamBlocksItems{
          display: flex;
          flex-direction: row;
          margin-bottom: 20px;

          .teamBlocksItem{
            display: flex;
            height: 136px;
            width: 136px;
            padding-top: 36px;
            box-sizing: border-box;
            background: url("/imges/product/bitDNSTeams_whiteBg.png") no-repeat;
            background-size: cover;
            background-position: center;
            align-items: center;
            flex-direction: column;
            margin-right: 20px;

            img{
              margin-bottom: 15px;
              height: 28px;
              width: 25px;
            }
            
            p{
              font-size: 14px;
              color: #333333;
              // max-width: 84px;
              text-align: center;
            }
          }          
        }

        .teamBlocksItems:nth-child(1){
            .teamBlocksItem:nth-child(1){
              img{
                height: 28px;
                width: 25px
              }
            }
            .teamBlocksItem:nth-child(2){
              img{
                height: 28px;
                width: 28px
              }
            }
            .teamBlocksItem:nth-child(3){
              img{
                height: 25px;
                width: 29px
              }
            }
          }
          .teamBlocksItems:nth-child(2){
            .teamBlocksItem:nth-child(1){
              img{
                height: 26px;
                width: 33px
              }
            }
            .teamBlocksItem:nth-child(2){
              img{
                height: 21px;
                width: 26px
              }
            }
            .teamBlocksItem:nth-child(3), .teamBlocksItem:nth-child(4){
              img{
                height: 26px;
                width: 26px
              }
            }
          }

      }
    }

  }

  .serviceFeatures{
    height: 503px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: #f0f2f5;
    .serviceFeatures_content{
        display: flex;
        flex-direction: row;
        justify-content: center;
        
        margin-top: 15px;

        .serviceFeaturesItem{
          width: 219px;
          height: 240px;
          // background: #FFFFFF;
          // box-shadow: 0px 1px 7px 2px rgba(215, 215, 215, 0.5);
          margin: 0 15px;
          display: flex;
          align-items: center;
          flex-direction: column;
          padding: 10px 20px;
          background: url("/imges/index/index_box.png") no-repeat;
          background-position: center;
          background-size: 100% 100%;
          img{
            margin: 41px 0 13px;
            height: 38px;
            width: 34px;
          }
          p{
            font-size: 14px;
            font-weight: bold;
            color: #656565;
          }

          p:last-child{
            padding: 0 20px;
            font-size: 12px;
            font-weight: normal;
            color: #4A4A4A;
            line-height: 19px;
            text-align: center;
            margin-top: 20px;
            box-sizing: border-box;
          }
        }
      }
  }

  .tokenBonus{
    height: 561px;
    background: url("/imges/product/sercicebg.png") no-repeat;
    background-size: cover;
    background-position: center;

    .tokenBonus_content{
      display: flex;
      flex-direction: column;

      .tokenBonus_topContent{
        margin: 94px 0 71px;
        display: flex;
        justify-content: space-around;

        .tokenBonus_topContent_left{
          p:first-child{
            font-size: 30px;
            font-weight: 600;
            color: #333333;
          }

          p:last-child{
            width: 629px;
            font-size: 18px;
            font-weight: 400;
            color: #333333;
            line-height: 37px;
            margin-top: 25px;
          }
        }

        .tokenBonus_topContent_right{
          display: flex;
          flex-direction: column;

          div{
            height: 95px;
            width: 329px;
            border: 1px solid #A9A9A9;
            color: #666666;
            font-size: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: 600;
          }

          div:first-child{
            margin-bottom: 55px;
          }
        }
      }

      .tokenBonus_bottomButton{
        margin: 0 auto;
        height: 53px;
        width: 192px;
        background-color: #005FFC;

        a{
          display: flex;
          justify-content: center;
          align-items: center;
          color: #fff;
          font-size: 18px;
          height: 100%;
          width: 100%;
        }
      }
    }
  }

  .exchangeAndWallet{
    height: 1484px;
    // background-color: #fff;

    .corn_exchangeAndWallet, .DNS_exchangeAndWallet{

      .exchangeItems, .walletItems{

        p{
          font-size: 30px;
          font-weight: 600;
          color: #333333;
          margin-bottom: 38px;
        }

        .exchangeImgs, .walletImgs{
          img{
            height: 125px;
            width: 285px;
            margin-right: 20px;
            margin-bottom: 38px;
          }
        }
      }
    }
  }

  .h5{
    display: none;
  }
  @media (min-width:1680px) {
 .bitDNSTeams_content{
        display: flex;
       }
  }
 @media (min-width:1440px)and(max-width:1680px) {
    .imgAndText_block{
      .imgAndText_block_item{

        .items_rightText, .items_leftText{
          width: auto;
        }
      }
    }

    .bitDNSVsTraditionalDNS{
      background-color: #F0F2F5;
      height: 700px;
        img{
          // height: 386px;
          // width: 1043px;
        }
      
    }

    .bitDNSTeams{
      // height: 644px;
      .bitDNSTeams_content{
        display: flex;
        width: 990px;
      } 
    }

    .tokenBonus{
      height: 491px;
      .tokenBonus_content{
        .tokenBonus_topContent{
          margin: 82px 0;
          .tokenBonus_topContent_left{
            p:first-child{
              font-size: 26px;
            }

            p:last-child{
              width: 550px;
              font-size: 16px;
              line-height: 27px;
              margin-top: 22px;
            }
          }
          .tokenBonus_topContent_right{
            div{
              width: 288px;
              height: 83px;
              font-size: 26px;
            }
            div:first-child{
              margin-bottom: 48px;
            }
          }
        }
      }
    }

    .exchangeAndWallet{
      height: 1199px;
      width: 990px;
      .corn_exchangeAndWallet, .DNS_exchangeAndWallet{
        .exchangeItems, .walletItems{
          p{
            font-size: 26px;
            margin-bottom: 33px;
          }

          .exchangeImgs, .walletImgs{
            img{
              height: 88px;
              width: 249px;
              margin-right: 18px;
              margin-bottom: 28px;
            }
          }
        }
      }
    }
  }

  @media (min-width:1280px) and(max-width:1440px) {
    .systemProblems {
        height: 341px;
    }
    .imgAndText_block{
      .imgAndText_block_item{

        .items_rightText, .items_leftText{
          width: auto;
        }
      }
    }

    .bitDNSVsTraditionalDNS{
      height: 600px;
      background-color: #F0F2F5;
      img{
        height: 331px;
        width: 894px;
      }
    }

    .bitDNSTeams{
      // height: 552px;
      .bitDNSTeams_content{
        display: flex;
        width: 960px;
      } 
    }
    .tokenBonus{
      height: 421px;
      .tokenBonus_content{
        .tokenBonus_topContent{
          margin: 60px 0;
          .tokenBonus_topContent_left{
            p:first-child{
              font-size: 23px;
            }

            p:last-child{
              width: 472px;
              font-size: 14px;
              line-height: 27px;
              margin-top: 19px;
            }
          }
          .tokenBonus_topContent_right{
            div{
              width: 247px;
              height: 71px;
              font-size: 23px;
            }
            div:first-child{
              margin-bottom: 41px;
            }
          }
        }
      }
      
    }

    .exchangeAndWallet{
      height: 989px;
      width: 960px;
      .corn_exchangeAndWallet, .DNS_exchangeAndWallet{
        .exchangeItems, .walletItems{
          p{
            font-size: 23px;
            margin-bottom: 29px;
          }

          .exchangeImgs, .walletImgs{
            img{
              height: 75px;
              width: 214px;
              margin-right: 15px;
              margin-bottom: 22px;
            }
          }
        }
      }
    }
  }
 
    

  @media (min-width:980px) and (max-width:1280px) {
    .systemProblems {
        height: 341px;
    }
  .imgAndText_block{
    .imgAndText_block_item{

      .items_rightText, .items_leftText{
        width: auto;
        line-height: 33px;
      }
    }
  }

  .bitDNSVsTraditionalDNS{
    height: 533px;
    background-color: #F0F2F5;
  }

  .bitDNSTeams{
      // height: 491px;
      .bitDNSTeams_content{
        // width: 890px;
        // padding: 22px 0 20px;
        // width: 1080px;
        display: flex;
        .teamBlocks{
          // margin-top: 22px;
        }
        .topText{
          .teamsTit{
            // padding: 16px 0 8px; 
            // font-size: 20px;
          }

          .teamsDes{
            width: 419px;
            // font-size: 12px;
            // line-height: normal;
          }
        }
      }
  }

  .tokenBonus{
    height: 374px;
    .tokenBonus_content{
      .tokenBonus_topContent{
        margin: 63px 0 47px;
        .tokenBonus_topContent_left{
          p:first-child{
            font-size: 20px;
          }

          p:last-child{
            width: 419px;
            font-size: 12px;
            line-height: 27px;
            margin-top: 10px;
          }
        }
        .tokenBonus_topContent_right{
          div{
            width: 219px;
            height: 63px;
            font-size: 20px;
          }
          div:first-child{
            margin-bottom: 37px;
          }
        }
      }
    }
    
  }
  .exchangeAndWallet{
      height: 989px;
      width: 890px;
      .corn_exchangeAndWallet, .DNS_exchangeAndWallet{
        .exchangeItems, .walletItems{
          p{
            font-size: 23px;
            margin-bottom: 29px;
          }

          .exchangeImgs, .walletImgs{
            img{
              height: 75px;
              width: 214px;
              margin-right: 15px;
              margin-bottom: 22px;
            }
          }
        }
      }
    }
  }


@media (max-width:980px) {
  .web{
      display: none;
  }
  .h5{
    display: inline-block;
    width: 100%;
  }
  .systemProblems{
    height: 430px;
    background-color: #fff;
    display: flex;
    align-items: center;
    flex-direction: column;
    
    
  }

  .systemProblems_content{
  
    display: flex;
    width: 685px;
    word-wrap: break-word;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #3C3C3C;
    font-size: 22px;
    line-height: 35px;
     padding: 0 30px;
    box-sizing: border-box;
  }

  @media screen and (min-width:1920px) {
    .imgAndText_block{
      max-width: 1920px;
    }
  }
  .imgAndText_block{
      
    margin: 0 auto;
      .test{
        display: none;
      }
      
    .imgAndText_block_item{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      padding: 55px 0;
      .items_left, .items_right{
        height: 350px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex: 1;
        img{
          margin: 0 auto;
        }
      }
      
      .items_right{
        justify-content: flex-start;
      }

      .items_rightText, .items_leftText{
        
        width: 688px;
        color: #3C3C3C;
        font-size: 20px;
        line-height: 53px;
        margin: 0 auto;
        padding: 61px 30px;
        span:first-child{
          font-size: 30px;
        }
      }
    }
  }

  .bitDNSVsTraditionalDNS{
      height: 1286px;
      background-color: #F0F2F5;
      text-align: center;
      img{
        height: 791px;
        width: 691px;
      }
      
    }

    .bitDNSTeams{
          padding: 0 30px 155px;
          height: 850px;
          background: #F3F8FF;

          .bitDNSTeams_content{
            // display: flex;
            .topText{
              .teamsTit{
                padding: 84px 0 32px;  
                font-size: 30px;
                font-weight: 600;
                color: black;
              }

              .teamsDes{
                width: 629px;
                font-size: 18px;
                font-weight: 400;
                color: #777777;
                line-height: 37px;
              }
            }

            .teamBlocks{
              display: flex;
              flex-direction: column;
              margin-top: 70px;
                margin-left: 0;

              .teamBlocksItems{
                display: flex;
                flex-direction: row;
                margin-bottom: 20px;

                .teamBlocksItem{
                  display: flex;
                  height: 120px;
                  width: 156px;
                  padding-top: 36px;
                  background: url("/imges/product/bitDNSTeams_whiteBg.png") no-repeat;
                  background-size: cover;
                  background-position: center;
                  align-items: center;
                  flex-direction: column;
                  margin-right: 20px;
                  img{
                      width: 28px;
                      height: 28px;
                      margin-bottom: 15px;
                  }
                  p{
                    font-size: 14px;
                    color: #333333;
                    // max-width: 84px;
                    text-align: center;
                  }
                }          
              }

              .teamBlocksItems:nth-child(1){
                  .teamBlocksItem:nth-child(1){
                    img{
                      height: 28px;
                      width: 25px
                    }
                  }
                  .teamBlocksItem:nth-child(2){
                    img{
                      height: 28px;
                      width: 28px
                    }
                  }
                  .teamBlocksItem:nth-child(3){
                    img{
                      height: 25px;
                      width: 29px
                    }
                  }
                }
                .teamBlocksItems:nth-child(2){
                  .teamBlocksItem:nth-child(1){
                    img{
                      height: 26px;
                      width: 33px
                    }
                  }
                  .teamBlocksItem:nth-child(2){
                    img{
                      height: 21px;
                      width: 26px
                    }
                  }
                  .teamBlocksItem:nth-child(3), .teamBlocksItem:nth-child(4){
                    img{
                      height: 26px;
                      width: 26px
                    }
                  }
                }

            }
          }

        }
    
    .serviceFeatures{
       height: 620px;
    
      .el-carousel{
        padding: 30px;
      }
      .serviceFeaturesItem{
        width: 321px;
        height:353px;
        background: #FFFFFF;
        
        margin: 0 15px;
        display: flex;
        align-items: center;
        flex-direction: column;
        background: url("/imges/index/index_box.png") no-repeat;
          background-position: center;
          background-size: 100% 100%;
        img{
          margin: 41px 0 13px;
          height: 38px;
          width: 34px;
        }
        p:first-child{
          font-size: 14px;
          font-weight: bold;
          color: #656565;
        }

        p:last-child{
          // width: 169px;
          font-size: 12px;
          font-weight: normal;
          color: #4A4A4A;
          line-height: normal;
          text-align: center;
          margin-top: 20px;
          padding: 0 30px;

        }
      }
    }

    .tokenBonus{
        height: 756px !important;
        background: url("/imges/h5_product/sercicebg.png") no-repeat;
        background-size: cover;
        background-position: center;

        .tokenBonus_content{
          display: flex;
          flex-direction: column;

          .tokenBonus_topContent{
            margin: 20px 0 11px;
            display: flex;
            flex-direction: column;
    
            .tokenBonus_topContent_left{
              padding: 78px 32px 53px;
                
              p:first-child{
                font-size: 20px;
                font-weight: 600;
                color: #333333;
              }

              p:last-child{
                width: 629px;
                font-size: 18px;
                font-weight: 400;
                color: #333333;
                line-height: 37px;
                margin-top: 25px;
              }
            }

            .tokenBonus_topContent_right{
              display: flex;
              flex-direction: row;

              div{
                height: 95px;
                width: 329px;
                margin: 0 auto;
                border: 1px solid #A9A9A9;
                color: #666666;
                font-size: 30px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-weight: 600;
              }

              div:first-child{
                margin-bottom: 55px;
              }
            }
          }

          .tokenBonus_bottomButton{
            margin: 0 auto;
            width: 297px;
            height: 82px;
            background-color: #005FFC;

            a{
              display: flex;
              justify-content: center;
              align-items: center;
              color: #fff;
              font-size: 18px;
              height: 100%;
              width: 100%;
            }
          }
        }
      }

    .exchangeAndWallet{
      padding: 0 30px;
      box-sizing: border-box;
      height: 1575px;
      // background-color: #fff;
      .corn_exchangeAndWallet, .DNS_exchangeAndWallet{
        .exchangeItems, .walletItems{
          p{
            font-size: 30px;
            font-weight: 600;
            color: #333333;
            margin-bottom: 38px;
          }

          .exchangeImgs, .walletImgs{
            display: flex;
            flex-wrap: wrap;
            width: 625px;
            img{
              width: 285px;
              height: 100px;
            }
        }
        }
      }
   }
  }
}


</style>