<template>
	<div class="zbDtails" v-if="actjump">
		<div class="player">
			<video autobuffer autoloop loop controls poster="http://www.jplayer.org/video/poster/Big_Buck_Bunny_Trailer_480x270.png">
				<source src="http://www.jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v">
				<!-- <source src="/media/video.m4v"> -->
				<object type="video/ogg" data="/media/video.oga" width="320" height="240">
				<param name="src" value="/media/video.oga">
				<param name="autoplay" value="false">
				<param name="autoStart" value="0">
				<p><a href="/media/video.oga">Download this video file.</a></p>
				</object>
			</video>
			<router-link :to="actroute.path">
				<div class="advert" v-if="ggyinc">
					<img src="../../../../images/zhib/zhibdtl/tz-6.png"/>
					<div @click="ggdisplay"></div>
				</div>
			</router-link>	
		</div>
		<dtlswip></dtlswip>
		<div class="Drecommend">
			<p class="rmd-title"><img src="../../../../images/zhib/zhibba-6.png"/></p>
			<div class="content">
				<div class="cnt-video">
					<div class="cnt-pic"></div>
					<div class="cnt-jb"><img src="../../../../images/zhib/jbs-6.png"/></div>
					<div class="cnt-msg">
						<p><span>简单的生活,比诗还浪漫,让我们一起温暖过冬吧</span></p>
						<p><span>54351</span><span><img src="../../../../images/zhib/zhiba-6.png"/></span></p>
					</div>
				</div>
				<div class="cnt-video">
					<div class="cnt-pic"></div>
					<div class="cnt-jb"><img src="../../../../images/zhib/jbs-6.png"/></div>
					<div class="cnt-msg">
						<p><span>洋溢着温暖生活气息的工作室,香味四溢</span></p>
						<p><span>48386</span><span><img src="../../../../images/zhib/zhiba-6.png"/></span></p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import Dtlswip from './zbDtailChild/actswiper.vue'

	export default {
		name:'zbDtails',
		data () {
			return {
				actroute:{
					path:'/activity'
				},
				ggyinc:true,
			}
		},
		components: {
			Dtlswip
		},
		computed: {
			actjump () {
				let actpath = this.$route.path;
				if (actpath === '/activity') {
					return false;
				}
				return true;
			}
		},
		mounted () {
			if(this.$route.path== '/column/zhibgg/zbDtails'){
				console.log(11111)
				this.$store.commit('changeTab','/column/fenxz');
				this.$store.commit('changecnTab','/column/zhibgg');
			}
		},
		methods: {
			ggdisplay () {
				this.ggyinc = false;
			}
		}
	}
</script>
<style lang="scss" scoped>
	.zbDtails{
		width: 100%;
		background-color: #fff;
		margin-top:-1rem ;
		.player{
			width: 100%;
			height: 12.65rem;
			position:relative;
			video{
				width: 100%;
				height: 12.65rem;
			}
			img{
				height: 100%;
				width: 100%;
			}
			.advert{
				width: 4.1rem;
				height: 2.55rem;
				position: absolute;
				bottom: 1.55rem;
				right: 0.2rem;
				z-index:999;
				div{
					position: absolute;
					bottom: 0;
					left: 0;
					width: .7rem;
					height:.7rem;
					z-index: 99;
				}
			}
		}
		.Drecommend{
			width: 100%;
			.rmd-title{
				display: inline-block;
				width: 3.7rem;
				height: .875rem;
				margin-bottom:.75rem;
				img{
					height: 100%;
					width: 100%;
				}
			}
			.content{
			display: flex;
			flex-flow: row wrap;
			justify-content: space-between;
			padding:0 .5rem;
			.cnt-video{
				width: 8.5rem;
				.cnt-pic{
					width: 100%;
					height: 4.8rem;
					background: url(../../../../images/zhib/cat-6.png) no-repeat;
					background-size: 100% 100%;
					margin-bottom: .125rem;
				}
				.cnt-jb{
					width: 100%;
					height: .125rem;
					img{
						height: 100%;
						width: 100%;
					}
				}
				.cnt-msg{
					width: 100%;
					text-align: start;
					background-color: #f2f2f2;
					margin-bottom: .375rem;
					p:nth-of-type(1){
						padding-right: 1.15rem;
						padding-left:.25rem;
						margin-bottom: .375rem;
						span{
							font-size: .65rem;
							color:#803840;
						    overflow: hidden;
						    text-overflow: ellipsis;
						    display: -webkit-box;
						    -webkit-line-clamp: 2;
						    -webkit-box-orient: vertical;
						}
					}
					p:nth-of-type(2){
						padding-left: .425rem;
						padding-right: .375rem;
						display: flex;
						flex-flow: row nowrap;
						justify-content: space-between;
						align-items: center;
						span{
							display: inline-block;
						}
						span:nth-of-type(1){
							font-size: .55rem;
							color: #999;
						}
						span:nth-of-type(1):before{
							content:'';
							display: inline-block;
							height: .6rem;
							width: .8rem;
							background:  url(../../../../images/zhib/look-6.png) no-repeat;
							background-size: 100% 100%;
						}
						span:nth-of-type(2){
							width: 3.7rem;
							height: .875rem;
							img{
								height: 100%;
								width: 100%;
							}
						}
					}
				}
			}
		}
		}
	}
</style>