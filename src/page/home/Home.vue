<template>
	<div class="H-top">
		<div class="loading" v-if="loading">
	      Loading...
	    </div>
	    <div v-if="error" class="error" v-text="error">
	    </div>
		<swiper v-if="banner"></swiper>
		<contents v-for="count in msgimg"></contents>
	</div>
</template>
<script>
import swiper from '../../components/homeComponent/swiper.vue'
import contents from '../../components/homeComponent/content.vue'
	export default {
		name: 'H-top',
		data () {
			return{
				loading: false,
			    error: null,
			    banner:true,
				msgimg: {}
			}
		},
		components: {
			swiper,
			contents
		},
		mounted () {
			let Dpath = this.$route.path;
			this.$store.commit('changeTab',Dpath);
			this.error = null;
		    this.loading = true;
			let _this = this;
			axios.get('http://xiubei.com/common/home')
			.then(function (response) {
				_this.$store.commit('homeData',response.data.array);
				// console.log(response.data.array)
				if (response.data.array) {
					_this.loading = false;
					banner:true;
					_this.msgimg = response.data.array[2].msgData;
				}else {
					_this.loading = true;
					banner:false;
					_this.error = "error";
				}
			})
			window.scrollTo(0,0);
		}
	}
</script>
<style lang="scss" scoped>
	.H-top{
		width:100%;
		background-color:#fff;
	}
</style>