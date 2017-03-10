<template>
	<div class="details">
		<div class="Dtop">
			<img src="../../../../images/fenxz/news/top-6.png">
			<router-link :to="hestrs">
				<div class='hstry'></div>
			</router-link>
			<div class='kej'></div>
			<div class='mark'></div>
		</div>
		<div class="Dmiddle">
			<div class="Mtop">
				<ul>
					<li></li>
					<li>
						<p>
							<span>Charles Rssead</span>
							<span>发布于</span>
							<span>2016.12.12 08:32</span>
						</p>
						<p>
							<span>3245</span>
							<span>235</span>
						</p>
					</li>
				</ul>
			</div>
			<div class="Mtitle">
				<span>目前的AI只是略微超过了图灵测试的水准?关于量子纠缠神经系统,蕴藏其中的意义有待发掘</span>
			</div>
			<div class="Mcontent">
				<div class="cntText1">
					<span>&nbsp;&nbsp;&nbsp;&nbsp;从基因工程“让人活到一千岁”的梦想，到纳米技术“包你穿衣不用洗”的诺言；从人工智能“送你一只可爱机器狗”的温馨，到转基因技术“让老鼠长出人耳朵”的奇观。不断有新的科技在诞生，每一个新科技的发现都会让人们欣喜若狂，因为，这些新科技正在逐步地改善我们的生活，让我们更加了解自己。就近期而言，中国首先完成了非典病毒全基因组测序，非典现在是全球公认的危害性最大的疾病，可是为什么别的国家不能首先完成，而我们国家就偏偏完成了呢？很简单，这说明了我们国家不比别人落后，不比别人差，回头看看我们祖国的过去，从曾经一个刚刚起步的改革开放的国家到现在的拥有领先的科技水平的大国，我们的祖国经历了多少的风风雨雨，多少的困难与坎坷，但是我们的祖国还是挺过来了，因为我们的祖国坚信——科技不仅改变命运，还可改变未来。 </span>
				</div>
				<div class="cntImg1">
					<img src="../../../../images/fenxz/news/jiq-6.png"/>
				</div>
				<div class="conTitle">
					<span>那么,未来AI有没有可能实现自足的只能水平呢?</span>
				</div>
				<div class="cntText2">
					<span>&nbsp;&nbsp;&nbsp;&nbsp;虽然科技创造新生活的前景引人遐思，令人神往。但是归根结底是要靠我们共同的努力实现的。作为祖国未来建设的中坚，我们这一代年轻人肩上的担子的确不轻，新的机遇总是伴着风险与挑战，但是，我们不会轻易地说放弃，我们用我们的青春向前辈们发誓：决不辜负前辈们对我们的希望。 
					回望文明的历程，是科技之光扫荡了人类历史上蒙昧的黑暗，是科学之火点燃了人类心灵中的熊熊的希望；科技支撑了文明，科技创造着未来，而未来在我们手中。让我们成为知识的探索者，让我们在未知的道路上漫游，让我用我们的创造力将我们居住的世界变得更美好</span>
				</div>
				<div class="cntImg2">
					<img src="../../../../images/fenxz/news/wos-6.png"/>
				</div>
			</div>
			<div class="Mshare">
				<ul>
					<li>分享至:</li>
					<li><img src="../../../../images/fenxz/news/syc-6.png"/></li>
					<li><img src="../../../../images/fenxz/news/weib-6.png"/></li>
					<li><img src="../../../../images/fenxz/news/weix-6.png"/></li>
					<li><img src="../../../../images/fenxz/news/qq-6.png"/></li>
					<li><img src="../../../../images/fenxz/news/kj-6.png"/></li>
				</ul>
			</div>
		</div>
		<div class="Dbtm">
			<div class="ntmTitle">
				<span>评论:</span>
			</div>
			<div class="comment">
				<ul>
					<li><img src="../../../../images/fenxz/news/plt2-6.png"/></li>
					<li>
						<p><span>夏日午后的阳光</span></p>
						<p><span>通过图灵测试意味着人工智能已经和人等价,写文章的啥也不懂</span></p>
						<p><span>2016.12.12&nbsp;&nbsp;&nbsp;13:21</span><span>127</span><span>29</span></p>
					</li>
				</ul>
			</div>
			<div class="ntmload">
				<div class="pics">
					<img src="../../../../images/fenxz/news/dl-6.png"/>
				</div>
			</div>
		</div>
		<div class="recommend">
			<p class="rmd-title"><img src="../../../../images/zhib/zhibba-6.png"/></p>
			<div class="rmd-bottom">
				<div class="rmd-program">
					<div class="rmd-pic">
						<img src="../../../../images/homePage/kndD2-6.png"/>
					</div>
					<div class="rmd-text">
						<span>想象不到平台陆续开放,你找到让你心动的那款了吗</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name:'details',
		data () {
			return{
				hestrs:'',
			}
		},
		computed: {

		},
		mounted () {
			this.hestrs = this.$store.state.cnTab
		}
	}
</script>
<style lang="scss" scoped>
	.details{
		width: 100%;
		background-color: #fff;
		.Dtop{
			width: 100%;
			height: 12.25rem;
			position: relative;
			img{
				width: 100%;
				height:100%;
			}
			.hstry{
				width: 1.75rem;
				height:1.75rem;
				position: absolute;
				top: .75rem;
				left: .75rem;
				background:url(../../../../images/fenxz/news/fh-6.png) no-repeat;
				background-size: 100% 100%;
			}
			.kej{
				height: .9rem;
  			    width: .9rem;
				position: absolute;
				right: .25rem;
				bottom: 1.15rem;
				background:url(../../../../images/homePage/kj-6.png) no-repeat;
				background-size: 100% 100%;
			}
			.mark{
				height: .75rem;
  			    width: 1.55rem;
				position: absolute;
				right: 0;
				bottom: 0;
				background:url(../../../../images/homePage/fx-6.png) no-repeat;
				background-size: 100% 100%;
			}  
		}
		.Dmiddle{
			width: 100%;
			display: flex;
			flex-flow: column nowrap;
			padding: 0 .75rem;
			border-bottom: 1px solid rgba(191,191,191,.5);
			.Mtop{
				width: 100%;
				padding-top: .5rem;
				margin-bottom: .5rem;
				ul{
					width: 100%;
					display: flex;
					flex-flow: row nowrap;
					justify-content: space-between;
					li:nth-of-type(1){
						width: 2.25rem;
						height: 2.25rem;
						background: url(../../../../images/fenxz/news/toux-6.png) no-repeat;
						background-size: 100% 100%;
					}
					li:nth-of-type(2){
						padding-top:.45rem ;
						margin-right: .25rem;
						p:nth-of-type(1){
							span{
								font-size: .55rem;
							}
							span:nth-of-type(1){
								font-weight:600;
							}
							span:nth-of-type(2){
								color: #EB135B;
							}
							span:nth-of-type(3){
								font-size: .5rem;
								color: #666;
							}
						}
						p:nth-of-type(2){
							text-align: end;
							margin-top: .25rem;
							span{
								font-size: .5rem;
								color: #666;
							}
							span:nth-of-type(1):before{
								content:'';
								display: inline-block;
								width: .6rem;
								height: .6rem;
								background: url(../../../../images/homePage/like-6.png) no-repeat;
								background-size: 100% 100%;
							}
							span:nth-of-type(2):before{
								content:'';
								display: inline-block;
								width: .6rem;
								height: .6rem;
								background: url(../../../../images/homePage/pl-6.png) no-repeat;
								background-size: 100% 100%;
							}
						}
					}
				}
			}
			.Mtitle{
				text-align: start;
				margin-bottom: .75rem;
				span{
					color: #000;
					font-size: .7rem;
					font-weight: 600;
				}
			}
			.Mcontent{
				text-align: start;
				display: flex;
				flex-flow: column;
				justify-content: center;
				align-items: center;
				img{
					width: 100%;
					height: 100%;
				}
				.cntText1{
					span{
						font-size: .6rem;
						color:#323232;
					}
				}
				.cntImg1{
					height: 7.85rem;
					width: 10.45rem;
					margin: .5rem 0;
				}
				.conTitle{
					margin-bottom: .5rem;
					span{
						font-size: .7rem;
						font-weight: 600;
						color: #000;
					}
				}
				.cntText2{
					span{
						font-size: .6rem;
						color:#323232;
					}
				}
				.cntImg2{
					width: 10.4rem;
					height: 6.55rem;
					margin: .5rem 0;
				}
			}
			.Mshare{
				width: 100%;
				margin-bottom: .75rem;
				ul{
					width:100%;
					display: flex;
					flex-flow:row nowrap ;
					align-items: center;
					li{
						height: 1.05rem;
						margin-right: .5rem;
					}
					li:nth-of-type(1){
						line-height: 1.1rem;
						padding-right: .125rem;
					}
					li:nth-of-type(2){
						width: 1.1rem;
					}
					li:nth-of-type(3){
						width: 1.35rem;
					}
					li:nth-of-type(4){
						width: 1.25rem;
					}
					li:nth-of-type(5){
						width: 1rem;
					}
					li:nth-of-type(6){
						width: 1.2rem;
					}
					img{
						height: 100%;
						width: 100%;
					}
				}
			}
		}
		.Dbtm{
			width: 100%;
			padding-top: .25rem;
			text-align: start;
			padding: 0 .75rem;
			.ntmTitle{
				margin-bottom: .5rem;
				span{
					font-size: .65rem;
					color: #323232;
					font-weight: 600;
				}
			}
			.comment{
				width: 100%;
				text-align: start;
				margin-bottom: .75rem;
				ul{
					display: flex;
					flex-flow: row nowrap;
					justify-content: space-between;
					li:nth-of-type(1){
						margin-right: .625rem;
						width: 2.25rem;
						height: 2.25rem;
						img{
							width: 100%;
							height: 100%;
						}
					}
					li:nth-of-type(2){
						display: flex;
						flex-flow: column nowrap;
						p:nth-of-type(1){
							span{
								font-size: .6rem;
								color: #EB135B;
							}
						}
						p:nth-of-type(2){
							span{
								font-size: .6rem;
								color: #323232;
							}
						}
						p:nth-of-type(3){
							display: flex;
							flex-flow: row nowrap;
							justify-content: space-between;
							align-items: flex-end;
							span{font-size: .5rem;}
							span:nth-of-type(1){
								color: #666;
							}
							span:nth-of-type(2){
								color:#EB135B;
								margin-right: -5.25rem;
							}
							span:nth-of-type(2):before{
								content: "";
								display: inline-block;
								width: .6rem;
								height: .6rem;
								color: #EB135B;
								background: url(../../../../images/fenxz/news/zzz-6.png) no-repeat;
								background-size: 100% 100%;
							}
							span:nth-of-type(3):before{
								content: "";
								display: inline-block;
								width: .6rem;
								height: .6rem;
								background: url(../../../../images/fenxz/news/ccc-6.png) no-repeat;
								background-size: 100% 100%;
							}
						}
					}	
				}
			}
			.ntmload{
				width: 100%;
				display: flex;
				justify-content: center;
				margin-bottom: .75rem;
				.pics{
					height: 1.55rem;
					width:9.2rem;
					img{
						height: 100%;
						width: 100%;
					}
				}
			}
		}
		.recommend{
			width: 100%;
			.rmd-title{
				display: inline-block;
				width: 3.7rem;
				height: .875rem;
				margin-bottom:.75rem;
				img{
					height: 100%;
					width: 100%;
				}
			}
			.rmd-bottom{
				width: 100%;
				display: flex;
				flex-flow: column;
				justify-content: center;
				align-items: center;
				.rmd-program{
					width: 100%;
					.rmd-pic{
						width: 100%;
						height: 10rem;
						img{
							width: 100%;
							height: 100%;
						}
					}
					.rmd-text{
						height: 2.2rem;
						width: 100%;
						padding: 0 .375rem;
						background-color:#f2f2f2;
						text-align: start;
						span{
							font-size: .7rem;
						    overflow: hidden;
						    text-overflow: ellipsis;
						    display: -webkit-box;
						    -webkit-line-clamp: 2;
						    -webkit-box-orient: vertical;
						}
					}
				}
			}
		}
	}
</style>