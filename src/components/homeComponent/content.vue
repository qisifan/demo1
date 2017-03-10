<template>
	<div class="contents">
		<router-link :to="Hroutesd.videos">
			<message></message>
		</router-link>
		<router-link :to="Hroutesd.msgss">
			<detail></detail>
		</router-link>
		<router-link :to="Hroutesd.videos">
			<videoRmd></videoRmd>
		</router-link>
	</div>
</template>
<script>
import message from './message.vue'
import detail from './detail.vue'
import videoRmd from './videoRecommend.vue'
	export default {
		name:'content',
		data () {
			return {
				states:{
					msgs:true,
					detail:true,
					videoRmd:true
				},
				Hroutesd: {
					videos:'/column/zhibgg/zbDtails',
					msgss:'/column/fenxz/details'
				}
			}
		},
		components: {
			message,
			detail,
			videoRmd
		}
		// mounted () {
		// 	cntData () {
		// 		let cnts = this.$store.state.homeData;
		// 		if(cnts){
		// 			console.log(cnts);
		// 			return cnts;
		// 			this.masse = cnts[2];
		// 			console.log(this.masse)
		// 			this.detail = cnts[3];
		// 			console.log(this.detail)
		// 			this.videoRmd = cnts[4];
		// 			console.log(this.videoRmd)
		// 			if(!this.masse){
		// 				this.states.msgs = false;
		// 			};
		// 			if(!this.detail){
		// 				this.states.detail = false;
		// 			};
		// 			if(!this.videoRmd){
		// 				this.states.videoRmd = false;
		// 			}
		// 		}
		// 	}
		// }
	}
</script>
<style scoped lang='scss'>
	.contents {
		width: 100%;
		background-color: white;
	}
</style>