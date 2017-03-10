<template>
	<div class="zhibTop">
		<div class="tuis">
			<ul>
				<li>本期推送的直播主播:<span v-text="zbshow1"></span></li>
				<li v-text="zbshow2"></li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default {
		name:'zhibTop',
		data () {
			return{}
		},
		computed: {
			zbshow1 () {
				let zbtop = this.$store.state.coulmnzbData;
				if (zbtop) {
					return zbtop[0].portraitImg[2]
				}
			},
			zbshow2 () {
				let zbtop = this.$store.state.coulmnzbData;
				if (zbtop) {
					return zbtop[0].portraitImg[3]
				}
			}
		}
	} 
</script>
<style lang='scss' scoped>
	.zhibTop{
		width: 100%;
		.tuis{
			margin: .425rem 0;
			border: 1px dashed #EB135B;
			border-left: none;
			border-right: none;
			padding: .25rem 0;
			ul{
				margin-left: .575rem;
				text-align: start;
				position: relative;
				padding-left: 2.3rem;
				li{
					font-size: .6rem;
					vertical-align:top;
					/*font-weight: 501;*/
					overflow : hidden;
				    text-overflow: ellipsis;
				    display: -webkit-box;
				    -webkit-line-clamp: 2;
				    -webkit-box-orient: vertical;
					span{
						color:#EB135B;
					}
				}
			}
			ul:before{
				content:"";
				position: absolute;
				top: 0;
				left: 0;
				width: 2.3rem;
				height: 2.3rem;
				background:  url(../../../../images/zhib/head-6.png) no-repeat;
				background-size: 100% 100%;
			}
		}
	}
</style>
