<template>
  <div class="about">
    <div class="content">
      <div class="text">
        <h4>BITDNS团队</h4>
        <p
          style="margin-top:28px"
        >BitDNS在新加坡设有办公场所，且团队国际化水平较高，核心人员来自微软、阿里、百度、普华永道、麦肯锡等，创始团队及核心开发团队均是数字资产早期从业者，以及区块链的行业专家，在区块链行业有较深的从业背景，以及技术优势。</p>
      </div>
    </div>
    <div class="core">
      <div style="width:1200px;margin:0 auto;">
      <div class="tit">
        <i></i>
        <p>核心成员</p>
        <i></i>
      </div>
      <ul>
        <li class="img1">
          <div>
            <h3>Karen New（CEO）</h3>
            <p>Singapore</p>
            <p style="margin-top:15px;"> Founder and CEO, blockchain industry expert and early practitioner of digital assets, has provided strategic guidance for blockchain projects for many times, and has rich experience in building smart contracts, tokenomics and dapps. She has been rated as the most influential female figure in Asian blockchain industry by well-known media.</p>
          </div>
        </li>
        <li class="img2">
            <div>
            <h3>Sorbon（COO）</h3>
            <p>Russia</p>
            <p style="margin-top:15px;"> Director of corporate strategy and application business, with many years of working experience of PricewaterhouseCoopers. He has participated in the strategy formulation and promotion of large multinational companies and governments, and has many years of experience in industrial innovation projects.</p>
          </div>
        </li>
        <li class="img3">
            <div>
            <h3>Kingsley Low（CTO）</h3>
            <p>Singapore</p>
            <p style="margin-top:15px;"> Core development member, blockchain technology and computer security experts, open source culture and software freedom pioneer. As an early thought leader of cryptocurrency, he has 20 years of experience in after-sales service and supply chain. It aims to participate in the development of large-scale commercial blockchain for developers to participate in the current large-scale development of blockchain.</p>
          </div>
        </li>
      </ul>
    </div>
    </div>

    <div class="adviser">
      <div style="width:1200px;margin:0 auto;">
      <div class="tit">
        <i></i>
        <p>核心成员</p>
        <i></i>
      </div>
      <ul>
        <li class="img1">
          <div>
            <h3>Amir Eslampanah（Adviser）</h3>
            <p>Canada</p>
            <p style="margin-top:15px;"> Global blockchain technology pioneer, top blockchain and encryption technology experts. Letcoin was founded by Golden River Mining Algorithm and founder of fontas btc-e pump group. He led the development of several underlying blockchain systems. Former colleague of vitalik batlin, founder of Ethereum.</p>
          </div>
        </li>
        <li class="img2">
            <div>
            <h3>Armstrong David（Adviser）</h3>
            <p>Britain</p>
            <p style="margin-top:15px;"> Entrepreneur, business director, cryptocurrency missionary, asset manager; 15 years of experience in consulting and restructuring, mainly involving financial and public sector guidance. Since 2014, he has been engaged in the blockchain industry as an angel investor, co-founder, consultant, community organizer, etc., and has a profound understanding of blockchain economy and technology.</p>
          </div>
        </li>
      </ul>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  }
};
</script>

<style lang='less'>
.about {
  width: 100%;
  .content {
    width: 100%;
    height: 453px;
    padding: 101px 0 0 300px;
    background: url("/imges/about/位图 2@2x.png") no-repeat;
    background-size: 100% 100%;
    box-sizing: border-box;
    h4 {
      font-size: 30px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #3c3c3c;
      line-height: 42px;
    }
    .text {
      width: 520px;
      height: 181px;
      font-size: 18px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #3c3c3c;
      line-height: 43px;
    }
  }
  .core {
 
    width: 100%;
    
background: #F3F8FF;
    .tit {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 97px 0;
      
font-size: 30px;
font-family: PingFangSC-Semibold, PingFang SC;
font-weight: 600;
color: #3C3C3C;
line-height: 42px;
    }
  }
  i {
    display: inline-block;
    width: 30px;
    height: 3px;
    background: #2365ff;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    div {
      width: 260px;
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #787878;
      line-height: 17px;
      h3{
        
font-size: 18px;
font-family: PingFangSC-Semibold, PingFang SC;
font-weight: 600;
color: #333333;
line-height: 25px;
      }
    }
    li {
      width: 554px;
      height: 296px;
      padding: 30px;
      box-sizing: border-box;
    }
    .img1 {
      background: url("/imges/about/1.png") no-repeat;
      background-position: center;
      background-size: 100% 100%;
    }
    .img2 {
      background: url("/imges/about/2.png") no-repeat;

      background-position: center;
      background-size: 100% 100%;
    }
    .img3 {
      background: url("/imges/about/3.png") no-repeat;

      background-position: center;
      background-size: 100% 100%;
    }
  }

  .adviser{
    
    width: 100%;
    padding-bottom: 107px;
    
background: #F3F8FF;
    .tit {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 97px 0;
      
font-size: 30px;
font-family: PingFangSC-Semibold, PingFang SC;
font-weight: 600;
color: #3C3C3C;
line-height: 42px;
    }
  }
  i {
    display: inline-block;
    width: 30px;
    height: 3px;
    background: #2365ff;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    div {
      width: 260px;
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #787878;
      line-height: 17px;
      h3{
        
font-size: 18px;
font-family: PingFangSC-Semibold, PingFang SC;
font-weight: 600;
color: #333333;
line-height: 25px;
      }
    }
    li {
      width: 554px;
      height: 296px;
      padding: 30px;
      box-sizing: border-box;
    }
    .img1 {
      background: url("/imges/about/4.png") no-repeat;
      background-position: center;
      background-size: 100% 100%;
    }
    .img2 {
      background: url("/imges/about/5.png") no-repeat;

      background-position: center;
      background-size: 100% 100%;
    }
  }
}
</style>