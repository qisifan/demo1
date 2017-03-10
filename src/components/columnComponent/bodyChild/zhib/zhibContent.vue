<template>
	<div class="zhibContent">
		<router-link :to="zbroute.path" v-if="zbpath">
			<p class="cnt-tilte"><span>按热度</span>|<span>按时间</span></p>
			<div class="content" v-for="count in cntData">
				<div class="cnt-video">
					<div class="cnt-pic"></div>
					<div class="cnt-jb"><img src="../../../../images/zhib/jbs-6.png"/></div>
					<div class="cnt-msg">
						<p><span v-text="cntData[2]"></span></p>
						<p><span v-text="cntData[3]"></span><span><img src="../../../../images/zhib/zhiba-6.png"/></span></p>
					</div>
				</div>
				<div class="cnt-video">
					<div class="cnt-pic"></div>
					<div class="cnt-jb"><img src="../../../../images/zhib/jbs-6.png"/></div>
					<div class="cnt-msg">
						<p><span v-text="cntData[6]"></span></p>
						<p><span v-text="cntData[7]"></span><span><img src="../../../../images/zhib/zhiba-6.png"/></span></p>
					</div>
				</div>
			</div>
		</router-link>
	</div>
</template>
<script>
	export default {
		name:'zhibContent',
		data () {
			return{
				zbroute: {
					path:'/column/zhibgg/zbDtails'
				}
			}
		},
		computed: {
			cntData () {
				let cntD = this.$store.state.coulmnzbData;
				if(cntD){
					return cntD[1].zbmsgImg;
				}
				
			},
			zbpath () {
				let Zpath = this.$route.path;
				if(Zpath === '/column/zhibgg/zbDtails') {
					this.$store.commit('zhibskip',false);
					return false;
				}else if(Zpath === '/column/zhibgg') {
					this.$store.commit('zhibskip',true);
					return true;
				}
			}
		}
	} 
</script>
<style lang='scss' scoped>
	.zhibContent{
		width: 100%;
		padding:0 .575rem;
		margin-bottom: 1rem;
		.cnt-tilte{
			margin-bottom: .25rem;
			text-align: start;
			color: #000;
		}
		.content{
			display: flex;
			flex-flow: row wrap;
			justify-content: space-between;
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
</style>
