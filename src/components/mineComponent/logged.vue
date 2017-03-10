<template>
  <div class="logged">
    <div class="avatarbox">
      <div class="avatar">
        <img src="../../images/mine/logged/avatar3.png">
      </div>
      <h1>{{username}}</h1>
    </div>
    <div class="myinfo">
      <ul>
        <li>
          <div class="column">
            <img src="../../images/mine/nologged/mine3.png">
            <span>我的账号</span>
          </div>
        </li>
        <router-link to="/mine/logged/mycollect" tag="li">
          <div class="column">
            <img src="../../images/mine/nologged/collecting3.png">
            <span>视频收藏</span>
          </div>
          <p>记录美好时光</p>
        </router-link>
        <li>
          <div class="column">
            <img src="../../images/mine/nologged/recording3.png">
            <span>播放记录</span>
          </div>
        </li>
        <router-link to="/mine/logged/mymsg" tag="li">
          <div class="column">
            <img src="../../images/mine/logged/msg3.png">
            <span>消息</span>
          </div>
        </router-link>
        <li>
          <div class="column">
            <img src="../../images/mine/logged/wish3.png">
            <span>心愿单</span>
          </div>
        </li>
        <li>
          <div class="column">
            <span @click="signout">退出登录</span>
          </div>
        </li>
      </ul>
      <div class="makesure" v-if="out">
        <div class="kk">
          <div class="quer"><span v-text="text"></span></div>
          <div class="myButton" @click="sure">确 定</div>
          <div class="myButton" @click="cancel">取 消</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'logged',
    data () {
      return {
        username:'zblade',
        out:false,
        text:'确认退出吗'
      }
    },
    methods:{
      signout () {
        this.out = true;
      },
      sure () {
        sessionStorage.removeItem('status');
        this.$router.replace('/mine/nologin')
      },
      cancel () {
        this.out = false;
      }
    }
  }
</script>

<style lang='scss' scoped>
  .logged{
    width: 100%;
    height: 100%;
    .avatarbox{
      width: 100%;
      height: 8.2rem;
      background-color: #f8f6f7;
      .avatar{
        width: 100%;
        height: 6.15rem;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        img{
          width: 4.85rem;
          height: 4.85rem;
        }
      }
      h1{
        font-size: .8rem;
        color: #2f2f2f;
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
        li:last-child span{
          color: #ed135b;
        }
      }
      .makesure{
        width: 100%;
        height: 100%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        align-items: center;
        position: fixed;
        top: 0;
        background-color: rgba(51,51,51,.5);
        .kk{
          width: 90%;
          background-color: #fff;
          height: 8rem;
          border-radius: 10px;
          display: flex;
          flex-flow: row nowrap;
          justify-content: space-around;
          align-items: center;
          .myButton {
            -moz-box-shadow:inset 0px 39px 0px -24px #e67a73;
            -webkit-box-shadow:inset 0px 39px 0px -24px #e67a73;
            box-shadow:inset 0px 39px 0px -24px #e67a73;
            background-color:#e4685d;
            -moz-border-radius:4px;
            -webkit-border-radius:4px;
            border-radius:4px;
            border:1px solid #ffffff;
            display:inline-block;
            cursor:pointer;
            color:#ffffff;
            font-family:Arial;
            font-size:15px;
            padding:6px 15px;
            text-decoration:none;
            text-shadow:0px 1px 0px #b23e35;
          }
          .myButton:hover {
            background-color:#eb675e;
          }
          .myButton:active {
            position:relative;
            top:1px;
          }
        }

      }
    }
  }
</style>
