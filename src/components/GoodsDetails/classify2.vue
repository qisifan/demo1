<template>
	<div class="gdTop">
		<div class="swiper">
			<div class="swiper-container banner">
	            <div class="swiper-wrapper">
	                <div class="swiper-slide">
						<div class="cover img1">
							<img src="../../images/zhanshi/hui1.jpg" />
						</div>
	                </div>
	                <div class="swiper-slide">
						<div class="cover img2">
							<img src="../../images/zhanshi/hui2.jpg" />
						</div>
	                </div>
	                <div class="swiper-slide">
						<div class="cover img3">
							<img src="../../images/zhanshi/hui3.jpg" />
						</div>
	                </div>
	                <div class="swiper-slide">
						<div class="cover img4">
							<img src="../../images/zhanshi/hui4.jpg" />
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
			return {}
		},
        mounted() {
            let _this = this;
            var slide = new Swiper('.banner',{
//              autoplay: 2500,
                pagination: '.swiper-pagination',
                loop: true,
                autoplayDisableOnInteraction : false
            });
            if(this.$route.path== '/goods/bannert'){
				this.$store.commit('changeTab','/column/fenxz');
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
				display:flex;
				justify-content:center;
				align-items:center;
				img{
					height: 74%;
					width: 60%;
				}
			}
		}
	}
</style>