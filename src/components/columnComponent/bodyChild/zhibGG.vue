<template>
	<div class="zhib">
		<zhbtop v-if="zhibskip"></zhbtop>
		<zhibcnt></zhibcnt>
		<zhibrmd v-if="zhibskip"></zhibrmd>
		<transition enter-active-class="animated fadeIn" >
			<router-view></router-view>
		</transition>
	</div>
</template>
<script>
import zhbtop from './zhib/zhbTop'
import zhibcnt from './zhib/zhibContent'
import zhibrmd from './zhib/zhibRecommend'

	export default {
		name:'zhib',
		data () {
			return{
			}
		},
		components: {
			zhbtop,
			zhibcnt,
			zhibrmd
		},
		created () {
		    // 组件创建完后获取数据，
		    // 此时 data 已经被 observed 了
			let _this = this;
		    axios.get('http://xiubei.com/common/columnZb')
			.then(function (response) {
				_this.$store.commit('coulmnzbData',response.data.array);
				// console.log(response.data.array);
			});
		},
		computed: {
			zhibskip () {
				let states =  this.$store.state.zhibskip;
				return states;
			}
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
<style type="text/css">
	.zhib{
		width: 100%;
		background-color: white;
	}
</style>