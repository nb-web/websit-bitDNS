<template>
  <div class="container">
    <div class="block">
      <ul>
        <li>
          <img src="/imges/index/diagram_chart@2x.png" alt />
          <p>用户数据绝对自主</p>
        </li>
        <li>
          <img src="/imges/index/earth@2x.png" alt />
          <p>上层完全去中心化</p>
        </li>
        <li>
          <img src="/imges/index/online-tracking@2x.png" alt />
          <p>集合多种技术工程经验</p>
        </li>
        <li>
          <img src="/imges/index/tools-hardware@2x.png" alt />
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
          BitDNS是分布式互联网的核心基础设施，就如同IPFS解决的是下一代互联网的储存问题，BitDNS解决的则是下一代互联网的域名解析问题。在BitDNS的网络中，用户拥有绝对的自主权，域名完全去中心化，BitDNS通过BitUID、钱包、路由器等基础设施来构建分布式域名，<br>
          除此之外BitDNS的愿景是通过连接多数主流公链、主流工程技术（如：IPFS技术、Etherum、EOS、Fabric、R3、IPv8技术），<br>
          共同构成下一代分布式互联网的超级枢纽——dWeb4.0。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
        background: url("/imges/index/框@2x.png") no-repeat;
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
    background: url("/imges/index/位图@2x.png") no-repeat;
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
      border: 1px solid rgba(255, 255, 255,.1);
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
}
</style>
