<template>
	<div class="fenxz">
		<yyj v-for="count in yyjData"></yyj>
	</div>
</template>
<script>
import yyj from './yingyj/yyj.vue'

	export default {
		name:'yingyj',
		data () {
			return{
			yyjData:[]
			}
		},
		components: {
			yyj
		},
		created () {
		  let _this = this;
		  	axios.get('http://xiubei.com/common/columnYyj')
			.then(function (response) {
				// _this.$store.state.coulmnyyjData = response.data.array;
				 _this.$store.commit('coulmnyyjData',response.data.array);
				 _this.yyjData = response.data.array[0].yyjData;
			});
		},
		mounted () {
			// console.log(this.$route.path)
			let Dpath = this.$route.path;
			window.scrollTo(0,0);
			this.$store.commit('changecnTab',Dpath);
			if(this.$route.path== Dpath){
				this.$store.commit('changeTab','/column/fenxz');
			}
		}
	}
</script>
<style scoped>
	.fenxz{
		width: 100%;
		background-color: white;
	}
</style>