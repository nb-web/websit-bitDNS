<template>
  <div class="banner_box">
    <div v-if="!bgText" :style="{ backgroundImage: `url('${bgUrl}')` }" class="index_banna" >
        <div :style="{ backgroundImage: `url('${insideBgUrl}')` }" class="bg_square">
          <h4>{{ $t('home.bannerText') }}</h4>
        </div>
    </div>

    <div v-if="!!bgText" :style="{ backgroundImage: `url('${bgUrl}')` }" class="other_banna" >
        <div :style="{ backgroundImage: `url('${insideBgUrl}')` }" class="bg_little_square">
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
  // min-width: 1920px;
  margin: 0 auto;

  .index_banna, .other_banna {
    width: 100%;
    height: 793px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .bg_little_square {
    width: 438px;
    height: 177px;

    .desText{
      font-weight: normal;
      font-size: 23px;
    }
  }

  h4{
    font-size: 43px;
    font-weight: 600;
    color: #FFFFFF;
    line-height: 61px;
    text-align: center;
  }

  @media (min-width: 2880px) and (max-width: 3840px) {
    .index_banna{
      height: 1190px;
    } 
    .other_banna{
      height: 930px;
    }
  }

  @media (max-width: 1680px) {
    .index_banna{
      height: 694px;
    } 
    .other_banna{
      height: 543px;
    }
    .bg_square{
      width: 907px;
      height: 437px;
    } 
    .bg_little_square{
      width: 380px;
      height: 157px;
      .desText{
        font-weight: normal;
        font-size: 20px;
      }
    }
    h4{
      font-size: 42px;
    }
  }

  @media (max-width: 1440px) {
    .index_banna{
      height: 595px;
    } 
    .other_banna{
      height: 464px;
    }
    .bg_square{
      width: 778px;
      height: 374px;
    } 
    .bg_little_square{
      width: 330px;
      height: 134px;
      .desText{
        font-weight: normal;
        font-size: 17px;
      }
    }
    h4{
      font-size: 36px;
    }
  }

  @media (min-width: 1024px) and (max-width: 1280px) {
    .index_banna{
      height: 529px;
    } 
    .other_banna{
      height: 413px;
    }
    .bg_square{
      width: 691px;
      height: 333px;
    } 
    .bg_little_square{
      width: 293px;
      height: 119px;
      .desText{
        font-weight: normal;
        font-size: 15px;
      }
    }
    h4{
      font-size: 32px;
    }
  }
}

</style>