<template>
	<div class="fenxzCmp">
		<router-link :to="dtroute.path" tag="div"  v-if="fxpath">
			<div  v-for="count in fxzData2">
				<div class="fxTop">
					<img src="../../../../images/fenxz/pxs-6.png"/>
					<div class="fx-logo"></div>
					<div class="fx-logo2"></div>
				</div>
				<div class="fxBt">
					<span v-text="fxzData"></span>
				</div>
			</div>
		</router-link>
		<transition enter-active-class="animated fadeIn" >
			<router-view></router-view>
		</transition>
	</div>
</template>
<script>
	export default {
		name: 'fenxzCmp',
		data () {
			return {
				dtroute:{
					path:'/column/fenxz/details',
					title:'详情'
				}
			}
		},
		computed: {
			fxzData () {
				let fenxData = this.$store.state.coulmnfxData
				if(fenxData){
				return fenxData[1];
				}
			},
			fxpath () {
				let Dpath = this.$route.path;
				console.log(Dpath)
				if (Dpath =='/column/fenxz/details'){
					return false;
					console.log(Dpath);
				}
				return true;
			},
			fxzData2 () {
				let fenxData = this.$store.state.coulmnfxData
				if(fenxData){
				return fenxData;
				}
			}
		}
	}
</script>
<style lang='scss' scoped>
	.fenxzCmp{
		width: 100%;
		margin-top: .5rem;
		position: relative;
		z-index: 1;
		.fxTop{
			width: 100%;
			height: 10rem;
			position:relative;
			img{
				height: 100%;
				width: 100%;
			}
			.fx-logo{
				width: .9rem;
        		height: .9rem;
        		position: absolute;
        		left: .5rem;
        		top: .5rem;
        		background: url(../../../../images/homePage/kj-6.png) no-repeat;
        		background-size:100% 100%;
			}
			.fx-logo2{
				height: .75rem;
        		width: 1.55rem;
        		position: absolute;
        		right:0;
        		bottom:0;
        		background: url(../../../../images/homePage/fx-6.png) no-repeat;
        		background-size:100% 100%;
			}
		}
		.fxBt{
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