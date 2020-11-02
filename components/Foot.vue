<template>
  <div class="btm">
    <div class="footer">
      <div class="f_left">
        <p>联系我们</p>
        <div style="margin-top:70px">
          <img src="/imges/foot/email.png" alt style="width:40px;height:28px" />
          <span>support@BitDNS.vip</span>
        </div>
        <div style="margin-top:34px">
          <img src="/imges/foot/foot_post.png" alt style="width:42px;height:40px" />
          <span>White paper</span>
        </div>
      </div>
      <div class="f_right">
        <p style="margin-left:18px">BitDNS官方社交平台</p>
        <ul  style="margin-top:60px">
          <li>
            <img src="/imges/foot/foot_24.png" alt />
          </li>
          <li>
            <img src="/imges/foot/foot_25.png" alt />
          </li>
          <li>
            <img src="/imges/foot/foot_27.png" alt />
          </li>
          <li>
            <img src="/imges/foot/foot_29.png" alt />
          </li>
         
            <el-tooltip placement="bottom">
  <div slot="content"><img src="/imges/foot/code.jpg" alt="" style="width:74px;height:74px"></div>
   <li>
   <img src="/imges/foot/wechat.png" alt />
     </li>
</el-tooltip>
             
            
        
          <li>
            <img src="/imges/foot/foot_31.png" alt />
          </li>
          <li>
            <img src="/imges/foot/foot_33.png" alt />
          </li>
          <li>
            <img src="/imges/foot/foot_35.png" alt />
          </li>
          <li>
            <img src="/imges/foot/foot_37.png" alt />
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