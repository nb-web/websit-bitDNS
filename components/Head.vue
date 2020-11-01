<template>
  <div>
    <div class="head">
      <div class="top">
        <div>
          <img src="/logo .png" alt />
        </div>
        <div class="route">
          <nuxt-link to="/" :style="$route.path=='/'?'':' blue'">首页</nuxt-link>
          <nuxt-link to="/product">产品工具</nuxt-link>
          <nuxt-link to="/Economic">经济与治理</nuxt-link>
          <nuxt-link to="/about">关于我们</nuxt-link>
          <nuxt-link to>中/EN</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang='less'>
.head {
  
  width: 100%;

  background: white;
  .top {
  width: 1200px;
  height: 88px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
}
.route{
    width: 50%;
    display: flex;
  justify-content: space-around;
  align-items: center;
}
img {
  width: 140px;
  height: 45px;
}
a {
  font-size: 14px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #4a4a4a;
}
}

</style>
