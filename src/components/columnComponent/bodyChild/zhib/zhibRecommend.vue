<template>
	<div class="zhibRmd">
		<p class="rmd-title"><img src="../../../../images/zhib/zhibba-6.png"/></p>
		<div class="rmd-bottom"  v-for="count in cmdData">
			<div class="rmd-program">
				<div class="rmd-pic">
					<img src="../../../../images/homePage/kndD2-6.png"/>
				</div>
				<div class="rmd-text">
					<span v-text="cmdData[2][0]"></span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name:'zhibRmd',
		data () {
			return{}
		},
		computed: {
			cmdData () {
				let zbt = this.$store.state.coulmnzbData;
				if(zbt) {
					let arr = [];
					let zbts = zbt[2].zbcomment;
					for (let i=0;i<4;i++){
						arr.push(zbts.slice(i,i+1));
					}
					return arr;
				}
			}
		}
	} 
</script>
<style lang='scss' scoped>
	.zhibRmd{
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
		.rmd-bottom{
			width: 100%;
			display: flex;
			flex-flow: column;
			justify-content: center;
			align-items: center;
			.rmd-program{
				width: 100%;
				.rmd-pic{
					width: 100%;
					height: 10rem;
					img{
						width: 100%;
						height: 100%;
					}
				}
				.rmd-text{
					height: 2.2rem;
					width: 100%;
					padding: 0 .375rem;
					background-color:#f2f2f2;
					text-align: start;
					span{
						font-size: .7rem;
					    overflow: hidden;
					    text-overflow: ellipsis;
					    display: -webkit-box;
					    -webkit-line-clamp: 2;
					    -webkit-box-orient: vertical;
					}
				}
			}
		}
	}
</style>
