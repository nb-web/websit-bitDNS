<template>
  <div class="banner_box">
    <div v-if="!bgText" :style="{ backgroundImage: `url('${bgUrl}')` }" class="index_banna">
      <div :style="{ backgroundImage: `url('${insideBgUrl}')` }" class="bg_square">
        <h4>{{ $t('home.bannerText') }}</h4>
      </div>
    </div>

    <div v-if="!!bgText" :style="{ backgroundImage: `url('${bgUrl}')` }" class="other_banna">
      <div :style="{ backgroundImage: `url('${insideBgUrl}')` }" class="bg_little_square">
        <h4 :style="{margin: 0}">{{bgText}}</h4>
        <p v-if="showDes&&bgText2" class="desText">{{bgText2}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bgUrl: String, //banner背景
    insideBgUrl: String, //文字框背景
    bgText: String, //banner文本
    bgText2: String, //banner文本
    showDes: Boolean //是否展示描述
  }
};
</script>

<style lang='less'>
.banner_box {
  width: 100%;
  // min-width: 1920px;
  margin: 0 auto;

  .index_banna,
  .other_banna {
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

  .bg_square,
  .bg_little_square {
    width: 1037px;
    height: 499px;
    margin: 0 auto;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .bg_little_square {
    width: 438px;
    height: 177px;

    .desText {
      font-weight: normal;
      font-size: 23px;
    }
  }

  h4 {
    font-size: 43px;
    font-weight: 600;
    color: #ffffff;
    line-height: 61px;
    text-align: center;
  }

  @media (min-width: 2880px) and (max-width: 3840px) {
    .index_banna {
      height: 1190px;
    }
    .other_banna {
      height: 930px;
    }
  }

  @media (max-width: 1680px) {
    .index_banna {
      height: 694px;
    }
    .other_banna {
      height: 543px;
    }
    .bg_square {
      width: 907px;
      height: 437px;
    }
    .bg_little_square {
      min-width: 380px;
      min-height: 157px;
      .desText {
        font-weight: normal;
        font-size: 20px;
      }
    }
    h4 {
      font-size: 42px;
    }
  }

  @media (max-width: 1440px) {
    .index_banna {
      height: 595px;
    }
    .other_banna {
      height: 464px;
    }
    .bg_square {
      width: 778px;
      height: 374px;
    }
    .bg_little_square {
      min-width: 330px;
      min-height: 134px;
      .desText {
        font-weight: normal;
        font-size: 17px;
      }
    }
    h4 {
      font-size: 36px;
    }
  }

  @media (min-width: 1024px) and (max-width: 1280px) {
    .index_banna {
      height: 529px;
    }
    .other_banna {
      height: 413px;
    }
    .bg_square {
      width: 691px;
      height: 333px;
    }
    .bg_little_square {
      min-width: 293px;
      min-height: 119px;
      .desText {
        font-weight: normal;
        font-size: 15px;
      }
    }
    h4 {
      font-size: 32px;
    }
  }

  @media (max-width: 980px) {
    .index_banna {
      height: 500px;
    }
    .other_banna {
      height: 400px;
    }
    .bg_square {
      width: 571px;
      height: 274px;
      padding: 0 15px;
      box-sizing: border-box;
    }
    .bg_little_square {
      width: 440px;
      height: 179px;
      padding: 20px;
      box-sizing: border-box;
      .desText {
        font-weight: normal;
        font-size: 18px;
        text-align: center;
      }
    }
    h4 {
      font-size: 42px;
    }
  }
}
</style>