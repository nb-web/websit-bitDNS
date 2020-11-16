<template>
  <div class="banner_box">
    <div v-if="!!indexBanner" class="index_banna">
      <div class="bannerContent common_container">
        <div class="bannerContent_leftText">
          <ul class="indexBannerLeftSquare">
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <p>{{bgText}}</p>
        </div>
      </div>
    </div>

    <div v-if="!indexBanner && !!bgText" class="other_banna">
      <div class="bannerContent common_container">
        <div class="bannerContent_leftText">
          <p>{{bgText}}</p>
          <p v-show="!!bgText2">{{bgText2}}</p>
        </div>
        <div class="bannerContent_rightImg" :class="specialImg ? 'economicBannerRightImg' : ''">
          <img :src="insideImgUrl" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    indexBanner: Boolean,
    bgUrl: String, //banner背景
    insideImgUrl: String, //文字框背景
    bgText: String, //banner文本
    bgText2: String, //banner文本2
    showDes: Boolean, //是否展示描述
    specialImg: Boolean //宽高不一致图片
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
    min-height: 674px;
    background-image: url('/imges/banna/banner_index.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .bannerContent{
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .bannerContent_leftText{
        max-width: 500px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .indexBannerLeftSquare{
          display: flex;
          flex-direction: row;
          margin-bottom: 37px;
          li{
            height: 16px;
            width: 16px;
            margin-right: 15px;
            float: left;
            background-color: #fff;
          }
          li:nth-child(2){
            opacity: 0.53;
          }
          li:nth-child(3){
            opacity: 0.3;
          }
        }
        p{
          font-size: 30px;
          color: #ffffff;
          line-height: 76px;
        }
      }
    }
  }
  .other_banna {
    min-height: 618px;
    background-image: url('/imges/banna/banner_other.png');

    .bannerContent{
      .bannerContent_leftText{
        max-width: 550px;
        width: 550px;
        p:first-child{
          font-size: 51px;
          line-height: normal;
        }
        p:last-child{
          line-height: 45px;
          font-size: 18px;
          margin-top: 43px;
        }
      }

      .bannerContent_rightImg{
        max-width: 531px;
        max-height: 454px;
        img{
          height: 100%;
          width: 100%;
        }
      }

      .economicBannerRightImg{
        height: 496px;
        width: 459px;
      }
    }
  }

  @media (min-width: 2880px) and (max-width: 3840px) {
    .index_banna {
      height: 1011px;
    }
    .other_banna {
      height: 927px;
    }
  }
  @media (min-width: 1024px) and (max-width: 1440px) {
    .index_banna {
      min-height: 506px;
    }
    .other_banna {
      min-height: 412px;
      .bannerContent{
        .bannerContent_rightImg{
          max-width: 340px;
          max-height: 398px;
        }

        .economicBannerRightImg{
          height: 372px;
          width: 344px;
        }
      }
    }
  }

  @media (max-width: 980px) {
    .index_banna, .other_banna{
      margin-top: 118px;
      padding: 80px 65px;
      box-sizing: border-box;
      .bannerContent{
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
      }
    }
    .index_banna {
      min-height: 500px;
      background-image: url('/imges/h5_banner/h5Banner_index.png');
      .bannerContent .bannerContent_leftText p {
        font-size: 45px;
        line-height: normal;
      }
      .bannerContent .bannerContent_leftText  .indexBannerLeftSquare{
        display: none;
      }
    }
    .other_banna {
      min-height: 828px;
      background: #0083FF;

      .bannerContent{
        .bannerContent_leftText{
          max-width: auto;
          width: auto;
          p:first-child{
            font-size: 48px;
            line-height: normal;
            margin-bottom: 33px;
          }
          p:last-child{
            line-height: 45px;
            font-size: 22px;
            margin-top: 43px;
            margin-bottom: 33px;
          }
        }

        .bannerContent_rightImg{
          max-width: 477px;
          max-height: 408px;
          margin-top: 33px;
          img{
            height: 100%;
            width: 100%;
          }
        }

        .economicBannerRightImg{
          height: 441px;
          width: 408px;
          margin-top: 33px;
        }
      }
    }
    
    
  }
}
</style>