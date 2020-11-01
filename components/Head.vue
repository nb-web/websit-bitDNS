<template>
  <div>
    <div class="head">
      <div class="top">
        <div>
          <img src="/logo .png" alt />
        </div>
        <div class="route">
          <nuxt-link to="/" :style="$route.path=='/' ? {color: '#2060F4'} : ''">{{ $t('links.home') }}</nuxt-link>
          <div class="parents_nav" :style="showNavChildren ? {height: '88px'} : ''" @mouseenter="()=>{this.showNavChildren = true}" @mouseleave="()=>{this.showNavChildren = false}">
            <p :style="$route.path=='/product' ? {color: '#2060F4'} : ''">{{ $t('links.product') }}</p>
            <img src="/imges/navBottomJt.png" height="6px" width="10px">

            <ul v-if="!!showNavChildren" class="children_nav product_children_nav">
              <li @click="()=>{this.showNavChildren = false}">
                <nuxt-link to="/product" :style="$route.path=='/product' ? {color: '#2060F4'} : ''">{{ $t('links.product_domainService') }}</nuxt-link>
              </li>
            </ul>
          </div>
          <nuxt-link to="/Economic" :style="$route.path=='/Economic' ? {color: '#2060F4'} : ''">{{ $t('links.economic') }}</nuxt-link>
          <nuxt-link to="/about" :style="$route.path=='/about' ? {color: '#2060F4'} : ''">{{ $t('links.about') }}</nuxt-link>
          <nuxt-link to>
            <div @click="switchLocale()">
              <span :style="locale=='zh-CN' ? {color: '#2060F4'}:''" >中</span>/
              <span :style="locale=='en-US' ? {color: '#2060F4'}:''" >EN</span>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return{
      locale: this.$store.state.locale,
      showNavChildren: false
    }
  },
  methods: {
    switchLocale() {
      let locale = this.$store.state.locale === 'zh-CN' ? 'en-US' : 'zh-CN'
      this.locale = locale
      this.$i18n.locale = locale
      this.$store.commit("SET_LANG", locale);
    }
  }
}
</script>

<style lang='less'>
.head {
  
  width: 100%;
  background: white;
  img {
    width: 140px;
    height: 45px;
  }

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

    .parents_nav{
      position: relative;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      p{
        font-size: 14px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #4a4a4a;
        margin-right: 11px;
      }

      img{
        height: 6px;
        width: 10px;
      }

      .children_nav{
        position: absolute;
        top: 58px;
        left: 0;
        background-color: #fff;
        color: #666666;

        li{
          display: flex;
          justify-content: center;
          align-items: center;
          height: 47px;
          width: 127px;
          border: 1px solid #E0E0E0;

          a{
            display: inline-flex;
            justify-content: center;
            align-items: center;
            height: 47px;
            line-height: 47px;
            width: 100%;
          }
        }
      }
    }
}

a {
  font-size: 14px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #4a4a4a;
  height: 88px;
  line-height: 88px;
}
}

</style>
