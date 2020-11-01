<template>
  <div class="banner_box">
    <div v-if="!bgText" :style="{ backgroundImage: `url('${bgUrl}')` }" class="index_banna" >
        <div :style="{ backgroundImage: `url('${insideBgUrl}')` }" class="bg_square">
          <p>BitDNS, The super-hub in dWeb4.0</p>
          <h4>THE NEW ORDER OF THE INTNET IS COMING, BE READY TO BE A NEW NODE.</h4>
          <h5>
            BitDNS is a domain name resolution system based on blockchain,
            Connecting the information and value between the Internet and the blockchain,
            It is a new Internet super-hub.
          </h5>
        </div>
    </div>

    <div v-if="!!bgText" :style="{ backgroundImage: `url('${bgUrl}')` }" class="other_banna" >
        <div :style="{ backgroundImage: `url('${insideBgUrl}')`, width: `${squareWidth}` }" class="bg_little_square">
          <h4 :style="{margin: 0}">{{bgText}}</h4>
          <p v-if="showDes" class="desText">全球首家基于跨链的分布式域名服务</p>
        </div>
    </div>
  </div>
  
</template>

<script>
export default {
  props:{
    bgUrl: String, //banner背景
    insideBgUrl: String, //文字框背景
    bgText: String, //banner文本
    squareWidth: String, //框背景宽度
    showDes: Boolean, //是否展示描述
  }
}
</script>

<style lang='less'>
.banner_box{
  width: 100%;
  min-width: 1200px;
  margin: 0 auto;

  .index_banna, .other_banna {
    width: 100%;
    height: 961px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .other_banna {
    height: 619px;
  }

  .bg_square, .bg_little_square {
    width: 1037px;
    height: 499px;
    margin: 0 auto;
    background-repeat: no-repeat;
    background-size:100% 100%;
    text-align: center;
    color: white;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    padding: 70px 40px;
  }

  .bg_little_square {
    width: 321px;
    height: 155px;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .desText{
      font-weight: normal;
      font-size: 23px;
    }
  }
  p{

    font-size: 28px;
    font-weight: 600;
    color: #FFFFFF;
    line-height: 40px;
  }
  h4{
    margin-top: 64px;
    font-size: 43px;
    font-weight: 600;
    color: #FFFFFF;

  }
  h5{
    margin-top: 44px;
    font-size: 18px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #FFFFFF;
  }
}

</style>