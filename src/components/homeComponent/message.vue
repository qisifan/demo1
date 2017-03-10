<template>
	<div id="msg" v-if="Hmsgs1">
		<div class="video">
			<div class="msg-img v-imgs1">
				<img src="../../images/homePage/cp-6.png"/>
				<div class="msg-logo"></div>
				<div class="msg-play"></div>
			</div>
			<div class="video-msg" v-text="Hmsgs1">
			</div>
		</div>
		<div class="video">
			<div class="msg-img v-imgs2">
				<img src="../../images/homePage/njh-6.png"/>
				<div class="msg-logo"></div>
				<div class="msg-play"></div>
			</div>
			<div class="video-msg" v-text="Hmsgs2">
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name: 'msg',
		data () {
			return {
				// msgData:[]
			}
		},
		computed: {
			Hmsgs1 () {
				let msgsData = this.$store.state.homeData;
				if (msgsData) {
					return msgsData[2].msgData[2];
				}
			},
			Hmsgs2 () {
				let msgs2Data = this.$store.state.homeData;
				// console.log(msgs2Data)
				if (msgs2Data) {
					return msgs2Data[2].msgData[5];
				}
			}
		}
	}
</script>
<style scoped lang='scss'>
	#msg{
		width: 100%;
		/*background-color: #ff9933;*/
		margin-top: .75rem;
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		position: relative;
		.video{
			height: 7.7rem;
			width: 9.25rem;
			position: relative;
			text-align: start;
			.msg-img {
                    width: 100%;
                    height: 76.7%;
                    img{
                    	height: 100%;
                    	width: 100%;
                    }
                    .msg-logo{
                    	width: .6rem;
                    	height: .6rem;
                    	position: absolute;
                    	top: .25rem;
                    	left: .25rem;
                    	background: url(../../images/homePage/sq-6.png) no-repeat;
                    	background-size:100% 100% ;
                    }
                    .msg-play{
                    	width: 1.75rem;
                    	height: 1.75rem;
                    	position: absolute;
                    	right: .25rem;
                    	bottom: 2.05rem;
                    	background: url(../../images/homePage/play-6.png) no-repeat;
                    	background-size:100% 100% ;
                    }
                }
		}
		.video-msg{
			display: block;
			content: "111";
			height: 1.8rem;
			width: 9.25rem;
			font-size: .65rem;
			background-color: #f2f2f2;
			position: absolute;
			bottom: 0;
			padding: 0 .2rem;
		    overflow: hidden;
		    text-overflow: ellipsis;
		    display: -webkit-box;
		    -webkit-line-clamp: 2;
		    -webkit-box-orient: vertical;
		    color: #000;
		}
	}
</style>