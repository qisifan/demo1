<template>
    <div class="mymsg">
      <div class="back" @click="goback">
          <div class="backicon"></div>
          <div class="backtext">返回</div>
      </div>
      <ul>
        <li>
          <div class="column">
            <img src="../../../images/mine/mymsg/update3.png">
            <span>视频更新</span>
          </div>
        </li>
        <li>
          <div class="column">
            <img src="../../../images/mine/mymsg/sysmsg3.png">
            <span>系统消息</span>
          </div>
        </li>
        <li>
          <div class="column">
            <img src="../../../images/mine/mymsg/@me.png">
            <span>与我相关</span>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
      methods:{
        goback () {
          this.$router.replace('/mine/logged');
        }
      }
    }
</script>

<style lang="scss" scoped>
  .mymsg{
    width: 100%;
    height: 100%;
    .back{
        width: 40%;
        height:2rem;
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;;
        align-items: center;
        padding: 0 1.1rem;
        .backicon{
          background-image: url(../../../images/mine/registered/goback3.png);
          background-repeat: no-repeat;
          background-size: 100% 100%;
          width: .65rem;
          height: 1.1rem;
        }
        .backtext{
          width: 2rem;
          height: 2rem;
          line-height: 2rem;
          text-align: center;
        }
    }
    ul{
      width: 100%;
      height: auto;
      li{
        width: 100%;
        height: 2.8rem;
        padding:0 1.4rem 0 1.1rem;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;;
        align-items: center;
        .column{
          width: auto;;
          height: .9rem;
          display: flex;
          flex-flow: row nowrap;
          justify-content: flex-start;
          align-items: center;
          img{
            width: .9rem;
            height: .9rem;
            margin-right: .5rem;
          }
          span{
            font-size: .8rem;
            color: #2f2f2f;
            font-weight: 500;
          }
        }
        p{
          font-size: .75rem;
          color: #666;
          font-weight: 500;
        }
      }
      li:nth-child(1n){
        background-color: #fff;
      }
      li:nth-child(2n){
        background-color: #f8f6f7;
      }
      li:last-child span{
        color: #ed135b;
      }
    }
  }
</style>
