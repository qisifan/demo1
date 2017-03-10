<template>
	<div class="videoRed" v-if="Hcomt">
		<div class="vidTop">
			<img src="../../images/homePage/kndD2-6.png"/>
			<div class="vi-logo"><img src="../../images/homePage/zb-6.png"></div>
			<div class="vi-logo2"><img src="../../images/homePage/zbg-6.png"></div>
			<div class="vi-play">
				<img src="../../images/homePage/play-6.png" >
			</div>
		</div>
		<div class="vidBt">
			<span v-text="Hcomt"></span>
		</div>
	</div>
</template>
<script>
	export default {
		name:'videoRed',
		data () {
			return {
				videoData:[]
			 }
		},
		computed: {
			Hcomt () {
				let viesData = this.$store.state.homeData;
				if (viesData) {
					return viesData[4].videosData[4];
				}
			}
		}
	}
</script>
<style scoped lang='scss'>
	.videoRed {
		width:100%;
		margin-top: .75rem;
		color: #000;
		.vidTop{
			width: 100%;
			height: 10rem;
			position: relative;
			img{
				height: 100%;
				width: 100%;
			}
			.vi-logo{
				width: .9rem;
				height: .9rem;
				position: absolute;
				top: .5rem;
				left: .5rem;

			}
			.vi-logo2{
				width: 1.55rem;
				height: .75rem;
				position: absolute;
				right: 0;
				bottom: 0;
			}
			.vi-play{
				height: 3.5rem;
				width: 3.5rem;
				position: absolute;
				top: 35%;
				left: 40%
			}

		}
		.vidBt{
			width: 100%;
			height: 2.2rem;
			background-color: #f2f2f2;
			text-align: start;
			/*line-height: 1rem;*/
			display: flex;
			align-items: center;
			span{
				display: inline-block;
				font-size: .7rem;
				margin: 0 .25rem;
				overflow : hidden;
			    text-overflow: ellipsis;
			    display: -webkit-box;
			    -webkit-line-clamp: 2;
			    -webkit-box-orient: vertical;
			}
		}
	}
</style>