<template>
  <div class="economic ">
    <div class="web">
      <Banner 
        insideImgUrl="/imges/banna/economic_BanImg.png"
        :bgText="$t('economic.economicBannerTest')"
      />
    </div>
    <div class="h5">
      <Banner 
        insideImgUrl="/imges/banna/economic_BanImg.png"
        :bgText="$t('economic.economicBannerTest')"
      />
    </div>
    <div class="common_container bitDNS_economic">
      <BlockTit :text="$t('economic.economicTit')" />

      <div class="bitDNS_economic_content">
        <p>{{$t('economic.economicContent')}}</p>
      </div>
    </div>

    <div class="tokenDesign">
      <div class="common_container tokenDesign_content">
        <div class="tokenDesign_content_top">
          <div class="topContent_left">
            <p>{{$t('economic.economicTokenTit')}}</p>
            <p>{{$t('economic.economicTokenContent')}}</p>
          </div>

          <div class="topContent_right">
            <img :src="$t('economic.tokenDesignrightImg')" alt="">
          </div>
        </div>

        <div class="tokenDesign_middleLine"></div>

        <div class="tokenDesign_content_bottom">
          <p>{{$t('economic.dnsUsage')}}</p>
          <img class="hr1" src="/imges/Economic/tokenDesign_leftJt.png" alt />
          <div class="tokenflex">
            <div>{{$t('economic.governance')}}</div>
            <div>{{$t('economic.domainRegistration')}}</div>
            <div>{{$t('economic.crossDapp')}}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="chainResourceAllocation">
      <BlockTit :text="$t('economic.modelOnChain')" />

      <div class="common_container chainResourceAllocation_content">
        <div class="chainimg">
          <img class="web" :src="$t('economic.chainimgWEB')" alt="">
          <img class="h5" :src="$t('economic.chainimgH5')" alt="">
        </div>
      </div>
    </div>

    <div class="economicCycle">
      <BlockTit :text="$t('economic.economicCycle')" />
      <div class="common_container">
        <!-- <div class="tit">
          <i></i>
          <p>{{$t('economic.economicCycle')}}</p>
          <i></i>
        </div> -->
        <div class="economicCycle_img" style="text-align: center;">
          <img :src="$t('economic.economicCycleweb')" class="web" alt="">
          <img :src="$t('economic.economicCycleh5')" class="h5" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: "经济与治理",
    
  }
};
</script>

<style lang='less'>
.economic {
    background-color: #F0F2F5;

  .bitDNS_economic{
    height: 413px;
    background-color: #F0F2F5;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .bitDNS_economic_content{
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

  .tokenDesign {
      background: url("/imges/Economic/tokenDesignBg.png") no-repeat;
      background-size: cover;
      background-position: center;
      display: flex;
      height: 736px;
      flex-direction: column;
      align-items: center;

      .tokenDesign_content_top {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 119px;

        .topContent_left {
          p {
            max-width: 558px;
            color: black;
            line-height: 37px;
          }

          p:first-child {
            font-size: 30px;
            font-weight: 600;
            color: black;
            margin-bottom: 20px;
          }
        }

        .topContent_right {
          margin-right: 50px;
        
        img{
          width: 424px;
          height: 311px;
        }
        }
      }

      .tokenDesign_middleLine {
        height: 1px;
        width: 1166px;
        border-top: 1px solid #979797;
        margin: 0 auto;
        margin: 70px 0 70px 20px;
        // margin-left: 20px;
      }

      .tokenDesign_content_bottom {
        display: flex;
        // height: 235px;
        justify-content: space-around;
        align-items: center;
        img {
          width: 28px;
          height: 31px;
        }
        p {
          font-size: 30px;
          font-weight: 600;
          color: black;
        }
        .tokenflex {
          display: flex;
          text-align: center;
          div {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 52px;
            width: 156px;
            border: 1px solid black;
            color: black;
            margin: 0 50px;
          }
        }
      }
    }

  .chainResourceAllocation{
    height: 692px;

    .chainResourceAllocation_content{
      display: flex;
      flex-direction: column;
      align-items: center;

      p{
        font-size: 18px;
        font-weight: 400;
        color: #3C3C3C;
        line-height: 35px;
        text-align: center;
        width: 867px;
      }

      img{
        margin-top: 21px;
        height: 329px;
        width: 827px;
      }

      .resourceContent_bottom {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 816px;
        margin-top: 14px;
        border-top: 1px solid #EEEEEE;
        
        @media screen and (min-width: 980px){
          .bottom_content{
            display: flex;
            flex-direction: row; 
            justify-content: space-between;
            width: 816px;
          }
        }

        .resourceContent_bottom_left, .resourceContent_bottom_right{
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          margin-top: 49px;
          
          .resource_item{
            display: flex;
            align-items: center;
            margin-right: 50px;
            margin-bottom: 32px;

            span:first-child{
              display: inline-block;
              height: 19px;
              width: 19px;
              margin-right: 16px;
            }

            span:last-child{
              display: inline-flex;
              font-size: 18px;
              font-weight: 600;
              color: #3C3C3C;
            }
          }

        }
      }
    }

  }

  .economicCycle{
    height: 827px;
    width: 100%;
    background: url('/imges/Economic/economicCycle.png') no-repeat;
    background-size: cover;
    background-position: center;

    .economicCycle_img{
      margin-top: 70px;
      img{
        height: 492px;
        width: 1006px;
      }
    }

    .tit {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 74px 0 45px 0;

        font-size: 30px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: black;
        line-height: 42px;
    }
    i {
        display: inline-block;
        width: 30px;
        height: 3px;
        background: blue;
    }

    p {
        margin: 0 20px;
        color: black;
    }

  }

  .h5{
    display: none;
  }
  // @media (max-width:1680px){

  // }
  @media (min-width:1280px) and (max-width:1440px){
    .bitDNS_economic{
      height: 310px;
    }
    .tokenDesign {
      height: 552px;
      .tokenDesign_content{
        width: 1000px;
        margin: 0 auto;
      }
      .tokenDesign_content_top {
        margin-top: 90px;

        .topContent_left {
          margin: 0 auto;
          // 
          p {
            max-width: 419px;
            font-size: 14px;
            line-height: 28px;
          }
          p:first-child {
            margin-bottom: 16px;
            height: 28;
            font-size: 23px;
          }
        }

        .topContent_right {
          margin: 0 auto;
        
          img{
            width: 318px;
            height: 233px;
          }
        }
      }

      .tokenDesign_middleLine {
        height: 1px;
        width: 875px;
        margin: 0 auto;
        margin: 53px;
      }
      .hr1 {
        width: 21px;
        height: 23px;
      }
      .tokenDesign_content_bottom {
        margin: 0 auto;
        p {
          font-size: 23px;
        }
        .tokenflex {
          div {
            width: 117px;
            height: 39px;
            text-align: center;
            // line-height: 39px;
            font-size: 15px;
          }
        }
      }
    }
    
    .bitDNS_economic_content{
      width: 867px;
      line-height: normal;
    }

    .chainResourceAllocation{
      height: 677px;
      .chainResourceAllocation_content{

        img{
          margin-top: 26px;
          // height: 336px;
          // width: 674px;
        }

        .resourceContent_bottom {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          width: 674px;
          margin-top: 11px;

          .resourceContent_bottom_left, .resourceContent_bottom_right{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            margin-top: 37px;
            
            .resource_item{
              display: flex;
              align-items: center;
              margin-right: 34px;
              margin-bottom: 21px;

              span:first-child{
                display: inline-block;
                height: 13px;
                width: 13px;
                margin-right: 11px;
              }

              span:last-child{
                font-size: 12px;
              }
            }

          }
        }
      }
    }

    .economicCycle{
      height: 620px;

      .economicCycle_img{
        margin-top: 36px;
        
        img{
          height: 369px;
          width: 755px;
        }
      }
    }
  }
  @media (min-width:980px) and (max-width:1280px){
    .tokenDesign {
      height: 491px;
      .tokenDesign_content{
        width: 900px;
        margin: 0 auto;
      }
      .tokenDesign_content_top {
        margin-top: 80px;

        .topContent_left {
          margin: 0 auto;
          // 
          p {
            max-width: 372px;
            font-size: 12px;
            line-height: 25px;
          }
          p:first-child {
            margin-bottom: 14px;
            height: 28;
            font-size: 20px;
          }
        }

        .topContent_right {
          margin: 0 auto;
        
          img{
            width: 283px;
            height: 207px;
          }
        }
      }

      .tokenDesign_middleLine {
        height: 1px;
        width: 777px;
        border-top: 1px solid #979797;
        margin: 0 auto;
        margin: 47px auto;
        // margin-left: 40px;
      }
      .hr1 {
        width: 19px;
        height: 21px;
      }
      .tokenDesign_content_bottom {
        p {
          // margin: 65px 0 63px;
          font-size: 20px;
        }
        .tokenflex {
          div {
            width: 104px;
            height: 35px;
            text-align: center;
            // line-height: 35;
            font-size: 13px;
            margin: 0 36px;
          }
        }
      }
    }

    .bitDNS_economic{
      height: 275px;
    }

    .chainResourceAllocation{
      height: 600px;
      .chainResourceAllocation_content{
        p{
          font-size: 18px;
          line-height: 35px;
          text-align: center;
          width: 600px;
        }

        img{
          margin-top: 21px;
          // height: 300px;
          // width: 600px;
        }

        .resourceContent_bottom {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          width: 600px;
          margin-top: 8px;

          .resourceContent_bottom_left, .resourceContent_bottom_right{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            margin-top: 23px;
            
            .resource_item{
              display: flex;
              align-items: center;
              margin-right: 34px;
              margin-bottom: 21px;

              span:first-child{
                display: inline-block;
                height: 13px;
                width: 13px;
                margin-right: 11px;
              }

              span:last-child{
                font-size: 12px;
              }
            }

          }
        }
      }
    }

    .economicCycle{
      height: 551px;

      .economicCycle_img{
        margin-top: 16px;
        
        img{
          height: 328px;
          width: 671px;
        }
      }
    }
  }
  
  @media (max-width: 980px) {
    .web{
      display: none;
    }
    .h5{
      display: inline-block;
      width: 100%;
    }
    .bitDNS_economic {
      width: 100%;
       
      height: 387px;
      background-color: #F0F2F5;
      display: flex;
      align-items: center;
      flex-direction: column;
    }

    .bitDNS_economic_content {
      display: flex;
      width: 100%;
      padding: 0 20px;
      box-sizing: border-box;
      word-wrap: break-word;
      justify-content: center;
      align-items: center;
      text-align: center;
      color: #3c3c3c;
      font-size: 22px;
      line-height: 35px;
      font-weight: 400;
    }

    .tokenDesign {
      background: url("/imges/h5_Economic/tokenDesignBg.png") no-repeat;
      background-size: cover;
      background-position: center;
      height: 1257px;
      box-sizing: border-box;
      .tokenDesign_content_top {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 88px;

        .topContent_left {
          margin: 0 auto;
          // 
          p {
            max-width: 685px;
            height: 255px;
            font-size: 22px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: black;
            line-height: 37px;
          }
          p:first-child {
            margin-bottom: 23px;
            height: 45px;
            font-size: 32px;
            font-family: PingFangSC-Semibold, PingFang SC;
            font-weight: 600;
            color: black;
            line-height: 45px;
          }
        }

        .topContent_right {
          margin: 30px auto 0;
        
          img{
            width: 685px;
            height: 502px;
          }
        }
      }

      .tokenDesign_middleLine {
        display: none;
        height: 1px;
        width: 1166px;
        border-top: 1px solid #979797;
        margin: 0 auto;
        margin: 70px 0 70px 20px;
        // margin-left: 20px;
      }
      .hr1 {
        width: 28px;
        height: 31px;
        display: none;
      }
      .tokenDesign_content_bottom {
        max-width: 685px;
        justify-content: initial;
        align-items: initial;
        flex-direction: column;
        margin: 0 auto;
        p {
          margin: 85px 0 49px;
          font-size: 32px;
          font-weight: 600;
          color: black;
        }
        .tokenflex {
          display: flex;
          justify-content: initial;
          align-items:initial;
          div {
            width: 210px;
            height: 70px;
            text-align: center;
            // line-height: 70px;

            border: 1px solid black;
            color: black;
            margin: 0;
          }

          div:nth-child(2){
            margin: 0 30px;
          }
        }
      }
    }

    .chainResourceAllocation {
       
      height: 1000px;
      .chainResourceAllocation_content {
        display: flex;
        flex-direction: column;
        align-items: center;

        p {
          font-size: 18px;
          font-weight: 400;
          color: #3c3c3c;
          line-height: 35px;
          text-align: center;
          width: 867px;
        }

        .chainimg {
          margin: 0 auto;
          margin-top: 21px;
          img{
          height: 774px;
          width: 330px;
          }
        }

        .resourceContent_bottom {
          display: flex;
          flex-direction: column;
          width: 100%;
          padding-left: 0;
          box-sizing: border-box;
          margin: 0 auto;
          margin-top: 14px;
          border: 0;
          .bottom_content {
            margin: 0 auto;
            //  width: 690px !important;
          }
          .resourceContent_bottom_left,
          .resourceContent_bottom_right {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            margin: 0 auto;
            .resource_item {
              display: flex;
              width: 150px;
              
              align-items: center;
              margin: 0 40px;
              margin-bottom: 32px;
              span:first-child {
                display: inline-block;
                height: 19px;
                width: 19px;
                margin-right: 16px;
              }

              span:last-child {
                display: inline-flex;
                font-size: 18px;
                font-weight: 600;
                color: #3c3c3c;
              }
            }
          }
        }
      }
    }

    .economicCycle {
       
      padding: 94px 0;
      height:800px;
      width: 100%;
      background: url("/imges/h5_Economic/economicCycle.png") no-repeat;
      background-size: cover;
      background-position: center;
      box-sizing: border-box;
      .economicCycle_img {
        width: 690px;
        height: 387px;
        margin: 0 auto;
        img{
          width: 100%;
          height: 100%;
        }
      }

      .tit {
        color: black;
      }
      i {
        display: inline-block;
        width: 30px;
        height: 3px;
        background: blue;
      }

      p {
        margin: 0 20px;
        color: black;
      }
    }
  }
}
</style>