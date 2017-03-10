<template>
  <div class="login">
    <div class="loginInfo">
        <form class="" @submit.prevent='submit' method="post">
          <ul>
            <li>
              <input type="number" placeholder="请输入手机号" v-model="phoneVal" @keyup="checkphone" autofocus>
              <span v-if="phoneVal" :class="{'true':status1,'false':status2}"></span>
            </li>
            <li>
              <input type="password" placeholder="请输入密码" v-model="passVal" @keyup="checkpass">
              <span v-if="passVal" :class="{'true':status3,'false':status4}"></span>
            </li>
            <li class="cuow" v-if="err">
              <div>
              	<p @click="closes ()">×</p>
                <p><span>账号不存在或者密码错误</span></p>
                <p>
                	<router-link :to="ZCpath">
                		<span>立即注册</span>
                	</router-link>
            			<span>找回密码</span>
                </p>
              </div>
            </li>
          </ul>
          <div class="accept">
            <div class="valign">
              <span><a href="">忘记密码</a></span>
            </div>
          </div>
          <div class="zhuce">
            <!--<router-link to="/mine/logged" tag="button" class="denglubtn">登 录</router-link>-->
            <input type="submit" class="denglubtn" value="登 录">
            <router-link to="/mine/registered" tag="button" class="zhucebtn">注 册</router-link>

          </div>
        </form>
        <div class="third">
          <p>使用第三方登录</p>
          <div class="thirdicon">
            <button type="button" class="weibo"></button>
            <button type="button" class="qq"></button>
            <button type="button" class="weixin"></button>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        phoneVal:"",
        status1:false,
        status2:true,
        passVal:"",
        status3:false,
        status4:true,
        err:false,
        ZCpath:'/mine/registered'
      }
    },
    methods:{
      checkphone () {
        let val = this.phoneVal;
        if((/^1[34578]\d{9}$/.test(val))){
          this.status1 = true;
          this.status2 = false;
        }else{
          this.status1 = false;
          this.status2 = true;
        }
      },
      checkpass () {
        let val = this.passVal;
        var reg = /^(?!([a-zA-Z]+|\d+)$)[a-zA-Z\d]{7,11}$/;
        if (reg.test(val)){
          this.status3 = true;
          this.status4 = false;
        }else{
          this.status3 = false;
          this.status4 = true;
        }
      },
      submit () {
        console.log(this.$store.state.regData)
        let reg = this.$store.state.regData;
        var phone = parseInt(this.phoneVal);
        let pass = this.passVal;

        if (!reg.length) {
          console.log("err")
          this.err = true;
        }else{
          for(let i = 0; i< reg.length;i++) {
            if (phone == reg[i][0] && pass == reg[i][1]) {
              console.log("登录成功")
              sessionStorage.setItem('status', 0)
              this.$router.replace('/mine/logged')
            }else{
              console.log("err")
              this.err = true;
              this.phoneVal = "";
              this.passVal = "";
            }
          }
        }

        // this.$router.replace('/mine/logged')
      },
      closes () {
      	this.err = false;
      }
    }
  }
</script>
<style lang="scss" scoped>

  input,button{
    outline: none;
    border: none;
    padding:0;
  }
  input[type="submit"],
  input[type="reset"],
  input[type="button"],
  button {
     -webkit-appearance: none; 
     background-color: transparent;
  }
  .login{
    width: 100%;
    height: 100%;
    background-color: #fff;
    text-align: start;
    .loginInfo{
      width: 100%;
      height: auto;
      ul{
        width: 17.6rem;
        height: auto;
        margin: auto;
        .cuow{
          width: 100%;
          height: 30rem;
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          background-color: rgba(51,51,51,.5);
          color: #EB135B;
          display:flex;
          justify-content:center;
          div{
            width: 70%;
            height:5rem;
            background-color: #fff;
            border-radius: 10px;
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;
            align-items: center;
            position: relative;
            p:nth-of-type(1){
            	position: absolute;
            	top: .5rem;
            	right: .5rem;
            }
            p:nth-of-type(3){
            	margin-top: 1rem;
            	width: 60%;
            	display: flex;
            	justify-content: space-around;
            }
          }
        }
        li{
          width: 100%;
          height: 2.15rem;
          border-bottom: 1px solid #e3e3e3;
          display: flex;
          flex-flow: row nowrap;
          justify-content: space-between;
          align-items: center;
          input{
            border: none;
            width: 100%;
            height: 2rem;
            padding-left: .5rem;
            font-size: .8rem;
            color: #2f2f2f;
            line-height: 1rem;
            outline: none;
          }
          button{
            border: none;
            border-radius: 1.575rem;
            width: 6.825rem;
            height: 1.725rem;
            font-size: .65rem;
            color: #282828;
            background-color: #ffe8ff;
            border: 1px solid #bfbfbf;
          }
          img{
            width: 3.75rem;
            height: 1.25rem;
          }
          .true{
            background-image: url(../../images/mine/registered/true3.png);
            background-repeat: no-repeat;
            background-size: 100% 100%;
            width: .875rem;
            height: .625rem;
          }
          .false{
            background-image: url(../../images/mine/registered/err3.png);
            background-repeat: no-repeat;
            background-size: 100% 100%;
            width: .875rem;
            height: .625rem;
          }
        }
      }
      .accept{
        width: 100%;
        height: 2.75rem;
        padding-top: .65rem;
        .valign{
          width: 90%;
          height: .7rem;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          input{
            width:.7rem;
            height: .7rem;
          }
          span{
            font-size: .55rem;
            color: #2f2f2f;
            a{
              font-size: .55rem;
              color: #ed135b;
              text-decoration: underline;
            }
          }
        }
      }
      .zhuce{
        width: 100%;
        height: 2.6rem;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        align-items: flex-start;
        button{
          width: 6.825rem;
          height: 1.75rem;
          border: 2px solid #ed135b;
          border-radius: .875rem;
          outline: none;
          font-size: .8rem;
          font-weight: bold;
        }
        .zhucebtn{
          background-color: #fff;
          color: #ed135b;
        }
        .denglubtn{
          width: 6.825rem;
          height: 1.75rem;
          border: 2px solid #ed135b;
          border-radius: .875rem;
          outline: none;
          font-size: .8rem;
          font-weight: bold;
          background-color: #ed135b;
          color: #fff;
        }
      }
      .third{
        width: 100%;
        height: 4.75rem;
        p{
          width: 100%;
          height: 2.5rem;
          text-align: center;
          line-height: 2.5rem;
          font-size: .8rem;
          color: gray;
        }
        .thirdicon{
          width: 70%;
          height: 1.9rem;
          margin:auto;
          display: flex;
          justify-content: space-around;
          button{
            width: 1.9rem;
            height: 1.9rem;
            border: none;
            border-radius: 1.9rem;
          }
          .weibo{
            background-image: url(../../images/mine/registered/thirdlogin-3.png);
            background-repeat: no-repeat;
            background-position: -0 0;
            background-size:562% 100%;
          }
          .qq{
            background-image: url(../../images/mine/registered/thirdlogin-3.png);
            background-repeat: no-repeat;
            background-position: 50% 0;
            background-size:562% 100%;
          }
          .weixin{
            background-image: url(../../images/mine/registered/thirdlogin-3.png);
            background-repeat: no-repeat;
            background-position: 100.5% 0;
            background-size:562% 100%;
          }
        }
      }
    }
  }
</style>
