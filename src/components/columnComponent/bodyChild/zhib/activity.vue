<template>
	<div class="activity">
		<router-link :to="goods.path">
			<div class="lists">
				<ul>
					<li><img src="../../../../images/activity/wuylp-6.png"/></li>
					<li><img src="../../../../images/activity/qun-6.png"/></li>
					<li>
						<div class="live"><img src="../../../../images/activity/xinping-6.png"/></div>
						<div class="live"><img src="../../../../images/activity/rem-6.png"/></div>
						<div class="live"><img src="../../../../images/activity/tuij-6.png"/></div>
						<div class="live"><img src="../../../../images/activity/zhek-6.png"/></div>
					</li>
					<li><img src="../../../../images/activity/huax-6.png"/></li>
					<li><img src="../../../../images/activity/jiankangshh-6.png"/></li>
					<li><img src="../../../../images/activity/shijian-6.png"/></li>
					<li><img src="../../../../images/activity/welcome-6.png"/></li>
				</ul>
			</div>
		</router-link>
	</div>
</template>
<script>
	export default {
		name:'activity',
		data () {
			return {
				goods:{
					path:'/goods/bannero'
				}
			}
		},
		mounted () {
			if(this.$route.path== '/activity'){
				this.$store.commit('changeTab','/column/fenxz');
			}
		}
	}
</script>
<style lang="scss" scoped>
	.activity{
		width: 100%;
		.lists{
			width: 100%;
			ul{
				width: 100%;
				display: flex;
				flex-flow: column nowrap;
				justify-content: center;
				width: 100%;
				background-color: #FFF;
				li{
					width: 100%;
				}
				img{
					height: 100%;
					width: 100%;
				}
				li:nth-of-type(1){
					height: 6.2rem;
					margin-top: .35rem;
				}
				li:nth-of-type(2){
					height: 8.55rem;
					margin-top: .45rem;
				}
				li:nth-of-type(3){
					height: 9.55rem;
					margin-top: .55rem;
					padding: 0 .55rem;
					display: flex;
					flex-flow:row wrap;
					justify-content: space-between;
					.live{
						width: 8.5rem;
						height: 4.5rem;
					}
				}
				li:nth-of-type(4){
					height: 9.15rem;
					margin-top: .8rem;
				}
				li:nth-of-type(5){
					height: 4.5rem;
					margin-top: 1.1rem;
				}
				li:nth-of-type(6){
					height: 9rem;
					margin-top: .35rem;
				}
				li:nth-of-type(7){
					height: 4.7rem;
					margin-top: .55rem;
				}
			}
		}
	}
</style>