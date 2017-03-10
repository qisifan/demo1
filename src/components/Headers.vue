<template>
		<header ref="header">
			<ul class="tab" >
				<li v-for="(tab,index) in routes" :class="{'active':getState.isCurrentTab==tab.path}" @click="setStyle(tab.path)">
				<router-link :to="tab.path" >
					<span v-text="tab.title"  class="titles" @click="chooseRouter"></span>
				</router-link>
				</li>
			</ul>
			<div class="sous"></div>
		</header>
</template>
<script>
	export default {
		name:'header',
		data () {
			return {
				routes: [
					{
						path: '/',
						title: '秀贝'
					},
					{
						path: '/column/fenxz',
						title: '栏目'
					},
					{
						path: '',
						title: '我的'
					}
				]
			}
		},
		methods: {
			setStyle (hpath) {
				this.$store.commit('changeTab',hpath);
			},
			// pssss (lanM) {
			// 	if (this.getState.cnTab=='') {
			// 		this.routes[1].path = '/column/fenxz';
			// 	}
			// },
			// args : function(params) {
			//     // v-for循环带参数的回调
			//     console.log('---params.event---',params.event)
			//     console.log('---params.tapObj---',params.tapObj);
			//     console.log('---params.index---',params.index)
			//     console.log('---params.name---',params.name)
			//     //params.tapObj 可获得 tap的一些参数
			//     //pageX,pageY,clientX,clientY,distanceX,distanceY
			//     //后面2个分别的手指可能移动的位置(以后可用于拓展手势)
			// }
			chooseRouter () {
				let data = sessionStorage.getItem('status');
				if(data) {

				console.log(data)
					this.routes[2].path = '/mine/logged'
				}else{
					this.routes[2].path = '/mine/nologin'
				}
			}
		},
		computed: {
			getState () {
				return this.$store.state;
			},
			postState () {
				let path = window.location.pathname;
				this.$store.state.cnTab = path;
			}
		},
		mounted: function () {
			let path = window.location.pathname;
			if (path === '/column/fenxz'||path === '/column/yingyj'||path === '/column/kaind'||path === '/column/zhibGG'||path === '/column/shijg') {
			 	this.getState.isCurrentTab = this.routes[1].path;
			}else if(path===this.routes[0].path){
				this.getState.isCurrentTab = this.routes[0].path;
			}else if(path===this.routes[2].path){
				this.getState.isCurrentTab = this.routes[2].path;
			}
		}
	}
</script>
<style  lang="scss" scoped>
	header{
		height: 2rem;
		width: 100%;
		position: fixed;
		z-index: 9;
		top: 0;
		background-color: #2f2f2f;
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		align-items: center;
		.tab{
			margin-left:.875rem;
			height: 1.5rem;
			li{
				padding-right: 1.4rem;
				opacity: .5;
				.titles{
					color:white;
					font-size: .75rem;
				}
			}
		}
		.sous{
			margin-right: .75rem;
			width: .8rem;
			height: .8rem;
			background: url(../images/homePage/ss-6.png) no-repeat;
			background-size:100% 100% ;
		}
		 .active {
		 	opacity: 1 !important;
		 	.titles{
		 		display:block;
		 		border-bottom:2px solid white;
		 	}
        }
        .bottoms{
        	opacity: 1 !important;
		 	.titles{
		 		display:block;
		 		border-bottom:2px solid white;
		 	}
        }
	}
</style>
