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
              <span>{{$t('dnsService.systomProblemContent2Date')}}</span>
              <span>{{$t('dnsService.systomProblemContent2')}}</span>
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
              <span>{{$t('dnsService.systomProblemContent2Date')}}</span>
              <span>{{$t('dnsService.systomProblemContent2')}}</span>
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
            <span>{{$t('dnsService.systomProblemContent3Date')}}</span>
            <span>{{$t('dnsService.systomProblemContent3')}}</span>
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

        <div class="teamBlocks web">
          <div class="teamBlocksItems">
            <div class="teamBlocksItem">
                <!-- <div class="teamImg1"> </div> -->

             
              <img src="/imges/h5_product/teams1.png" class="h5" alt="">
              <img src="/imges/product/teams1.png" class="web" alt="">

              <p>{{$t('dnsService.text1')}}</p>
            </div>

            <div class="teamBlocksItem">

              <img src="/imges/h5_product/teams2.png"  class="h5" alt="">
              <img src="/imges/product/teams2.png"  class="web" alt="">
              <p>{{$t('dnsService.text2')}}</p>
            </div>

            <div class="teamBlocksItem">
              <img src="/imges/h5_product/teams3.png"  class="h5" alt="">
              <img src="/imges/product/teams3.png"  class="web" alt="">
              <p>{{$t('dnsService.text3')}}</p>
            </div>
          </div>

          <div class="teamBlocksItems">
            <div class="teamBlocksItem">
              <img src="/imges/h5_product/teams4.png"  class="h5" alt="">
              <img src="/imges/product/teams4.png"  class="web" alt="">
              <p>{{$t('dnsService.text4')}}</p>
            </div>

            <div class="teamBlocksItem">
              <img src="/imges/h5_product/teams5.png"  class="h5" alt="">
              <img src="/imges/product/teams5.png"  class="web" alt="">
              <p>{{$t('dnsService.text5')}}</p>
            </div>

            <div class="teamBlocksItem">
              <img src="/imges/h5_product/teams6.png"  class="h5" alt="">
              <img src="/imges/product/teams6.png"  class="web" alt="">

              <p>{{$t('dnsService.text6')}}</p>
            </div>

            <div class="teamBlocksItem">
              <img src="/imges/product/teams7.png" class="web" alt="">
              <img src="/imges/h5_product/teams7.png"  class="h5" alt="">
              <p>{{$t('dnsService.text7')}}</p>
            </div>
          </div>
        </div>

        <div class="teamBlocks h5">
          <div class="teamBlocksItems">
            <div class="teamBlocksItem" :class="this.$store.state.locale == 'en-US' ? 'teamBlocksItemEn' : ''">
                <!-- <div class="teamImg1"> </div> -->

             
              <img src="/imges/h5_product/teams1.png" class="h5" alt="">
              <img src="/imges/product/teams1.png" class="web" alt="">

              <p>{{$t('dnsService.text1')}}</p>
            </div>

            <div class="teamBlocksItem" :class="this.$store.state.locale == 'en-US' ? 'teamBlocksItemEn' : ''" >

              <img src="/imges/h5_product/teams2.png"  class="h5" alt="">
              <img src="/imges/product/teams2.png"  class="web" alt="">
              <p>{{$t('dnsService.text2')}}</p>
            </div>

            <div class="teamBlocksItem" :class="this.$store.state.locale == 'en-US' ? 'teamBlocksItemEn' : ''" >
              <img src="/imges/h5_product/teams3.png"  class="h5" alt="">
              <img src="/imges/product/teams3.png"  class="web" alt="">
              <p>{{$t('dnsService.text3')}}</p>
            </div>
          </div>

          <div class="teamBlocksItems">
            <div class="teamBlocksItem" :class="this.$store.state.locale == 'en-US' ? 'teamBlocksItemEn' : ''" >
              <img src="/imges/h5_product/teams4.png"  class="h5" alt="">
              <img src="/imges/product/teams4.png"  class="web" alt="">
              <p>{{$t('dnsService.text4')}}</p>
            </div>

            <div class="teamBlocksItem" :class="this.$store.state.locale == 'en-US' ? 'teamBlocksItemEn' : ''" >
              <img src="/imges/h5_product/teams5.png"  class="h5" alt="">
              <img src="/imges/product/teams5.png"  class="web" alt="">
              <p>{{$t('dnsService.text5')}}</p>
            </div>

            <div class="teamBlocksItem" :class="this.$store.state.locale == 'en-US' ? 'teamBlocksItemEn' : ''" >
              <img src="/imges/h5_product/teams6.png"  class="h5" alt="">
              <img src="/imges/product/teams6.png"  class="web" alt="">

              <p>{{$t('dnsService.text6')}}</p>
            </div>

            <div class="teamBlocksItem" :class="this.$store.state.locale == 'en-US' ? 'teamBlocksItemEn' : ''" >
              <img src="/imges/product/teams7.png" class="web" alt="">
              <img src="/imges/h5_product/teams7.png"  class="h5" alt="">
              <p>{{$t('dnsService.text7')}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="serviceFeatures">
      <BlockTit :text="$t('dnsService.blockTit')"/>

      <div class="h5 common_container">
        <el-carousel type="card" height="200px" :loop="true" indicator-position="none" arrow="never" :autoplay="false">
        <el-carousel-item>
          <div class="serviceFeaturesItem">
              
                <img src="/imges/h5_product/serviceFeatures1.png" class="h5" alt="">
              <p>{{$t("dnsService.serviceFeaturesItemtit1")}}</p>
              <p @mouseover="handleclass=1" @mouseleave="handleclass=0" :class="[handleclass == 1 ?'over':'leave']">{{$t("dnsService.serviceFeaturesItemcontent1")}}</p>
            </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="serviceFeaturesItem">
              
                <img src="/imges/h5_product/serviceFeatures2.png" class="h5" alt="">
               <p>{{$t("dnsService.serviceFeaturesItemtit2")}}</p>
              <p @mouseover="handleclass=2" @mouseleave="handleclass=0" :class="[handleclass == 2 ?'leave':'over']">{{$t("dnsService.serviceFeaturesItemcontent2")}}</p>
            </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="serviceFeaturesItem">
          
            <img src="/imges/h5_product/serviceFeatures3.png" class="h5"  alt="">
               <p>{{$t("dnsService.serviceFeaturesItemtit3")}}</p>
              <p @mouseover="handleclass=3" @mouseleave="handleclass=0" :class="[handleclass == 3?'leave':'over']">{{$t("dnsService.serviceFeaturesItemcontent3")}}</p>
            </div>
        </el-carousel-item>
      </el-carousel>
      </div>

      <div class="web common_container">
        <div class="common_container serviceFeatures_content">
          <div class="serviceFeaturesItem">
            <img src="/imges/product/serviceFeatures1.png" class="web" alt="">
            <p>{{$t("dnsService.serviceFeaturesItemtit1")}}</p>
              <p @mouseover="handleclass=1" @mouseleave="handleclass=0" :class="[handleclass == 1?'leave':'over']">{{$t("dnsService.serviceFeaturesItemcontent1")}}</p>
          </div>

          <div class="serviceFeaturesItem">
            <img src="/imges/product/serviceFeatures2.png" class="web" alt="">
        
              <p>{{$t("dnsService.serviceFeaturesItemtit2")}}</p>
              <p @mouseover="handleclass=2" @mouseleave="handleclass=0" :class="[handleclass == 2?'leave':'over']">{{$t("dnsService.serviceFeaturesItemcontent2")}}</p>
          </div>

          <div class="serviceFeaturesItem">
            <img src="/imges/product/serviceFeatures3.png" class="web" alt="">
           <p>{{$t("dnsService.serviceFeaturesItemtit3")}}</p>
              <p @mouseover="handleclass=3" @mouseleave="handleclass=0" :class="[handleclass == 3?'leave':'over']">{{$t("dnsService.serviceFeaturesItemcontent3")}}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="tokenBonus">
      <div class="common_container tokenBonus_content">
        <div class="tokenBonus_topContent">
          <div class="tokenBonus_topContent_left">
            <p>{{$t("dnsService.tokenBonustit")}}</p>
            <p>{{$t("dnsService.tokenBonuscontent")}}</p>
          </div>

          <div class="tokenBonus_topContent_right">
            <div>{{$t("dnsService.tokenBonusbtn1")}}</div>
            <div>{{$t("dnsService.tokenBonusbtn2")}}</div>
          </div>
        </div>

        <div class="tokenBonus_bottomButton">
          <a href="https://corn.bitdns.vip/" target="_blank">
              {{$t("dnsService.tokenBonusbtn3")}}
          </a>
        </div>
      </div>
    </div>
      <div style="background:#fff">
    <div class="common_container exchangeAndWallet">

      <div class="corn_exchangeAndWallet">
        <BlockTit :text="$t('dnsService.CORN')"/>

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
  <BlockTit :text="$t('dnsService.DNS')"/>
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
       handleclass: 0,
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
    background-color: #fff;
    text-align: center;

    img{
      height: 441px;
      width: 1192px;
    }
  }

  .bitDNSTeams{
    height:100%;
    background: #F3F8FF;
    padding: 85px 0;
    .bitDNSTeams_content{
      .topText{
        .teamsTit{
          padding: 0 0 32px;  
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
        // margin-top: 70px;
        margin-left: 50px;
        .teamBlocksItems{
          display: flex;
          flex-direction: row;
          margin-bottom: 20px;

          .teamBlocksItem{
            display: flex;
            height: 136px;
            width: 136px;
            padding: 36px 10px 10px;
            box-sizing: border-box;
            background: url("/imges/product/bitDNSTeams_whiteBg.png") no-repeat;
            background-size: cover;
            background-position: center;
            align-items: center;
            flex-direction: column;
            margin-right: 20px;
            box-shadow: 0px 2px 4px 0px rgba(131, 131, 131, 0.5);

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
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: #ffffff;
    .serviceFeatures_content{
        display: flex;
        flex-direction: row;
        justify-content: center;
        text-align: center;
        margin-top: 15px;
        margin-bottom: 100px;

        .serviceFeaturesItem{
          width: 219px;
          height: 240px;
          margin: 0 15px;
          display: flex;
          align-items: center;
          flex-direction: column;
          padding: 10px 20px 20px;
          box-sizing: border-box;
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

          .over{
            padding: 0 20px;
            font-size: 12px;
            font-weight: normal;
            color: #4A4A4A;
            line-height: 19px;
            text-align: center;
            margin-top: 20px;
            box-sizing: border-box;
            overflow: hidden;
            text-overflow: ellipsis;
            display: box;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
          }
           .leave{
            padding: 0 20px;
            font-size: 12px;
            font-weight: normal;
            color: #4A4A4A;
            line-height: 19px;
            text-align: center;
            margin-top: 20px;
            box-sizing: border-box;
        overflow: scroll;
        
    }
   .leave::-webkit-scrollbar {
    display: none;
  }
        }
      }
  }

  .tokenBonus{
    height: 100%;
    background: url("/imges/product/sercicebg.png") no-repeat;
    background-size: cover;
    background-position: center;

    .tokenBonus_content{
      display: flex;
      flex-direction: column;

      .tokenBonus_topContent{
        margin: 84px 0 61px;
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
          text-align: center;

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
        margin: 0 auto 84px;
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
            // height: 125px;
            // width: 285px;
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
      height: 100%;
      padding-bottom: 67px;
    }

    .bitDNSTeams{
      padding: 67px 0;
      .bitDNSTeams_content{
        display: flex;
        // width: 990px;
      } 
    }

    .serviceFeatures{
      .serviceFeatures_content{
        margin-bottom: 67px;
      }
    }

    .tokenBonus{
      height: 100%;
      .tokenBonus_content{
        .tokenBonus_topContent{
          margin: 82px 0 42px;
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
        .tokenBonus_bottomButton{
          margin-bottom: 80px;
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
              // height: 88px;
              // width: 249px;
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
      height: 100%;
      padding-bottom: 58px;
      img{
        height: 331px;
        width: 894px;
      }
    }

    .bitDNSTeams{
      padding: 58px 0;
      .bitDNSTeams_content{
        display: flex;
        // width: 960px;
      } 
    }

    .serviceFeatures{
      .serviceFeatures_content{
        margin-bottom: 58px;
      }
    }

    .tokenBonus{
      height: 100%;
      .tokenBonus_content{
        .tokenBonus_topContent{
          margin: 60px 0 20px;
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
        .tokenBonus_bottomButton{
          margin-bottom: 60px;
        }
      }
      
    }

    .exchangeAndWallet{
      height: 1089px;
      width: 960px;
      .corn_exchangeAndWallet, .DNS_exchangeAndWallet{
        .exchangeItems, .walletItems{
          p{
            font-size: 23px;
            margin-bottom: 29px;
          }

          .exchangeImgs, .walletImgs{
            img{
              // height: 75px;
              // width: 214px;
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
    height: 100%;
    padding-bottom: 41px;
    img{
      height: 294px;
      width: 795px;
    }
  }

  .bitDNSTeams{
      padding: 61px 0;
  }

  .serviceFeatures{
    .serviceFeatures_content{
      margin-bottom: 41px;
    }
  }

  .tokenBonus{
    height: 100%;
    .tokenBonus_content{
      .tokenBonus_topContent{
        margin: 63px 0;
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

      .tokenBonus_bottomButton{
        margin-bottom: 63px;
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
  
  @media (min-width:980px) and (max-width:1279px){
    .bitDNSTeams{
      padding: 61px 0;
      .bitDNSTeams_content{
        display: flex;
        flex-direction: column;
        .teamBlocks{
          margin: 0;
          margin-top: 20px;
        }
      }
    }
  }

.h5{
    display:none !important;
  }
@media (max-width:980px) {
  .web{
      display: none;
  }
  .h5{
    display: inline-block !important;
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
      height:1000px;
      text-align: center;
      img{
        height: 791px;
        width: 691px;
      }
      
    }

    .bitDNSTeams{
          padding: 0 30px 155px;
          height: 650px;
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
                  height: 136px;
                  width: 136px;
                  box-sizing: border-box;
                  padding-top: 36px;
                  background: url("/imges/product/bitDNSTeams_whiteBg.png") no-repeat;
                  background-size: cover;
                  background-position: center;
                  align-items: center;
                  flex-direction: column;
                  margin-right: 20px;
                  box-shadow: 0px 2px 4px 0px rgba(131, 131, 131, 0.5);
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
                
                .teamBlocksItemEn{
                  width: 150px;
                  height: 150px;
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
        height: 856px !important;
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