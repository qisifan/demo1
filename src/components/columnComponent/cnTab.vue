<template>
	<div class="cnTab">
		<ul>
			<li v-for="(cnTab,index) in cnRoutes" :class="{'cnactive':getState.cnTab==cnTab.path}" @click="setStyle(cnTab.path)" tag="span">
				<router-link :to="cnTab.path" >
					<span v-text="cnTab.list" @click="tabC()"></span>
				</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		name:'cnTab',
		data () {
			return {
				cnRoutes:[
					{
						path:'/column/fenxz',
						list:'分享志'
					},
					{
						path:'/column/yingyj',
						list:'影游纪'
					},
					{
						path:'/column/kaind',
						list:'开脑洞'
					},
					{
						path:'/column/zhibgg',
						list:'直播GO'
					},
					{
						path:'/column/shijg',
						list:'视界观'
					}
				]
			}
		},
		methods: {
			setStyle (cnpath) {
				this.$store.commit('changecnTab',cnpath);
			},
			tabC () {
			}
		},
		computed: {
			getState () {
				let path = window.location.pathname;
				this.$store.state.cnTab = path;
				return this.$store.state;
			}
		}
	}
</script>
<style lang='scss' scoped>
	.cnTab {
		width: 100%;
		height: 1.8rem;
		background-color: #f7f6f6;
		position: fixed;
		top: 2rem;
		z-index: 9;
		display: flex;
		flex-flow: row nowrap;
		border-bottom: 1px solid #bfbfbf;
		ul{
			margin-left: 1.45rem;
			display: flex;
			flex-flow:row nowrap ;
			justify-content: space-around;
			align-items: center;
			li{
				margin-right: 1.05rem;
				padding-bottom: .05rem;
				span{
					color: black;
					font-size: .75rem;
				}
			}
		}
		.cnactive {
			border-bottom:2px solid #eb135b;
			span{
				color: #eb135b !important;
			}
		}
	}
</style>