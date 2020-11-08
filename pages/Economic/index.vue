<template>
  <div class="economic ">
    <Banner 
      bgUrl="/imges/banna/banner_economic.png"
      insideBgUrl="/imges/product/littleSquare.png"
      bgText="经济与治理"
    />
    <div class="common_container bitDNS_economic">
      <BlockTit text="BITDNS经济与治理" />

      <div class="bitDNS_economic_content">
        <p>BitDNS经济和治理在项目的生态及核心业务流程上起到加强协作的重要作用。通过激励行业内各方参与者的加入，推动整个BitDNS生态的价值增长；采取更为合理的分配规则，对整个BitDNS参与方及贡献者进行经济激励，促进BitDNS生态健康持续发展</p>
      </div>
    </div>

    <div class="tokenDesign">
      <div class="common_container tokenDesign_content">
        <div class="tokenDesign_content_top">
          <div class="topContent_left">
            <p>Token设计模型</p>
            <p>DNS是BitDNS系统中的生态通证，亦是BitDNS的价值支撑，它保证了BitDNS生态系统的去中心化，使生态中的权益者能够自由公平的参与网络治理。当官方开放域名二级交易市场时，DNS将作为支付代币进行域名的买卖。在未来，DNS的使用场景也会不断拓宽。在BitDNS系统上线后，用户注册新的域名也将获得一定数量的DNS作为奖励，BitDNS基金会也将会拿出部分DNS来激励用户注册域名。</p>
          </div>

          <div class="topContent_right">
            <img src="/imges/Economic/tokenDesign_rightImg.png" alt="">
          </div>
        </div>

        <div class="tokenDesign_middleLine"></div>

        <div class="tokenDesign_content_bottom">
          <p>DNS的使用场景</p>
          <img class="hr1" src="/imges/Economic/tokenDesign_leftJt.png" alt />
          <div class="tokenflex">
            <div>治理与投资</div>
            <div>域名注册</div>
            <div>跨Dapp应用</div>
          </div>
        </div>
      </div>
    </div>

    <div class="chainResourceAllocation">
      <BlockTit text="链上资源分配模型" />

      <div class="common_container chainResourceAllocation_content">
        <div class="chainimg">
          <img src="/imges/Economic/resourceAllocation.png" alt="">
        </div>

        <div class="resourceContent_bottom">
          <div class="bottom_content">
            <div class="resourceContent_bottom_left">
              <div>
                <div class="resource_item">
                  <span :style="{background: '#6D77E6'}"></span>
                  <span>生态贡献者</span>
                </div>

                <div class="resource_item">
                  <span :style="{background: '#FFC501'}"></span>
                  <span>挖矿</span>
                </div>
              </div>

              <div>
                <div class="resource_item">
                  <span :style="{background: '#723EAE'}"></span>
                  <span>社区基金会</span>
                </div>

                <div class="resource_item">
                  <span :style="{background: '#6FD50D'}"></span>
                  <span>开发者</span>
                </div>
              </div>

              <div>
                <div class="resource_item">
                  <span :style="{background: '#FF4E78'}"></span>
                  <span>团队</span>
                </div>
              </div>
            </div>

            <div class="resourceContent_bottom_right">
              <div>
                <div class="resource_item">
                  <span :style="{background: '#A7B0FF'}"></span>
                  <span>捐赠</span>
                </div>
              </div>
              <div>
                <div class="resource_item">
                  <span :style="{background: '#2A34A7'}"></span>
                  <span>其他</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="economicCycle common_container">
      <div class="tit">
        <i></i>
        <p>BitDNS经济循环</p>
        <i></i>
      </div>
      <div class="economicCycle_img" style="text-align: center;">
        <img src="/imges/Economic/token19.png" class="web" alt="">
        <img src="/imges/h5_Economic/token19.png" class="h5" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: "经济与治理"
  }
};
</script>

<style lang='less'>
.economic {

  .bitDNS_economic{
    height: 413px;
    background-color: #fff;
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
            color: #fff;
            line-height: 37px;
          }

          p:first-child {
            font-size: 30px;
            font-weight: 600;
            color: #ffffff;
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
          color: #ffffff;
        }
        .tokenflex {
          display: flex;
          div {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 52px;
            width: 156px;
            border: 1px solid #ffffff;
            color: #fff;
            margin: 0 50px;
          }
        }
      }
    }

  .chainResourceAllocation{
    height: 789px;

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
        height: 448px;
        width: 899px;
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
        color: #3c3c3c;
        line-height: 42px;
    }
    i {
        display: inline-block;
        width: 30px;
        height: 3px;
        background: #fff;
    }

    p {
        margin: 0 20px;
        color: #fff;
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
            line-height: 39px;
            font-size: 15px;
          }
        }
      }
    }

    .chainResourceAllocation{
      height: 677px;
      .chainResourceAllocation_content{

        img{
          margin-top: 26px;
          height: 336px;
          width: 674px;
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
  @media (min-width:1024px) and (max-width:1280px){
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
            width: 139px;
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
            line-height: 35;
            font-size: 13px;
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
          height: 300px;
          width: 600px;
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
      background-color: #fff;
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
            color: #ffffff;
            line-height: 37px;
          }
          p:first-child {
            margin-bottom: 23px;
            width: 250px;
            height: 45px;
            font-size: 32px;
            font-family: PingFangSC-Semibold, PingFang SC;
            font-weight: 600;
            color: #ffffff;
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
          color: #ffffff;
        }
        .tokenflex {
          display: flex;
          justify-content: initial;
          align-items:initial;
          div {
            width: 210px;
            height: 70px;
            text-align: center;
            line-height: 70px;

            border: 1px solid #ffffff;
            color: #fff;
            margin: 0;
          }

          div:nth-child(2){
            margin: 0 30px;
          }
        }
      }
    }

    .chainResourceAllocation {
       
      height: 895px;
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
          height: 344px;
          width: 690px;
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
      height: 587px;
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
        display: none;
      }
      i {
        display: inline-block;
        width: 30px;
        height: 3px;
        background: #fff;
      }

      p {
        margin: 0 20px;
        color: #fff;
      }
    }
  }
}
</style>