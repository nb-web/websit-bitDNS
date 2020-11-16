<template>
  <div>
    <div class="head web">
      <div class="top common_container">
        <div>
          <nuxt-link
            to="/"
            :style="{display:'flex', justifyContent: 'center', alignItems: 'center'}"
          >
            <img src="/logo .png" alt />
          </nuxt-link>
        </div>
        <div class="route">
          <nuxt-link
            to="/"
            :style="$route.path=='/' ? {color: '#2060F4'} : ''"
          >{{ $t('links.home') }}</nuxt-link>
          <div
            class="parents_nav"
            :style="showNavChildren ? {height: '88px'} : ''"
            @mouseenter="()=>{this.showNavChildren = true}"
            @mouseleave="()=>{this.showNavChildren = false}"
          >
            <p :style="$route.path=='/product' ? {color: '#2060F4'} : ''">{{ $t('links.product') }}</p>
            <img src="/imges/navBottomJt.png" height="6px" width="10px" />

            <ul v-show="showNavChildren" class="children_nav product_children_nav">
              <el-collapse-transition>
                <li v-show="showNavChildren" @click="()=>{this.showNavChildren = false}">
                  <nuxt-link
                    to="/product"
                    :style="$route.path=='/product' ? {color: '#2060F4'} : ''"
                  >{{ $t('links.product_domainService') }}</nuxt-link>
                </li>
              </el-collapse-transition>
            </ul>
          </div>
          <nuxt-link
            to="/Economic"
            :style="$route.path=='/Economic' ? {color: '#2060F4'} : ''"
          >{{ $t('links.economic') }}</nuxt-link>
          <nuxt-link
            to="/about"
            :style="$route.path=='/about' ? {color: '#2060F4'} : ''"
          >{{ $t('links.about') }}</nuxt-link>
          
          <nuxt-link to>
            <div @click="switchLocale()">
              <span :style="locale=='zh-CN' ? {color: '#2060F4'}:''" >中</span>/
              <span :style="locale=='en-US' ? {color: '#2060F4'}:''" >EN</span>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>

    <div class="head common_container h5">
      <div class="top">
        <div class="logo">
          <img src="/logo .png" alt />
        </div>
        <div class="all" @click="setShow">
          <img src="/all.png" alt />
        </div>
      </div>

      <div class="caidans">
        <el-collapse-transition>
          <div v-show="show">
            <ul>
              <nuxt-link to="/">
                <li
                  @click="close"
                  :style="$route.path=='/' ? {color: '#2060F4'} : ''"
                >{{ $t('links.home') }}</li>
              </nuxt-link>
              <hr
                style=" height:2px;border:none;border-top:1px solid #EEEEEE;margin:20px 0;box-sizing:border-box"
              />
              <!-- <el-divider></el-divider> -->

              <li @click="setshow2()" :style="$route.path=='/product' ? {color: '#2060F4'} : ''">
                {{ $t('links.product') }}
                <img src="/pull.png" alt />
              </li>

              <hr
                style=" height:2px;border:none;border-top:1px solid #EEEEEE;margin:20px 0;box-sizing:border-box"
              />

              <el-collapse-transition>
                <div v-show="show3">
                  <nuxt-link to="/product">
                    <li @click="close">
                      <p
                        :style="$route.path=='/product' ? {color: '#2060F4'} : ''"
                        class="ym"
                      >{{ $t('links.product_domainService') }}</p>
                    </li>
                  </nuxt-link>
                  <hr
                    style=" height:2px;border:none;border-top:1px solid #EEEEEE;margin:20px 0;box-sizing:border-box"
                  />
                </div>
              </el-collapse-transition>

              <li @click="close">
                <nuxt-link to="/Economic">
                  <p
                    :style="$route.path=='/Economic' ? {color: '#2060F4'} : ''"
                  >{{ $t('links.economic') }}</p>
                </nuxt-link>
              </li>
              <hr
                style=" height:2px;border:none;border-top:1px solid #EEEEEE;margin:20px 0;box-sizing:border-box"
              />

              <nuxt-link to="/about">
                <li @click="close">
                  <p
                    :style="$route.path=='/about' ? {color: '#2060F4'} : ''"
                  >{{ $t('links.about') }}</p>
                </li>
              </nuxt-link>
              <hr
                style=" height:2px;border:none;border-top:1px solid #EEEEEE;margin:20px 0;box-sizing:border-box"
              />
              
              <li @click="close">
                <nuxt-link to>
                  <div @click="switchLocale()">
                    <span :style="locale=='zh-CN' ? {color: '#2060F4'}:''" >中</span>/
                    <span :style="locale=='en-US' ? {color: '#2060F4'}:''" >EN</span>
                  </div>
                </nuxt-link>
              </li>
            </ul>
          </div>
        </el-collapse-transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      show3: false,
      locale: this.$store.state.locale,
      showNavChildren: false
    };
  },
  methods: {
    switchLocale() {
      let locale = this.$store.state.locale === "zh-CN" ? "en-US" : "zh-CN";
      this.locale = locale;
      this.$i18n.locale = locale;
      this.$store.commit("SET_LANG", locale);
    },
    setShow() {
      if (this.show) {
        this.show = false;
      } else {
        this.show = true;
      }
      console.log(this.show);
    },
    setshow2() {
      if (this.show3) {
        this.show3 = false;
      } else {
        this.show3 = true;
      }
      console.log(this.show3);
    },
    close() {
      this.show = false;
    }
  }
};
</script>

<style lang='less'>
.head {
  width: 100%;
  background: white;
  hr {
    background: #ffffff;
  }
  img {
    width: 140px;
    height: 45px;
  }

  .top {
    height: 88px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  }

  .route {
    width: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .parents_nav {
      position: relative;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      p {
        font-size: 14px;
        
        font-weight: 600;
        color: #4a4a4a;
        margin-right: 11px;
      }

      img {
        height: 6px;
        width: 10px;
      }

      .children_nav {
        position: absolute;
        top: 68%;
        left: 0;
        background-color: #fff;
        color: #666666;

        li {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 47px;
          min-width: 127px;
          padding: 0 10px;
          border: 1px solid #e0e0e0;

          a {
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

  @media (min-width: 2880px) and (max-width: 3840px) {
    .top {
      height: 132px;
    }
  }

  @media (max-width: 1680px) {
    .top {
      height: 77px;
    }
    .route {
      .parents_nav {
        .children_nav {
          li {
            height: 41px;
            min-width: 111px;

            a {
              height: 41px;
              line-height: 41px;
            }
          }
        }
      }
    }
  }

  @media (max-width: 1440px) {
    .top {
      height: 66px;
    }
    .route {
      .parents_nav {
        .children_nav {
          li {
            height: 35px;
            min-width: 95px;

            a {
              height: 35px;
              line-height: 35px;
            }
          }
        }
      }
    }
  }

  @media (min-width: 1024px) and (max-width: 1280px) {
    .top {
      height: 59px;
    }
    .route {
      .parents_nav {
        .children_nav {
          li {
            height: 31px;
            min-width: 85px;

            a {
              height: 31px;
              line-height: 31px;
            }
          }
        }
      }
    }
  }

  a {
    font-size: 14px;
    
    font-weight: 600;
    color: #4a4a4a;
    height: 88px;
    line-height: 88px;
  }
}
@media (min-width: 980px) and (max-width: 1279px) {
  .head {
    .top {
      justify-content: space-between;
    }
    .route{
      width: 70%;
    }
  }
}

@media (max-width: 980px) {
  .web {
    display: none !important;
  }
  .head {
    position: fixed;
    top: 0;
    left: 0;
    max-width: 100% !important;
    z-index: 9999999;
    .top {
      height: 118px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 40px 30px;
      box-sizing: border-box;
      .logo {
        img {
          width: 140px;
          height: 45px;
        }
      }
      .all {
        width: 50px;
        img {
          width: 31px;
          height: 30px;
        }
      }
    }
    .caidans {
      width: 100%;
      box-shadow: 0px 4px 35px 4px rgba(145,145,145,0.38);
      position: absolute;
      background: white;
      ul {
        width: 100%;
        padding: 34px 57px;
        box-sizing: border-box;
      }
      li {
        width: 100%;
        font-size: 34px;
        
        font-weight: 400;
        color: #3c3c3c;
        line-height: 48px;
        a {
          font-size: 34px;
          
          font-weight: 400;
          color: #3c3c3c;
          line-height: 48px;
        }
        .ym {
          font-size: 28px;
          
          font-weight: 400;
          color: #999999;
          line-height: 40px;
        }
        img {
          width: 25px;
          height: 15px;
        }
      }
    }
  }
}
</style>
