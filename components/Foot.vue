<template>
  <div class="btm">
    <div class="footer common_container">
      <div class="f_left">
        <p>{{ $t('footer.contactUs') }}</p>
        <div class="email">
          <img src="/imges/foot/email.png" class="web" alt />
          <img src="/imges/h5_foot/email.png" class="h5" alt />

          <a style="color: #fff" href="mailto:support@bitdns.vip">support@BitDNS.vip</a>
        </div>
        <div class="whitePaper" style="margin-top:34px">
          <img src="/imges/foot/foot_post.png" class="web" alt />
          <img src="/imges/h5_foot/foot_post.png" class="h5" alt />
          <a
            style="color: #fff"
            href="https://www.bitdns.vip/images/whitepaper_zh.pdf"
            target="_blank"
          >White paper</a>
        </div>
      </div>
      <div class="f_right">
        <p>{{ $t('footer.official') }}</p>
        <ul>
          <li>
            <a href="https://tinyurl.com/bitdns-twitter" class="list-item" target="_blank">
              <img src="/imges/foot/foot_24.png" class="web" alt />
              <img src="/imges/h5_foot/foot_24.png" class="h5" alt />
            </a>
          </li>
          <li>
            <a href="https://m.facebook.com/BitDNSofficial" class="list-item" target="_blank">
              <img src="/imges/foot/foot_25.png" class="web"  alt />
              <img src="/imges/h5_foot/foot_25.png"  class="h5" alt />
            </a>
          </li>
          <li>
            <a href="https://t.me/bitdnsenglish" class="list-item" target="_blank">
              <img src="/imges/foot/foot_27.png"  class="web" alt />
              <img src="/imges/h5_foot/foot_27.png"  class="h5" alt />
            </a>
          </li>
          <li>
            <a href="https://medium.com/@bitdnsofficial" class="list-item" target="_blank">
              <img src="/imges/foot/foot_29.png" class="web"  alt />
              <img src="/imges/h5_foot/foot_29.png"  class="h5" alt />
            </a>
          </li>

          <el-tooltip placement="bottom">
            <div slot="content">
              <img src="/imges/foot/code.jpg" class="web"  alt style="width:95px;height:95px" />

              <img src="/imges/foot/code.jpg" class="h5" alt style="width:70px;height:70px" />
            </div>
            <li>
              <img src="/imges/foot/wechat.png" class="web"  alt />
              <img src="/imges/h5_foot/wechat.png" class="h5"  alt />
            </li>
          </el-tooltip>

          <li>
            <a href="https://tinyurl.com/bitdnsofficial-ins" class="list-item" target="_blank">
              <img src="/imges/foot/foot_31.png" class="web"  alt />
              <img src="/imges/h5_foot/foot_31.png"  class="h5" alt />
            </a>
          </li>
          <li>
            <a href="https://t.me/bitdnsenglish" class="list-item" target="_blank">
              <img src="/imges/foot/foot_33.png" class="web"  alt />
              <img src="/imges/h5_foot/foot_33.png" class="h5"  alt />
            </a>
          </li>
          <li>
            <a href="https://www.reddit.com/user/BitDNS" class="list-item" target="_blank">
              <img src="/imges/foot/foot_35.png" class="web"  alt />
              <img src="/imges/h5_foot/foot_35.png" class="h5"  alt />
            </a>
          </li>
          <li>
            <a href="https://tinyurl.com/bitdns-youtube" class="list-item" target="_blank">
              <img src="/imges/foot/foot_37.png"  class="web" alt />
              <img src="/imges/h5_foot/foot_37.png" class="h5" alt />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='less'>
.btm {
  width: 100%;
  min-height: 499px;
  background: black;
  color: white;
  box-sizing: border-box;

  .el-tooltip, .el-tooltip:root{
    background-color: #020202;
  }

  .footer {
    padding: 90px 100px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .f_left {
      // border: 1px solid red;
      width: 430px;
      min-height: 244px;
      .email {
        margin-top: 70px;
        img{
          width:40px;
          height:28px;
        }
      }
      .whitePaper{
        img{
          width:40px;
          height:28px;
        }
      }
      img {
        vertical-align: middle;
        margin-right: 15px;
        
      }
      p {
        font-size: 26px;
      }
    }
    .f_right {
      width: 570px;
      height: 244px;
      p {
        margin-left: 18px;
        font-size: 26px;
      }

      ul {
        display: flex;
        flex-wrap: wrap;
        margin-top: 52px;
        li {
          margin: 16.5px;
        }
        img {
          width: 74px;
          height: 74px;
        }
      }
    }
  }
}
@media (min-width:980px) and (max-width: 1279px) {
  .footer{
    max-width: 100%!important;
  }
}
  @media (min-width:980px) {
    .h5{
      display:none
    }
  }
@media (max-width: 980px) {
  .web{
    display: none;
  }
  .btm {
    width: 100%;
    min-height: 893px;
    background: black;
    color: white;
    box-sizing: border-box;

    .footer {
      padding: 80px 32px 150px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start !important;
      .f_left {
        .email {
          margin-top: 50px;
          img{
            width:52px;
            height:37px
          }
        }
        .whitePaper{
          img{
            width:52px;
            height:49px
          }
        }
        img {
          vertical-align: middle;
          margin-right: 15px;
        }
        p {
          font-size: 30px;
        }
        a{
          
font-size: 28px;

font-weight: 500;
color: #FFFFFF;
line-height: 40px;
        }
      }
      .f_right {
        width: 570px;
        margin-top: 120px;
      
        p {
            margin-left: 0;
          font-size: 30px;
        }
        ul {
          width: 610px;
          display: flex;
          flex-wrap: wrap;
          margin-top: 52px;
          li {
            margin: 16px;
            margin-left: 0;
          }
          img {
            width: 100px;
            height: 100px;
          }
        }
      }
    }
  }


}
</style>