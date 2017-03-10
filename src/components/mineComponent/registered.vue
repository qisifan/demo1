<template>
    <div class="registered">
        <div class="registeredInfo">
            <form @submit.prevent='submit' method="post">
              <ul>
                <li>
                  <input type="number" placeholder="请输入手机号" v-model="phoneVal" @keyup="checkphone"  autofocus>
                  <span v-if="phoneVal" :class="{'true':status1,'false':status2}"></span>
                </li>
                <li>
                  <input type="password" placeholder="请输入密码(必须是字母加数字,8到12位)" v-model="passVal" @keyup="checkpass">
                  <span v-if="passVal" :class="{'true':status3,'false':status4}"></span>
                </li>
                <li>
                  <input type="text" placeholder="请输入验证码" v-model="checknum">
                  <button type="button" class="randomnum" @click="randomnum">{{num}}</button>
                </li>
                <!-- <li>
                  <input type="text" placeholder="请输入手机验证码">
                  <button type="button">获取验证码</button>
                </li> -->
              </ul>
              <div class="accept">
                <div class="valign">
                  <input type="checkbox" name="check" v-model="checked">
                  <span>我已阅读并同意<a href="">用户服务协议</a></span>
                </div>
              </div>
              <div class="zhuce">
                <!--<button type="button" class="zhucebtn">注 册</button>-->
                <input type="submit" value="注 册" class="zhucebtn">
                <router-link to="/mine/login" class="denglubtn" tag="button">登 录</router-link>
              </div>
            </form>
        </div>
        <div v-if="error" class="err">
          <div>
            <span v-if="zh">手机号码错误</span>
            <span v-if="mm">密码错误</span>
            <span v-if="yz">验证码错误</span>
            <span v-if="xy">未接受协议</span>
            <span @click="closeds ()" class="states">确定</span>
          </div>  
        </div>
    </div>

</template>

<script type="text/javascript">
  export default {
    data () {
      return {
        phoneVal:"",
        status1:false,
        status2:true,
        passVal:"",
        status3:false,
        status4:true,
        num:"",
        checknum:'',
        checked:false,
        error:false,
        zh:false,
        mm:false,
        yz:false,
        xy:false
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
        var reg = /^(?!([a-zA-Z]+|\d+)$)[0-9a-zA-Z]{7,11}$/;
        if (reg.test(val)){
          this.status3 = true;
          this.status4 = false;
        }else{
          this.status3 = false;
          this.status4 = true;
        }
      },
      randomnum (){
        // console.log(this.num)
        let q = Math.floor(Math.random()*10);
        let b = Math.floor(Math.random()*10);
        let s = Math.floor(Math.random()*10);
        let g = Math.floor(Math.random()*10);

        let num = "" + q + b + s + g;
        this.num = num;
      },
      submit () {
        var arr = [];
        arr.push(this.phoneVal,this.passVal)

        if(this.status1){
          this.error = false;
              this.yz = false;
                this.xy = false;
                this.mm = false;
                this.zh = false;
          if (this.status3) {
              this.error = false;
                  this.yz = false;
                this.xy = false;
                this.mm = false;
            if (this.num == this.checknum) {
              this.error = false;
              this.yz = false;
                this.xy = false;
              if (this.checked == true) {
                this.error = false;
                this.xy = false;
                this.$store.commit('regData',arr);
                sessionStorage.setItem("user",arr);
                this.$router.replace('/mine/login')
              }else{
                  this.error = true;
                    this.xy = false;
            this.phoneVal = "";
            this.passVal = "";
            this.checknum = "";
          this.checked =false;
            this.randomnum();
              }
            }else{
              this.error = true;
              this.yz = true;
          this.phoneVal = "";
          this.passVal = "";
          this.checknum = "";
          this.checked =false;
          this.randomnum();
            }
          }else{
              this.error = true;
            this.mm = true;
          this.phoneVal = "";
          this.passVal = "";
          this.checknum = "";
          this.checked =false;
          this.randomnum();
          }
          
        }else{
          this.phoneVal = "";
          this.passVal = "";
          this.checknum = "";
          this.checked =false;
          this.randomnum();
          this.error = true;
          this.zh=true;
        }
      },
      closeds () {
      	this.error = false;
      }
    },
    created () {
        let q = Math.floor(Math.random()*10);
        let b = Math.floor(Math.random()*10);
        let s = Math.floor(Math.random()*10);
        let g = Math.floor(Math.random()*10);

        let num = "" + q + b + s + g;
        this.num = num;
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
  .registered{
    width: 100%;
    height: 100%;
    background-color: #fff;
    text-align: start;
    .registeredInfo{
      width: 100%;
      height: auto;
      ul{
        width: 17.6rem;
        height: auto;
        margin: auto;
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
          .randomnum{
            border: none;
            border-radius: 1.575rem;
            width: 6.825rem;
            height: 1.725rem;
            font-size: .65rem;
            color: #282828;
            background-color: #ffe8ff;
            border: 1px solid #bfbfbf;
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
          background-color: #ed135b;
          color: #fff;
          width: 6.825rem;
          height: 1.75rem;
          border: 2px solid #ed135b;
          border-radius: .875rem;
          outline: none;
          font-size: .8rem;
          font-weight: bold;
        }
        .denglubtn{
          background-color: white ;
          color: #ed135b;
        }
      }
    }
    .err{
      width:100%;
      height:100%;
      background-color: rgba(51,51,51,.5);
      position: absolute;
      top: 0;
      height:30rem;
      display:flex;
      flex-flow: column;
      justify-content:center;
      align-items: center;
      div{
        width: 80%;
        height:8rem;
        background-color: #fff;
        border-radius: 10px;
        display: flex;
        flex-flow: column;
        justify-content:center;
        align-items: center;
        font-weight: bold;
        position: relative;
        span{
        	display: inline-block;
        }
        .states{
        	text-align: center;
        	margin-top: 1rem;
        	width: 3rem;
        	height: 1rem;
        	color: #fff;
        	font-size: .5rem;
        	line-height: 1rem;
        	background-color: #EB135B;
        	border-radius: 5px;
        }
      }
    }
  }
</style>
