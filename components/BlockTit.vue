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
            padding: 100px 0 45px 0;

            font-size: 30px;
            font-family: PingFangSC-Semibold, PingFang SC;
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
            margin: 0 20px;
        }
    }
    
</style>