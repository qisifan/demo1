<template>
	<div class="shijg">
		<sjgdss v-for="count in sjgData"></sjgdss>
		<!-- <loading></loading> -->
	</div>
</template>
<script>
import sjgdss from './sjgchild/sjgcontent.vue'
import loading from '../loading.vue'

	export default {
		name:'shijg',
		data () {
			return{
				sjgData:[],
				pageSize:5,
				currentPageIndex:1,
			}
		},
		components:{
			sjgdss,
			loading
		},
		created () {
		    // 组件创建完后获取数据，
		    // 此时 data 已经被 observed 了
		    let _this = this;
		    	axios.get('http://xiubei.com/common/columnSjg')
		    	.then(function (response){
					if (response) {
						_this.$store.commit('coulmnsjgData',response.data.array);
						if (_this.currentPageIndex == 1) {
						_this.sjgData = response.data.array[0].sjgData;
						}else{
							_this.sjgData.push(response.data.array[0].sjgData);
					    }
					}
				// this.currentPageIndex += 1;
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
		},
		methods: {
			// // 获取滚动位置信息
			//  getScrollTop (element) {
			//  	if (element) {
			//  		return element.scrollTop
			//  	}
			//  	return document.documentElement.scrollTop
			//  },
			//  //获取可视区域高度
			//  getVisibleHeight (element) {
			//  	if (element) {
			//  		return element.offsetHeight
			//  	}
			//  	return document.documentElement.offsetHeight
			//  },
			//  // 获取滚动区域高度信息
			//  getScrollHeight (element) {
			//  	if (element) {
			//  		return element.scrollHeight
			//  	}
			//  	return document.documentElement.scrollHeight
			// }
			// doCheck:function (force) {
			// 	let _this = this;
			// 	let element = _this.element;
			// 	_this.scrollTop = getScrollTop(element)
			// 	let downTrigger = getVisibleHeight(element) +_this.scrollTop+5>=getScroll + 5>= getScrollHeight(element)
			// 	if(downTrigger&&options.loadDownFn&& _this.isData) {
			// 		options.domDown.loadingCall()
			// 		directive.vm.$get(options.loadDownFn)
			// 	}
		},
		// computed: {
		// 	}
		
	}
</script>