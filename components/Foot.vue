<template>
  <div class="btm">
    <div class="footer">
      <div class="f_left">
        <p>联系我们</p>
        <div style="margin-top:60px">
          <img src="/imges/foot/email@2x.png" alt style="width:40px;height:28px" />
          <span>support@BitDNS.vip</span>
        </div>
        <div style="margin-top:34px">
          <img src="/imges/foot/post-it-block@2x.png" alt style="width:42px;height:40px" />
          <span>White paper</span>
        </div>
      </div>
      <div class="f_right">
        <p>BitDNS官方社交平台</p>
        <ul  style="margin-top:60px">
          <li>
            <img src="/imges/foot/编组 24@2x.png" alt />
          </li>
          <li>
            <img src="/imges/foot/编组 25@2x.png" alt />
          </li>
          <li>
            <img src="/imges/foot/编组 27@2x.png" alt />
          </li>
          <li>
            <img src="/imges/foot/编组 29@2x.png" alt />
          </li>
          <li>
            <img src="/imges/foot/编组 31@2x.png" alt />
          </li>
          <li>
            <img src="/imges/foot/编组 33@2x.png" alt />
          </li>
          <li>
            <img src="/imges/foot/编组 35@2x.png" alt />
          </li>
          <li>
            <img src="/imges/foot/编组 37@2x.png" alt />
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
  width: 100%;
  height: 469px;
  padding: 90px;
  background: black;
  color: white;
  box-sizing: border-box;
}
.footer {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .f_left {
    width: 430px;
    height: 244px;
  }
  .f_right {
    width: 430px;
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