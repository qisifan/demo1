<template>
	<div class="fenxz">
		<fenxzCmp></fenxzCmp>
		<!-- <loading></loading> -->
	</div>
</template>
<script>
import fenxzCmp from './fenxzChild/fenxzChild'
import loading from '../loading.vue'

	export default {
		name:'fenxz',
		data () {
			return{
				fenxData:[]
			}
		},
		components: {
			fenxzCmp,
			loading
		},
		created () {
			let _this = this;
            axios.get('http://xiubei.com/common/columnFx')
			.then(function (response){
				// _this.$store.state.coulmnfxData = response.data.array;
				 _this.$store.commit('coulmnfxData',response.data.array[0].fxData);
				_this.fenxData = response.data.array[0].fxData;
			});
		},
		mounted () {
			// console.log(this.$route.path)
			let Dpath = this.$route.path;
			this.$store.commit('changecnTab',Dpath);
			if(this.$route.path== Dpath){
				this.$store.commit('changeTab','/column/fenxz');
			}
			window.scrollTo(0,0);
		}
	}
</script>
<style scoped>
	.fenxz{
		width: 100%;
		background-color: white;
	}
</style>