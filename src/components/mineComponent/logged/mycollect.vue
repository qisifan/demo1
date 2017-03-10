<template>
    <div class="mycollect">
        <div class="back" @click="goback">
            <div class="backicon"></div>
            <div class="backtext">返回</div>
        </div>
        <ul class="collectvideo">
            <li v-for="(list,index) in lists">
                <div class="myvideo">
                  <div v-if="list.hot" class="hot"></div>
                  <div class="playicon"></div>
                </div>
                <div class="videotext">
                  {{videotext}}
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                lists:[
                    {hot:true},
                    {hot:false},
                    {hot:false},
                    {hot:false}
                ],
                videotext:"简单的生活,比诗还浪漫,一起温暖过冬"
            }
        },
        methods:{
          goback () {
            this.$router.replace('/mine/logged');
          }
        }
    }
</script>

<style lang="scss" scoped>
    .mycollect{
        width: 100%;
        height: auto;
        .back{
            width: 20%;
            height:2rem;
            display: flex;
            flex-flow: row nowrap;
            justify-content: flex-start;;
            align-items: center;
            padding: 0 .6rem;
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
        .collectvideo{
          width: 100%;
          height: auto;
          display: flex;
          flex-flow: row wrap;
          justify-content: space-between;
          align-items: flex-start;
          padding: 0 .55rem;
          li{
            width: 8.5rem;
            height: 5.8rem;
            background-color: #f8f6f7;
            margin-bottom: .6rem;
            .myvideo{
              width: 8.5rem;
              height: 4.8rem;
              background-image: url(../../../images/zhib/cat-p.png);
              background-repeat: no-repeat;
              background-size: 100% 100%;
              position: relative;
              .hot{
                position: absolute;
                top: 0;
                left: 0;
                background-image: url(../../../images/zhib/hot-p.png);
                background-repeat: no-repeat;
                background-size: 100% 100%;
                width: 1.2rem;
                height: 1.2rem;
              }
              .playicon{
                background-image: url(../../../images/zhib/play-p.png);
                background-repeat: no-repeat;
                background-size: 100% 100%;
                width: 1.6rem;
                height: 1.6rem;
                position: absolute;
                top:1.6rem;
                left: 3.45rem;
              }
            }
            .videotext{
              width: 100%;
              height: 1rem;
              font-size: .45rem;
              line-height: 1rem;
              padding: 0 .5rem;
              overflow:hidden;
              color: #803840;
            }
          }
        }
    }
</style>
