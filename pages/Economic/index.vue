<template>
  <div class="economic">
    <Banner 
      bgUrl="/imges/banna/banner_economic.png"
      insideBgUrl="/imges/product/littleSquare.png"
      bgText="经济与治理"
    />
    <div class="common_container bitDNS_economic">
      <BlockTit text="BITDNS经济与治理"/>

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
            <img src="/imges/Economic/tokenDesign_rightImg.png" height="311px" width="424px" />
          </div>
        </div>

        <div class="tokenDesign_middleLine"></div>

        <div class="tokenDesign_content_bottom">
          <p>DNS的使用场景</p>
          <img src="/imges/Economic/tokenDesign_leftJt.png" alt="" width="28px" height="31px" />
          <div>治理与投资</div>
          <div>域名注册</div>
          <div>跨Dapp应用</div>
        </div>
      </div>
    </div>

    <div class="chainResourceAllocation">
      <BlockTit text="链上资源分配模型" />

      <div class="common_container chainResourceAllocation_content">
        <p>BitDNS经济和治理在项目的生态及核心业务流程上起到加强协作的重要作用。通过激励行业内各方参与者的加入，推动整个BitDNS生态的价值增长；采取更为合理的分配规则，对整个BitDNS参与方及贡献者进行经济激励，促进BitDNS生态健康持续发展</p>
        <img src="/imges/Economic/resourceAllocation.png" alt="">
        <div class="resourceContent_bottom">
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

    <div class="economicCycle">
      <div class="tit">
        <i></i>
        <p>BitDNS经济循环</p>
        <i></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: '经济与治理'
  }
}
</script>

<style lang='less'>

.economic{

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

  .tokenDesign{
    background: url('/imges/Economic/tokenDesignBg.png') no-repeat 100% 100%;
    background-size:100% 100%;
    display: flex;
    height: 736px;
    flex-direction: column;
    align-items: center;

    .tokenDesign_content_top{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 119px;

      .topContent_left{
        p{
          max-width: 558px;
          color: #fff;
          line-height: 37px;
        }

        p:first-child{
          font-size: 30px;
          font-weight: 600;
          color: #FFFFFF;
          margin-bottom: 20px;
        }
      }

      .topContent_right{
        margin-right: 50px;
      }
    }

    .tokenDesign_middleLine{
      height: 1px;
      width: 1166px;
      border-top: 1px solid #979797;
      margin: 0 auto;
      margin-top: 70px;
      margin-left: 20px;
    }
    
    .tokenDesign_content_bottom{
      display: flex;
      height: 235px;
      justify-content: space-around;
      align-items: center;

      p{
        font-size: 30px;
        font-weight: 600;
        color: #FFFFFF;
      }

      div{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 52px;
        width: 156px;
        border: 1px solid #FFFFFF;
        color: #fff;

      }
    }
  }

  .chainResourceAllocation{
    height: 1058px;

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
      }

      .resourceContent_bottom{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 816px;
        margin-top: 14px;
        border-top: 1px solid #EEEEEE;

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
    background: url('/imges/Economic/economicCycle.png') no-repeat 100% 100%;
    background-size:100% 100%;

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

}

</style>