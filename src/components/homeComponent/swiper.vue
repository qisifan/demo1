<template>
	<div id="banner">
		<div class="swiper">
			<div class="swiper-container banner">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
					<div class="cover img1">
						<div class="swp-play"></div>
						<img src="../../images/homePage/jx-6.png" />
					</div>
					<div class="swp-logo"></div>
					<div class="swp-logo2"></div>
					<div class="referral">
						目前的AI只是略微超过了图灵测试的水准?关于量子纠缠神经系统,蕴藏其中的意义有待发掘
					</div>
                </div>
                <div class="swiper-slide">
					<div class="cover img2">
						<div class="swp-play"></div>
						<img src="../../images/homePage/jx-6.png" />
					</div>
					<div class="swp-logo"></div>
					<div class="swp-logo2"></div>
                    <div class="referral">
						目前的AI只是略微超过了图灵测试的水准?关于量子纠缠神经系统,蕴藏其中的意义有待发掘
					</div>
                </div>
                <div class="swiper-slide">
					<div class="cover img3">
						<div class="swp-play"></div>
						<img src="../../images/homePage/jx-6.png" />
					</div>
					<div class="swp-logo"></div>
					<div class="swp-logo2"></div>
                    <div class="referral">
						目前的AI只是略微超过了图灵测试的水准?关于量子纠缠神经系统,蕴藏其中的意义有待发掘
					</div>
                </div>
                <div class="swiper-slide">
					<div class="cover img4">
						<div class="swp-play"></div>
						<img src="../../images/homePage/jx-6.png" />
					</div>
					<div class="swp-logo"></div>
					<div class="swp-logo2"></div>
                    <div class="referral">
						目前的AI只是略微超过了图灵测试的水准?关于量子纠缠神经系统,蕴藏其中的意义有待发掘
					</div>
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
		</div>
	</div>
</template>
<script>
	export default{
		name:'banner',
		data () {
			return {
				swip: '轮播'
			}
		},
        mounted() {
            let _this = this;
            var slide = new Swiper('.banner',{
                autoplay: 2500,
                pagination: '.swiper-pagination',
                loop: true,
                autoplayDisableOnInteraction : false
            });
            // 组件创建完后获取数据，
            // 此时 data 已经被 observed 了
            this.fetchData();
        },
        watch: {
            // 如果路由有变化，会再次执行该方法
          '$route': 'fetchData'
        },
        methods: {
          fetchData () {
              // replace getPost with your data fetching util / API wrapper
            let home = this.$store.state.homeData;   
            if (home) {
                // console.log(home);
            }
          }
        }
    }
</script>
<style lang='scss' scoped>
	#banner{
		width: 100%;
		background-color: white;
		.swiper{
			width: 100%;
			height: 12.2rem;
			 .swiper-wrapper {
                width: 100%;
                height: 100%;
            }
            .swiper-slide {
                width: 100%;
                height: 100%;
                .img1{
                	background: url(../../images/homePage/lun2.png) no-repeat;
                }
                .img2{
                	background: url(../../images/homePage/l6.png) no-repeat;
                }
                .img3{
                	background: url(../../images/homePage/lun-2.png) no-repeat;
                }
                .img4{
                	background: url(../../images/homePage/kndD2-6.png) no-repeat;
                }
                .cover{
                	width: 100%;
                	height: 82%;
                	background-size:100% 100% ;
                	img{
                		width: 100%;
                		height: 100%;
                	}
                	.swp-play{
                		width: 3.5rem;
                		height: 3.5rem;
                		position: absolute;
                		left: 40%;
                		top: 28%;
                		background: url(../../images/homePage/dp-6.png) no-repeat;
                		background-size:100% 100%;
                	}
                }
                .swp-logo{
                	width: .9rem;
            		height: .9rem;
            		position: absolute;
            		left: .5rem;
            		top: .5rem;
            		background: url(../../images/homePage/kj-6.png) no-repeat;
            		background-size:100% 100%;
                }
                .swp-logo2{
                	height: .75rem;
            		width: 1.55rem;
            		position: absolute;
            		right:0;
            		bottom: 2.2rem;
            		background: url(../../images/homePage/fx-6.png) no-repeat;
            		background-size:100% 100%;
                }
            }
            .swiper-pagination{
            	bottom: 2.5rem;
            }
            .swiper-pagination-bullet {
                width: 0.5rem ;
                height: 0.5rem ;
                border-radius: 50%;
                background-color: #beb7a3;
            }
            .swiper-pagination-bullet-active {
                background-color: #fff;
            }
		}
		.referral{
			height: 2.2rem;
			width: 100%;
			background-color: #f2f2f2;
            font-size: .7rem;
            line-height: 1rem;
            text-align: start;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
		}
	}
</style>