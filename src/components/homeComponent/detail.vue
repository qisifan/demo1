<template>
	<div id="detail" v-if="details1">
		<p v-text="'【'+title+'】'"></p>
		<div class="pics"></div>
		<p v-text="details1"></p>
		<p>
			<ul>
				<li></li>
				<li v-text="details3"></li>
				<li></li>
				<li v-text="details4"></li>
			</ul>
		</p>
		<p v-text="details2"></p>
		<p><img src="../../images/homePage/xjx-6.png"/></p>
	</div>
</template>
<script>
	export default {
		name: 'detail',
		data () {
			return{
				title:'开脑洞',
				// alet:[]
			}
		},
		computed: {
			details1 () {
				let detData = this.$store.state.homeData;
				if (detData) {
					return detData[3].detailData[2];
				}
			},
			details2 () {
				let detData = this.$store.state.homeData;
				if (detData) {
					return detData[3].detailData[3];
				}
			},
			details3 () {
				let detData = this.$store.state.homeData;
				if (detData) {
					return detData[3].detailData[4];
				}
			},
			details4 () {
				let detData = this.$store.state.homeData;
				if (detData) {
					return detData[3].detailData[5];
				}
			}
		}
	}
</script>
<style lang="scss" scoped>
	#detail{
		height: 14.25rem;
		width: 100%;
		background-color: white;
		margin-top: .75rem;
		display: flex;
		flex-flow: column nowrap;
		color: #000;
		p:nth-of-type(1){
			margin-bottom: .3rem;
			font-weight: 600;
			font-size: .75rem;
			height: .75rem;
		}
		p:nth-of-type(2){
			font-size: .7rem;
			margin-bottom: .375rem;
			font-weight: 600;
			height: .7rem;
		}
		p:nth-of-type(3){
			font-size: .3rem;
			height: .6rem;
			margin-bottom: .375rem;
			ul{
				float: right;
				display: flex;
				flex-flow: row nowrap;
				margin-right: 1rem;
				li:nth-of-type(1){
					width: .8rem;
					height: .8rem;
					background: url(../../images/homePage/like-6.png) no-repeat;
					background-size: contain;
					margin-right:.15rem ;
				}
				li:nth-of-type(2){
					margin-right:.375rem ;
					font-size:.5rem;
				}
				li:nth-of-type(3){
					width: .8rem;
					height: .8rem;
					background: url(../../images/homePage/pl-6.png) no-repeat;
					background-size: 100% 100%;
					margin-right:.15rem ;
				}
				li:nth-of-type(4){
					font-size:.5rem;
				}
			}
		}
		p:nth-of-type(4){
			font-size: .55rem;
			text-align: start;
			line-height: 14px;
			margin-bottom: .375rem;
			padding:0 .375rem;
			overflow: hidden;
		    text-overflow: ellipsis;
		    display: -webkit-box;
		    -webkit-line-clamp: 2;
		    -webkit-box-orient: vertical;
		}
		p:nth-of-type(5){
			width: 100%;
			height: 0.15rem;
			display: flex;
			justify-content: center;
		}
		.pics{
			height: 8.925rem;
			width: 100%;
			background:url(../../images/homePage/kndD1-6.png)  no-repeat;
			background-size: 100% 100%;
			margin-bottom: .5rem;
		}
	}
	@media only screen and (min-width:760px){
		p:nth-of-type(4){
			line-height: 28px !important;
		}
	}
</style>
