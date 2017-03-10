<template>
	<div class="goods">
		<router-view></router-view>
		<div class="recommend">
			<ul>
				<li><span>￥324</span><del>￥465</del></li>
				<li>Eily 女士 羊毛混喇叭裙</li>
				<li>2016冬季首发一款羊毛针织连衣裙,很有名媛风,大裙摆自然下垂的设计感是这款裙子的亮点所在。</li>
			</ul>
		</div>
		<div class="bottoms">
			<div class="btm-l">
				<ul>
					<li>尺码</li>
					<li>
						<div v-for="(num,index) in radios" class="radi" :class="{'colors':getcolor.goodsSize == index}" @click="pushC (index)">						
							<span v-text="num.size"></span>
						</div>
					</li>
					<li>心愿单</li>
				</ul>
			</div>
			<div class="btm-r">
				<ul>
					<li>颜色</li>
					<li>
						<div class="pics1" v-for="(colse,index) in picruete" :class="{'pics':getcolor.apics == index}" @click="pushPc (index)">
							<router-link :to="colse.path">
								<span v-text="colse.names"></span>
							</router-link>
						</div>
					</li>
					<li>立即购买</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name:'goods',
		data () {
			return {
				radios: [
					{
						size:"S",
					},
					{
						size:"M",
					},
					{
						size:"L",
					},
				],
				picruete: [
					{
						path:'/goods/bannero',
						names:'图一'
					},
					{
						path:'/goods/bannert',
						names:'图二'
					}
				]
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
            if(this.$route.path== '/goods'){
				this.$store.commit('changeTab','/column/fenxz');
			}
        },
        computed: {
        	getcolor () {
        		return this.$store.state;
        	}
        },
        methods: {
        	pushC (aaa) {
        		this.$store.commit('goodsSize',aaa); 
        	},
        	pushPc (bbb) {
        		this.$store.commit('goodspic',bbb); 
        	}
        }
	}
</script>
<style scoped lang="scss">
	.goods{
		width: 100%;
		background-color: #F8F6F6;
		.recommend{
			width: 100%;
			margin-top: 1.65rem;
			padding:0 1rem;
			ul{
				width: 100%;
				display: flex;
				flex-flow: column nowrap;
				justify-content: center;
				align-items: center;
				text-align: start;
				li{
					color:#323232;
					margin-bottom: .75rem;
				}
				li:nth-of-type(1){
					span{
						font-size: 1.25rem;
						/*font-weight: bold;*/
						/*color: #EB135B;*/
						margin-right: .5rem;
					}
					del{
						font-size: .7rem;
					}
				}
				li:nth-of-type(2){
					font-size: .9rem;
					font-weight: bold;
				}
				li:nth-of-type(3){
					font-size: .65rem;
				}
			}
		}
		.bottoms{
			width: 100%;
			display: flex;
			flex-flow: row nowrap;
			justify-content: space-between;
			text-align: start;
			padding: 0 1rem;
			margin-top: .5rem;
			.btm-l{
				width: 79rem;
				margin-right: .95rem;
				ul{
					width: 100%;
					li:nth-of-type(1){
						margin-bottom: .6rem;
						padding-left: .4rem;
						font-size: .6rem;
					}
					li:nth-of-type(2){
						padding-left: .4rem;
						display: flex;
						flex-flow: row nowrap;
						margin-bottom: 1.55rem;
						div{
							height: 1.6rem;
							width: 1.6rem;
							border-radius: 50%;
							background-color: #fff;
							text-align: center;
							line-height: 1.5rem;
							margin-right: .75rem;
							span{
								font-size: .55rem;
							}
						}
					}
					li:nth-of-type(3){
						width: 100%;
						height: 1.4rem;
						background: url(../../images/zhanshi/h2.png) no-repeat;
						background-size: 100% 100%;
						text-align: center;
						line-height: 1.3rem;
						font-size: .8rem;
					}
				}
			}
			.btm-r{
				width: 79rem;
				margin-bottom: 2.75rem;
				ul{
					width: 100%;
					li:nth-of-type(1){
						margin-bottom: .6rem;
						padding-left: .4rem;
						font-size: .6rem;
					}
					li:nth-of-type(2){
						padding-left: .4rem;
						display: flex;
						flex-flow: row nowrap;
						margin-bottom: 1.4rem;
						div{
							height: 1.8rem;
							width: 1.8rem;
							margin-right: .75rem;
							border: 1px solid rgba(248,246,246,0);
							/*img{
								height: 100%;
								width: 100%;
							}*/
						}
					}
					li:nth-of-type(3){
						width: 100%;
						height: 1.4rem;
						background: url(../../images/zhanshi/Background-6.png) no-repeat;
						background-size: 100% 100%;
						text-align: center;
						line-height: 1.3rem;
						font-size: .8rem;
					}
				}
			}
		}
	}
.colors{
	background-color: #EB135B !important;
	color:#fff !important;
}
.pics{
	border-color:#EB135B !important;
	background: url(../../images/zhanshi/zu-6.png) no-repeat;
	background-size: 35% 30%;
	background-position:100% 100%;
}
</style>