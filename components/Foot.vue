<template>
  <div class="btm">
    <div class="footer">
      <div class="f_left">
        <p style="font-size: 30px">联系我们</p>
        <div style="margin-top:70px">
          <img src="/imges/foot/email.png" alt style="width:40px;height:28px" />
          <a style="color: #fff" href="mailto:support@bitdns.vip">support@BitDNS.vip</a>
        </div>
        <div style="margin-top:34px">
          <img src="/imges/foot/foot_post.png" alt style="width:42px;height:40px" />
          <a style="color: #fff" href="https://www.bitdns.vip/images/whitepaper_zh.pdf" target="_blank">White paper</a>
        </div>
      </div>
      <div class="f_right">
        <p style="margin-left:18px; font-size: 30px">BitDNS官方社交平台</p>
        <ul  style="margin-top:60px">
          <li>
            <a href="https://tinyurl.com/bitdns-twitter" class="list-item" target="_blank">
              <img src="/imges/foot/foot_24.png" alt />
            </a>
          </li>
          <li>
            <a href="https://m.facebook.com/BitDNSofficial" class="list-item" target="_blank">
              <img src="/imges/foot/foot_25.png" alt />
            </a>
          </li>
          <li>
            <a href="https://t.me/bitdnsenglish" class="list-item" target="_blank">
              <img src="/imges/foot/foot_27.png" alt />
            </a>
          </li>
          <li>
            <a href="https://medium.com/@bitdnsofficial" class="list-item" target="_blank">
              <img src="/imges/foot/foot_29.png" alt />
            </a>
          </li>
         
            <el-tooltip placement="bottom">
  <div slot="content"><img src="/imges/foot/code.jpg" alt="" style="width:74px;height:74px"></div>
   <li>
   <img src="/imges/foot/wechat.png" alt />
     </li>
</el-tooltip>
             
            
        
          <li>
            <a href="https://tinyurl.com/bitdnsofficial-ins" class="list-item" target="_blank">
              <img src="/imges/foot/foot_31.png" alt />
            </a>
          </li>
          <li>
            <a href="https://t.me/bitdnsenglish" class="list-item" target="_blank">
              <img src="/imges/foot/foot_33.png" alt />
            </a>
          </li>
          <li>
            <a href="https://www.reddit.com/user/BitDNS" class="list-item" target="_blank">
              <img src="/imges/foot/foot_35.png" alt />
            </a>
          </li>
          <li>
            <a href="https://tinyurl.com/bitdns-youtube" class="list-item" target="_blank">
              <img src="/imges/foot/foot_37.png" alt />
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
  // margin-top: 106px;
  min-width: 1200px;
  width: 100%;
  height: 469px;
  padding: 90px;
  background: black;
  color: white;
  box-sizing: border-box;
  border: 1px solid red;
}
.footer {
  padding: 0 100px;
  box-sizing: border-box;
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .f_left {
    width: 430px;
    height: 244px;
    img{
      vertical-align: middle;
      margin-right: 15px;
    }
  }
  .f_right {
    width: 570px;
    height: 244px;

    ul {
      display: flex;
      flex-wrap: wrap;
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
</style>