<template>
  <div class="about">
    <div class="web">
      <Banner 
        insideImgUrl="/imges/banna/aboutUs_BanImg.png"
        :bgText="$t('about.tit_top')"
        :bgText2="$t('about.brief')"
      />
    </div>
    <div class="h5">
      <Banner 
        insideImgUrl="/imges/banna/aboutUs_BanImg.png"
        :bgText="$t('about.tit_top')"
        :bgText2="$t('about.brief')"
      />
    </div>
    <div class="content">
      <BlockTit :text="$t('about.bitDnsTeamTit')" />
      <div class="common_container teamContent">
        
        <div class="text">
          <p
            class="bitDnsTeamText"
          >{{$t("about.bitDnsTeamContent")}}</p>
        </div>
      </div>
    </div>
    <div class="core">
      <div class="common_container">
        <BlockTit :text="$t('about.core')" />
        <ul>
          <li class="img1">
            <div>
              <h3>Karen New（{{$t("about.core1Job")}}）</h3>
              <p>{{$t("about.core1Earth")}}</p>
              <p
                class="peopleText"
              >{{$t("about.core1")}}</p>
            </div>
          </li>
          <li class="img2">
            <div>
              <h3>Sorbon（{{$t("about.core2Job")}}）</h3>
              <p>{{$t("about.core2Earth")}}</p>
              <p
                class="peopleText"
              >{{$t("about.core2")}}</p>
            </div>
          </li>
          <li class="img3">
            <div>
              <h3>Kingsley Low（{{$t("about.core3Job")}}）</h3>
              <p>{{$t("about.core3Earth")}}</p>
              <p
                class="peopleText"
              >{{$t("about.core3")}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="adviser">
      <div class="common_container">
        <BlockTit :text="$t('about.adviser')" />
        <ul>
          <li class="img4">
            <div>
              <h3>Amir Eslampanah（{{$t("about.adviser1Job")}}）</h3>
              <p>{{$t("about.adviser1Earth")}}</p>
              <p
                class="peopleText"
              >{{$t("about.adviser1")}}</p>
            </div>
          </li>
          <li class="img5">
            <div>
              <h3>Armstrong David（{{$t("about.adviser2Job")}}）</h3>
              <p>{{$t("about.adviser2Earth")}}</p>
              <p
                class="peopleText"
              >{{$t("about.adviser2")}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: "关于我们"
  },
  data() {
    return {
      list: [],
    };
  }
};
</script>

<style lang='less'>
.about {
  width: 100%;
  .about_top {
    text-align: center;
    padding-bottom: 20px;
    box-sizing: border-box;
    .brief {
        max-width: 867px;
        height: 88px;
        margin: 0 auto;
        text-align: center;
        font-size: 18px;
        
        font-weight: 400;
        color: #3c3c3c;
        line-height: 35px;
      }
  }

  .content {
      width: 100%;
      height: 100%;
      text-align: center;
      padding-bottom: 80px;
      h4 {
        font-size: 30px;
        
        font-weight: 600;
        color: #3c3c3c;
        line-height: 42px;
      }
      .text {
        // width: 520px;
        height: 181px;
        font-size: 18px;
        
        font-weight: 400;
        color: #3c3c3c;
        line-height: 43px;
        padding-top: 100px;

        .bitDnsTeamText {
          margin-top: 27px;
        }
      }
    }

  .core {
    width: 100%;
    background: #f3f8ff;
    .peopleText{
      margin-top: 15px;
    }
  }

  ul {
      display: flex;
      flex-wrap: wrap;
      div {
        width: 260px;
        font-size: 12px;
        
        font-weight: 400;
        color: #787878;
        line-height: 17px;
        h3 {
          font-size: 18px;
          
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
        margin: 0 21px;
        margin-bottom: 42px;
        
      }
      img {
        margin: 0 auto;
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

  .adviser {
    width: 100%;
    padding-bottom: 107px;

    background: #f3f8ff;
    .peopleText {
      width: 100%;
      margin-top: 15px;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      div {
        // width: 260px;
        font-size: 12px;
        
        font-weight: 400;
        color: #787878;
        line-height: 17px;
        h3 {
          font-size: 18px;
          width: 300px;
          
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
      .img4 {
        margin: 0 auto;
        background: url("/imges/about/4.png") no-repeat;
        background-position: center;
        background-size: 100% 100%;
      }
      .img5 {
        background: url("/imges/about/5.png") no-repeat;
        margin: 0 auto;
        background-position: center;
        background-size: 100% 100%;
      }
    }
  }

  @media (min-width: 1440px) and (max-width: 1680px) {
    .content{
      height: 100%;
      padding-bottom: 58px;
      .text {
        // width: 520px;
        height: auto;
        font-size: 18px;
        line-height: 43px;
        padding-top: 0;

        .bitDnsTeamText {
          margin-top: 25px;
        }
      }
    }
  }

  @media (min-width: 1280px) and (max-width: 1440px) {
    .content{
      height: 100%;
      padding-bottom: 47px;
      .teamContent{
        width: 900px;
      }
      h4 {
        font-size: 28px;
      }
      .text {
        // width: 455px;
        height: auto;
        font-size: 16px;
        line-height: 38px;
        padding-top: 0;

        .bitDnsTeamText {
          margin-top: 21px;
        }
      }
    }
  }


  @media (max-width: 980px) {
    .about_top {
      .brief {
        padding: 0 20px;
        box-sizing: border-box;
        width: 100%;
        height: 144px;
        margin: 0 auto;
        font-size: 22px;
        
        font-weight: 400;
        color: #3c3c3c;
        line-height: 45px;
      }
    }

    .content {
      width: 100%;
      height: 100%;
      min-height: 100%;
      padding: 0 29px 70px 29px;
      box-sizing: border-box;
      h4 {
        font-size: 32px;
        
        font-weight: 600;
        color: #3c3c3c;
        line-height: 45px;
      }
      .text {
        height: 100%;
        font-size: 22px;
        
        font-weight: 400;
        color: #3c3c3c;
        line-height: 43px;
        padding-top: 0;
        .bitDnsTeamText {
          margin-top: 0;
        }
      }
    }

    .core {
      width: 100%;
      background: #f3f8ff;
      .peopleText {
        width: 100%;
        margin-top: 15px;
      }
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      div {
        width: 335px;
        font-size: 16px;
        
        font-weight: 400;
        color: #787878;
        line-height: normal;
        h3 {
          font-size: 22px;
          
          font-weight: 600;
          color: #333333;
          line-height: 30px;
        }
        p{
          width: 100%;
        }
      }
      li {
        width: 691px;
        height: 369px;
        padding: 30px;
        box-sizing: border-box;
        margin: 0 21px;
        margin-bottom: 42px;
        overflow: hidden;

      }
      img {
        margin: 0 auto;
      }
      .img1 {
        margin: 0 auto;
        background: url("/imges/h5_about/1.png") no-repeat;
        background-position: center;
        background-size: 100% 100%;
      }
      .img2 {
        background: url("/imges/h5_about/2.png") no-repeat;
        margin: 0 auto;
        background-position: center;
        background-size: 100% 100%;
      }
      .img3 {
        background: url("/imges/h5_about/3.png") no-repeat;
        margin: 0 auto;
        background-position: center;
        background-size: 100% 100%;
      }
    }

    .adviser {
      width: 100%;
      padding-bottom: 107px;

      background: #f3f8ff;
      .peopleText {
        margin-top: 15px;
        width: 100%;
      }

      ul {
        display: flex;
        flex-wrap: wrap;

        div {
          width: 337px;
          font-size: 16px;
          
          font-weight: 400;
          color: #787878;
          line-height: normal;
          h3 {
            font-size: 22px;
            
            font-weight: 600;
            color: #333333;
            line-height: 30px;
          }
        }
        li {
          width: 691px;
          height: 369px;
          padding: 30px;
          margin: 0 21px;
          box-sizing: border-box;
        }
        .img4 {
          margin: 0 auto;
          background: url("/imges/h5_about/4.png") no-repeat;
          background-position: center;
          background-size: 100% 100%;
        }
        .img5 {
          background: url("/imges/h5_about/5.png") no-repeat;
          margin: 0 auto;
          background-position: center;
          background-size: 100% 100%;
        }
      }
    }
  }

  @media (min-width: 980px) and (max-width: 1279px){
    .content{
      height: 100%;
      padding-bottom: 41px;
      .teamContent{
        width: 900px;
      }
      h4 {
        font-size: 28px;
      }
      .text {
        // width: 455px;
        height: auto;
        font-size: 16px;
        line-height: 38px;
        padding-top: 0;

        .bitDnsTeamText {
          margin-top: 21px;
        }
      }
    }

      ul{
        justify-content: center;
      }
      .core .adviser{
        ul{
          justify-content: center;
        }
      }
  }
}
</style>