<template>
	<div class="gdTop">
		<div class="swiper">
			<div class="fd" @click="chanfeStates ()"></div>
			<div class="swiper-container banner">
	            <div class="swiper-wrapper">
	                <div class="swiper-slide">
						<div class="cover ">
							<img src="../../images/zhanshi/hei4.jpg" />
						</div>
	                </div>
	                <div class="swiper-slide">
						<div class="cover ">
							<img src="../../images/zhanshi/hei2.jpg" />
						</div>
	                </div>
	                <div class="swiper-slide">
						<div class="cover ">
							<img src="../../images/zhanshi/hei3.jpg" />
						</div>
	                </div>
	                <div class="swiper-slide">
						<div class="cover ">
							<img src="../../images/zhanshi/hei1.jpg" />
						</div>
	                </div>
	            </div>
	            <div class="swiper-pagination"></div>
	        </div>
		</div>
		<div class="detailss" @click="colses ()" v-if="states">
			<div class="fd" @click="chanfeStates ()"></div>
			<div class="swiper-container banner zcban">
	            <div class="swiper-wrapper">
	                <div class="swiper-slide">
						<div class="cover pics">
							<img src="../../images/zhanshi/hei1.jpg" />
						</div>
	                </div>
	                <div class="swiper-slide">
						<div class="cover pics">
							<img src="../../images/zhanshi/hei2.jpg" />
						</div>
	                </div>
	                <div class="swiper-slide">
						<div class="cover pics">
							<img src="../../images/zhanshi/hei3.jpg" />
						</div>
	                </div>
	                <div class="swiper-slide">
						<div class="cover pics">
							<img src="../../images/zhanshi/hei4.jpg" />
						</div>
	                </div>
	            </div>
	            <div class="swiper-pagination"></div>
	        </div>
		</div>
	</div>
</template>
<script>
	export default {
		name:'gdTop',
		data () {
			return {
				states: false,
			}
		},
        mounted() {
            let _this = this;
            var slide = new Swiper('.banner',{
//              autoplay: 2500,
                pagination: '.swiper-pagination',
                loop: true,
                autoplayDisableOnInteraction : false
            });
            if(this.$route.path== '/goods/bannero'){
				this.$store.commit('changeTab','/column/fenxz');
			}
        },
        methods: {
        	chanfeStates () {
        		if(!this.states) {
        			this.states = true;
        		}else{
        			this.states = false;
        		}
        	},
        	colses () {
        		this.states = false;
        	}
        }
	}
</script>
<style scoped lang="scss">
	.gdTop{
		width: 100%;
		.banner{
			width: 100%;
			.cover{
				width: 100%;
				height: 14.05rem;
				// background-color: #fff;
				display:flex; 
				justify-content:center;
				align-items:center;
				img{
					height: 74%;
					width: 60%;
				}
			}
		}
		.detailss{
			width: 100%;
			height:100%;
			background-color: rgba(51,51,51,.5);
			position: absolute;
			top: -.1rem;
			z-index:999;
			.zcban{
				position: relative;
				/* top:2.25rem; */
				.pics{
					background-color: #fff !important;
					height:19rem;
				}
			}
		}
	}
	.fd{
		width: .95rem;
		height:.95rem;
		background:url(../../images/zhanshi/zoom-6.png) no-repeat;
		background-size: 100%,100%;
		position: absolute;
		top:.8rem;
		right: 1rem;
		z-index: 99;
	}
</style>