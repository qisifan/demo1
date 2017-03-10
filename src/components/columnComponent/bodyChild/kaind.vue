<template>
	<div class="kaind">
		<kndchs v-for="count in kndData"></kndchs>
	</div>
</template>
<script>
import kndchs from './kndchild/kncontent.vue'

	export default {
		name:'kaind',
		data () {
			return{
				kndData:[]
			}
		},
		components: {
			kndchs
		},
		created () {
		    // 组件创建完后获取数据，
		    // 此时 data 已经被 observed 了
		  this.fetchData()
		},
		watch: {
		    // 如果路由有变化，会再次执行该方法
		  '$route': 'fetchData'
		},
		methods: {
		  fetchData () {
		  	let _this = this;
			axios.get('http://xiubei.com/common/columnKnd')
			.then(function (response){
				_this.$store.commit('coulmnkndData',response.data.array);
				_this.kndData = response.data.array[0].kndData;
			});
		  }
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