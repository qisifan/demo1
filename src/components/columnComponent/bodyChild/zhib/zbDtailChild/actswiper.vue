<template>
	<div class="slied">
		<div class="Stitle"><img src="../../../../../images/zhib/zhibdtl/tlt-6.png"/></div>
		<div class="Sswip">
			<div class="swiper1">
				<div class="swiper-container banner1">
		            <div class="swiper-wrapper">
		                <div class="swiper-slide" v-for="(col,index) in comdData">
		                	<div class="comd1" :class="{'colors':getState.swiIndex == col.indexs}">
		                		<span v-text="col.contents"></span>
		                	</div>
		                </div>
		            </div>
		        </div>
			</div>
    		<div class="ctitle" @click="slides">
    			<div class="slide"  :class="{'slide':goodsCut.aroundleft,'slideRt':goodsCut.aroundright}"></div>
    		</div>
			<div class="swiper2">
				<div class="swiper-container banner2">
		            <div class="swiper-wrapper">
		                <div class="swiper-slide" v-for="(num,index) in comdData">
		                	<div class="cnt1">
		                		<div class="contets">
		                			<ul v-if="goodsCut.aroundleft">
		                				<li><img src="../../../../../images/zhib/zhibdtl/xie2.png"/></li>
		                				<li><img src="../../../../../images/zhib/zhibdtl/wan2.png"/></li>
		                				<li><img src="../../../../../images/zhib/zhibdtl/liao2.png"/></li>
		                			</ul>
		                			<ul v-if="goodsCut.aroundright">
		                				<li><img src="../../../../../images/zhib/head-6.png"/></li>
		                				<li><img src="../../../../../images/zhib/head-6.png"/></li>
		                				<li><img src="../../../../../images/zhib/head-6.png"/></li>
		                			</ul>
		                		</div>
		                		<div class="over">
		                			<span>已到最后</span>
		                		</div>
		                	</div>
		                </div>
		            </div>
		        </div>
			</div>
			<div class="swiper3">
				<div class="swiper-container banner3"></div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name:'slied',
	data () {
		return{
			comdData:[
				{
					contents:'家庭版火锅合集',
					indexs:'0'
				},
				{
					contents:'复刻宜家的【瑞典肉丸】',
					indexs:'1'
				},
				{
					contents:'毫无蟹腥味的"啤酒蒸大闸蟹"',
					indexs:'2'
				},
				{
					contents:'桂林米粉.....',
					indexs:'3'
				},
			],
			goodsCut:{
				aroundleft:true,
				aroundright:false
			},
			leftClass: 'slide',
  			rightClass: 'slideRt'
		}
	},
	mounted () {
		let _this = this;
        var slide1 = new Swiper('.banner1',{
			touchRatio : 0.5,
	        slidesPerView: 'auto',
	        pagination: '.swiper-pagination',
	        onTap: function(swiper,even){
	        	let index = swiper.clickedIndex;
	        	_this.$store.commit('swiindex',index);
	        	this.counts = index;
		      	slide2.slideTo(index, 1000, false);
		    }
        });
        var slide2 = new Swiper('.banner2',{
			touchRatio : 0.5,
			onSlideChangeStart: function(swiper,even){
				let index = swiper.activeIndex;
				slide1.slideTo(index, 1000, false);
				_this.$store.commit('swiindex',index);
				this.counts = index;
		    }
        });
	},
	computed: {
		getState () {
				return this.$store.state;
		}
	},
	methods: {
		slides () {
			if (this.goodsCut.aroundleft) {
				this.goodsCut.aroundleft = false;
				this.goodsCut.aroundright = true;
				// console.log(true);
			}else {
			this.goodsCut.aroundleft = true;
			this.goodsCut.aroundright = false;
			// console.log(false);
			}
		}
	}
}
</script>
<style scoped lang="scss">
.slied{
	width: 100%;
	padding-top: .5rem;
	padding-left: .55rem;
	.Stitle{
		width: 1.7rem;
		height:1rem;
		margin-bottom: .5rem;
		img{
			width: 100%;
			height: 100%;
		}
	}
	.Sswip{
		width: 100%;
		.swiper1{
			width: 100%;
			.banner1{
				.swiper-slide{
					width: 5.2rem !important;
					height: 2.8rem !important;
					margin-right: .45rem;
					[class^="comd"]{
						display: flex;
						flex-flow: column;
						justify-content: center;
						border: 1px dashed rgba(191,191,191,1);
						border-radius: 5px;
					}
					.comd1{
						width: 5.2rem ;
						height: 2.8rem ;
						/*background: url(../../../../../images/zhib/zhibdtl/bxxk-6.png);
						background-size: 100% 100%;*/
						border: 1px dashed rgba(191,191,191,1);
						border-radius: 5px;
						font-size: .6rem;
					}
				}
			}
		}
		.swiper2{
			width: 100%;
			.banner2{
				.swiper-slide{
					/*margin-right: .45rem;*/
					margin-top: .75rem;
					.cnt1{
						width: 100%;
						display:flex;
						flex-flow:column;
						justify-content:center;
						align-items:center;
						.contets{
							width: 100%;
							margin-bottom: .5rem;
							ul{
								display: flex;
								flex-flow: row nowrap;
								justify-content: center;
								li{
									width: 5.5rem;
									height: 5.5rem;
									margin-right: .55rem;
									img{
										height: 100%;
										width: 100%;
									}
								}
							}
						}
						.over{
							width: 100%;
							border-top:1px solid #eee ;
							padding-top: .5rem;
							padding-bottom: 10rem;
							span{
								font-size: .6rem;
								color: #999;
							}
						}
					}
				}
			}
		}
	}
}
.ctitle{
	width: 13.9rem;
	height: 1.5rem;
	position:relative;
	background: url(../../../../../images/zhib/zhibdtl/hua2.png) no-repeat;
	background-size: 100% 100%;
	display: flex;
	flex-flow: column;
	justify-content: center;
	// padding: 0 .2rem;
	// margin-bottom: .75rem;
	margin: 0 auto;
    margin-top: 1rem;
	.slide{
		width: 6.65rem;
		height: 1.15rem;
		background: url(../../../../../images/zhib/zhibdtl/fg2.png) no-repeat;
		background-size: 100% 100%;
		position: absolute;
		top: .18rem;
		left: .2rem;
	}
	.slideRt{
		width: 6.65rem;
		height: 1.15rem;
		background: url(../../../../../images/zhib/zhibdtl/pil2.png) no-repeat;
		background-size: 100% 100%;
		position: absolute;
		top: .18rem;
		left: 7rem;
	}
}
.colors{
	border-color: #EB135B !important;
	color: #EB135B;
}
</style>