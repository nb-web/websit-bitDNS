<template>
  <div class="blockTit">
      <div class="commonTit">
        <i></i>
        <p>{{text}}</p>
        <i></i>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        text: String
    }
}
</script>


<style lang="less">
    .blockTit{
        .commonTit {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 100px 0 45px;

            font-size: 30px;
            
            font-weight: 600;
            color: #3c3c3c;
            line-height: 42px;
        }
        
        i {
            display: inline-block;
            width: 30px;
            height: 3px;
            background: #2365ff;
        }

        p {
            // max-width: 320px;
            margin: 0 20px;
            text-align: center;
            line-height: 1;
        }


        @media (max-width: 1680px) {
            .commonTit {
                padding: 67px 0 45px;
                font-size: 26px;
            }
        }

        @media (max-width: 1440px) {
            .commonTit {
                padding: 58px 0 42px;
                font-size: 23px;
            }
        }

        @media (min-width: 1024px) and (max-width: 1280px) {
            .commonTit {
                padding: 41px 0 29px;
                font-size: 20px;
            }
        }

         @media (max-width: 980px) {
            .commonTit {
                padding: 70px 0 38px;
                font-size: 20px;
            }

            p {
                max-width: 320px;
            }
        }

    }
    
</style>