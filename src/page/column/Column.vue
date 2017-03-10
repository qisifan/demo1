<template>
	<div class="column">
		<ctab></ctab>
		<cbody></cbody>
	</div>
</template>
<script>
import Ctab from '../../components/columnComponent/cnTab'
import Cbody from '../../components/columnComponent/cnBodys'

	export default {
		name:'column',
		data () {
			return{}
		},
		components:{
			Ctab,
			Cbody
		},
		mounted () {
			let Dpath = this.$route.path;
			this.$store.commit('changeTab',Dpath);
			window.scrollTo(0,0);
		}
	}
</script>
<style lang="scss" scoped>
	.column {
		width: 100%;
		background-color: #fff;
	}
</style>