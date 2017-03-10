<template>
<div class="nologin">
    <div class="gologin">
      <div class="userinfo">
        <div class="avatar"></div>
        <div class="userid">
          <h1>未登录用户</h1>
          <span>登陆后可享受更多贴心服务</span>
        </div>
      </div>
        <div class="loginnow">
          <router-link to="/mine/login">
            <span>马上登录</span>
          </router-link>
        </div>
    </div>
    <div class="myinfo">
      <ul>
        <li>
          <router-link to="/mine/login">
            <div class="column">
              <img src="../../images/mine/nologged/mine3.png">
              <span>我的账号</span>
            </div>
          </router-link>
        </li>
        <li>
          <div class="column">
            <img src="../../images/mine/nologged/collecting3.png">
            <span>视频收藏</span>
          </div>
          <p>记录美好时光</p>
        </li>
        <li>
          <div class="column">
            <img src="../../images/mine/nologged/recording3.png">
            <span>播放记录</span>
          </div>
        </li>
      </ul>
    </div>
</div>
</template>
<script>
export default {
  name:'nologin'
}
</script>
<style lang="scss" scoped>
.nologin{
  text-align: start;
  width: 100%;
  height: 100%;
  .gologin {
      width: 100%;
      height: 4.4rem;
      background-color: #f2f2f2;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      padding: 0 .75rem;
      .userinfo {
          width: auto;
          height: 2.75rem;
          display: flex;
          flex-flow: row nowrap;
          justify-content: flex-start;
          align-items: center;
          .avatar {
              width: 2.75rem;
              height: 2.75rem;
              background-image: url("../../images/mine/nologged/xb3.png");
              background-repeat: no-repeat;
              background-size: 100% auto;
          }
          .userid {
              width: 8rem;
              height: 2rem;
              padding-left: 0.3rem;
              display: flex;
              flex-flow: row wrap;
              justify-content: flex-start;
              align-items: center;
              h1 {
                  font-size: 0.75rem;
                  color: #323232;
                  font-weight: bold;
                  display: block;
              }
              span {
                  font-size: .55rem;
                  color: #999;
                  display: block;
              }
          }
      }
      .loginnow {
          width: 8rem;
          height: 4.4rem;
          display: flex;
          flex-flow: row nowrap;
          justify-content: flex-end;
          align-items: center;
          span {
            font-size: .8rem;
            font-weight: bold;
            color: #ed135b;
          }
          span:after{
            display: inline-block;
            content: "";
            background-image: url(../../images/mine/nologged/gologin3.png);
            background-repeat: no-repeat;
            background-size: 100% 100%;
            width: .45rem;
            height: .6rem;
            margin-left: .25rem;
          }
      }
  }
  .myinfo{
    width: 100%;
    height: auto;
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
    }
  }
}
</style>
